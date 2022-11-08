import React from "react";
import Banner from "./Sections/Banner";
import HomeService from "./Sections/HomepageService/HomeService";
import WeeklyTimeTable from "./Sections/WeeklyTimeTable";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <WeeklyTimeTable></WeeklyTimeTable>
      <HomeService></HomeService>
    </div>
  );
};

export default Home;
