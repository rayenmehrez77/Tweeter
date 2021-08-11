import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { RiInstagramLine, RiTimeFill, RiUserFollowFill } from "react-icons/ri";
import { TiWorld } from "react-icons/ti";
import { MdWork } from "react-icons/md";
import { Fade } from "react-reveal";

const Intro = () => {
  return (
    <Fade big cascade>
      <div className="lg:w-96 bg-white h-1/3 dark:bg-gray-800 mx-6 md:mx-4 py-6 rounded p-4 shadow ">
        <h1 className="text-2xl font-bold text-gray-600 dark:text-gray-200">
          Intro
        </h1>
        <div className="flex items-start space-x-6 mt-4">
          <div className="w-6 h-6">
            <MdWork className="w-full h-full text-gray-600 dark:text-gray-200" />
          </div>
          <p className="text-md w-3/4 font-medium dark:text-gray-200">
            Works at Løadinğ ..… ▂ ▃ ▄ ▅ ▆ ▇ █ ✖ I♥ G@ss£riNe ✖ I♥ ѕuммεʀ • ✖I♥
            Pɑʀту >> ✖I♥ ɢɪʀℓѕ ✖I♥ Aℓℓ му Fʀɪeиďs ✖X' Sortir ✖X' Dormir ✖X' Rire
            ✖X' Manger → 'lOvE' ← →♫ ℳʋʂɨգʊҿ ♫
          </p>
        </div>
        <div className="flex items-start space-x-6 mt-4">
          <div className="w-6 h-6">
            <FaGraduationCap className="w-full h-full text-gray-600 dark:text-gray-200" />
          </div>
          <p className="text-md w-3/4 font-medium dark:text-gray-50">
            Higher Institute of Technological Studies of Sousse
          </p>
        </div>
        <div className="flex items-start space-x-6 mt-4">
          <div className="w-6 h-6">
            <AiFillHome className="w-full h-full text-gray-600 dark:text-gray-200" />
          </div>
          <p className="text-md font-medium dark:text-gray-50">
            Lives in Monastir, Tunisia
          </p>
        </div>
        <div className="flex items-start space-x-6 mt-4">
          <div className="w-6 h-6">
            <RiTimeFill className=" w-full h-full text-gray-600 dark:text-gray-200" />
          </div>
          <p className="text-md font-medium dark:text-gray-50">
            Joined 10 August 2021
          </p>
        </div>
        <div className="flex items-start space-x-6 mt-4">
          <div className="w-6 h-6">
            <RiUserFollowFill className=" w-full h-full text-gray-600 dark:text-gray-200" />
          </div>
          <p className="text-md font-medium dark:text-gray-50">
            Followed by 360 people
          </p>
        </div>
        <div className="flex items-start space-x-6 mt-4">
          <div className="w-6 h-6">
            <RiInstagramLine className=" w-full h-full text-gray-600 dark:text-gray-200" />
          </div>
          <a
            className="text-md font-medium text-blue-800  dark:text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/rayen_mhz/"
          >
            rayen_mhz
          </a>
        </div>
        <div className="flex items-start space-x-6 mt-4">
          <div className="w-6 h-6">
            <TiWorld className=" text-gray-600 w-full h-full dark:text-gray-200" />
          </div>
          <a
            className="text-md font-medium text-blue-800 dark:text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
            href="https://rayenmehrez.me/?fbclid=IwAR2JZ6Tq21S7CJj4EYrDuPkZkONgJT_NoVf2Jmm9w9WBM3QelDuGseceZVg"
          >
            rayenmehrez.me
          </a>
        </div>
      </div>
    </Fade>
  );
};

export default Intro;
