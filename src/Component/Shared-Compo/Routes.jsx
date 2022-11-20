import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Appoinment from "../Appointment/Appointment/Appoinment";
import Login from "../Authentication/Login";
import PrivateRoute from "../Authentication/PrivateRoute";
import Register from "../Authentication/Register";
import AddService from "../Main-Compo/AddService";
import Blog from "../Main-Compo/Blog";

import Home from "../Main-Compo/Home";
import Main from "../Main-Compo/Main";
import MyReview from "../Main-Compo/MyReview";
import ServiceDetails from "../Main-Compo/ServiceDetails";
import Services from "../Main-Compo/Services";
import UpdateReview from "../Main-Compo/UpdateReview";
import Errorpage from "./Errorpage";
import Loading from "./Loading";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/appointment",
        element: <Appoinment></Appoinment>,
      },
      {
        path: "/myreview",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/myreview/edit/:id",
        element: (
          <PrivateRoute>
            <UpdateReview></UpdateReview>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-kobir0-iota.vercel.app/review/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-kobir0-iota.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/AddService",
        element: (
          <PrivateRoute>
            {" "}
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/loading",
    element: <Loading></Loading>,
  },
]);

export default Routes;
