import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoLight } from "../images/tweeter.svg";
import { ReactComponent as LogoDark } from "../images/tweeter-light.svg";
import profileImage from "../images/profileImage.jpg";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { useState } from "react";
import { HiMoon } from "react-icons/hi";
import { Fade } from "react-reveal";
import { IoNotifications, IoSunny } from "react-icons/io5";
import { ThemeContext } from "../context/themeContext";
import { Dropdown } from "../Components";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const { toggle, setToggle } = useContext(ThemeContext);

  return (
    <div className="px-6 md:px-10 py-8 flex items-center justify-between h-14 fixed w-full bg-white dark:bg-gray-800 z-20 shadow">
      <Link to="/">
        {theme === "light" ? (
          <LogoLight className="w-32 h-8" />
        ) : (
          <LogoDark className="w-32 h-8" />
        )}
      </Link>
      <nav>
        <ul className="hidden md:flex items-center space-x-16 font-medium text-gray-600 dark:text-white">
          <li className=" " onClick={() => setIsActive(!isActive)}>
            <Link to="/" className="pb-5 px-3 border-white border-b">
              Home
            </Link>
          </li>
          <li
            className=" dark:text-white"
            onClick={() => setIsActive(!isActive)}
          >
            <Link to="/explore" className="pb-5 px-3 border-white">
              Explore
            </Link>
          </li>
          <li
            className="dark:text-white"
            onClick={() => setIsActive(!isActive)}
          >
            <Link to="/bookmarks" className="pb-5 px-3 border-white">
              Bookmarks
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center space-x-3">
        <Link
          to="/profile"
          className="flex items-center space-x-3 dark:hover:text-blue-500 bg-blue-100 dark:bg-blue-900 overflow-hidden lg:mr-2 mr-1 shadow-md border-gray-600 rounded-full"
        >
          <img
            src={profileImage}
            alt=""
            className="hidden lg:flex w-10 h-10 object-cover rounded-full"
          />
          <h1 className="font-medium hidden md:flex dark:text-blue-400 text-blue-800 pr-4 text-sm">
            Řà Ýèñ
          </h1>
        </Link>
        <div className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 cursor-pointer">
          <IoNotifications className="w-4 h-4 text-black  dark:text-white" />
        </div>
        <div
          className="p-2  rounded-full bg-gray-200 dark:bg-gray-600 cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          <TiArrowSortedDown className="w-4 h-4 text-black  dark:text-white" />
        </div>
      </div>
      {toggle ? <Dropdown /> : ""}
    </div>
  );
};

export default Navbar;
