import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";

const UpdateArtifactsModal = ({ handleUpdate, onClose, artifact ,fetchArtifactsData}) => {
  const { user } = useAuth();
  const initialFormData = {
    artifactName: artifact.artifactName || "",
    artifactType: artifact.artifactType || "",
    historicalContext: artifact.historicalContext || "",
    artifactImage: artifact.artifactImage || "",
    createdAt: artifact.createdAt || "",
    discoveredAt: artifact.discoveredAt || "",
    discoveredBy: artifact.discoveredBy || "",
    presentLocation: artifact.presentLocation || "",
    adderName: user?.displayName || "",
    adderEmail: user?.email || "",
  };
  const [formData, setFormData] = useState(initialFormData);
  console.log(formData)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try{
       const {data} = await axios.patch(`http://localhost:2000/myArtifacts/${artifact._id}`,formData)
        console.log(data)
        
        if(data.modifiedCount>0){
            toast.success('Successfully updated')
            fetchArtifactsData();
            
        }
        onClose()
        

    }catch(err){
        toast.error(err.message)
    }

  };
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 overflow-scroll">
      <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-4xl h-[700px] overflow-scroll w-full mx-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
        <h1
          id="update-artifact-modal-title"
          className="text-3xl font-bold text-sky-700 text-center mb-6"
        >
          Update Artifact
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            {/* Artifact Name */}
            <div className="flex flex-col">
              <label
                htmlFor="artifactName"
                className="text-lg font-medium text-gray-700 mb-2"
              >
                Artifact Name
              </label>
              <input
                type="text"
                id="artifactName"
                name="artifactName"
                value={formData.artifactName}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>

            {/* Artifact Type - Select Dropdown */}
            <div className="flex flex-col">
              <label
                htmlFor="artifactType"
                className="text-lg font-medium text-gray-700 mb-2"
              >
                Artifact Type
              </label>
              <select
                id="artifactType"
                name="artifactType"
                value={formData.artifactType}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
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
            <div className="flex flex-col">
              <label
                htmlFor="historicalContext"
                className="text-lg font-medium text-gray-700 mb-2"
              >
                Historical Context
              </label>
              <textarea
                id="historicalContext"
                name="historicalContext"
                value={formData.historicalContext}
                onChange={handleInputChange}
                rows="4"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>

            {/* Artifact Image URL */}
            <div className="flex flex-col">
              <label
                htmlFor="artifactImage"
                className="text-lg font-medium text-gray-700 mb-2"
              >
                Artifact Image URL
              </label>
              <input
                type="url"
                id="artifactImage"
                name="artifactImage"
                value={formData.artifactImage}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>

            {/* Created At */}
            <div className="flex flex-col">
              <label
                htmlFor="createdAt"
                className="text-lg font-medium text-gray-700 mb-2"
              >
                Created At (Year)
              </label>
              <input
                type="text"
                id="createdAt"
                name="createdAt"
                value={formData.createdAt}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>

            {/* Discovered At */}
            <div className="flex flex-col">
              <label
                htmlFor="discoveredAt"
                className="text-lg font-medium text-gray-700 mb-2"
              >
                Discovered At (Year)
              </label>
              <input
                type="text"
                id="discoveredAt"
                name="discoveredAt"
                value={formData.discoveredAt}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>

            {/* Discovered By */}
            <div className="flex flex-col">
              <label
                htmlFor="discoveredBy"
                className="text-lg font-medium text-gray-700 mb-2"
              >
                Discovered By
              </label>
              <input
                type="text"
                id="discoveredBy"
                name="discoveredBy"
                value={formData.discoveredBy}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>

            {/* Present Location */}
            <div className="flex flex-col">
              <label
                htmlFor="presentLocation"
                className="text-lg font-medium text-gray-700 mb-2"
              >
                Present Location
              </label>
              <input
                type="text"
                id="presentLocation"
                name="presentLocation"
                value={formData.presentLocation}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>

            {/* Adder Name */}
            <div className="flex flex-col">
              <label
                htmlFor="adderName"
                className="text-lg font-medium text-gray-700 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="adderName"
                name="adderName"
                value={formData.adderName}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>

            {/* Adder Email */}
            <div className="flex flex-col">
              <label
                htmlFor="adderEmail"
                className="text-lg font-medium text-gray-700 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="adderEmail"
                name="adderEmail"
                value={formData.adderEmail}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-sky-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                Submit Artifact
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateArtifactsModal;
