import React from "react";

const TextInput = ({ label, ...rest }) => {
  return (
    <>
      <div className="w-full  md:mb-4 mb-2">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400">
          {label}
        </label>
        <input
          className="input-box dark:bg-gray-700  dark:text-gray-400  dark:border-gray-500 dark:focus:bg-gray-700"
          {...rest}
        />
        {/* <p className="text-red-500 dark:text-gray-400 text-xs italic">
            Please fill out this field.
          </p> */}
      </div>
    </>
  );
};

export default TextInput;
