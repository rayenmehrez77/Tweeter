import React from "react";
import profileImg from "../images/profileImage.jpg";
import { Fade } from "react-reveal";
import { MdAddAPhoto } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const User = () => {
  return (
    <Fade big cascade>
      <div className="bg-gray-50 dark:bg-gray-800 flex-col lg:rounded-lg shadow-lg lg:max-w-6xl lg:mx-auto px-6 py-2 lg:flex justify-between relative">
        <div className="relative w-40 lg:w-56 lg:text-left rounded-full mx-auto -top-32 bg-gray-50 p-2">
          <img
            src={profileImg}
            alt="profile img"
            className="object-cover w-full h-full rounded-full shadow overflow-hidden "
          />
          <button className="absolute right-8 bottom-8 w-8 h-8">
            <MdAddAPhoto className="w-6 h-6 text-white  " />
          </button>
        </div>
        <div className="lg:flex flex-col">
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-xl lg:text-3xl text-gray-800 font-medium -mt-20 dark:text-gray-200">
                <span className="font-bold block text-4xl mb-4 dark:text-gray-200 ">
                  Řà Ýèñ
                </span>{" "}
                (Front-end Web developer)
              </h1>
              <p className="font-medium dark:text-gray-200 mt-2">
                Great things never come from comfort zones. 🔥🔥
              </p>
            </div>
            <div className="flex items-center justify-between pt-2 border-t font-medium text-gray-600 dark:text-gray-200">
              <div className="flex items-center">
                <Link
                  to="/profile/posts"
                  className="px-2 lg:px-4 py-2 text-sm "
                >
                  Posts
                </Link>
                <Link
                  to="/profile/about"
                  className="px-2 lg:px-4 py-2 text-sm "
                >
                  About
                </Link>
                <Link
                  to="/profile/followers"
                  className="px-2 lg:px-4 py-2 text-sm lg:flex hidden text-center"
                >
                  Followers ( 10.8k )
                </Link>
              </div>
              <div className="flex items-center">
                <button className="px-2 lg:px-4 py-2 space-x-4 text-white font-medium text-sm flex items-center bg-blue-600 rounded mr-4">
                  <AiFillEdit className="w-6 h-6" />
                  Edit Profile
                </button>
                <button
                  to="/profile/photos"
                  className="px-2 lg:px-4 py-2 text-sm rounded justify-end bg-gray-600 text-white flex items-center mx-auto"
                >
                  <HiOutlineDotsHorizontal className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default User;
