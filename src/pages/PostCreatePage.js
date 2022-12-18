import React from "react";

const PostCreatePage = () => {
  return (
    <>
      <div className="w-8/12 hidden xl:block mr-5">
        {/* <!-- social plugin --> */}
        <div className="w-full bg-white dark:bg-gray-800 shadow-sm rounded-sm p-4 ">
          <h3 className="font-roboto text-xl font-semibold text-gray-700 dark:text-gray-200  text-center">
            Create a Post
          </h3>
          <form className="p-8 bg-white dark:bg-gray-800">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                  for="grid-state"
                >
                  Choose your Category
                </label>
                <div className="relative">
                  <select
                    className="input-box dark:bg-gray-400  dark:text-gray-700  dark:border-gray-500 dark:focus:bg-gray-400"
                    id="grid-state"
                  >
                    <option>select</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns=""
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                  for="grid-state"
                >
                  Sub Categoy
                </label>
                <div className="relative">
                  <select
                    className="input-box dark:bg-gray-400  dark:text-gray-700  dark:border-gray-500 dark:focus:bg-gray-400"
                    id="grid-state"
                  >
                    <option>Select</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns=" "
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 md:mb-4 mb-2">
              <div className="w-full px-3 mt-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                  for="grid-email"
                >
                  Post Title
                </label>
                <input
                  className="input-box dark:bg-gray-700  dark:text-gray-400  dark:border-gray-500 dark:focus:bg-gray-700"
                  id="grid-email"
                  type="email"
                  placeholder="your email"
                />
                <p className="text-red-500 dark:text-gray-400 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 md:mb-4 mb-2">
              <div className="w-full px-3 mt-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                  for="grid-details"
                >
                  Post Details
                </label>
                <textarea
                  className="input-box dark:bg-gray-700  dark:text-gray-400  dark:border-gray-500 dark:focus:bg-gray-700"
                  id="grid-details"
                  name=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div className="md:mr-auto mt-7 flex items-center justify-center">
              <button type="submit" className="send-button">
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- right sidebar --> */}
      <div className=" lg:w-4/12 w-full">
        {/* <!-- popular post --> */}
        <div className="w-full bg-white dark:bg-gray-800 shadow-sm p-4 rounded-sm">
          <h3 className="header-3 dark:text-gray-200">Don't Create Violate</h3>
        </div>
      </div>
    </>
  );
};

export default PostCreatePage;
