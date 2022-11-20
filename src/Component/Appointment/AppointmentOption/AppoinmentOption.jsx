import React from "react";

const AppoinmentOption = ({ option, setTreatment }) => {
  const { name, slots } = option;

  return (
    <div>
      <div className="card text-center  w-48  h-64 lg:h-70 lg:w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className=" text-xl font-bold text-center">{name}</h2>
          <p className="font-semibold">{slots[0]}</p>
          <p className="font-semibold">
            {slots?.length} {slots?.length > 1 ? "Slots" : "Slot"} Available
          </p>
          <div className="card-actions justify-center">
            <button className="">
              <label
                htmlFor="booking-modal"
                disabled={slots.length === 0}
                className="btn btn-succes btn-outline text-teal-600 shadow-xl lg:btn-wide"
                onClick={() => {
                  setTreatment(option);
                }}
              >
                Book Appointment
              </label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentOption;
