import React from "react";
import { Link } from "react-router-dom";

const ArtifactCard = ({ artifact, children }) => {
  console.log(artifact);
  const { _id, artifactImage, historicalContext, artifactName, likeCount } =
    artifact || {};
  return (
    <div className="p-5 rounded-2xl shadow-md bg-white hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
      {/* Image Section */}
      <div className="h-[300px] w-full overflow-hidden rounded-2xl">
        <img
          className="h-full w-full object-cover rounded-2xl"
          src={artifactImage}
          alt={artifactName}
        />
      </div>

      {/* Content Section */}
      <div className="mt-4 space-y-3">
        {/* Artifact Name */}
        <h2 className="text-2xl font-bold text-sky-700 truncate">
          {artifactName}
        </h2>

        {/* Historical Context */}
        <p className="text-gray-600 text-justify leading-6">
          <strong className="text-gray-800">Historical Context:</strong>{" "}
          {historicalContext.length > 100
            ? `${historicalContext.substring(0, 100)}...`
            : historicalContext}
        </p>
      </div>

      {/* Footer Section */}
      {children ? (
        children
      ) : (
        <div className="mt-5 flex justify-between items-center">
          {/* Likes */}
          <span className="text-gray-800 font-semibold text-lg">
            ❤️ {likeCount} Likes
          </span>

          {/* View Details Button */}
          <Link to={`/artifactDetails/${_id}`}>
            <button className="bg-gradient-to-r from-sky-700 to-sky-500 text-white px-5 py-2 rounded-lg shadow-lg hover:opacity-90 hover:shadow-xl transition duration-300">
              View Details
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ArtifactCard;
