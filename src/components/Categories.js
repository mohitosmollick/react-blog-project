import React from "react";
import Category from "./Category";

const Categories = () => {
  return (
    <div className=" bg-white dark:bg-gray-800  p-4 rounded-sm ">
      <h3 className="header-3 dark:text-gray-200 ">Category</h3>
      <div className="text-gray-700 dark:text-gray-300 space-y-2">
        <Category icon={`fa-apple-whole`} />
        <Category icon="fa-lemon" />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};

export default Categories;
