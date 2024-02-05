import React from "react";
import { useTitle } from "../Shared-Compo/useTitle";
import AboutMe from "./Sections/AboutMe";
import Banner from "./Sections/Banner";
import HomeService from "./Sections/HomepageService/HomeService";
import WeeklyTimeTable from "./Sections/WeeklyTimeTable";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>

      <WeeklyTimeTable></WeeklyTimeTable>
      <HomeService></HomeService>
      <AboutMe></AboutMe>
    </div>
  );
};

export default Home;
