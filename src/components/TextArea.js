import React from "react";

const TextArea = ({ label, ...rest }) => {
  return (
    <>
      <div className="flex flex-wrap -mx-3 md:mb-4 mb-2">
        <div className="w-full px-3 mt-2">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
            for="grid-details"
          >
            {label}
          </label>
          <textarea
            class="input-box dark:bg-gray-700 dark:text-gray-400 dark:border-gray-500 dark:focus:bg-gray-700"
            id="grid-details"
            name=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default TextArea;
