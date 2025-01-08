import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
// Lottie Player

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-sky-100">
      <Helmet>
              <title>Error | History Artifact</title>
            </Helmet>
      {/* Lottie Animation */}
     

      {/* 404 Message */}
      <h1 className="text-5xl font-bold text-sky-700 mt-4">404</h1>
      <p className="text-xl text-gray-600 mt-2">
        Oops! The page you're looking for doesn't exist.
      </p>

      {/* Go Back Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-sky-700 text-white px-6 py-3 rounded-md shadow-md hover:bg-sky-800 transition duration-300"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;

