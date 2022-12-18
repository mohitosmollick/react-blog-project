import React from "react";
import PopularPost from "./PopularPost";
import SocialPlugin from "./SocialPlugin";
import Tags from "./Tags";

const RightSideBar = () => {
  return (
    <div className="xl:w-3/12 lg:w-4/12 w-full">
      <SocialPlugin />
      <PopularPost />
      <Tags />
    </div>
  );
};

export default RightSideBar;
