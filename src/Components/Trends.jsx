import React from "react";
import { Fade } from "react-reveal";

const Trends = () => {
  return (
    <div className="bg-white rounded p-4 shadow">
      <h2 className="border-b font-medium w-full pb-2 text-sm text-gray-600">
        Trends for you
      </h2>
      <Fade big cascade>
        <div className="space-y-6 mt-6">
          <div className="flex flex-col">
            <a href="/" className="font-medium text-gray-700">
              #programming
            </a>
            <span className="text-gray-500 font-medium">213k Tweets</span>
          </div>
          <div className="flex flex-col">
            <a href="/" className="font-medium text-gray-700">
              #devchallenges
            </a>
            <span className="text-gray-500 font-medium">123k Tweets</span>
          </div>
          <div className="flex flex-col">
            <a href="/" className="font-medium text-gray-700">
              #frontend
            </a>
            <span className="text-gray-500 font-medium">34k Tweets</span>
          </div>
          <div className="flex flex-col">
            <a href="/" className="font-medium text-gray-700">
              #helsinki
            </a>
            <span className="text-gray-500 font-medium">11k Tweets</span>
          </div>
          <div className="flex flex-col">
            <a href="/" className="font-medium text-gray-700">
              #100DaysOfCode
            </a>
            <span className="text-gray-500 font-medium">5k Tweets</span>
          </div>
          <div className="flex flex-col">
            <a href="/" className="font-medium text-gray-700">
              #learntocode
            </a>
            <span className="text-gray-500 font-medium">1k Tweets</span>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Trends;
