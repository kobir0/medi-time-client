import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../Shared-Compo/UserContext";
import ReviewCard from "./ReviewCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Reviews = ({ data }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const { name, _id } = data;
  // let value = useState(new Date());

  // const datetime = JSON.stringify(value[0]).split("T");

  // const newdate = datetime[0].slice(1);

  // const newtime = datetime[1].slice(0, 12);

  // console.log(newtime, newdate);

  let value = useState(new Date());
  const datetime = JSON.stringify(value[0]);
  const newDate = JSON.parse(datetime);

  const [reviews, setReviews] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;
    const rating = form.rating.value;

    const review = {
      UserName: user.displayName,
      UserPhoto: user.photoURL,
      rating: rating,
      comment: comment,
      email: user.email,
      ServiceName: name,
      ServiceID: _id,
      date: newDate,
    };

    fetch(
      "https://b6a11-service-review-server-side-kobir0-iota.vercel.app/reviewadd",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(review),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          toast(data.message);
          form.reset();
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  useEffect(() => {
    fetch(
      `https://b6a11-service-review-server-side-kobir0-iota.vercel.app/review?serviceID=${_id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.data);
      })
      .catch((err) => console.error(err));
  }, [reviews]);

  return (
    <div className="mt-8">
      <div>
        <h2 className="text-3xl font-bold text-center">Reviews:</h2>
        <div className="">
          {user?.email ? (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <textarea
                  name="comment"
                  className="textarea mt-2 textarea-success"
                  placeholder="your review text"
                ></textarea>
                <input
                  type="text"
                  name="rating"
                  placeholder="your rating"
                  required
                  className="input mt-2 input-bordered input-success w-28 max-w-xs"
                />
              </div>
              <button className="btn mt-2 btn-sm btn-success">Post</button>
            </form>
          ) : (
            <div className="text-center mt-2">
              {" "}
              <NavLink to="/login" state={{ from: location }} replace>
                <button className="btn btn-outline btn-sm btn-success">
                  Login To add Review
                </button>
              </NavLink>
            </div>
          )}

          <div></div>
        </div>
      </div>
      <div className="mt-5 border p-3 rounded">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
