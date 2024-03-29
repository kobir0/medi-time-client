import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Shared-Compo/UserContext";
import "react-photo-view/dist/react-photo-view.css";
import { toast } from "react-toastify";
import "./Nav.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast("You have Logged Out", {
          icon: "🙆‍♀️",
          style: {
            borderRadius: "10px",
          },
          autoClose: 1200,
          position: "top-center",
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className=" sticky top-0 z-30">
      <div className="navbar h-4 bg-neutral text-neutral-content rounded-b-md shadow-lg shadow-teal-100">
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
              Medi<span className="text-emerald-500"> TIME</span>
            </NavLink>
          </div>
        </div>

        <div className="navbar-end">
          {user?.displayName ? (
            <>
              <div className=" invisible lg:visible">
                {user?.email === "kxkobir1999@gmail.com" && (
                  <NavLink to="/AddService">
                    <button className="btn m-1 btn-sm">
                      {" "}
                      <h1 className="text-xs">Add Service</h1>
                    </button>
                  </NavLink>
                )}
                <NavLink to="/myreview">
                  <button className="btn   ml-1 btn-sm">
                    <h1 className=" text-xs">My Review</h1>
                  </button>
                </NavLink>
                <NavLink to="../dashboard">
                  <button className="btn   ml-1 btn-sm">
                    <h1 className=" text-xs">Dash Board</h1>
                  </button>
                </NavLink>
                <NavLink to="/register">
                  <button className="btn m-1 btn-sm ">
                    {" "}
                    <h1 className="ml-1 text-xs ">Register</h1>
                  </button>
                </NavLink>
              </div>
              <button onClick={handleLogout} className="btn m-1 btn-sm">
                <h1 className="  text-xs">Logout</h1>
              </button>
            </>
          ) : (
            <NavLink to="/login">
              <button className="btn btn-sm text-white btn-outline lg:btn-sm">
                {" "}
                <h1 className=" text-xs ">Login</h1>
              </button>
            </NavLink>
          )}

          {/* tooltip */}

          <div
            className="tooltip tooltip-left tooltip-success"
            data-tip={user?.displayName && user?.displayName}
          >
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn m-1 sm:m-1 btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  {user?.photoURL ? (
                    <img src={user.photoURL} alt="" />
                  ) : (
                    <img
                      src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=2000"
                      alt=""
                    />
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className=" lg:hidden menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-48 "
              >
                <div className=" ">
                  <div className=" flex ">
                    <NavLink to="/register">
                      <button className="btn m-1 btn-circle">
                        {" "}
                        <h1 className="ml-1 nav-text-sm">Register</h1>
                      </button>
                    </NavLink>
                    {user?.email && (
                      <div className=" visible lg:invisible">
                        {user?.email === "kxkobir1999@gmail.com" && (
                          <NavLink to="/AddService">
                            <button className="btn m-1 btn-circle">
                              {" "}
                              <h1 className=" nav-text-sm">Add Service</h1>
                            </button>
                          </NavLink>
                        )}
                        <NavLink to="/myreview">
                          <button className="btn   m-1 btn-circle">
                            <h1 className=" nav-text-sm">My Review</h1>
                          </button>
                        </NavLink>
                        <NavLink to="../dashboard">
                          <button className="btn   m-1 btn-circle">
                            <h1 className=" nav-text-sm">Dash board</h1>
                          </button>
                        </NavLink>
                      </div>
                    )}
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
