import React from "react";
import Post from "./Post";

const Posts = () => {
  return (
    <div className="space-y-6 lg:flex-1 mx-4 dark:bg-gray-900 mt-6 pr-4 mb-16">
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
