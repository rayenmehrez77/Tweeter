import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/tweeter.svg";
import profileImage from "../images/profileImage.jpg";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="px-6 md:px-10 py-8 flex items-center justify-between h-14 fixed w-full bg-white z-10">
      <Link to="/">
        <Logo className="w-32 h-8" />
      </Link>
      <nav>
        <ul className="hidden md:flex items-center space-x-16 font-medium text-gray-600">
          <li
            className="hover:text-blue-900 "
            onClick={() => setIsActive(!isActive)}
          >
            <Link to="/" className="pb-5 px-3 border-b-2 border-white">
              Home
            </Link>
          </li>
          <li
            className="hover:text-blue-900"
            onClick={() => setIsActive(!isActive)}
          >
            <Link to="/explore" className="pb-5 px-3 border-b-2 border-white">
              Explore
            </Link>
          </li>
          <li
            className="hover:text-blue-900"
            onClick={() => setIsActive(!isActive)}
          >
            <Link to="/bookmarks" className="pb-5 px-3 border-b-2 border-white">
              Bookmarks
            </Link>
          </li>
        </ul>
      </nav>
      <button className="flex items-center space-x-3">
        <Link to="/profile" className="flex items-center space-x-3">
          <img
            src={profileImage}
            alt=""
            className="w-10 h-10 object-cover rounded"
          />
          <h1 className="font-medium text-gray-900 hidden md:flex">Řà Ýèñ</h1>
          <TiArrowSortedDown className="w-6 h-6 ml-2 text-gray-600 hidden md:flex" />
        </Link>
      </button>
    </div>
  );
};

export default Navbar;
