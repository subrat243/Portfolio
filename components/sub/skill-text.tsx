"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#9BA4B5]/40 opacity-[0.9]"
      >
        <SparklesIcon className="text-[#394867] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Cybersecurity & Development Skills
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-[#212A3E] font-medium mt-[10px] text-center mb-[15px]"
      >
        Technical Skills and Technologies.
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-[#394867] mb-10 mt-[10px] text-center"
      >
        Always learning, always building.
      </motion.div>
    </div>
  );
};
