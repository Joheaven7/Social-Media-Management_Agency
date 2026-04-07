import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggle from "./ThemeToggle";
import { motion } from "motion/react"

const Navbar = ({ theme, setTheme }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex justify-between items-center px-4
  sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20
  font-medium backdrop-blur-md transition-colors
  ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black-700"}`}
    >
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        className="w-32 sm:w-40"
        alt="logo"
      />

      {/* Navigation Links */}
      <div
        className={`flex flex-row sm:items-center gap-6 sm:text-sm font-normal
  ${theme === "dark" ? "text-white" : "text-black"} 
  max-sm:fixed max-sm:flex-col max-sm:top-0 max-sm:right-0 ${!sideBarOpen
            ? "max-sm:w-0 max-sm:opacity-0"
            : "max-sm:w-60 max-sm:pl-6 max-sm:opacity-100"
          }
  max-sm:h-screen
  ${theme === "dark" ? "max-sm:bg-gray-900" : "max-sm:bg-white"}
  max-sm:pt-20 max-sm:pr-6 max-sm:overflow-y-auto
  transition-all duration-300`}
      >
        <img
          src={assets.close_icon}
          alt="close"
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer dark:invert"
          onClick={() => setSideBarOpen(false)}
        />

        {/* Removed dark:text-gray-200 to allow parent color to inherit */}
        <a
          onClick={() => setSideBarOpen(false)}
          href="#"
          className="hover:border-b py-2 whitespace-nowrap dark:hover:border-gray-400"
        >
          Home
        </a>

        <a
          onClick={() => setSideBarOpen(false)}
          href="#services"
          className="hover:border-b py-2 whitespace-nowrap dark:hover:border-gray-400"
        >
          Services
        </a>

        <a
          onClick={() => setSideBarOpen(false)}
          href="#our-work"
          className="hover:border-b py-2 whitespace-nowrap dark:hover:border-gray-400"
        >
          Our Work
        </a>

        <a
          onClick={() => setSideBarOpen(false)}
          href="#contact-us"
          className="hover:border-b py-2 whitespace-nowrap dark:hover:border-gray-400"
        >
          Contact Us
        </a>
      </div>


      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggle theme={theme} setTheme={setTheme} />

        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt="menu"
          onClick={() => setSideBarOpen(true)}
          className="w-8 sm:hidden cursor-pointer hover:opacity-80 transition-opacity "
        />

        <a
          href="#contact-us"
          className="text-sm max-sm:hidden flex items-center 
          gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer
          hover:scale-105 transition-all"
        >
          Connect
          <span className="text-lg">→</span>
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
