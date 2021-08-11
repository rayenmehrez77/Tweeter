import React from "react";
import { Fade } from "react-reveal";

const Trends = () => {
  return (
    <div className="bg-white rounded p-4 shadow dark:bg-gray-800">
      <h2 className="border-b font-medium w-full pb-2 text-sm text-gray-600 dark:text-white">
        Trends for you
      </h2>
      <Fade big cascade>
        <div className="space-y-6 mt-6">
          <div className="flex flex-col">
            <a href="/" className="font-medium text-gray-700 dark:text-gray-50">
              #programming
            </a>
            <span className="text-gray-500 font-medium dark:text-gray-400">
              213k Tweets
            </span>
          </div>
          <div className="flex flex-col">
            <a href="/" className="font-medium text-gray-700 dark:text-gray-50">
              #devchallenges
            </a>
            <span className="text-gray-500 font-medium dark:text-gray-400">
              123k Tweets
            </span>
          </div>
          <div className="flex flex-col">
            <a href="/" className="font-medium text-gray-700 dark:text-gray-50">
              #frontend
            </a>
            <span className="text-gray-500 font-medium dark:text-gray-400">
              34k Tweets
            </span>
          </div>
          <div className="flex flex-col">
            <a href="/" className="font-medium text-gray-700 dark:text-gray-50">
              #helsinki
            </a>
            <span className="text-gray-500 font-medium dark:text-gray-400">
              11k Tweets
            </span>
          </div>
          <div className="flex flex-col">
            <a href="/" className="font-medium text-gray-700 dark:text-gray-50">
              #100DaysOfCode
            </a>
            <span className="text-gray-500 font-medium dark:text-gray-400">
              5k Tweets
            </span>
          </div>
          <div className="flex flex-col">
            <a href="/" className="font-medium text-gray-700 dark:text-gray-50">
              #learntocode
            </a>
            <span className="text-gray-500 font-medium dark:text-gray-400">
              1k Tweets
            </span>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Trends;
