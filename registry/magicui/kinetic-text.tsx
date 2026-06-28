"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface KineticTextProps {
  text: string;
  className?: string;
}

export const KineticText: React.FC<KineticTextProps> = ({ text, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn("flex flex-wrap justify-center cursor-default pointer-events-auto", className)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {text.split("").map((char, idx) => {
        // Determine distance from hovered character to create a kinetic weight wave
        let weight = 700; // default bold weight for headings
        if (hoveredIndex !== null) {
          const distance = Math.abs(hoveredIndex - idx);
          if (distance === 0) weight = 900;
          else if (distance === 1) weight = 800;
          else if (distance === 2) weight = 700;
          else weight = 600;
        }

        return (
          <motion.span
            key={idx}
            onMouseEnter={() => setHoveredIndex(idx)}
            animate={{ fontWeight: weight }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="inline-block transition-colors duration-200"
            style={{
              display: char === " " ? "inline" : "inline-block",
              width: char === " " ? "0.3em" : undefined,
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </div>
  );
};
