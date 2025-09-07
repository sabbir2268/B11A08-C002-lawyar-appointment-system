import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getAppointmentData } from "../../Utilities/addToLocalStorage";
import BookingCard from "./BookingCard";

const MyBooking = () => {
  const lawyerData = useLoaderData();
  const [appointmentList, setAppointmentList] = useState([]);

  useEffect(() => {
    const storedLawyersData = getAppointmentData();
    const convertedStoredLawyersData = storedLawyersData.map((id) =>
      parseInt(id)
    );

    const myAppointmentList = lawyerData.filter((lawyer) =>
      convertedStoredLawyersData.includes(lawyer.id)
    );
    setAppointmentList(myAppointmentList);
  }, [lawyerData]);

  return (
    <div>
      <div className="text-center py-10 ">
        <h1 className="text-3xl font-bold">My Today Appointments</h1>
        <p className="text-gray-500">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience.
        </p>
      </div>
      <div className="flex flex-col gap-5 mb-5">
        {appointmentList.map((appointment) => (
          <BookingCard
            setAppointmentList={setAppointmentList}
            appointment={appointment}
            key={appointment.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
