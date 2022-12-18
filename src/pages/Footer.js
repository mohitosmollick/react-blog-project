import React from "react";
import SocialIcon from "../components/SocialIcon";

const Footer = () => {
  return (
    <>
      <footer className="text-center bg-white text-gray-600 dark:text-gray-400 dark:bg-gray-800">
        <div className="container px-6 pt-6">
          <div className="flex justify-center items-center mb-6">
            <div className="flex gap-2">
              <SocialIcon className="fa-facebook-f" />
              <SocialIcon className="fa-twitter" />
              <SocialIcon className="fa-instagram" />
              <SocialIcon className="fa-pinterest-p" />
              <SocialIcon className="fa-linkedin-in" />
            </div>
          </div>
          <div className="">
            <form action="">
              <div className="grid md:grid-cols-3 gird-cols-1 gap-4 justify-center items-center">
                <div className="md:ml-auto md:mb-6">
                  <p>
                    <strong className="text-gray-600 ">
                      Sign up for our newsletter
                    </strong>
                  </p>
                </div>

                <div className="md:mb-6 ">
                  <input
                    type="text"
                    className="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300 dark:border-gray-500
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-600 focus:bg-white focus:border-gray-600 focus:outline-none
                  dark:bg-gray-700 dark:text-gray-500 dark:focus:border-gray-400
                "
                    id="exampleFormControlInput1"
                    placeholder="Email address"
                  />
                </div>

                <div className="md:mr-auto mb-6">
                  <button
                    type="submit"
                    className="inline-block px-6 py-2 border-2 border-gray-300 dark:border-gray-500 dark:border-1 text-gray-500 font-medium text-xs leading-tight uppercase rounded hover:text-gray-600 hover:bg-gray-300 hover:border-gray-400 
              dark:bg-gray-700 dark:text-gray-500 dark:focus:border-gray-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="mb-6 ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2">
            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5">Links</h5>

              <ul className="list-none mb-0 text-gray-500">
                <li>
                  <a href="#!" className="text-gray-500">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-500">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-500">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-500">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5">Links</h5>

              <ul className="list-none mb-0 text-gray-500">
                <li>
                  <a href="#!" className="text-gray-500">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-500">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-500">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-500">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5">Links</h5>

              <ul className="list-none mb-0 text-gray-500">
                <li>
                  <a href="#!" className="text-gray-500">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-500">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-500">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-500">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-6 ">
              <h5 className="uppercase font-bold mb-2.5">Download app</h5>

              <ul className="list-none mb-0">
                <li className="flex items-center justify-center">
                  <a href="#!" className="text-gray-500  rounded-sm">
                    <img
                      src="/image/musician-plays-acoustic-guitar_169016-3933.jpg"
                      alt=""
                      className="w-16 h-16 rounded-md"
                    />
                  </a>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        {/* style="background-color: rgba(0, 0, 0, 0.2);" */}
        <div className="text-center p-4">
          © 2021 Copyright:
          <a
            className="text-gray-600 text-base font-bold dark:text-gray-200"
            href="https://tailwin.com/"
          >
            DipIt
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
