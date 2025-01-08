import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";



const ArtifactDetails = () => {
    const {id} = useParams()
    const {user} = useAuth()
    const [likeStatus,setLikeStatus] = useState(true)

    const [artifact,setArtifact] = useState({})
    console.log(artifact)

    const userData ={userId:user.uid} 

    const fetchArtifactData = async()=>{
      await axios.get(`https://history-artifacts-server.vercel.app/artifactDetails/${id}`)
      .then(res=>setArtifact(res.data))
      
      
}

    useEffect(()=>{
       

        fetchArtifactData();
    },[])

    

    const handleLike = async(id) => {
      console.log(id)
      console.log(user.uid)
      

      try{
          const {data} = await axios.patch(`https://history-artifacts-server.vercel.app/allArtifacts/${id}?likeStatus=like`,userData)
          console.log(data)
          fetchArtifactData()
          
      }catch(err){
        console.log(err)
        toast.error(err.response.data.message)
      }

      setLikeStatus(false);
      
    };

    const handleDisLike = async(id)=>{
      
      try{
          const {data} = await axios.patch(`https://history-artifacts-server.vercel.app/allArtifacts/${id}?likeStatus=dislike`,userData)
          console.log(data)
          fetchArtifactData()
      }catch(err){
        console.log(err)
        toast.error(err?.response?.data?.message)
      }
      setLikeStatus(true)
    }
  return (
    <div className="bg-gray-100 min-h-screen py-12">
    <div className="max-w-6xl mx-auto px-6">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        {/* Artifact Name and Image */}
        <div className="flex flex-col lg:flex-row items-center mb-8">
          <img
            src={artifact.artifactImage}
            alt={artifact.artifactName}
            className="w-full lg:w-1/2 h-auto rounded-lg shadow-lg mb-4 lg:mb-0"
          />
          <div className="lg:ml-8 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-sky-700 mb-4">
              {artifact.artifactName}
            </h1>
            <p className="text-lg font-medium text-gray-700 mb-2">
              Type: {artifact.artifactType}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Created At: {artifact.createdAt}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Discovered At: {artifact.discoveredAt}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Discovered By: {artifact.discoveredBy}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Present Location: {artifact.presentLocation}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Added By: {artifact.adderName} ({artifact.adderEmail})
            </p>
          </div>
        </div>

        {/* Historical Context */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-sky-700 mb-4">
            Historical Context
          </h2>
          <p className="text-gray-700">{artifact.historicalContext}</p>
        </div>

        {/* Like Button and Counter */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          {
            likeStatus ? (
              <button
            onClick={()=>handleLike(artifact._id)}
            className="bg-sky-700 text-white py-2 px-6 rounded-lg flex items-center gap-2 shadow-md hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
           <AiFillLike></AiFillLike> Like
          </button>
            ):(<button
              onClick={()=>handleDisLike(artifact._id)}
              className="bg-sky-700 text-white py-2 px-6 rounded-lg flex items-center gap-2 shadow-md hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
             <AiFillDislike></AiFillDislike> DisLike
            </button>)
          }
          <p className="text-lg font-semibold text-gray-700">
            Likes: {artifact.likeCount}
          </p>
          <p className="text-lg font-semibold text-gray-700">
            DisLikes: {artifact.disLikedCount}
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ArtifactDetails
