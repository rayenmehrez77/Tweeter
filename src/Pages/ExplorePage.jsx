import React from "react";
import { Post, Search, Sidebar } from "../Components";

const ExplorePage = () => {
  return (
    <div className="pb-16">
      <div className="max-w-6xl mx-auto pt-6 flex space-x-4">
        <Sidebar btn1="Top" btn2="Lastest" btn3="People" btn4="Media" />
        <div className="flex-1 space-y-6">
          <Search />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
