import React, { useContext } from "react";
import cover from "../images/cover.jpg";
import {
  About,
  Followers,
  Intro,
  Photos,
  Post,
  Posts,
  User,
} from "../Components";
import { MdPhotoCamera } from "react-icons/md";
import { ThemeContext } from "../context/themeContext";

const ProfilePage = () => {
  const { posts, setPosts } = useContext(ThemeContext);

  return (
    <div>
      <div className="relative">
        <img
          src={cover}
          alt="cover"
          className="h-56 lg:h-96 object-cover w-full"
        />
        <div className="flex items-center bg-white rounded p-2  lg:w-56  cursor-pointer  justify-center lg:space-x-3 space-x-0 font-medium absolute bottom-3 right-6">
          <MdPhotoCamera className="w-6 h-6 " />
          <span className="hidden lg:flex">Edit Cover Photo</span>
        </div>
      </div>
      <div>
        <User />
        <div className="lg:max-w-6xl lg:flex mx-auto mt-6 space-x-6 ">
          <Intro />
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

export default ProfilePage;
