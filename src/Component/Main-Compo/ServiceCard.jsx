import React from "react";
import { NavLink } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { name, image, price, description, rating, _id } = service;
  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-lg">
        <figure>
          <img src={image} className=" h-56 w-full" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">
            {name}
            <div className="badge mx-2 badge-warning">{rating}</div>
          </h2>
          <p>{description.slice(0, 100)}...</p>
          <h1 className="text-xl font-semibold">Price: ${price}</h1>
          <div className="card-actions justify-end">
            <NavLink to={`../services/details/${_id}`}>
              <button className="btn btn-sm btn-success btn-outline">
                See Details
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
