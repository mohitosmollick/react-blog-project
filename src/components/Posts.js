import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ classname }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-sm p-4 pb-5 shadow-sm hover:scale-105 transition">
      <a href=" " className="block rounded-md overflow-hidden ">
        <img
          src="/image/musician-plays-acoustic-guitar_169016-3933.jpg"
          className={`${classname} image-size`}
          alt=""
        />
      </a>
      <div className="mt-3">
        <Link to="/view_post">
          <h2 className="block text-base font-semibold text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 hover:text-gray-700 font-roboto text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </Link>
        <div className="flex mt-2 space-x-3">
          <div className="flex text-gray-400 text-sm items-center">
            <span className="mr-2 text-xs">
              <i className="fa-solid fa-apple-whole"></i>
            </span>
            Vegetable
          </div>
          <div className="flex text-gray-400 text-sm items-center">
            <span className="mr-2 text-xs">
              <i className="far fa-clock"></i>
            </span>
            2 days ago
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
