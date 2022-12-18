import React from "react";

const Button = ({ children }) => {
  return (
    <>
      <div className="md:mr-auto mt-7 flex items-center justify-center">
        <button type="submit" className="send-button">
          {children}
        </button>
      </div>
    </>
  );
};

export default Button;
