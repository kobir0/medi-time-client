import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../Shared-Compo/UserContext";
import MyReviewCard from "./MyReviewCard";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/review/email?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.data);
      })
      .catch((err) => console.error(err));
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
        <h1 className=" text-center mt-5 text-bold text-2xl">No Reviews Yet</h1>
      )}
    </div>
  );
};

export default MyReview;
