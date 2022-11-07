import React from "react";

const WeeklyTimeTable = () => {
  return (
    <div className="mb-10 mt-5">
      <div className=" block lg:flex  ">
        <div className=" flex justify-center w-full lg:w-1/2 ">
          <h1 className="font-extrabold text-3xl ">
            <span className="text-teal-500 ">Weekly </span>
            Timetable
          </h1>
        </div>
        <div className="">
          <h1 className="text-lg text-center font-bold">
            You can make an appoinment by selecting the convient <br></br> time
            and choose your services.
          </h1>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-3 gap-x-5">
          <div className="div mx-1">
            <img
              className="w-48  shadow-lg h-48"
              src="https://img.icons8.com/external-filled-outline-perfect-kalash/512/external-diagnosis-virus-coronavirus-filled-outline-perfect-kalash.png"
              alt=""
            />
            <h1 className="text-2xl font-bold text-teal-700">Diagnosis</h1>
            <h1 className=" font-semibold">Accurate approach</h1>
          </div>
          <div className="div mx-1">
            <img
              className="w-48 shadow-lg  p-4 h-48"
              src="https://img.icons8.com/external-mixed-line-solid-yogi-aprelliyanto/512/external-consultation-business-training-mixed-line-solid-yogi-aprelliyanto.png"
              alt=""
            />
            <h1 className="text-2xl font-bold  text-teal-700">Consultation</h1>
            <h1 className=" font-semibold">By Professional</h1>
          </div>

          <div className="div mx-1">
            <img
              className="w-44 shadow-lg  h-48"
              src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-treatment-spa-flaticons-lineal-color-flat-icons.png"
              alt=""
            />
            <h1 className="text-2xl font-bold  text-teal-700">Treatment</h1>
            <h1 className=" font-semibold">Individual approach</h1>
          </div>
          <div className="div mx-1">
            <img
              className="w-48  shadow-lg  h-48"
              src="https://img.icons8.com/dusk/512/time-machine.png"
              alt=""
            />
            <h1 className="text-2xl font-bold  text-teal-700">Online Hour </h1>
            <h1 className=" font-semibold">24/7</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyTimeTable;
