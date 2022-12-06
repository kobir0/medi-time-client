import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div>
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content ">
            <label
              htmlFor="dashboard-drawer"
              className=" drawer-button lg:hidden"
            >
              {" "}
              <img
                className="mt-5 w-5  cursor-pointer"
                src="https://i.ibb.co/BBKgp3s/pngegg.png"
                alt=""
              ></img>
            </label>
            <Outlet></Outlet>
          </div>
          <div className="drawer-side borde">
            <label
              htmlFor="dashboard-drawer"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 bg-slate-100 text-base-content">
              <li>
                <NavLink to="../dashboard/myAppointment">
                  {" "}
                  My Appointment
                </NavLink>
              </li>
              <li>
                <NavLink to="../dashboard/users"> Users</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
