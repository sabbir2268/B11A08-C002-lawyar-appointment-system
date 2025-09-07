import React from "react";

const Banner = () => {
  return (
    <div className="card bg-base-100 image-full shadow-sm">
      <div>
        <img src="/Public/assets/banner-img-1.png" className="w-full" />
      </div>

      <div className="card-body text-center flex items-center justify-center">
        <div className="space-y-10">
          <h2 className="card-title text-3xl max-w-[60%] mx-auto">
            It avoids subjective claims or exaggeration that might raise red
            flags legally
          </h2>
          <p className="max-w-[80%] mx-auto">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
