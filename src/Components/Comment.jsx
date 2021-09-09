import React, { useContext } from "react";
import { BiLike } from "react-icons/bi";
import { ThemeContext } from "../context/themeContext";
import profileImage from "../images/profileImage.jpg";

const Comment = ({ comment }) => {
  console.log(comment);

  return (
    <div>
      <div className="flex items-start">
        <img
          src={profileImage}
          alt="profile img"
          className="w-10 h-10 object-cover rounded"
        />
        <div className="flex-1 bg-gray-100 dark:bg-gray-700 ml-3 rounded p-2 shadow-sm border">
          <p className="dark:text-white text-black font-medium text-sm">
            {comment.comment}
          </p>
        </div>
      </div>
      <div className="flex items-center  text-white  space-x-2 text-sm ml-14 mt-2">
        <button className="flex items-center font-medium space-x-2 text-gray-700 dark:text-white">
          Like
        </button>
        <button className="text-red-500 font-medium">Delete</button>
      </div>
    </div>
  );
};

export default Comment;
