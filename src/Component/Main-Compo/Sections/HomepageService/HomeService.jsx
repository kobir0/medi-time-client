import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import HomeServiceCard from "./HomeServiceCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeService = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    fetch("https://medi-time-server-2.vercel.app/threeservices")
      .then((response) => response.json())
      .then((data) => setService(data.data))
      .catch((err) => toast.error(err.message));
  }, []);

  return (
    <div className="  mt-28">
      <h1 className="text-center text-teal-600 text-2xl my-5 font-bold">
        My Services
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1  gap-6">
        {services.map((service) => (
          <HomeServiceCard
            key={service._id}
            service={service}
          ></HomeServiceCard>
        ))}
      </div>

      <div className="text-center mt-2">
        <NavLink className="" to="/services">
          <button className=" hover:scale-105 btn shadow-xl shadow-teal-100 lg:btn-wide  m-2 btn-success">
            See All
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default HomeService;
