import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getAppointmentData } from "../../Utilities/addToLocalStorage";
import BookingCard from "./BookingCard";
import AppointmentChart from "../AppointmentChart/AppointmentChart";

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
    <div className="">
      <AppointmentChart appointmentList={appointmentList}></AppointmentChart>
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
