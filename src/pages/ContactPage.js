import React from "react";
import Button from "../components/Button";
import ContactForm from "../components/ContactForm";
import LiveChat from "../components/LiveChat";
import TextArea from "../components/TextArea";
import TextInput from "../components/TextInput";

const ContactPage = () => {
  return (
    <>
      <div className="w-8/12 hidden xl:block mr-5">
        <div className="w-full bg-white dark:bg-gray-800 shadow-sm rounded-sm p-4 ">
          <h3 className="font-roboto text-xl font-semibold text-gray-700 dark:text-gray-200  text-center">
            Send Mail
          </h3>
          <ContactForm>
            <TextInput
              placeholder="Your Full Name"
              type="text"
              label="Your Full Name"
            />
            <TextInput
              placeholder="Your Email"
              type="email"
              label="Your Email"
            />
            <TextInput placeholder="Subject" type="text" label="Subject" />
            <TextArea
              placeholder="Write Detals"
              type="text"
              label="Write Messege"
            />
            <Button>Send Mail</Button>
          </ContactForm>
        </div>
      </div>
      <LiveChat />
    </>
  );
};

export default ContactPage;
