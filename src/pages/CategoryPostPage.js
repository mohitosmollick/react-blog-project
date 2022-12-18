import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import Posts from "../components/Posts";

const CategoryPostPage = () => {
  return (
    <>
      <LeftSideBar />
      <div className="lg:w-9/12 w-full lg:ml-8 ml-0 mt-5 lg:mt-0">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-3">
          <Posts classname="h-32" />
          <Posts classname="h-32" />
          <Posts classname="h-32" />
          <Posts classname="h-32" />
          <Posts classname="h-32" />
          <Posts classname="h-32" />
          <Posts classname="h-32" />
        </div>
      </div>
    </>
  );
};

export default CategoryPostPage;
