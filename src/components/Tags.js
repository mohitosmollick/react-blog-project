import React from "react";

const Tags = () => {
  return (
    <div className="w-full mt-6  bg-white dark:bg-gray-800 shadow-sm p-4 rounded-sm">
      <h3 className="header-3 dark:text-gray-200">Related Tag</h3>
      <div className="flex items-center flex-wrap gap-2">
        <a
          href=" "
          className="px-3 py-1 text-sm border border-gray-200 rounded-sm transition hover:bg-gray-100 hover:text-gray-800 social-dark dark:hover:text-gray-300"
        >
          Apple
        </a>
        <a
          href=" "
          className="px-3 py-1 text-sm border border-gray-200 rounded-sm transition hover:bg-gray-100 hover:text-gray-800 social-dark dark:hover:text-gray-300"
        >
          Mango juice
        </a>
        <a
          href=" "
          className="px-3 py-1 text-sm border border-gray-200 rounded-sm transition hover:bg-gray-100 hover:text-gray-800 social-dark dark:hover:text-gray-300"
        >
          Apple
        </a>
        <a
          href=" "
          className="px-3 py-1 text-sm border border-gray-200 rounded-sm transition hover:bg-gray-100 hover:text-gray-800 social-dark dark:hover:text-gray-300"
        >
          Apple
        </a>
      </div>
    </div>
  );
};

export default Tags;
