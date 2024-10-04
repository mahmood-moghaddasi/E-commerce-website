import React from "react";
import HomeBanner from "../components/HomeBanner";
import HomeCategorys from "../components/HomeCategorys";
import HomeProducts from "../components/HomeProducts";
import HomePageRooms from "../components/HomePageRooms";

function HomePage() {
  return (
    <>
      <HomeBanner />
      <HomeCategorys />
      <HomeProducts />
      <HomePageRooms />
    </>
  );
}

export default HomePage;
