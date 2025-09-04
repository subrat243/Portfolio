"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-8 md:px-20 py-20 w-full h-full"
    >
      <div className="flex-1 w-full flex flex-col gap-5 justify-center text-start mb-10 md:mb-0">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-90 inline-flex items-center w-fit"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">My Portfolio</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-[600px] leading-tight">
            Hey,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              I&apos;m Subrat...
            </span>{" "}
            ^_^
          </h1>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] leading-relaxed"
        >
          Welcome to my cybersecurity journey! Explore my skills, projects, and
          passion for ethical hacking.
        </motion.p>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex-1 w-full flex justify-center items-center z-[20] relative"
      >
        <div className="relative">
          <Image
            src="/spiderman.png"
            alt="Cybersecurity illustration"
            height={500}
            width={500}
            draggable={false}
            className="select-none hover:opacity-100 transition-opacity duration-300"
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
