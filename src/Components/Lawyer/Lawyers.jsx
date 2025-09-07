import React, { Suspense, useState } from "react";
import Lawyer from "./Lawyer";

const Lawyers = ({ lawyersData }) => {
  const [showAll, setShowAll] = useState();

  const showLawyers = showAll ? lawyersData : lawyersData.slice(0, 6);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="flex flex-col gap-5 mt-10">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="text-2xl">Our Best Lawyers</h1>
        <p className="text-gray-500">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 bg-gray-300 p-5 rounded-sm shadow-2xl">
        <Suspense fallback={<div>Loading...</div>}>
          {showLawyers.map((lawyer) => (
            <Lawyer lawyer={lawyer} key={lawyer.id}></Lawyer>
          ))}
        </Suspense>
      </div>

      <div
        onClick={() => {
          handleShowAll();
        }}
        className="flex items-center justify-center mt-10"
      >
        <button className="btn btn-secondary">
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Lawyers;
