import React, { useState } from "react";
import { format } from "date-fns";
import AppoinmentOption from "../AppointmentOption/AppoinmentOption";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared-Compo/Loading";

const AvailableAppointments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");
  const {
    data: appoinmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: () =>
      fetch(
        `https://meditime-2-server.onrender.com/appointmentOptions?date=${date}`
      ).then((res) => res.json()),
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-center text-teal-500 font-bold">
        <span className=" text-slate-900 my-4">Selected Appoinment Date:</span>{" "}
        {format(selectedDate, "PP")}
      </h1>

      <div className="flex justify-center">
        <div className=" grid grid-cols-2 lg:grid-cols-3 gap-3">
          {appoinmentOptions.map((option, i) => (
            <AppoinmentOption
              key={i}
              setTreatment={setTreatment}
              option={option}
            ></AppoinmentOption>
          ))}
        </div>
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          setTreatment={setTreatment}
          selectedDate={selectedDate}
          key={treatment._id}
          slots={treatment.slots}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
