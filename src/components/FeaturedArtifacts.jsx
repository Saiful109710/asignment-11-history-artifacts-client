import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ArtifactCard from './ArtifactCard';

const FeaturedArtifacts = () => {
    const [artifacts,setArtifacts] = useState([]);
    console.log(artifacts)


    useEffect(()=>{
            const fetchArtifactsData =()=>{
            axios.get('http://localhost:2000/featuredArtifacts')
            .then(res=>setArtifacts(res.data))
            .catch(err=>{
                console.log(err.message)
            })
              
                
              
            } 

            fetchArtifactsData()
    },[])


  return (
    <div>
        <div>
            <h2 className='text-3xl font-bold text-center'>Featured Artifacts</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
                {
                    artifacts.map(artifact=><ArtifactCard key={artifact._id} artifact={artifact}></ArtifactCard>)
                }
            </div>
        </div>
    </div>
  )
}

export default FeaturedArtifacts
