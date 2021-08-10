import React from "react";
import { Tweet, Post } from "../Components";

const Feed = () => {
  return (
    <div>
      <Tweet />
      <div className=" mt-6 space-y-6 mb-16">
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
