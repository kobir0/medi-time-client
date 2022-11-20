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
      <div className="hero bg-slate-50 rounded-lg min-w-screen  ">
        <div className="hero-content mt-5 flex-col lg:flex-row-reverse">
          <div className="div">
            <h1 className="text-5xl my-3 font-bold">{name}</h1>
            <PhotoProvider>
              <PhotoView src={image}>
                <figure>
                  <img
                    src={image}
                    className=" lg:w-full h-full w-44 max-w-sm rounded-lg shadow-2xl"
                    alt=""
                  />
                </figure>
              </PhotoView>
            </PhotoProvider>

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
