import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="my-10">
      <div className="text-center my-5">
        <h1 className="text-2xl font-bold">We Provide Best Law Services</h1>
        <p className="text-gray-500">
          Our platform connects you with verified, experienced Lawyers across
          various specialities — all at your convenience.{" "}
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-4 flex flex-col gap-3 bg-gray-300 rounded-lg flex-1 shadow-xl shadow-gray-400">
          <img
            src="/Public/assets/success-doctor.png"
            alt=""
            className="w-10"
          />
          <div className="text-3xl font-bold">
            <CountUp
              start={1}
              end={199}
              duration={8}
              suffix="+"
              enableScrollSpy
            >
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
          </div>
          <h1 className="text-xl font-semibold">Total Lawyer </h1>
        </div>

        <div className="p-4 flex flex-col gap-3 bg-gray-300 rounded-lg flex-1 shadow-xl shadow-gray-400">
          <img
            src="/Public/assets/success-review.png"
            alt=""
            className="w-10"
          />
          <div className="text-3xl font-bold">
            <CountUp
              start={1}
              end={467}
              duration={10}
              suffix="+"
              enableScrollSpy
            >
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
          </div>

          <h1 className="text-xl font-semibold">Total Lawyer </h1>
        </div>

        <div className="p-4 flex flex-col gap-3 bg-gray-300 rounded-lg flex-1 shadow-xl shadow-gray-400">
          <img
            src="/Public/assets/success-patients.png"
            alt=""
            className="w-10"
          />
          <div className="text-3xl font-bold">
            <CountUp
              start={1}
              end={1900}
              duration={12}
              suffix="+"
              enableScrollSpy
            >
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
          </div>
          <h1 className="text-xl font-semibold">Total Lawyer </h1>
        </div>

        <div className="p-4 flex flex-col gap-3 bg-gray-300 rounded-lg flex-1 shadow-xl shadow-gray-400">
          <img src="/assets/success-staffs.png " alt="" className="w-10" />
          <div className="text-3xl font-bold">
            <CountUp
              start={1}
              end={300}
              duration={8}
              suffix="+"
              enableScrollSpy
            >
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
          </div>
          <h1 className="text-xl font-semibold">Total Lawyer </h1>
        </div>
      </div>
    </div>
  );
};

export default Counter;
