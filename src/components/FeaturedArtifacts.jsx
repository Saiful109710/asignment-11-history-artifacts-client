import React, { useEffect, useState } from "react";
import axios from "axios";
import ArtifactCard from "./ArtifactCard";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import LoadingSpinner from "./LoadingSpinner";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const FeaturedArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const { loading, setLoading } = useAuth();
  console.log(artifacts);

  const fetchArtifactsData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("https://history-artifacts-server.vercel.app/featuredArtifacts");
      setArtifacts(data);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArtifactsData();
  }, []);


  if(loading) return <LoadingSpinner></LoadingSpinner>

  return (
    <div>
      <Fade cascade>
      <div className="py-10">
        <h2 className="text-3xl font-bold text-center">Featured Artifacts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
          {artifacts.map((artifact) => (
            <ArtifactCard key={artifact._id} artifact={artifact}></ArtifactCard>
          ))}
        </div>
        <div className="flex justify-center items-center">
            <Link to='/allArtifacts'><button className="bg-gradient-to-r from-sky-700 to-sky-500 text-white px-5 py-2 rounded-lg shadow-lg hover:opacity-90 hover:shadow-xl transition duration-300">See All Artifacts</button></Link>
        </div>
      </div>
      </Fade>
    </div>
  );
};

export default FeaturedArtifacts;
