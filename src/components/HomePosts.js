import React from "react";
import Posts from "./Posts";

const HomePosts = () => {
  return (
    <div className="xl:w-6/12 lg:w-8/12 lg:mx-6  w-full overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <Posts classname="h-40" />
        <Posts classname="h-40" />
        <Posts classname="h-40" />
        <Posts classname="h-40" />
        <Posts classname="h-40" />
        <Posts classname="h-40" />
      </div>
    </div>
  );
};

export default HomePosts;
