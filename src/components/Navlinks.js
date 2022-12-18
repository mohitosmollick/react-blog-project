import React from "react";
import { Link } from "react-router-dom";

const Navlinks = () => {
  return (
    <div className="ml-12 flex items-center ">
      <Link to="/" className="menu xl:block hidden dark:menu-dark">
        <span className="mr-2">
          <i className="fas fa-home"></i>
        </span>
        Home
      </Link>
      <Link to="about" className="menu mx-3 xl:block hidden dark:menu-dark">
        <span className="mr-2">
          <i className="far fa-file-alt"></i>
        </span>
        About
      </Link>
      <Link to="contact" className="menu xl:block hidden dark:menu-dark">
        <span className="mr-2">
          <i className="fas fa-phone"></i>
        </span>
        Contact
      </Link>
    </div>
  );
};

export default Navlinks;
