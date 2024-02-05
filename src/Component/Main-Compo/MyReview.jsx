import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Shared-Compo/UserContext";
import { useTitle } from "../Shared-Compo/useTitle";
import MyReviewCard from "./MyReviewCard";

const MyReview = () => {
  useTitle("My Review");
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://meditime-2-server.onrender.com/reviewemail?email=${user?.email}`
    )
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.data);
      })
      .catch((err) => toast.error(err.message));
  }, [reviews]);

  return (
    <div className="min-h-screen flex justify-center">
      {reviews?.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {reviews.map((review) => (
            <MyReviewCard key={review._id} review={review}></MyReviewCard>
          ))}
        </div>
      ) : (
        <div className="min-h-srreen flex justify-center items-center">
          <h1 className=" text-center mt-5 font-bold text-3xl">
            No Reviews Yet
          </h1>
        </div>
      )}
    </div>
  );
};

export default MyReview;
