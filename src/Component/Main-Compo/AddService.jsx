import React, { useContext } from "react";
import { useTitle } from "../Shared-Compo/useTitle";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Shared-Compo/UserContext";

const AddService = () => {
  const { user } = useContext(AuthContext);
  useTitle("Add Service");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const service = {
      name: form.name.value,
      price: form.price.value,
      image: form.image.value,
      rating: form.rating.value,
      description: form.description.value,
      newService: true,
    };

    fetch("https://medi-time.onrender.com/serviceadd", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(service),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          toast("You have add a service successfully !!", {
            icon: "👏",
            style: {
              borderRadius: "10px",
            },
            autoClose: 1800,
            position: "top-center",
          });
          form.reset();
        } else {
          toast(data.message);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  if (user?.email === "kxkobir1999@gmail.com") {
    return (
      <div className="text-center">
        <form onSubmit={handleSubmit}>
          <h1 className="my-5 text-2xl text-center font-bold">
            Add your service.
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-24">
            <input
              type="text"
              name="name"
              placeholder="service name"
              className=" input input-bordered input-success w-full max-w-xs"
              required
            />
            <input
              type="text"
              name="price"
              placeholder="price"
              className="input input-bordered input-success w-full max-w-xs"
              required
            />
            <input
              type="text"
              name="image"
              placeholder="image url"
              className="input input-bordered input-success w-full max-w-xs"
              required
            />

            <input
              type="text"
              name="rating"
              placeholder="rating"
              className="input input-bordered input-success w-full max-w-xs"
              required
            />
          </div>
          <div className="flex justify-center my-4 ">
            <textarea
              name="description"
              className="textarea   w-64 h-48 textarea-accent"
              placeholder="description"
              required
            ></textarea>
          </div>
          <button className="btn btn-success mb-6 shadow-lg shadow-teal-200">
            Submit
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="text-center mt-11 text-xl font-bold ">
        {" "}
        You don't have Access.{" "}
      </div>
    );
  }
};

export default AddService;
