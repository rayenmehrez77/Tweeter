import React from "react";
import { Feed, Trends, Following } from "../Components";

const HomePage = () => {
  return (
    <div>
      <div className="max-w-6xl mx-6 lg:mx-auto pt-6 flex space-x-4">
        <div className="flex-1 mb-16">
          <Feed />
        </div>
        <div className="w-96 hidden lg:flex lg:flex-col">
          <Trends />
          <Following />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
