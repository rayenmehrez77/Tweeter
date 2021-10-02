import React, { useContext,  } from "react";
import { HiMoon } from "react-icons/hi";
import { Fade } from "react-reveal";
import { Link, Route } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";
import profileImg from "../images/profileImage.jpg";
import { HiLogout } from "react-icons/hi";
import { FiHelpCircle } from "react-icons/fi";
import { RiSettings4Fill } from "react-icons/ri";
import { IoSunny } from "react-icons/io5";


const Dropdown = () => {
  const { toggle, setToggle } = useContext(ThemeContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const logout = () => {
    localStorage.removeItem("user"); 
    window.location = "/login"
  } 

  return (
    <Fade big cascade>
      <div className="h-96 w-80 border shadow-lg border-gray-100 dark:border-gray-700 rounded-xl p-2 bg-white dark:bg-gray-800 absolute right-2 lg:right-10 top-16">
        <Link
          onClick={() => setToggle(!toggle)}
          to="/profile"
          className="flex space-x-4 items-center w-full hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded border-gray-400"
        >
          <img
            src={profileImg}
            alt="profile img"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="">
            <h1 className="font-medium dark:text-white text-black ">Řà Ýèñ</h1>
            <span className="dark:text-gray-200 text-gray-500 font-medium ">
              See you profile
            </span>
          </div>
        </Link>
        <hr />
        <div
          className="flex items-center space-x-4 mt-4 w-full hover:bg-gray-100 dark:hover:bg-gray-700  p-2 rounded border-gray-600 cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Fade big cascade>
            <div className="w-10 h-10 p-2 flex items-center dark:bg-gray-600 border rounded-full border-gray-500">
              {theme === "dark" ? (
                <IoSunny className=" w-6 h-6 text-black dark:text-white cursor-pointer" />
              ) : (
                <HiMoon className="w-6 h-6 text-black dark:text-white cursor-pointer" />
              )}
            </div>
          </Fade>
          <h1 className="dark:text-white font-medium">
            {theme === "dark" ? "Light mode" : "Dark mode "}
          </h1>
        </div>
        <div className="flex items-center space-x-4 mt-4 w-full hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded border-gray-600 cursor-pointer">
          <div className="w-10 h-10 p-2 flex items-center dark:bg-gray-600 border rounded-full border-gray-500">
            <RiSettings4Fill className="w-8 h-8 dark:text-white" />
          </div>
          <h1 className="dark:text-white font-medium">Privacy & Setting</h1>
        </div>
        <div className="flex items-center space-x-4 mt-4 w-full hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded border-gray-600 cursor-pointer">
          <div className="w-10 h-10 p-2 flex items-center dark:bg-gray-600 border rounded-full border-gray-500">
            <FiHelpCircle className="w-8 h-8 dark:text-white" />
          </div>
          <h1 className="dark:text-white font-medium">Help & Support</h1>
        </div>
        <div className="flex items-center space-x-4 mt-4 w-full hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded border-gray-600 cursor-pointer">
          <div className="w-10 h-10 p-2 flex items-center dark:bg-gray-600 border rounded-full border-gray-500">
            <HiLogout className="w-8 h-8 dark:text-white" />
          </div>
          <h1 className="dark:text-white font-medium" onClick={logout}>
            Log Out
          </h1>
        </div>
      </div>
    </Fade>
  );
};

export default Dropdown;
