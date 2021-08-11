import React from "react";
import { Fade } from "react-reveal";

const MobileSidebar = ({ btn1, btn2, btn3, btn4 }) => {
  return (
    <Fade big cascade>
      <div className="bg-white dark:bg-gray-800 rounded  shadow py-6 flex w-full flex-col space-y-5 h-56 lg:hidden">
        <button className="font-medium text-gray-500 text-left border-l-2 border-blue-600 text-blue-600 pl-4 dark:text-blue-500">
          {btn1}
        </button>
        <button className="font-medium text-gray-500 text-left pl-4 dark:text-gray-200">
          {btn2}
        </button>
        <button className="font-medium text-gray-500 text-left pl-4 dark:text-gray-200">
          {btn3}
        </button>
        <button className="font-medium text-gray-500 text-left pl-4 dark:text-gray-200">
          {btn4}
        </button>
      </div>
    </Fade>
  );
};

export default MobileSidebar;
