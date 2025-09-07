import React from "react";
import { useNavigate } from "react-router";

const Lawyer = ({ lawyer }) => {
  // console.log(lawyer);
  const { id, experience, name, specialty, licenseNumber, image, isAvailable } =
    lawyer;

  const navigate = useNavigate();

  const handleViewDetails = () => {
    // console.log("clicked");
    navigate(`/lawyerDetails/${id}`);
  };

  // console.log(isAvailable);
  return (
    <div className="grid grid-cols-3 items-center bg-gray-200 rounded-lg p-3 ">
      <div className="col-span-1">
        <img className="w-auto rounded-lg" src={image} alt="" />
      </div>
      <div className="col-span-2 ml-20 gap-5 lg:ml-15 flex flex-col lg:gap-1">
        <div className="flex items-center justify-start gap-10">
          <p
            className={`rounded-2xl p-1 lg:text-sm border-2 
              ${
                isAvailable
                  ? "bg-green-200 border-green-500"
                  : "bg-red-200 border-red-500"
              }`}
          >
            {isAvailable ? "Available" : "Not Available"}
          </p>

          <p className="bg-blue-200   border-blue-500 border-2 rounded-2xl p-1 lg:text-sm">
            {experience}
          </p>
        </div>
        <div className="flex flex-col gap-2 lg:gap-0">
          <h1 className="text-2xl lg:text-xl font-bold">{name}</h1>
          <p className="text-gray-400 ">{specialty}</p>
          <p className="text-gray-600 ">{licenseNumber}</p>
        </div>
        <div className="">
          <button
            onClick={() => handleViewDetails()}
            className="btn btn-xs btn-primary text-sm"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lawyer;
