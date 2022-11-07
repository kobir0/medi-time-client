import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Main-Compo/Home";
import Main from "../Main-Compo/Main";
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
      },
    ],
  },
]);

export default Routes;
