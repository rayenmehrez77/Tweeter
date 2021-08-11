import React from "react";
import { MobileSidebar, Post, Sidebar } from "../Components";

const BookmarksPage = () => {
  return (
    <div>
      <div className="max-w-6xl mx-2 lg:mx-auto pt-6 flex space-x-4">
        <Sidebar
          btn1="Tweets"
          btn2="Tweets & replies"
          btn3="Media"
          btn4="Likes"
        />
        <div className="flex-1 space-y-6">
          <MobileSidebar
            btn1="Tweets"
            btn2="Tweets & replies"
            btn3="Media"
            btn4="Likes"
          />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};

export default BookmarksPage;
