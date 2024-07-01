import { useState, useEffect } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeClick = () => {
    if (isDarkMode) {
      window.document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
      window.document.documentElement.classList.add("dark");
    }
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      window.document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);
  return (
    <div className="bg-white w-full shadow-lg dark:bg-darkblue">
      <div className="flex items-center justify-between p-4 ms-6 me-6 text-sm">
        <h1 className="font-bold text-base dark:text-white">
          Where in the world?
        </h1>
        <button
          className="flex items-center gap-2 dark:text-white"
          onClick={handleDarkModeClick}
        >
          {isDarkMode ? <IoSunnyOutline /> : <IoMoonOutline />} Dark mode
        </button>
      </div>
    </div>
  );
};

export default Header;
