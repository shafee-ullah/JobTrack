import React from "react";
import LogoImg from "../assets/icons8-job-100.png";
import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-2  md:px-12 lg:px-16 xl:px-24 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          {/* Mobile */}
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/OurSuccess">Our Success Stories</NavLink>
          </li>
          <li>
            <NavLink to="/ContactUs">Contact Us</NavLink>
          </li>
          </ul>
        </div>
        <NavLink to="/" className="flex items-center">
          <img src={LogoImg} className="w-8 h-8" alt="Logo" />
          <span className="text-xl font-bold ml-2">JobTrack</span>
        </NavLink>
      </div>

      {/* Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/OurSuccess">Our Success Stories</NavLink>
          </li>
          <li>
            <NavLink to="/ContactUs">Contact Us</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex gap-2">
        <NavLink
          to=""
          className="btn 
              
              rounded-3xl 
              bg-green-600
              text-white
              hover:bg-[rgba(11,130,5,1)]
              border-none"
        >
          Login
        </NavLink>

        <NavLink
          to=""
          className="btn 
              
              rounded-3xl 
              bg-green-600 
              text-white
              hover:bg-[rgba(11,130,5,1)]
              border-none"
        >
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
