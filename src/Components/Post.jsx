import React from "react";
import profileImage from "../images/profileImage.jpg";
import travelImg from "../images/travelImg.jpg";
import { BiDotsHorizontalRounded, BiHeart } from "react-icons/bi";
import { VscComment } from "react-icons/vsc";
import { BsArrowRepeat, BsCardImage } from "react-icons/bs";
import { IoBookmarkOutline } from "react-icons/io5";
import { useState } from "react";
import { Fade } from "react-reveal";

const Post = () => {
  const [commented, setCommented] = useState(false);

  return (
    <Fade big cascade>
      <div className="bg-white shadow rounded p-4 space-y-4 dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={profileImage}
              alt="profile img"
              className="w-10 h-10 object-cover rounded"
            />
            <div className="ml-4">
              <h1 className="font-bold text-sm text-gray-700 dark:text-gray-50">
                Řà Ýèñ
              </h1>
              <span className="text-xs font-medium text-gray-400 dark:text-gray-50  ">
                9 August at 15:57
              </span>
            </div>
          </div>
          <BiDotsHorizontalRounded className="w-8 h-8 text-gray-600 cursor-pointer dark:text-gray-50" />
        </div>
        <p className="font-medium text-gray-700 lg:text-base text-sm dark:text-gray-50">
          “We travel, some of us forever, to seek other places, other lives,
          other souls.” – Anais Nin
        </p>
        <img
          src={travelImg}
          alt="travel img"
          className="h-56 md:h-96 object-cover w-full rounded-lg"
        />
        <div className="flex items-center space-x-4 text-xs font-medium text-gray-400 justify-end dark:text-gray-200">
          <span>449 comments</span>
          <span>59k Retweets</span>
          <span>234 Saved</span>
        </div>
        <div className="grid grid-cols-4 border-t border-b items-center">
          <button
            className="flex items-center justify-center font-medium hover:bg-gray-100 dark:hover:bg-gray-700 py-3 dark:text-gray-200 mx-2 rounded-md text-gray-700"
            onClick={() => setCommented(true)}
          >
            <VscComment className="mr-2" />
            <span className="hidden lg:flex">Comment</span>
          </button>
          <button className="flex items-center justify-center font-medium dark:text-gray-200 dark:hover:bg-gray-700 py-3 mx-2 rounded-md text-gray-700">
            <BsArrowRepeat className="mr-2" />
            <span className="hidden lg:flex">Retweeted</span>
          </button>
          <button className="flex items-center justify-center font-medium  dark:text-gray-200 dark:hover:bg-gray-700 py-3 mx-2 rounded-md text-gray-700">
            <BiHeart className="mr-2" />
            <span className="hidden lg:flex">Liked</span>
          </button>
          <button className="flex items-center justify-center font-medium dark:text-gray-200 dark:hover:bg-gray-700 py-3 mx-2 rounded-md text-gray-700">
            <IoBookmarkOutline className="mr-2" />
            <span className="hidden lg:flex">Saved</span>
          </button>
        </div>
        {commented ? (
          <Fade big cascade>
            <form className="flex items-center">
              <img
                src={profileImage}
                alt="profile img"
                className="w-10 h-10 object-cover rounded"
              />
              <div className="flex ml-4 items-center flex-1 border px-2 rounded-md bg-gray-100 dark:bg-gray-800">
                <input
                  type="text"
                  placeholder="Tweet your reply"
                  className="p-2 flex-1 outline-none bg-gray-100 dark:bg-gray-800 dark:text-white"
                />
                <BsCardImage className="w-4 h-5 cursor-pointer text-gray-500 dark:text-gray-50" />
              </div>
            </form>
          </Fade>
        ) : (
          ""
        )}
      </div>
    </Fade>
  );
};

export default Post;
