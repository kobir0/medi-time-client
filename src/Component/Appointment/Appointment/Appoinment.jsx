import React, { useState } from "react";
import AvailableAppointments from "../AvailableApooinments/AvailableAppointments";
import AppoinmentBanner from "./AppointmentBanner/AppoinmentBanner";

const Appoinment = () => {
  const [selectedDate, SetSelectedDate] = useState(new Date());
  return (
    <div className=" min-h-screen">
      <AppoinmentBanner
        selectedDate={selectedDate}
        SetSelectedDate={SetSelectedDate}
      ></AppoinmentBanner>
      <AvailableAppointments
        selectedDate={selectedDate}
      ></AvailableAppointments>
    </div>
  );
};

export default Appoinment;
