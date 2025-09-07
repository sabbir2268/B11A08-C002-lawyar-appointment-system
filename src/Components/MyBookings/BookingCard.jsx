import React from "react";
import { removeFromLocalStorage } from "../../Utilities/addToLocalStorage";

const BookingCard = ({ appointment, setAppointmentList }) => {
  const { name, fee, specialty, id } = appointment;

  const handleCancelAppointment = () => {
    removeFromLocalStorage(id);
    setAppointmentList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-gray-50 p-5 rounded-lg border-2 border-gray-200 shadow-2xl shadow-gray-500">
      <div className="flex justify-between border-b-2 border-gray-300 border-dashed">
        <div>
          <h1 className="text-xl font-bold">{name}</h1>
          <p className="text-gray-500 mb-2">{specialty}</p>
        </div>
        <div>
          <p className="text-gray-500">Appointment Fee: {fee}</p>
        </div>
      </div>
      <button
        onClick={handleCancelAppointment}
        className="btn text-red-500 bg-red-100 rounded-3xl border-red-500 w-full mt-5"
      >
        Cancel Appointment
      </button>
    </div>
  );
};

export default BookingCard;
