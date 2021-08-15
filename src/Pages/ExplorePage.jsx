import React, { useContext } from "react";
import { MobileSidebar, Post, Search, Sidebar } from "../Components";
import { ThemeContext } from "../context/themeContext";

const ExplorePage = () => {
  const { posts, setPosts } = useContext(ThemeContext);
  return (
    <div className="pb-16">
      <div className="lg:max-w-6xl  mx-2 lg:mx-auto pt-6 flex space-x-4">
        <Sidebar btn1="Top" btn2="Lastest" btn3="People" btn4="Media" />
        <div className="w-full mx-4 lg:flex-1 space-y-6">
          <Search />
          <MobileSidebar
            btn1="Tweets"
            btn2="Tweets & replies"
            btn3="Media"
            btn4="Likes"
          />
          <div className="space-y-6">
            {posts?.map((post) => {
              return <Post key={post.id} post={post} posts={posts} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
