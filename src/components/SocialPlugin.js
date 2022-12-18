import React from "react";
import SocialIcon from "./SocialIcon";

const SocialPlugin = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-800 shadow-sm rounded-sm p-4 ">
      <h3 className="header-3 dark:text-gray-200">Social Plugin</h3>
      <div className="flex gap-2">
        <SocialIcon className="fa-facebook-f" />
        <SocialIcon className="fa-twitter" />
        <SocialIcon className="fa-instagram" />
        <SocialIcon className="fa-pinterest-p" />
        <SocialIcon className="fa-linkedin-in" />
      </div>
    </div>
  );
};

export default SocialPlugin;
