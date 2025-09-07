import React from "react";

const Banner = () => {
  return (
    <div className="card bg-base-100 image-full shadow-sm">
      <div>
        <img src="/assets/banner-img-1.png" className="w-full" />
      </div>

      <div className="card-body text-center flex items-center justify-center">
        <div className="space-y-10">
          <h2 className="card-title text-xl lg:text-3xl max-w-[60%] mx-auto">
            Find the Right Lawyer, Book in Minutes ⚖️
          </h2>
          <p
            className="max-w-[80%] mx-auto text-xs lg:textsm
          "
          >
            Legal Help, Made Simple 👨‍⚖️ Search, compare, and book lawyers online.
            Fast, secure, and reliable appointments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
