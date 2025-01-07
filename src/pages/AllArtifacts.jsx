import axios from "axios";
import React, { useEffect, useState } from "react";
import ArtifactCard from "../components/ArtifactCard";

const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);

  useEffect(() => {
    const fetchArtifactsData = async () => {
      await axios
        .get("http://localhost:2000/allArtifacts")
        .then((res) => {
          setArtifacts(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    fetchArtifactsData()
  }, []);

  return (
    <div>
      <h2 className="text-3xl font bold text-sky-600 text-center py-5">
        All Artifacts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {artifacts.map((artifact) => (
          <ArtifactCard key={artifact._id} artifact={artifact}></ArtifactCard>
        ))}
      </div>
    </div>
  );
};

export default AllArtifacts;
