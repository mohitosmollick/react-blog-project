import React from "react";
import BigPost from "../components/BigPost";
import Comment from "../components/Comment";
import LeftSideBar from "../components/LeftSideBar";
import Posts from "../components/Posts";
import RightSideBar from "../components/RightSideBar";
import SocialIcon from "../components/SocialIcon";
import TextArea from "../components/TextArea";

const ViewPostPage = () => {
  return (
    <>
      <LeftSideBar />
      <div className="xl:w-6/12 lg:w-8/12 lg:mx-6  w-full overflow-hidden">
        <BigPost />
        <div className="w-full  bg-white dark:bg-gray-800 shadow-sm ">
          <div className="w-full mt-2 bg-white dark:bg-gray-800 shadow-sm p-4 rounded-sm">
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
          <div className="w-full mt-2 flex items-center bg-white dark:bg-gray-800 shadow-sm p-4 rounded-sm">
            <h5 className="text-base font-semibold font-roboto mr-4 dark:text-gray-400">
              Total Like:{" "}
            </h5>
            <span className="dark:text-gray-400">12</span>
            <a
              href=" "
              className="text-gray-500 
                    hover:text-red-600 focus:ring-red-600
                    
                    "
            >
              <span className="mr-4 ml-4">
                <i className="fa-solid fa-heart"></i>
              </span>
            </a>

            <h5 className="text-base font-semibold font-roboto mr-4 ml-4 dark:text-gray-400">
              Total Comment:{" "}
            </h5>
            <span className="dark:text-gray-400">12</span>
            <a
              href=" "
              className="text-gray-500 
                    hover:text-red-600 focus:ring-red-600
                    
                    "
            >
              <span className="mr-4 ml-4">
                <i className="fa-solid fa-comment"></i>
              </span>
            </a>
          </div>
          <div className="w-full bg-white dark:bg-gray-800 shadow-sm rounded-sm mt-4 p-4">
            <div className="flex gap-2">
              <SocialIcon className="fa-facebook-f" />
              <SocialIcon className="fa-twitter" />
              <SocialIcon className="fa-instagram" />
              <SocialIcon className="fa-pinterest-p" />
              <SocialIcon className="fa-linkedin-in" />
            </div>
          </div>
        </div>

        <div className="flex justify-between bg-white dark:bg-gray-800 px-3 py-2 items-center rounded-sm my-4">
          <h5 className="text-base  font-semibold font-roboto dark:text-gray-300">
            Related Post
          </h5>
          <a
            href=" "
            className="text-white bg-gray-400 dark:bg-gray-500 dark:hover:bg-gray-400 px-3 py-1 rounded-sm text-sm hover:bg-gray-500"
          >
            See More
          </a>
        </div>
        {/* <!-- regular post --> */}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4">
          <Posts classname="h-28" />
          <Posts classname="h-28" />
          <Posts classname="h-28" />
        </div>
        {/* <!-- comment --> */}
        <div className="bg-white dark:bg-gray-800  px-3 py-2 rounded-sm my-4">
          <h5 className="text-base font-semibold font-roboto dark:text-gray-300">
            Post a comments
          </h5>
          <p className="text-sm mt-2 mb-4 dark:text-gray-400">12 Comments </p>
          <Comment />
          <Comment />
          <Comment />
          <hr />

          <h6 className="text-base font-semibold mt-8 dark:text-gray-300">
            Comment
          </h6>
          <div className="group">
            <TextArea />
            <button className="text-xs px-3 py-1 border rounded-sm border-gray-400 mr-3 group-hover:bg-gray-300 dark:group-hover:bg-gray-600 dark:text-gray-400">
              Submit
            </button>
          </div>
        </div>
      </div>
      <RightSideBar />
    </>
  );
};

export default ViewPostPage;
