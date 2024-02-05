import React, { useEffect, useState } from "react";

import { useTitle } from "../Shared-Compo/useTitle";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ServiceCard from "./ServiceCard";
import Loading from "../Shared-Compo/Loading";

const Services = () => {
  const [services, setService] = useState([]);
  const [loading, setLoading] = useState(true);
  useTitle("Services");

  useEffect(() => {
    fetch("https://medi-time-server-2.vercel.app/services")
      .then((response) => response.json())
      .then((data) => {
        setService(data.data);
        setLoading(false);
      })
      .catch((err) => toast.error(err.message));
  }, []);
  if (loading) {
    return <Loading />;
  } else {
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
  }
};

export default Services;
