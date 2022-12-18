import React from "react";

const Searchbar = () => {
  return (
    <div className="relative ml-auto group mr-auto hidden md:block">
      <input
        className="block w-full shadow-sm border-none bg-gray-50  text-sm text-gray-500 rounded-sm px-7 py-2 focus:outline-none focus:border-gray-300 focus:ring-gray-300 focus:ring-2 dark:focus:ring-1 outline-2 sm:text-sm dark:bg-gray-700 dark:text-gray-500 dark:focus:border-gray-500 "
        type="text"
        placeholder="Search.."
      />

      <span className="absolute right-3 top-2  text-sm text-gray-400  dark:text-gray-400 dark:group-hover:text-gray-300 group-hover:text-gray-600">
        <i className="fas fa-search"></i>
      </span>
    </div>
  );
};

export default Searchbar;
