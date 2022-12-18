import React from "react";
import { Link } from "react-router-dom";
import MobileNav from "../components/MobileNav";
import Navlinks from "../components/Navlinks";
import Searchbar from "../components/SearchBar";

const Header = ({ open, setOpen }) => {
  return (
    <nav className="shadow-sm dark:bg-gray-800">
      <div className="container px-4 py-3 mx-auto flex items-center ">
        <MobileNav />
        <div
          className="mr-4 text-xl block xl:hidden cursor-pointer hover:text-gray-700 dark:text-gray-300 "
          id="open_sidebar"
        >
          <i className="fas fa-bars"></i>
        </div>
        {/* logo   */}
        <div className="">
          <Link to="/">
            <img src="/image/modern logo.png" className="w-20 h-12" alt="" />
          </Link>
        </div>
        {/*  navliinks */}
        <Navlinks />
        {/* <!-- Searchbar --> */}
        <Searchbar />
        {/* <LoginPage /> */}
        <div className="ml-auto mr-6 " id="login">
          <Link to="login" className="menu dark:menu-dark">
            <span className="mr-2">
              <i className="far fa-user"></i>
            </span>
            Login
          </Link>
        </div>
        {/* <RegisterPage /> */}
        <div className=" mr-6 " id="register">
          <Link to="register" className="menu dark:menu-dark">
            <span className="mr-2">
              <i className="far fa-user"></i>
            </span>
            Register
          </Link>
        </div>
        <div className=" mr-6 " id="register">
          <Link to="post" className="menu dark:menu-dark">
            <span className="mr-2">
              <i className="fa fa-pencil"></i>
            </span>
            Post
          </Link>
        </div>

        <div
          class="mt-2"
          id="my_id"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img
            src="/image/dfsdf.jpg"
            class="w-9 h-9 rounded-full ring-2 ring-gray-500"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
