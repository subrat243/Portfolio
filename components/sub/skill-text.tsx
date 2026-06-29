"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { KineticText } from "@/components/ui/kinetic-text";

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
        className="Welcome-box py-[8px] px-[7px] border border-[#9BA4B5]/40 opacity-[0.9] mb-3 mx-auto"
      >
        <SparklesIcon className="text-[#394867] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Cybersecurity & Development Skills
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="mt-4 text-center mb-[4px] pointer-events-auto"
      >
        <KineticText text="Skills and Technologies." className="text-4xl md:text-5xl font-bold text-[#212A3E] justify-center text-center [font-optical-sizing:auto]" />
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-lg text-[#394867] font-medium mb-4 mt-[10px] text-center max-w-2xl mx-auto"
      >
        Always learning, always building.
      </motion.div>
    </div>
  );
};
