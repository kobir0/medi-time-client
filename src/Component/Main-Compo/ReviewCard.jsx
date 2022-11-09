import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className=" mt-2 bg-slate-100 border p-3 rounded">
      <div className="avatar flex items-center">
        <div className=" w-12 rounded-full">
          <img src={review?.UserPhoto} alt="" />
        </div>
        <h1 className="ml-3 text-lg font-bold">{review?.UserName}</h1>
      </div>

      <div className="mt-4">
        <p className="text-sm font-bold text-yellow-400">
          Rating: {review?.rating}
        </p>
      </div>

      <div className="border mt-2 p-2 ">
        <p>{review?.comment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
