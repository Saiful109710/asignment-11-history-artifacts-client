import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import ArtifactCard from "../components/ArtifactCard";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import UpdateArtifactsModal from "../components/UpdateArtifactsModal";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../hooks/useAxiosSecure";
import noDataImage from "../assets/images/NoData.jpg";

const MyArtifacts = () => {
  const { user, setLoading, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [artifacts, setArtifacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArtifact, setSelectedArtifact] = useState(null);
  console.log(isModalOpen);
  console.log(artifacts);

  const fetchArtifactsData = async () => {
    try {
      const { data } = await axiosSecure.get(`/myArtifacts/${user?.email}`);

      setArtifacts(data);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  useEffect(() => {
    fetchArtifactsData();
  }, [user?.email]);

  const onClose = () => {
    setSelectedArtifact(null);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await axiosSecure.delete(`/myArtifacts/${id}`);
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            fetchArtifactsData();
          }
        } catch (err) {
          toast.error(err.message);
        }
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>My Artifact | History Artifact</title>
      </Helmet>
      {artifacts.length > 0 ? (
        <div>
          <h2 className="text-center text-sky-600 text-3xl font-bold">
            My Artifacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
            {artifacts.map((artifact) => (
              <ArtifactCard key={artifact._id} artifact={artifact}>
                <div className="flex justify-between items-center pt-5">
                  <button
                    onClick={() => setSelectedArtifact(artifact)}
                    className="btn bg-sky-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-sky-800 transition duration-300 transform hover:scale-105"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(artifact._id)}
                    className="btn bg-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-700 transition duration-300 transform hover:scale-105"
                  >
                    Delete
                  </button>
                </div>
              </ArtifactCard>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <img className="max-w-[500px]" src={noDataImage} alt="" />
        </div>
      )}

      {selectedArtifact && (
        <UpdateArtifactsModal
          fetchArtifactsData={fetchArtifactsData}
          onClose={onClose}
          artifact={selectedArtifact}
        ></UpdateArtifactsModal>
      )}
    </div>
  );
};

export default MyArtifacts;
