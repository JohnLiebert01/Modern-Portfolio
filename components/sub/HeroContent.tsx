"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className=" hero-content flex flex-col md:flex-row items-center justify-center min-h-[100vh] px-4  sm:px-8 md:px-20 mt-16 sm:mt-16 md:mt-24 lg:mt-0 w-full z-[20] "
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center items-center text-center md:text-start md:items-start m-auto ">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-3 sm:py-3 sm:px-4 border border-[#7042f88b] opacity-90 flex items-center"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
          <h1 className="Welcome-text text-sm sm:text-base">
            Front-End Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-[90%] sm:max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-base md:text-lg text-gray-400 my-5 max-w-[90%] sm:max-w-[600px]"
        >
          Hi, I&apos;m Mohammed Jalal , A Web Front-End Developer With Knowledge of Animation And Graphic design skills ,
          I&apos;m also a
          Third Stage Student at the University of Technology Check out my skills
          and projects.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-3 px-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[280px] sm:max-w-[220px] bg-purple-600 hover:bg-purple-700 transition-colors"
          href="/MOHAMMED_JALAL_-_Software_Developer.pdf"
          download="MOHAMMED_JALAL_-_Software_Developer.pdf"
        >
          Download CV
        </motion.a>

  
      </div>
    </motion.div>
  );
};

export default HeroContent;

