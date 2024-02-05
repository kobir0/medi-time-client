import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Appoinment from "../Appointment/Appointment/Appoinment";
import Login from "../Authentication/Login";
import PrivateRoute from "../Authentication/PrivateRoute";
import Register from "../Authentication/Register";
import Dashboard from "../DashBoard/DashBoard/Dashboard";
import DashContent from "../DashBoard/DashBoard/DashContent";
import DashUsers from "../DashBoard/DashBoard/DashUsers";
import MyAppoinments from "../DashBoard/DashBoard/MyAppoinments";
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
        element: (
          <PrivateRoute>
            <Appoinment></Appoinment>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard",
            element: <DashContent></DashContent>,
          },
          {
            path: "/dashboard/myappointment",
            element: <MyAppoinments></MyAppoinments>,
          },
          {
            path: "/dashboard/users",
            element: <DashUsers></DashUsers>,
          },
        ],
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
          fetch(`https://meditime-2-server.onrender.com/review/${params.id}`),
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
          fetch(`https://meditime-2-server.onrender.com/services/${params.id}`),
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
