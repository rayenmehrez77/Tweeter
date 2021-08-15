import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Tweet, Post } from "../Components";
import { ThemeContext } from "../context/themeContext";

const Feed = () => {
  const { posts, setPosts } = useContext(ThemeContext);

  return (
    <div>
      <Tweet posts={posts} setPosts={setPosts} />
      <div className=" mt-6 space-y-6 mb-16">
        {posts?.map((post) => {
          return <Post key={post.id} post={post} posts={posts} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
