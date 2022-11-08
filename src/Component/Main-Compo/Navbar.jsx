import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content rounded-b-md  shadow-xl shadow-teal-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu text-teal-700 menu-compact dropdown-content mt-3 p-2 shadow bg-base- rounded-box w-52"
            >
              <li>
                <NavLink to="/home"> Home</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <img
            className="h-8 "
            src="https://i.ibb.co/9gnjDPS/Screenshot-20221108-055438-removebg-preview.png"
            alt=""
          />
          <NavLink to="/" className="btn btn-ghost normal-case text-xl">
            Medi<span className="text-teal-400"> TIME</span>
          </NavLink>
        </div>
        <div className="navbar-end">
          <NavLink to="/login">
            <button className="btn btn-xs">Login</button>
          </NavLink>
          <NavLink to="/register">
            <button className="btn btn-xs">Register</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
