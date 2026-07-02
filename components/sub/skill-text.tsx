"use client";

import { motion } from "framer-motion";
import VariableProximity from "@/components/ui/variable-proximity";
import { useRef } from "react";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#9BA4B5]/40 opacity-[0.9] mb-3 mx-auto"
      >
        <h1 className="Welcome-text text-[13px] px-2">
          Built Through Practice
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="mt-2 text-center mb-[4px] pointer-events-auto w-full"
        ref={containerRef}
        style={{ position: "relative" }}
      >
        <VariableProximity
          label="What I Work With"
          className="text-4xl md:text-5xl font-bold text-[#212A3E] justify-center text-center [font-optical-sizing:auto] block w-full"
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={containerRef}
          radius={100}
          falloff="linear"
        />
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-lg text-[#394867] font-medium mb-4 mt-[10px] text-center max-w-2xl mx-auto"
      >
        Learning by building. Growing through practice.
      </motion.div>
    </div>
  );
};
