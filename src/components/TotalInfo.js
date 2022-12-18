import React from "react";

const TotalInfo = () => {
  return (
    <div className="xl:w-3/12 lg:w-4/12 w-full">
      {/* <!-- user --> */}
      <div className="w-full bg-white dark:bg-gray-800 shadow-sm rounded-sm p-4 ">
        <h3 className="header-3 dark:text-gray-200">Total User</h3>
        <div className="flex items-center justify-center flex-wrap gap-2">
          <a
            href=" "
            className="px-3 py-3 text-2xl border border-gray-200 rounded-full transition hover:bg-gray-100 hover:text-gray-800 social-dark dark:hover:text-gray-300"
          >
            36543
          </a>
        </div>
      </div>
      {/* <!-- writter --> */}
      <div className=" bg-white dark:bg-gray-800   p-4 rounded-sm mt-6">
        <h3 className="header-3 dark:text-gray-200 ">Total Writter</h3>
        <div className="flex items-center justify-center flex-wrap gap-2">
          <a
            href=" "
            className="px-3 py-3 text-2xl border border-gray-200 rounded-full transition hover:bg-gray-100 hover:text-gray-800 social-dark dark:hover:text-gray-300"
          >
            2435
          </a>
        </div>
      </div>
      {/* <!-- Post --> */}
      <div className=" bg-white dark:bg-gray-800   p-4 rounded-sm mt-6">
        <h3 className="header-3 dark:text-gray-200 ">Total Post</h3>
        <div className="flex items-center justify-center flex-wrap gap-2">
          <a
            href=" "
            className="px-3 py-3 text-2xl border border-gray-200 rounded-full transition hover:bg-gray-100 hover:text-gray-800 social-dark dark:hover:text-gray-300"
          >
            7435
          </a>
        </div>
      </div>
      {/* <!-- user --> */}
      <div className="w-full bg-white dark:bg-gray-800 shadow-sm rounded-sm p-4 mt-6">
        <h3 className="header-3 dark:text-gray-200">Active User</h3>
        <div className="flex items-center justify-center flex-wrap gap-2">
          <a
            href=" "
            className="px-3 py-3 text-2xl border border-gray-200 rounded-full transition hover:bg-gray-100 hover:text-gray-800 social-dark dark:hover:text-gray-300"
          >
            543
          </a>
        </div>
      </div>
      {/* <!-- writter --> */}
      <div className=" bg-white dark:bg-gray-800   p-4 rounded-sm mt-6">
        <h3 className="header-3 dark:text-gray-200 ">Active Writter</h3>
        <div className="flex items-center justify-center flex-wrap gap-2">
          <a
            href=" "
            className="px-3 py-3 text-2xl border border-gray-200 rounded-full transition hover:bg-gray-100 hover:text-gray-800 social-dark dark:hover:text-gray-300"
          >
            5
          </a>
        </div>
      </div>
    </div>
  );
};

export default TotalInfo;
