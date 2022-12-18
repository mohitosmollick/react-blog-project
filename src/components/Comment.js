import React from "react";

const Comment = () => {
  return (
    <div className="flex my-3">
      <a href=" " className="my-id">
        <img
          src="/image/dfsdf.jpg"
          className="w-11 h-11 rounded-full "
          alt=""
        />
      </a>
      <div className="ml-5">
        <h6 className="text-sm font-semibold dark:text-gray-400">
          Writter Own
        </h6>
        <p className="text-xs dark:text-gray-400">14 March at 12am</p>
        <h1 className="text-sm mt-3 dark:text-gray-400">This is Great work</h1>
        <div className="flex mt-2">
          <button className="text-xs px-1 border border-gray-400 dark:text-gray-400 dark:border-gray-500 dark:hover:bg-gray-600 mr-3 hover:bg-gray-300 ">
            Reply
          </button>
          <button className="text-xs px-1 border border-gray-400 mr-3 hover:bg-gray-300 dark:text-gray-400 dark:border-gray-500 dark:hover:bg-gray-600">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
