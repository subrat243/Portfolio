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
      className={cn("flex flex-wrap justify-center cursor-default pointer-events-auto select-none", className)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {text.split("").map((char, idx) => {
        // When not hovered, maintain a solid bold weight (700).
        // When hovered, create a dramatic contrast by dropping non-hovered chars to 300/400 and boosting hovered to 900.
        let weight = 700;
        let scale = 1;
        let color = "inherit";

        if (hoveredIndex !== null) {
          const distance = Math.abs(hoveredIndex - idx);
          if (distance === 0) {
            weight = 900;
            scale = 1.15;
            color = "#212A3E";
          } else if (distance === 1) {
            weight = 700;
            scale = 1.06;
            color = "#394867";
          } else if (distance === 2) {
            weight = 500;
            scale = 1.02;
            color = "#6B7280";
          } else {
            weight = 300;
            scale = 0.95;
            color = "#9BA4B5";
          }
        }

        return (
          <motion.span
            key={idx}
            onMouseEnter={() => setHoveredIndex(idx)}
            animate={{
              fontWeight: weight,
              scale: scale,
              color: hoveredIndex !== null ? color : "inherit",
            }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="inline-block origin-bottom transition-all duration-150"
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
