import React from "react";

const AboutMe = () => {
  return (
    <div className="mt-20">
      <div className="flex  flex-col lg:flex-row justify-around">
        <div className="div">
          <h1 className="text-2xl text-teal-600 lg:text-4xl text-center font-bold">
            About Me
          </h1>
          <div className="flex h-full justify-around items-center">
            <div className="div p-5 mt-2">
              <img
                className=" my-2  h-16 w-16"
                src="https://i.ibb.co/fH0syJ1/surgery.png"
                alt="surgery"
              ></img>
              <h1 className="text-2xl font-bold">
                MBBS , MD{" "}
                <span className="text-lg font-mono">(Cardiology),</span>
              </h1>
              <h1 className="text-xl font-semibold">London Medical College.</h1>
            </div>
            <div className="div p-5  mt-2">
              <img
                className=" h-16 w-16"
                src="https://i.ibb.co/W6XC5WX/doctor.png"
                alt="doctor"
              ></img>
              <h1 className="text-2xl font-bold">Surgery,</h1>
              <h1 className="text-xl font-semibold">2 years experiences.</h1>
            </div>
          </div>
        </div>
        <div className="div">
          <img
            className="mask mask-squircle"
            src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
