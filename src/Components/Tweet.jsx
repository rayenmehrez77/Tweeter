import React from "react";
import profileImage from "../images/profileImage.jpg";
import { AiOutlinePicture } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { Fade } from "react-reveal";

const Tweet = () => {
  return (
    <Fade big cascade>
      <div className="bg-white rounded-lg p-4 shadow">
        <h2 className="border-b font-medium w-full pb-2 text-sm text-gray-600">
          Tweet something
        </h2>
        <form className="mt-2">
          <div className="flex items-start">
            <img
              src={profileImage}
              alt="profile img"
              className="w-10 h-10 object-cover rounded"
            />
            <input
              type="text"
              placeholder="What's happening?"
              className="text-gray-400 flex-1 ml-4 px-2 pt-2 pb-8 outline-none"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-3">
              <AiOutlinePicture className="w-5 h-5 object-cover text-blue-600" />
              <button className="flex items-center space-x-2">
                <BiWorld className="w-5 h-5 object-cover text-blue-600" />
                <span className="font-medium text-sm text-blue-600">
                  Everyone can reply
                </span>
              </button>
            </div>
            <button className="p-2 px-6 text-white font-medium rounded bg-blue-600">
              Tweet
            </button>
          </div>
        </form>
      </div>
    </Fade>
  );
};

export default Tweet;
