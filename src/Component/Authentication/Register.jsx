import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Shared-Compo/UserContext";
import { useTitle } from "../Shared-Compo/useTitle";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useToken from "../Shared-Compo/useToken";

const Register = () => {
  const [Error, setError] = useState("");
  const { createUser, updateProfileInfo } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");

  const token = useToken(userEmail);
  if (token) {
    navigate("/");
  }

  useTitle("Register");

  const handleSubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const password = from.password.value;
    const email = from.email.value;
    const name = from.name.value;
    const url = from.url.value;

    console.log(password, email, name, url);

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        handleUpdateprofile(name, url);

        console.log("signed", user);

        setLoading(false);

        toast("You have registered successFully !!", {
          icon: "👏",
          style: {
            borderRadius: "10px",
          },
          autoClose: 1600,
          position: "top-center",
        });
        userToDb(name, email);

        from.reset();
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);
        console.log(error);
      });
  };

  const handleUpdateprofile = (name, url) => {
    const profile = { displayName: name, photoURL: url };
    updateProfileInfo(profile)
      .then(() => {
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const handleLoading = () => {
    setLoading(true);
  };

  const userToDb = (name, email) => {
    const user = { name, email };
    fetch("https://medi-time-server-2.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setUserEmail(email);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const getUserToken = (email) => {
  //   fetch(`https://medi-time-server-2.vercel.app/jwt?email=${email}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.accessToken) {
  //         localStorage.setItem("accessToken", data.accessToken);
  //         navigate("/");
  //       }
  //     });
  // };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-80 lg:w-96 flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Register Here!!</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control border-none">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control border-none">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  name="url"
                  type="text"
                  placeholder="Url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control border-none">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control border-none">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label ">
                  <>
                    <span className="text-teal-800 font-semibold">
                      {" "}
                      Already have an account?
                    </span>{" "}
                    <NavLink
                      to={"../login"}
                      className="label-text-alt link link-hover"
                    >
                      <button className="btn btn-xs btn-success  w-20">
                        Log In{" "}
                      </button>
                    </NavLink>
                  </>
                </label>
                <p className="text-red-600">{Error}</p>
              </div>
              <div className="form-control mt-6 border-none">
                {loading ? (
                  <button className="btn btn-outline shadow-lg shadow-teal-100 btn-success">
                    Loading...
                  </button>
                ) : (
                  <button
                    onClick={handleLoading}
                    className="btn btn-outline shadow-lg shadow-teal-100 btn-success"
                  >
                    Register
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
