import React, { useState } from "react";
import profileImage from "../images/profileImage.jpg";
import { AiOutlinePicture } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { Fade } from "react-reveal";
import { firestore } from "../firebase/firebase";
import { collectIdsAndDocs } from "../firebase/utilities";

const Tweet = ({ posts, setPosts }) => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const docRef = await firestore
      .collection("posts")
      .add({ description: description, image: image });
    const doc = await docRef.get();
    const newPost = collectIdsAndDocs(doc);

    setPosts([newPost, ...posts]);
    setDescription("");
  };

  const onImageChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  };

  return (
    <Fade big cascade>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
        <h2 className="border-b font-medium w-full pb-2 text-sm text-gray-600 dark:text-gray-200">
          Tweet something
        </h2>
        <form className="mt-2" onSubmit={handleSubmit}>
          <div className="flex items-start">
            <img
              src={profileImage}
              alt="profile img"
              className="w-10 h-10 object-cover rounded"
            />
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              placeholder="What's happening?"
              className="text-gray-400 flex-1 ml-4 px-2 pt-2 pb-8 outline-none dark:bg-gray-800"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-3">
              {/* <input type="file" onChange={onImageChange} className="hidden" /> */}
              <input
                type="file"
                className="w-5 h-5 object-cover text-blue-600 dark:text-gray-200"
                onChange={onImageChange}
              />
              <button className="flex items-center space-x-2">
                <BiWorld className="w-5 h-5 object-cover text-blue-600 dark:text-gray-200" />
                <span className="font-medium lg:text-sm text-blue-600 text-xs dark:text-gray-200">
                  Everyone can reply
                </span>
              </button>
            </div>
            <button
              className="py-1 px-3 lg:py-2 lg:px-6  text-white font-medium rounded bg-blue-600"
              type="submit"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </Fade>
  );
};

export default Tweet;
