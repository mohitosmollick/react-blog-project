import React from "react";
import RandomPost from "./RandomPost";

const PopularPost = () => {
  return (
    <div className="w-full mt-6 bg-white dark:bg-gray-800 shadow-sm p-4 rounded-sm">
      <h3 className="header-3 dark:text-gray-200">Popular Post</h3>
      <div className="space-y-4">
        <RandomPost />
        <RandomPost />
        <RandomPost />
        <RandomPost />
      </div>
    </div>
  );
};

export default PopularPost;
