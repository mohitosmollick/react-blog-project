import React from "react";

const RandomPost = () => {
  return (
    <a
      href=" "
      className="flex group rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105 "
    >
      <div className="flex-shrink-0">
        <img
          src="/image/musician-plays-acoustic-guitar_169016-3933.jpg"
          className="h-16 w-20 rounded object-cover"
          alt=""
        />
      </div>
      <div className="flex-grow pl-3">
        <h5 className="text-sm text-justify leading-5 block fort-roboto font-semibold transition pr-2 pt-1 dark:text-gray-400 dark:group-hover:text-gray-400 group-hover:text-gray-700 ">
          Lorem ipsum dolor sit amet consectetur
        </h5>
        <div className="flex text-gray-400 text-xs items-center">
          <span className="mr-1 text-xs">
            <i className="far fa-clock"></i>
          </span>
          June 11, 2022
        </div>
      </div>
    </a>
  );
};

export default RandomPost;
