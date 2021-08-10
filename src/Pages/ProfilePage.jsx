import React from "react";
import cover from "../images/cover.jpg";
import { Post, Sidebar, User } from "../Components";
import { MdPhotoCamera } from "react-icons/md";

const ProfilePage = () => {
  return (
    <div>
      <div className="relative">
        <img src={cover} alt="cover" className="h-96 object-cover w-full" />
        <div className="flex items-center bg-white rounded p-2 w-56 cursor-pointer justify-center space-x-3 font-medium absolute bottom-3 right-6">
          <MdPhotoCamera className="w-6 h-6" />
          <span>Edit Cover Photo</span>
        </div>
      </div>
      <div className="relative -top-16">
        <User />
        <div className="max-w-6xl mx-auto mt-6 flex space-x-6">
          <Sidebar
            btn1="Tweets"
            btn2="Tweets & replies"
            btn3="Media"
            btn4="Likes"
          />
          <div className="flex-1 space-y-6">
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
