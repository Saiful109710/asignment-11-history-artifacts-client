import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import ArtifactCard from "../components/ArtifactCard";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import UpdateArtifactsModal from "../components/UpdateArtifactsModal";

const MyArtifacts = () => {
  const { user } = useAuth();
  const [artifacts, setArtifacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchArtifactsData = async () => {
    const { data } = await axios.get(
      `http://localhost:2000/myArtifacts/${user?.email}`
    );

    setArtifacts(data);
  };

  useEffect(() => {
    fetchArtifactsData();
  }, [user?.email]);

  const handleUpdate = async (id) => {
    try {
    } catch (err) {}
  };

  const onClose = ()=>{
    setIsModalOpen(false)
  }

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
          const { data } = await axios.delete(
            `http://localhost:2000/myArtifacts/${id}`
          );
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
      <h2 className="text-center text-sky-600 text-3xl font-bold">
        My Artifacts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {artifacts.map((artifact) => (
          <ArtifactCard key={artifact._id} artifact={artifact}>
            <div className="flex justify-between items-center pt-5">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn bg-sky-700 text-white"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(artifact._id)}
                className="btn bg-red-600 text-white"
              >
                Delete
              </button>
              {isModalOpen && <UpdateArtifactsModal fetchArtifactsData={fetchArtifactsData} handleUpdate={handleUpdate} onClose={onClose}  artifact={artifact}></UpdateArtifactsModal>}
            </div>
          </ArtifactCard>
        ))}
      </div>
    </div>
  );
};

export default MyArtifacts;
