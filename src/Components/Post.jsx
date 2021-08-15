import React from "react";
import profileImage from "../images/profileImage.jpg";
import { BiDotsHorizontalRounded, BiHeart } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { VscComment } from "react-icons/vsc";
import { BsArrowRepeat, BsCardImage } from "react-icons/bs";
import { IoBookmarkOutline } from "react-icons/io5";
import { useState } from "react";
import { Fade } from "react-reveal";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { collectIdsAndDocs } from "../firebase/utilities";
import { firestore } from "../firebase/firebase";
import { Comment } from "../Components";
import { AiFillDelete, AiFillLike } from "react-icons/ai";

const Post = ({ post, posts }) => {
  const [comment, setComment] = useState("");
  const [commented, setCommented] = useState(false);
  const [IsLiked, setIsLiked] = useState(false);
  const [saved, setIsSaved] = useState(false);
  const { description, image } = post;
  const {
    allComments,
    setAllComments,
    likes,
    setLikes,
    bookmarks,
    setBookmarks,
  } = useContext(ThemeContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    firestore.collection("comments").add({ comment: comment });
    setComment("");
  };

  const removePost = async (id) => {
    await firestore.doc(`posts/${id}`).delete();
  };

  return (
    <Fade big cascade>
      <div className="bg-white shadow rounded p-4 space-y-4 dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={profileImage}
              alt="profile img"
              className="w-10 h-10 object-cover rounded"
            />
            <div className="ml-4">
              <h1 className="font-bold text-sm text-gray-700 dark:text-gray-50">
                Řà Ýèñ
              </h1>
              <span className="text-xs font-medium text-gray-400 dark:text-gray-50  ">
                19 juin 2021
              </span>
            </div>
          </div>
          <ImCross
            className="w-4 h-4 text-red-500 cursor-pointer "
            onClick={() => removePost(post.id)}
          />
        </div>
        <p className="font-medium text-gray-700 lg:text-base text-sm dark:text-gray-50">
          {description}
        </p>
        {image && (
          <img
            src={image}
            alt="post img"
            className="h-96 object-cover w-full rounded-lg"
          />
        )}
        <div className="flex items-center justify-between space-x-4 text-xs font-medium text-gray-400 dark:text-gray-200">
          <div className="flex items-center">
            {likes > 0 ? (
              <Fade big cascade>
                <div className="bg-blue-600 p-1 rounded-full">
                  <AiFillLike className="" />
                </div>
                <span className="ml-2">{likes}</span>
              </Fade>
            ) : (
              ""
            )}
          </div>
          <div className="space-x-4">
            <span>{allComments?.length} comments</span>
            <span>0 Retweets</span>
            <span>{saved ? "1" : "0"} Saved</span>
          </div>
        </div>
        <div className="grid grid-cols-4 border-t border-b items-center">
          <button
            className="flex items-center justify-center font-medium hover:bg-gray-100 dark:hover:bg-gray-700 py-3 dark:text-gray-200 mx-2 rounded-md text-gray-700"
            onClick={() => setCommented(true)}
          >
            <VscComment className="mr-2" />
            <span className="hidden lg:flex">Comment</span>
          </button>
          <button className="flex items-center justify-center font-medium dark:text-gray-200 dark:hover:bg-gray-700 py-3 mx-2 rounded-md text-gray-700">
            <BsArrowRepeat className="mr-2" />
            <span className="hidden lg:flex">Retweeted</span>
          </button>
          <button
            className={`flex items-center justify-center font-medium ${
              likes ? "text-red-500" : "dark:text-gray-200"
            } dark:text-gray-200 dark:hover:bg-gray-700 py-3 mx-2 rounded-md text-gray-700`}
            onClick={() => {
              setLikes(1);
              setIsLiked(!IsLiked);
            }}
          >
            <BiHeart className={`${likes ? "text-red-500" : ""} mr-2`} />
            <span className={`hidden lg:flex ${likes ? "text-red-500" : ""}`}>
              Liked
            </span>
          </button>
          <button
            className="flex items-center justify-center font-medium dark:text-gray-200 dark:hover:bg-gray-700 py-3 mx-2 rounded-md text-gray-700"
            onClick={() => {
              setBookmarks([...bookmarks, post]);
              setIsSaved(true);
            }}
          >
            <IoBookmarkOutline
              className={`mr-2 ${saved ? "text-blue-500" : ""}`}
            />
            <span className={`hidden lg:flex ${saved ? "text-blue-500" : ""}`}>
              Saved
            </span>
          </button>
        </div>
        <div className="space-y-6">
          {allComments?.map((comment) => {
            return <Comment key={comment.id} comment={comment} />;
          })}
        </div>
        {commented || allComments ? (
          <Fade big cascade>
            <form className="flex items-center" onSubmit={handleSubmit}>
              <img
                src={profileImage}
                alt="profile img"
                className="w-10 h-10 object-cover rounded"
              />
              <div className="flex ml-4 items-center flex-1 border px-2 rounded-md bg-gray-100 dark:bg-gray-800">
                <input
                  value={comment}
                  type="text"
                  placeholder="Tweet your reply"
                  className="p-2 flex-1 outline-none bg-gray-100 dark:bg-gray-800 dark:text-white"
                  onChange={(e) => setComment(e.target.value)}
                />
                <button type="submit">
                  <BsCardImage className="w-4 h-5 cursor-pointer text-gray-500 dark:text-gray-50" />
                </button>
              </div>
            </form>
          </Fade>
        ) : (
          ""
        )}
      </div>
    </Fade>
  );
};

export default Post;
