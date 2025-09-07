import React from "react";
import { useNavigate } from "react-router";
import Navbar from "../Navbar/Navbar";

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mx-24">
        <Navbar></Navbar>
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="card bg-warning text-black lg:w-200 lg:h-100 w-100 h-50 shadow-lg">
          <div className="card-body flex items-center justify-center">
            <h2
              className="card-title text-lg
             lg:text-5xl mt-3 lg:mt-10"
            >
              Opps! Page Not Found
            </h2>
            <p className="text-center lg:mt-10 mt-3 text-[14px] lg:text-xl">
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
