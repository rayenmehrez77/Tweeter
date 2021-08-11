import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { BsBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="bg-white dark:bg-gray-800 h-16 fixed bottom-0 left-0 right-0 w-full md:hidden grid grid-cols-3 justify-between shadow-md">
      <Link
        to="/"
        className="flex items-center justify-center font-medium hover:bg-gray-100 dark:hover:bg-gray-800 py-3 mx-2 rounded-md text-gray-700"
      >
        <AiFillHome className="mr-2 w-6 h-6 text-gray-600 dark:text-gray-200" />
      </Link>
      <Link
        to="/explore"
        className="flex items-center justify-center font-medium hover:bg-gray-100 dark:hover:bg-gray-800 py-3 mx-2 rounded-md text-gray-700"
      >
        <MdExplore className="mr-2 w-6 h-6 text-gray-600 dark:text-gray-200" />
      </Link>
      <Link
        to="/bookmarks"
        className="flex items-center justify-center font-medium hover:bg-gray-100 dark:hover:bg-gray-800 py-3 mx-2 rounded-md text-gray-700"
      >
        <BsBookmarkFill className="mr-2 w-6 h-6 text-gray-600 dark:text-gray-200" />
      </Link>
    </div>
  );
};

export default MobileNav;
