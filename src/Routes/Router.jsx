import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import LawyerDetails from "../Components/Lawyer/LawyerDetails";
import MyBooking from "../Components/MyBookings/MyBooking";
import Blogs from "../Components/Blogs/Blogs";
import Error from "../Components/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch("/Data/lawyersData.json"),
        element: <Home></Home>,
      },
      {
        path: "/lawyerDetails/:id",
        loader: () => fetch("/Data/lawyersData.json"),
        element: <LawyerDetails></LawyerDetails>,
      },
      {
        path: "/myBookings",
        loader: () => fetch("/Data/lawyersData.json"),
        element: <MyBooking></MyBooking>,
      },
      {
        path: "/blogs",
        loader: () => fetch("/Data/BlogsData.json"),
        element: <Blogs></Blogs>,
      },
    ],
  },
]);
