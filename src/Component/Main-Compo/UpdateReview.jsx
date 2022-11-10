import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateReview = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  console.log(data);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;
    const rating = form.rating.value;

    const review = {
      rating: rating,
      comment: comment,
    };

    fetch(
      `https://b6a11-service-review-server-side-kobir0-iota.vercel.app/edit/${data.data._id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(review),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          navigate("../myreview");
          toast(`You have updated  successfully !!`, {
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
  return (
    <div>
      <form className=" min-h-screen " onSubmit={handleSubmit}>
        <h1 className="m-2 text-xl text-center font-semibold">
          {data.data.ServiceName}
        </h1>
        <div className="flex justify-center">
          <div>
            <div>
              {" "}
              <input
                type="text"
                name="comment"
                placeholder="your comment"
                required
                className="input m-2 input-bordered input-success w-62 h-20 max-w-xs"
                defaultValue={data.data.comment}
              />
              <div>
                <input
                  type="text"
                  name="rating"
                  placeholder="your rating"
                  required
                  className="input m-2 input-bordered w-62 input-success max-w-xs"
                  defaultValue={data.data.rating}
                />
              </div>
            </div>
            <div className="text-center">
              <button className="btn mt-2 btn-sm btn-success">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateReview;
