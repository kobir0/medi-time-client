import React from "react";
import { useLoaderData } from "react-router-dom";
import Reviews from "./Reviews";

const ServiceDetails = () => {
  const data = useLoaderData();
  const { name, image, price, description, rating } = data.data;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} alt="" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{description}</p>
            <p className="text-2xl font-bold text-teal-600 my-2">
              Price: ${price}
            </p>
            <p className="text-2xl font-bold text-yellow-500 my-2">
              Rating:{rating}
            </p>
          </div>
        </div>
      </div>

      <Reviews data={data.data}></Reviews>
    </div>
  );
};

export default ServiceDetails;
