import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";

const UpdateArtifactsModal = ({ onClose, artifact ,fetchArtifactsData}) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()
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
       const {data} = await axiosSecure.patch(`/myArtifacts/${artifact._id}`,formData)
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
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto">
    <div className=" bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-4xl mx-4 sm:mx-8 md:mx-auto h-auto md:h-[700px] overflow-auto">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        ✖
      </button>
      <h1
        id="update-artifact-modal-title"
        className="text-2xl md:text-3xl font-bold text-sky-700 text-center mb-4 md:mb-6"
      >
        Update Artifact
      </h1>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Artifact Name */}
          <div className="flex flex-col">
            <label
              htmlFor="artifactName"
              className="text-sm md:text-lg font-medium text-gray-700 mb-1 md:mb-2"
            >
              Artifact Name
            </label>
            <input
              type="text"
              id="artifactName"
              name="artifactName"
              value={formData.artifactName}
              onChange={handleInputChange}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm md:text-base"
              required
            />
          </div>

          {/* Artifact Type */}
          <div className="flex flex-col">
            <label
              htmlFor="artifactType"
              className="text-sm md:text-lg font-medium text-gray-700 mb-1 md:mb-2"
            >
              Artifact Type
            </label>
            <select
              id="artifactType"
              name="artifactType"
              value={formData.artifactType}
              onChange={handleInputChange}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm md:text-base"
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
              className="text-sm md:text-lg font-medium text-gray-700 mb-1 md:mb-2"
            >
              Historical Context
            </label>
            <textarea
              id="historicalContext"
              name="historicalContext"
              value={formData.historicalContext}
              onChange={handleInputChange}
              rows="3"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm md:text-base"
              required
            />
          </div>

          {/* Artifact Image URL */}
          <div className="flex flex-col">
            <label
              htmlFor="artifactImage"
              className="text-sm md:text-lg font-medium text-gray-700 mb-1 md:mb-2"
            >
              Artifact Image URL
            </label>
            <input
              type="url"
              id="artifactImage"
              name="artifactImage"
              value={formData.artifactImage}
              onChange={handleInputChange}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm md:text-base"
              required
            />
          </div>

          {/* Created At */}
          <div className="flex flex-col">
            <label
              htmlFor="createdAt"
              className="text-sm md:text-lg font-medium text-gray-700 mb-1 md:mb-2"
            >
              Created At (Year)
            </label>
            <input
              type="text"
              id="createdAt"
              name="createdAt"
              value={formData.createdAt}
              onChange={handleInputChange}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm md:text-base"
              required
            />
          </div>

          {/* Discovered At */}
          <div className="flex flex-col">
            <label
              htmlFor="discoveredAt"
              className="text-sm md:text-lg font-medium text-gray-700 mb-1 md:mb-2"
            >
              Discovered At (Year)
            </label>
            <input
              type="text"
              id="discoveredAt"
              name="discoveredAt"
              value={formData.discoveredAt}
              onChange={handleInputChange}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm md:text-base"
              required
            />
          </div>

          {/* Discovered By */}
          <div className="flex flex-col">
            <label
              htmlFor="discoveredBy"
              className="text-sm md:text-lg font-medium text-gray-700 mb-1 md:mb-2"
            >
              Discovered By
            </label>
            <input
              type="text"
              id="discoveredBy"
              name="discoveredBy"
              value={formData.discoveredBy}
              onChange={handleInputChange}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm md:text-base"
              required
            />
          </div>

          {/* Present Location */}
          <div className="flex flex-col">
            <label
              htmlFor="presentLocation"
              className="text-sm md:text-lg font-medium text-gray-700 mb-1 md:mb-2"
            >
              Present Location
            </label>
            <input
              type="text"
              id="presentLocation"
              name="presentLocation"
              value={formData.presentLocation}
              onChange={handleInputChange}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm md:text-base"
              required
            />
          </div>

          {/* Adder Name */}
          <div className="flex flex-col">
            <label
              htmlFor="adderName"
              className="text-sm md:text-lg font-medium text-gray-700 mb-1 md:mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="adderName"
              name="adderName"
              value={formData.adderName}
              onChange={handleInputChange}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm md:text-base"
              required
            />
          </div>

          {/* Adder Email */}
          <div className="flex flex-col">
            <label
              htmlFor="adderEmail"
              className="text-sm md:text-lg font-medium text-gray-700 mb-1 md:mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="adderEmail"
              name="adderEmail"
              value={formData.adderEmail}
              onChange={handleInputChange}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm md:text-base"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6 gap-5">
          <button
            type="submit"
            className="bg-sky-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-md hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm md:text-base"
          >
            Update Artifact
          </button>
          <button className="btn bg-red-600 text-white" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default UpdateArtifactsModal;
