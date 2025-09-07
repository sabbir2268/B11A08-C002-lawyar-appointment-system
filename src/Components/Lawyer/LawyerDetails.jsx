import React from "react";
import { useLoaderData, useParams } from "react-router";
import { CircleAlert } from "lucide-react";
import { addToLocalStorage } from "../../Utilities/addToLocalStorage";
import Swal from "sweetalert2";

const LawyerDetails = () => {
  const params = useParams();
  const id = parseInt(params.id);
  const lawyersData = useLoaderData();

  // console.log(lawyersData);

  const singleLawyerData = lawyersData.find((lawyer) => lawyer.id == id);
  // console.log(singleLawyerData);

  const {
    image,
    name,
    specialty,
    experience,
    availability,
    fee,
    isAvailable,
    licenseNumber,
  } = singleLawyerData;

  const handleAppointment = (id) => {
    Swal.fire({
      title: `Your appointment with '${name}' is booked successfully!`,
      icon: "success",
      draggable: false,
    });
    addToLocalStorage(id);
  };

  return (
    <div>
      <div className="text-center max-w-[80%] mx-auto space-y-5 py-10">
        <h1 className="text-3xl font-bold">Lawyer’s Profile Details</h1>
        <p className="text-gray-400">
          Here you’ll find detailed information about this lawyer, including
          their specialization, years of experience, license credentials,
          consultation fees, and availability. Use this page to decide if
          they’re the right fit for your legal needs.
        </p>
      </div>

      <div className="flex flex-col gap-5 lg:grid md:grid-cols-5 items-center bg-gray-200 rounded-lg py-10 lg:p-3 shadow-2xl">
        <div className="col-span-2">
          <img className="lg:w-auto w-[400px] rounded-lg" src={image} alt="" />
        </div>
        <div className="col-span-3 lg:ml-20 lg:space-y-2">
          <div className="flex">
            <p className="bg-blue-200 text-sm lg:text-md  border-blue-500 border-2      rounded-2xl lg:p-1 ">
              {experience} experience
            </p>
          </div>

          <h1 className="text-2xl lg:text-3xl font-bold my-2">{name}</h1>
          <div className="flex gap-20 my-5">
            <p className="text-gray-600 text-xs lg:text-lg ">{specialty}</p>
            <p className="text-gray-600 text-xs lg:text-lg">
              <span className="font-bold text-md">Licence No: </span>
              {licenseNumber}
            </p>
          </div>
          <p className="flex items-center gap-4">
            <span className="font-bold lg:text-lg text-xs ">Availability:</span>{" "}
            {availability.map((available, index) => (
              <span
                className="text-[8px] lg:text-lg bg-amber-100 border-2 border-amber-600 p-1 rounded-2xl mr-2 text-amber-600"
                key={index}
                available={available}
              >
                {available}
              </span>
            ))}
          </p>
          <p className="mt-4 text-xs lg:text-lg">
            <span className="font-bold mr-5">Consultation Fee: </span>
            <span className="font-semibold text-green-600">{fee} Taka</span>
          </p>
        </div>
      </div>

      <div className="my-10 bg-gray-50 p-10 flex flex-col rounded-lg shadow-2xl">
        <div className="text-center border-b-2 border-dashed border-gray-400 pb-2">
          <h1 className="text-lg lg:text-2xl font-bold">Book An Appoinment</h1>
        </div>
        <div className="flex justify-between mt-5 border-b-2 border-gray-400 pb-4 text-[14px] lg:text-lg">
          <h1>Availability</h1>
          <p
            className={`rounded-2xl p-1 text-[10px] lg:text-sm border-2 
              ${
                isAvailable
                  ? "bg-green-200 border-green-500"
                  : "bg-red-200 border-red-500"
              }`}
          >
            {isAvailable
              ? "Lawyer Available Today"
              : "Lawyer Not Available Today"}
          </p>
        </div>
        <div className="flex  justify-center gap-2 text-center px-2 mt-5 bg-amber-100 text-amber-600 py-2 rounded-2xl text-xs border-2 border-amber-500">
          <CircleAlert className="w-3 h-3 text-red-600" />
          <span>
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.
          </span>
        </div>

        <button
          onClick={() => handleAppointment(id)}
          className="btn btn-success mt-5"
        >
          Book An Appoinment
        </button>
      </div>
    </div>
  );
};

export default LawyerDetails;
