import React from "react";
import profileImg from "../images/profileImage.jpg";
import { Fade } from "react-reveal";
import { MdAddAPhoto } from "react-icons/md";

const User = () => {
  return (
    <Fade big cascade>
      <div className="bg-white rounded-lg shadow-md max-w-6xl mx-auto z-10 px-6 py-2 flex items-start relative">
        <div className="flex">
          <div className="relative -top-20 bg-gray-50 rounded p-2 border">
            <img
              src={profileImg}
              alt="profile img"
              className="w-56 h-56 object-cover rounded-md shadow overflow-hidden "
            />
            <button className="absolute right-4 bottom-4">
              <MdAddAPhoto className="w-6 h-6 text-white" />
            </button>
          </div>
          <div className="p-4 flex-1  ml-4">
            <div className="flex items-center space-x-8 font-medium justify-between">
              <h1 className="text-4xl text-gray-800">Řà Ýèñ</h1>
              <div className="flex items-center space-x-4">
                <p className="text-sm text-gray-500">
                  {" "}
                  <span className="text-black">2k</span> following
                </p>
                <p className="text-sm text-gray-500">
                  {" "}
                  <span className="text-black">10k</span> followers
                </p>
              </div>
            </div>
            <div className="space-y-4 mt-6">
              <p className="font-medium text-gray-600">
                Computer Science Student 👨‍🎓
              </p>
              <p className="font-medium text-gray-600">
                Front-end Web developer 🔥❤{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default User;
