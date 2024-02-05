import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared-Compo/Foooter";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
