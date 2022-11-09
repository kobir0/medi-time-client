import React from "react";

const MyReviewCard = ({ review }) => {
  const { ServiceName, comment, rating } = review;
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
              <button className="btn btn-sm">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
