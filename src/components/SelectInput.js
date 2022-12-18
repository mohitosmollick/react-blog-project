import React from "react";

const SelectInput = ({ label, option }) => {
  return (
    <>
      <div className="w-full mb-4 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
          for="grid-state"
        >
          {label}
        </label>
        <div className="relative">
          <select
            className="input-box dark:bg-gray-400  dark:text-gray-700  dark:border-gray-500 dark:focus:bg-gray-400"
            id="grid-state"
          >
            <option>{option}</option>
            <option>Missouri</option>
            <option>Texas</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectInput;
