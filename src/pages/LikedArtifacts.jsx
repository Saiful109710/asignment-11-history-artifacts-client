import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import ArtifactCard from "../components/ArtifactCard";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../hooks/useAxiosSecure";
import noDataImage from '../assets/images/NoData.jpg'

const LikedArtifacts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [artifacts, setArtifacts] = useState([]);

  const fetchArtifactsData = async () => {
    const { data } = await axiosSecure.get(`/likedArtifacts/${user.uid}`);
    console.log(data);
    setArtifacts(data);
  };

  useEffect(() => {
    fetchArtifactsData();
  }, [user]);

  return (
    <div>
      <Helmet>
        <title>Liked Artifact | History Artifact</title>
      </Helmet>
      {
        artifacts.length > 0 ? (
          <div>
        <h2 className="text-3xl font-bold text-sky-600 text-center">
          My liked artifacts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
          {artifacts.map((artifact) => (
            <ArtifactCard key={artifact._id} artifact={artifact}></ArtifactCard>
          ))}
        </div>
      </div>
        ):(
          <div className="flex justify-center items-center">
              <img className="max-w-[500px]" src={noDataImage} alt="" />
          </div>
        ) 
      }
    </div>
  );
};

export default LikedArtifacts;
