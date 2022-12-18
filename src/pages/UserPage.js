import React from "react";
import Posts from "../components/Posts";

const UserPage = () => {
  return (
    <>
      <div className="lg:w-3/12 w-full">
        <div className=" bg-white dark:bg-gray-800 shadow-sm p-4 rounded-sm">
          <div className=" flex items-center justify-center mt-6">
            <a href=" " className="">
              <img
                src="/image/dfsdf.jpg"
                className="w-14 h-14 ring-4 ring-slate-500  rounded-full"
                alt=""
              />
            </a>
          </div>
          <h3 className="font-roboto text-xl font-semibold text-gray-700 dark:text-gray-300 mt-2 mb-1 flex items-center  justify-center">
            JOn Doe
          </h3>

          <h4 className="flex items-center justify-center font-semibold text-xs dark:text-gray-400 mb-3">
            Student of ANFT,IU
          </h4>

          <div className="text-gray-700 space-y-5 mt-10">
            <a
              href=" "
              className="flex items-center font-semibold leading-4  dark:text-gray-400 "
            >
              <span className="mr-4 ml-4">
                <i className="fa-solid fa-signs-post"></i>
              </span>
              <span>Posts</span>
              <span className="ml-5 text-xs px-1 text-white rounded-full bg-gray-500 ">
                12
              </span>
            </a>
            <a
              href=" "
              className="flex items-center font-semibold leading-4  dark:text-gray-400 "
            >
              <span className="mr-4 ml-4">
                <i className="fa-solid fa-users"></i>
              </span>
              <span>Followers</span>
              <span className="ml-5 text-xs px-1 text-white rounded-full bg-gray-500 ">
                12
              </span>
            </a>
            <a
              href=" "
              className="flex items-center font-semibold leading-4 dark:text-gray-400  "
            >
              <span className="mr-4 ml-4">
                <i className="fa-solid fa-comments"></i>
              </span>
              <span>Comment</span>
              <span className="ml-5 text-xs px-1 text-white rounded-full bg-gray-500 ">
                12
              </span>
            </a>
            <a
              href=" "
              className="flex items-center font-semibold leading-4  dark:text-gray-400 "
            >
              <span className="mr-4 ml-4">
                <i className="fa-solid fa-heart"></i>
              </span>
              <span>Like</span>
              <span className="ml-5 text-xs px-1 text-white rounded-full bg-gray-500 ">
                12
              </span>
            </a>
            <a
              href=" "
              className="flex items-center font-semibold leading-4 dark:text-gray-400"
            >
              <span className="mr-4 ml-4">
                <i className="fa-solid fa-chart-line"></i>
              </span>
              <span>Go Dashboard</span>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Main post --> */}
      <div className="lg:w-9/12 w-full lg:ml-8 ml-0 mt-5 lg:mt-0">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-3">
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </div>
      </div>
    </>
  );
};

export default UserPage;
