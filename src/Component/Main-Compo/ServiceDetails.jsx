import React from "react";
import { useLoaderData } from "react-router-dom";
import { useTitle } from "../Shared-Compo/useTitle";
import Reviews from "./Reviews";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceDetails = () => {
  const data = useLoaderData();

  const { name, image, price, description, rating } = data.data;
  useTitle("Service Details");
  return (
    <div>
      <div className="hero min-w-screen min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="div">
            <PhotoProvider>
              <PhotoView src={image}>
                <figure>
                  <img
                    src={image}
                    className=" lg:w-full w-44 max-w-sm rounded-lg shadow-2xl"
                    alt=""
                  />
                </figure>
              </PhotoView>
            </PhotoProvider>

            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6 ">{description}</p>
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
