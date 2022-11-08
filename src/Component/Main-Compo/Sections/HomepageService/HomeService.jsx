import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import HomeServiceCard from "./HomeServiceCard";

const HomeService = () => {
  const [services, setService] = useState([]);
  console.log(services);

  useEffect(() => {
    fetch("http://localhost:5000/services/limit")
      .then((response) => response.json())
      .then((data) => setService(data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="mx-5">
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

      <div className="text-center my-2">
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
