import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ArtifactDetails = () => {
    const {id} = useParams()

    const [artifact,setArtifact] = useState({})

    useEffect(()=>{
        const fetchArtifactData = async()=>{
                await axios.get(`http://localhost:2000/artifactDetails/${id}`)
        }
    },[])
  return (
    <div>
        
    </div>
  )
}

export default ArtifactDetails
