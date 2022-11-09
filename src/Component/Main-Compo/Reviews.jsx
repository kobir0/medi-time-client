import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../Shared-Compo/UserContext";
import ReviewCard from "./ReviewCard";

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

    fetch("http://localhost:5000/review/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          alert(data.message);
          form.reset();
        } else {
          alert(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetch(`http://localhost:5000/review?serviceID=${_id}`)
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
        <div>
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
            <NavLink to="/login" state={{ from: location }} replace>
              <button className="btn btn-outline btn-sm btn-success">
                Login To add Review
              </button>
            </NavLink>
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
