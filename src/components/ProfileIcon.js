import React from "react";
import { Link } from "react-router-dom";

const ProfileIcon = ({ open, setOpen }) => {
  return (
    <>
      <div className={open ? "visible" : "invisible"}>
        <div
          class="fixed -top-0 right-0  w-64 h-full bg-white dark:bg-gray-900 shadow-lg z-10 flex flex-col transition-all duration-200"
          id="myid"
        >
          <i
            className="fa fa-times p-3"
            onClick={() => {
              setOpen(!open);
            }}
          ></i>
          {/* <!-- category --> */}
          <div class="">
            <div class="flex items-center justify-center mt-6">
              <a href="user.html" class="">
                <img
                  src="/image/dfsdf.jpg"
                  class="w-14 h-14 ring-4 ring-slate-500 rounded-full"
                  alt=""
                />
              </a>
            </div>
            <h3 class="font-roboto text-xl font-semibold text-gray-700 dark:text-gray-300 mt-2 mb-1 flex items-center justify-center">
              JOn Doe
            </h3>

            <h4 class="flex items-center justify-center dark:text-gray-400 font-semibold text-xs mb-3">
              Student of ANFT,IU
            </h4>
            <div class="text-gray-700 mt-8">
              <Link
                to="/user_page"
                class="flex items-center font-semibold text-base dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-200 px-3 py-2 transition"
              >
                <span class="mr-4 ml-4">
                  <i class="fa-solid fa-signs-post"></i>
                </span>
                <span>Posts</span>
              </Link>
              <a
                href=" "
                class="flex items-center font-semibold text-base hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 px-3 py-2 transition"
              >
                <span class="mr-4 ml-4">
                  <i class="fa-solid fa-chart-line"></i>
                </span>
                <span>Dashboard</span>
              </a>
              <a
                href=" "
                class="flex items-center font-semibold text-base hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 px-3 py-2 transition"
              >
                <span class="mr-4 ml-4">
                  <i class="fa-solid fa-gear"></i>
                </span>
                <span>Setting</span>
              </a>

              <a
                href=" "
                class="flex items-center font-semibold text-base hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 px-3 py-2 transition"
              >
                <span class="mr-4 ml-4">
                  <i class="fa-solid fa-right-from-bracket"></i>
                </span>
                <span>Logout Now</span>
              </a>

              <div class="flex items-center font-semibold text-base mt-14">
                <span class="mx-8 dark:text-gray-400">Dark Mode</span>
                <label for="toggle" class="flex items-center cursor-pointer">
                  <div class="relative">
                    <input
                      type="checkbox"
                      id="toggle"
                      class="sr-only"
                      onchange="changeMode()"
                    />
                    <div class="toggle-bg bg-gray-600 border-2 border-gray-600 h-6 w-11 rounded-full"></div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileIcon;
