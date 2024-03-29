import React from "react";
import { NavLink } from "react-router-dom";
import meditime from "./meditime.json";
import Lottie from "lottie-react";
const Banner = () => {
  return (
    <div className="text-center">
      <div className="hero min-h-screen ">
        <div className="flex items-center justify-center flex-col lg:flex-row">
          <div className="w-full flex justify-center my-0 lg:my-8  lg:w-2/5">
            <Lottie className=" rounded-lg " animationData={meditime}></Lottie>
            {/* <img
              src="https://i.ibb.co/Z2WxR0J/107925-doctor.gif"
              alt=""
              
            /> */}
          </div>
          <div className="mx-10 flex justify-center">
            <div className="div">
              <h1 className="text-5xl font-bold">
                Hi, I am{" "}
                <span className="text-emerald-500 ">Doc. Edward Jenner </span>.
              </h1>
              <p className="py-6 font-semibold">
                Access to the health care may vary across countries ,
                communities , and social and economic <br></br> conditions as
                well as health policies .
              </p>
              <div className="flex ml-2 justify-center lg:justify-start">
                {" "}
                <NavLink to="/services">
                  <button className=" hover:scale-105 btn shadow-xl shadow-black-300 lg:btn-wide  m-2 btn-success">
                    See Services
                  </button>
                </NavLink>
                <NavLink to="../appointment">
                  <button className="btn hover:scale-105 shadow-xl shadow-black-300 lg:btn-wide  btn-success m-2">
                    Get Appointment
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
