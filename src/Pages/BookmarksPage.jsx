import React, { useContext } from "react";
import { MobileSidebar, Post, Sidebar } from "../Components";
import { ThemeContext } from "../context/themeContext";

const BookmarksPage = () => {
  const { posts, setPosts, bookmarks } = useContext(ThemeContext);
  console.log(bookmarks);
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
          {/* <div className="space-y-6">
            {bookmarks?.map((post) => {
              return <Post key={post.id} post={post} posts={posts} />;
            })}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BookmarksPage;
