import React from "react";
import { Link } from "react-router-dom";

const ArtifactCard = ({ artifact ,children}) => {
    console.log(artifact)
  const { _id, artifactImage, historicalContext, artifactName } =
    artifact || {};
  return (
    <div className="p-5 rounded-2xl shadow-md">
      <div className="h-[300px] w-full">
        <img className="h-full w-full rounded-2xl" src={artifactImage} alt="" />
      </div>
      <div>
        <h2 className="text-xl ">
          <strong>ArtiFacts Name</strong> : {artifactName}
        </h2>
        <p>
          <strong>Historical Contecxt :</strong> {historicalContext.length>100 ? historicalContext.substring(0,100):historicalContext}...
        </p>
      </div>
      
      {
        children ? (
            children
        ):(
          <div className="flex justify-between items-center ">
          <span className="text-gray-800 font-semibold">
            ❤️ {}
          </span>
          <Link to={`/artifactDetails/${_id}`}><button className="btn text-white bg-sky-600">View Details</button></Link>
         
        </div>
        ) 
      }
    </div>
  );
};

export default ArtifactCard;
