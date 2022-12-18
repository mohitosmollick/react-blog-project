import React from "react";
import Categories from "./Categories";
import RandonPosts from "./RandomPosts";

const LeftSideBar = () => {
  return (
    <div class="w-3/12 hidden xl:block ">
      <Categories />
      <RandonPosts />
    </div>
  );
};

export default LeftSideBar;
