import React from "react";
import { useNavigate } from "react-router";
import Navbar from "../Navbar/Navbar";

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar></Navbar>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="card bg-warning text-black w-200 h-100 shadow-lg">
          <div className="card-body flex items-center justify-center">
            <h2 className="card-title text-5xl mt-10">Opps! Page Not Found</h2>
            <p className="text-center mt-10 text-xl">
              We couldn’t find the page you’re looking for or an unexpected
              error occurred. Please check the URL or return to the homepage.
            </p>
            <div className="card-actions justify-end">
              <button onClick={() => navigate("/")} className="btn btn-neutral">
                Go Back Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
