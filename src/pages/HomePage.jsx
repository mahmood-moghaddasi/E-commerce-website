import React from "react";
import HomeBanner from "../components/HomeBanner";
import HomeCategorys from "../components/HomeCategorys";
import HomeProducts from "../components/HomeProducts";

function HomePage() {
  return (
    <>
      <HomeBanner />
      <HomeCategorys />
      <HomeProducts />
    </>
  );
}

export default HomePage;
