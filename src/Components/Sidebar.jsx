import React from "react";
import { Fade } from "react-reveal";

const Sidebar = ({ btn1, btn2, btn3, btn4 }) => {
  return (
    <Fade big cascade>
      <div className="bg-white w-56 rounded shadow py-4 flex flex-col space-y-5 h-56">
        <button className="font-medium text-gray-500 text-left border-l-2 border-blue-600 text-blue-600 pl-4">
          {btn1}
        </button>
        <button className="font-medium text-gray-500 text-left pl-4">
          {btn2}
        </button>
        <button className="font-medium text-gray-500 text-left pl-4">
          {btn3}
        </button>
        <button className="font-medium text-gray-500 text-left pl-4">
          {btn4}
        </button>
      </div>
    </Fade>
  );
};

export default Sidebar;
