import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="flex items-center justify-center flex-col lg:flex-row">
          <div className="w-full flex justify-center my-10 lg:my-0 lg:w-2/5">
            <img
              src="https://i.ibb.co/Z2WxR0J/107925-doctor.gif"
              alt=""
              className=" rounded-lg shadow-2xl"
            />
          </div>
          <div className="mx-10 flex justify-center">
            <div className="div">
              <h1 className="text-5xl font-bold">
                Hi, I am{" "}
                <span className="text-teal-500">Doc. Edward Jenner </span>.
              </h1>
              <p className="py-6">
                Access to the health care may vary across countries ,
                communities , and social and economic <br></br> conditions as
                well as health policies .
              </p>
              <div className="flex">
                {" "}
                <button className="btn  lg:btn-wide btn-outline btn-success m-2">
                  Get Appoinment
                </button>
                <button className="btn lg:btn-wide  m-2 btn-success">
                  See Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
