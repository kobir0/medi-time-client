import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Shared-Compo/UserContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
  };
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
              className="menu  bg-slate-50 text-teal-700 menu-compact dropdown-content mt-3 p-2 shadow bg-base- rounded-box w-52"
            >
              <li>
                <NavLink to="/home"> Home</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex navbar-center">
            <img
              className="h-8 m-0 "
              src="https://i.ibb.co/9gnjDPS/Screenshot-20221108-055438-removebg-preview.png"
              alt=""
            />
            <NavLink
              to="/"
              className="btn m-0 btn-ghost btn-xs normal-case text-xl"
            >
              Medi<span className="text-teal-400"> TIME</span>
            </NavLink>
          </div>
        </div>

        <div className="navbar-end">
          {user?.email ? (
            <>
              <NavLink to="/AddService">
                <button className="btn m-1 btn-circle">
                  {" "}
                  <h1 className=" text-xs">Add Service</h1>
                </button>
              </NavLink>
              <NavLink to="/myreview">
                <button className="btn   ml-1 btn-circle">
                  <h1 className=" text-xs">My Review</h1>
                </button>
              </NavLink>
              <button onClick={handleLogout} className="btn m-1 btn-circle">
                <h1 className="  text-xs">Logout</h1>
              </button>
            </>
          ) : (
            <NavLink to="/login">
              <button className="btn btn-circle">
                {" "}
                <h1 className=" text-xs">Login</h1>
              </button>
            </NavLink>
          )}

          <NavLink to="/register">
            <button className="btn m-1 btn-circle">
              {" "}
              <h1 className="ml-1 text-xs">Register</h1>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
