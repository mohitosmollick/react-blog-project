import React from "react";
import Button from "../components/Button";
import ContactForm from "../components/ContactForm";
import SocialIcon from "../components/SocialIcon";
import TextInput from "../components/TextInput";
const LoginPage = () => {
  return (
    <>
      <div
        className=" w-full h-full mx-auto flex flex-wrap lg:flex-nowrap items-center justify-center   top-0 z-10   transition-all duration-500"
        id="register_form"
      >
        {/*  invisible fixed*/}
        <ContactForm>
          <h3 className="font-roboto text-xl font-semibold text-gray-700 dark:text-gray-200  text-center">
            Sign in
          </h3>
          <div className="flex flex-row items-center justify-center lg:justify-start">
            <p className="text-lg mb-0 mr-4">Sign in with</p>
            <div className="flex gap-2  text-center  my-4">
              <SocialIcon className="fa-facebook-f" />
              <SocialIcon className="fa-google" />
              <SocialIcon className="fa-twitter" />
            </div>
          </div>
          <div className="flex items-center before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="text-center font-semibold mx-4 mb-0">Or</p>
          </div>
          <TextInput placeholder="Your Email" type="email" label="Your Email" />
          <TextInput placeholder="password" type="password" label="Password" />

          <Button>Sign In</Button>
        </ContactForm>
      </div>
    </>
  );
};

export default LoginPage;
