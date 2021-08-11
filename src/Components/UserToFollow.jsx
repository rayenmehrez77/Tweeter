import React from "react";
import personImg from "../images/personImg.jpg";
import cover from "../images/cover.jpg";
import { IoIosPersonAdd } from "react-icons/io";
import { Fade } from "react-reveal";

const UserToFollow = () => {
  return (
    <Fade big cascade>
      <div className="my-6 ">
        <div className="flex items-center ">
          <div className="flex items-center ">
            <img
              src={personImg}
              alt=""
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="ml-4">
              <h1 className="font-bold text-sm text-gray-700 dark:text-gray-200">
                Mikael Stanley
              </h1>
              <span className="text-xs font-medium text-gray-400">
                230k followers
              </span>
            </div>
          </div>
          <button className="bg-blue-500 px-4 flex items-center text-white text-sm py-1 rounded ml-16">
            <IoIosPersonAdd className="w-4 h-4 mr-2" />
            Follow
          </button>
        </div>
        <p className="mt-4 font-medium text-gray-600 dark:text-gray-200">
          Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰
        </p>
        <img
          src={cover}
          alt="cover"
          className="h-20 w-full object-cover rounded-lg mt-6"
        />
      </div>
    </Fade>
  );
};

export default UserToFollow;
