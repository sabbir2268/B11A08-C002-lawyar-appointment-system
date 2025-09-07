import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <Link to={"/"} className="m-2 btn btn-ghost">
        Home
      </Link>
      <Link className="m-2 btn btn-ghost" to={"/myBookings"}>
        My Bookings
      </Link>
      <Link className="m-2 btn btn-ghost" to={"/blogs"}>
        Blogs
      </Link>
      <Link className="m-2 btn btn-ghost" to={"/contact"}>
        Contact
      </Link>
    </>
  );
  return (
    <div className="border-b-2 border-gray-300">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <img className="w-4 md:w-6 lg:w-8 " src="assets/logo.png" alt="" />
            <a className="text-sm md:text-lg lg:text-xl font-semibold">
              LawYer.BD
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-gray-500 ">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link to={"/contact"} className="btn bg-green-500 hover:bg-green-700">
            Contact Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
