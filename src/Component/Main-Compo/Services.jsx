import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const data = useLoaderData();
  const services = data.data;

  return (
    <div className="">
      <h1 className="text-teal-600 text-center font-extrabold text-2xl mt-3">
        All Services{" "}
      </h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
