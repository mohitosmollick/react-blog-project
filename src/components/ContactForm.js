import React from "react";

const ContactForm = ({ children }) => {
  return (
    <form className="p-8 bg-white dark:bg-gray-800 border border-4">
      {children}
    </form>
  );
};

export default ContactForm;
