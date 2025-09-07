import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// for routing
import { router } from "./Routes/Router.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
