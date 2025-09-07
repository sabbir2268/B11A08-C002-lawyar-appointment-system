import Swal from "sweetalert2";

// get all appointments
export const getAppointmentData = () => {
  const storedData = localStorage.getItem("appointments");
  return storedData ? JSON.parse(storedData) : [];
};

// add new appointment
export const addToLocalStorage = (id) => {
  const appointments = getAppointmentData();
  if (!appointments.includes(id)) {
    appointments.push(id);
    localStorage.setItem("appointments", JSON.stringify(appointments));
  } else {
    Swal.fire({
      icon: "error",
      title: "Already Booked An Appointment",
      text: "You Can't Book Two Appoinment",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  }
};

// remove an appointment
export const removeFromLocalStorage = (id) => {
  const appointments = getAppointmentData();
  const updatedAppointments = appointments.filter(
    (appointmentId) => appointmentId !== id
  );
  localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
};
