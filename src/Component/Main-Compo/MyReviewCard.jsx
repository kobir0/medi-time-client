import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyReviewCard = ({ review }) => {
  const { ServiceName, comment, rating, _id } = review;

  const handleDelete = (id) => {
    const cons = window.confirm("Are sure you want to delete this ?");
    if (cons) {
      fetch(
        `https://b6a11-service-review-server-side-kobir0-iota.vercel.app/reviewdelete/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          toast(data.message);
        })
        .catch((err) => toast.error(err.message));
    } else {
      return;
    }
  };

  return (
    <div className="m-2 ">
      <div className="card w-96 h-64 max-h-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            Service Name: {ServiceName}
            <div className="badge badge-warning">{rating}</div>
          </h2>
          <p>Your review: {comment}</p>

          <div className="card-actions justify-end">
            <div className="">
              <button className="btn btn-sm">Update</button>
            </div>
            <div className="">
              <button
                onClick={() => {
                  handleDelete(_id);
                }}
                className="btn btn-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
