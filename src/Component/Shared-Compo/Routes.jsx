import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login";
import PrivateRoute from "../Authentication/PrivateRoute";
import Register from "../Authentication/Register";
import AddService from "../Main-Compo/AddService";
import Home from "../Main-Compo/Home";
import Main from "../Main-Compo/Main";
import MyReview from "../Main-Compo/MyReview";
import ServiceDetails from "../Main-Compo/ServiceDetails";
import Services from "../Main-Compo/Services";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/myreview",
        element: <MyReview></MyReview>,
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
        path: "/services/details/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
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
]);

export default Routes;
