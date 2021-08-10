import React from "react";
import { BiSearch } from "react-icons/bi";
import { Fade } from "react-reveal";

const Search = () => {
  return (
    <Fade big cascade>
      <form className="bg-white flex  items-center border p-2 shadow rounded-md">
        <BiSearch className="w-5 h-5 text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 p-2 outline-none font-medium text-gray-700"
        />
        <button className="p-2 px-6 text-white font-medium rounded bg-blue-600">
          Search
        </button>
      </form>
    </Fade>
  );
};

export default Search;
