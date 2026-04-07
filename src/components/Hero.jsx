import React from "react";
import assets from "../assets/assets.js";
import { motion } from "motion/react";

const Hero = ({ theme }) => {
  return (
    <div
      id="hero"
      className={`flex flex-col items-center gap-6 
        py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center 
        w-full overflow-hidden transition-colors duration-300
        ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-700"}`}
    >
      <motion.div
       initial={{opacity:0, y: 20}}
       whileInView={{opacity:1, y: 0}}
       transition={{duration: 0.5, delay: 0.7}}
       viewport={{once: true}}
        className={`inline-flex items-center gap-2 border p-1.5 pr-4 rounded-full
        ${theme === "dark"
            ? "border-gray-600 bg-gray-800"
            : "border-gray-300 bg-white"}`}>

        <img className="w-20" src={assets.group_profile} alt="Hero" />
        <p className={`text-xs font-medium
          ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>
          Trusted by 10k+ people </p>
      </motion.div>

      <motion.h1
        initial={{opacity:0, y: 40}}
        whileInView={{opacity:1, y: 0}}
        transition={{duration: 0.6, delay: 0.8}}
        viewport={{once: true}}

        className="text-4xl sm:text-5xl md:text-6xl xl:text-[85px] font-medium
         xl:leading-[95px] max-w-5xl"
      >
        Turning imagination into{" "}
        <span
          className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text
      text-transparent"
        >
          digital
        </span>{" "}
        impact.
      </motion.h1>

      <motion.p
      initial={{opacity:0, y: 30}}
      whileInView={{opacity:1, y: 0}}
      transition={{duration: 0.5, delay: 1}}
      viewport={{once: true}}
        className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75
      max-w-4/5 sm:max-w-lg pb-3"
      >
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </motion.p>

      <motion.div 
      initial={{opacity:0, scale: 0.9}}
      whileInView={{opacity:1, scale: 1}}
      transition={{duration: 0.5, delay: 0.7}}
      viewport={{once: true}}
      className="relative">
        <img
          src={assets.hero_img}
          alt="Hero image"
          className="w-full max-w-6xl"
        />
        <img
          src={assets.bgImage1}
          alt=""
          className="absolute -top-40 -right-40
        sm:-top-100 sm:-righ-70 -z-1 dark:hidden"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
