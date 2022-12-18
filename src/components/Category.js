import React from "react";
import { Link } from "react-router-dom";

const Category = ({ icon }) => {
  return (
    <Link
      to="/catetegory_post"
      className="flex items-center font-semibold leading-4 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md transition"
    >
      <span className="mr-2">
        <i className={`${icon} fa-solid `}></i>
      </span>
      <span>Fruit</span>
      <span className="ml-auto text-xs px-1 text-white rounded-full bg-gray-500 ">
        12
      </span>
    </Link>
  );
};

export default Category;
