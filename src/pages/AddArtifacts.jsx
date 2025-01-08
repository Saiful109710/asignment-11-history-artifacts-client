import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const AddArtifactForm = () => {
  const {user} = useAuth()

  const initialFormData  = {
    artifactName: "",
    artifactType: "",
    historicalContext: "",
    artifactImage: "",
    createdAt: "",
    discoveredAt: "",
    discoveredBy: "",
    presentLocation: "",
    adderName: user?.displayName || "",
    adderEmail: user?.email || '',
  }
  const [formData, setFormData] = useState(initialFormData);

  console.log(formData)


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleSubmit = async(e) => {
    e.preventDefault();

    console.log(formData)

    try{
     const {data} =  await axios.post('https://history-artifacts-server.vercel.app/allArtifacts',formData)
     console.log(data)
     if(data.insertedId){
        toast.success('Artifacts added successfully')
      
     }
     setFormData(initialFormData)
     
    }catch(err){
      console.log(err.message)
    }
    
  };

  return (
    <div className="bg-gradient-to-b from-sky-100 to-sky-200 min-h-screen py-12">
    <Helmet>
      <title>Add Artifact | History Artifact</title>
    </Helmet>
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-sky-700">
        {/* Form Title */}
        <h1 className="text-4xl font-extrabold text-sky-700 text-center mb-8">
          Add a New Artifact
        </h1>
        <p className="text-center text-gray-600 text-lg mb-6">
          Share your historical findings and help expand our artifact
          collection.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Artifact Name */}
            <div className="flex flex-col">
              <label
                htmlFor="artifactName"
                className="text-lg font-semibold text-gray-700 mb-2"
              >
                Artifact Name
              </label>
              <input
                type="text"
                id="artifactName"
                name="artifactName"
                value={formData.artifactName}
                onChange={handleInputChange}
                className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Enter artifact name"
                required
              />
            </div>

            {/* Artifact Type */}
            <div className="flex flex-col">
              <label
                htmlFor="artifactType"
                className="text-lg font-semibold text-gray-700 mb-2"
              >
                Artifact Type
              </label>
              <select
                id="artifactType"
                name="artifactType"
                value={formData.artifactType}
                onChange={handleInputChange}
                className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              >
                <option value="">Select a type</option>
                <option value="Documents">Documents</option>
                <option value="Tools">Tools</option>
                <option value="Art">Art</option>
                <option value="Weapons">Weapons</option>
                <option value="Furniture">Furniture</option>
                <option value="Jewelry">Jewelry</option>
              </select>
            </div>

            {/* Historical Context */}
            <div className="flex flex-col md:col-span-2">
              <label
                htmlFor="historicalContext"
                className="text-lg font-semibold text-gray-700 mb-2"
              >
                Historical Context
              </label>
              <textarea
                id="historicalContext"
                name="historicalContext"
                value={formData.historicalContext}
                onChange={handleInputChange}
                rows="4"
                className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Describe the artifact's historical background"
                required
              />
            </div>

            {/* Artifact Image */}
            <div className="flex flex-col">
              <label
                htmlFor="artifactImage"
                className="text-lg font-semibold text-gray-700 mb-2"
              >
                Artifact Image URL
              </label>
              <input
                type="url"
                id="artifactImage"
                name="artifactImage"
                value={formData.artifactImage}
                onChange={handleInputChange}
                className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Paste image URL here"
                required
              />
            </div>

            {/* Created At */}
            <div className="flex flex-col">
              <label
                htmlFor="createdAt"
                className="text-lg font-semibold text-gray-700 mb-2"
              >
                Created At (Year)
              </label>
              <input
                type="text"
                id="createdAt"
                name="createdAt"
                value={formData.createdAt}
                onChange={handleInputChange}
                className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="E.g., 1500"
                required
              />
            </div>

            {/* Discovered At */}
            <div className="flex flex-col">
              <label
                htmlFor="discoveredAt"
                className="text-lg font-semibold text-gray-700 mb-2"
              >
                Discovered At (Year)
              </label>
              <input
                type="text"
                id="discoveredAt"
                name="discoveredAt"
                value={formData.discoveredAt}
                onChange={handleInputChange}
                className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="E.g., 1901"
                required
              />
            </div>

            {/* Discovered By */}
            <div className="flex flex-col">
              <label
                htmlFor="discoveredBy"
                className="text-lg font-semibold text-gray-700 mb-2"
              >
                Discovered By
              </label>
              <input
                type="text"
                id="discoveredBy"
                name="discoveredBy"
                value={formData.discoveredBy}
                onChange={handleInputChange}
                className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="E.g., Dr. John Smith"
                required
              />
            </div>

            {/* Present Location */}
            <div className="flex flex-col">
              <label
                htmlFor="presentLocation"
                className="text-lg font-semibold text-gray-700 mb-2"
              >
                Present Location
              </label>
              <input
                type="text"
                id="presentLocation"
                name="presentLocation"
                value={formData.presentLocation}
                onChange={handleInputChange}
                className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="E.g., British Museum"
                required
              />
            </div>

            {/* Adder Name */}
            <div className="flex flex-col">
              <label
                htmlFor="adderName"
                className="text-lg font-semibold text-gray-700 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="adderName"
                name="adderName"
                value={formData.adderName}
                onChange={handleInputChange}
                className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Adder Email */}
            <div className="flex flex-col">
              <label
                htmlFor="adderEmail"
                className="text-lg font-semibold text-gray-700 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="adderEmail"
                name="adderEmail"
                value={formData.adderEmail}
                onChange={handleInputChange}
                className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="bg-gradient-to-r from-sky-700 to-sky-500 text-white px-8 py-3 rounded-lg shadow-lg hover:opacity-90 transition duration-300"
            >
              Submit Artifact
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default AddArtifactForm;
