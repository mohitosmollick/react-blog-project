import React from "react";
import HomePosts from "../components/HomePosts";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";

const HomePage = () => {
  return (
    <>
      <LeftSideBar />
      <HomePosts />
      <RightSideBar />
    </>
  );
};

export default HomePage;
