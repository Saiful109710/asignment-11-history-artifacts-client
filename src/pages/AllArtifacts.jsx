import axios from "axios";
import React, { useEffect, useState } from "react";
import ArtifactCard from "../components/ArtifactCard";
import { Helmet } from "react-helmet-async";

const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [filter,setFilter] =useState('')
  const [search,setSearch] = useState('')
  console.log(search)

  useEffect(() => {
    const fetchArtifactsData = async () => {
      await axios
        .get(`http://localhost:2000/allArtifacts?filter=${filter}&search=${search}`)
        .then((res) => {
          setArtifacts(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    fetchArtifactsData()
  }, [filter,search]);

  return (
    <div>
      <Helmet>
              <title>All Artifact | History Artifact</title>
            </Helmet>
      <h2 className="text-3xl font bold text-sky-600 text-center py-5">
        All Artifacts
      </h2>

      <div className="flex gap-10 justify-center items-center">
          <div className="flex gap-2 items-center">
              <label className="text-lg font-medium text-gray-700 mb-2" htmlFor="">Artifact Type</label>
              <select
               name="artifactType"
               value={filter}
               onChange={(e)=>setFilter(e.target.value)}
               id=""
               className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
               >
                  <option value="">Select  a type</option>
                  <option value="Documents">Documents</option>
                  <option value="Tools">Tools</option>
                  <option value="Art">Art</option>
                  <option value="Weapons">Weapons</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Jewelry">Jewelry</option>
              </select>
          </div>
          <div className="flex gap-2">
            <input
             type="text" 
             value={search}
             onChange={(e)=>setSearch(e.target.value)}
             className="px-12 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
             placeholder="Search"
             
              />
              <button className="bg-sky-500 btn text-white">Search</button>
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {artifacts.map((artifact) => (
          <ArtifactCard key={artifact._id} artifact={artifact}></ArtifactCard>
        ))}
      </div>
    </div>
  );
};

export default AllArtifacts;
