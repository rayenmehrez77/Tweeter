import React, { useContext } from "react";
import { HiMoon } from "react-icons/hi";
import { IoSunny } from "react-icons/io5";
import { Fade } from "react-reveal";
import { ThemeContext } from "../context/themeContext";

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Fade big cascade>
      <div className="hidden lg:flex">
        {ThemeContext === "dark" ? (
          <HiMoon
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-6 h-6 text-gray-600 dark:text-white cursor-pointer"
          />
        ) : (
          <IoSunny
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className=" w-6 h-6 text-gray-600 dark:text-white cursor-pointer"
          />
        )}
      </div>
    </Fade>
  );
};

export default Toggle;
