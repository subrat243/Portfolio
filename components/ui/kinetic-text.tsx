"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface KineticTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  className?: string;
}

export const KineticText: React.FC<KineticTextProps> = ({
  text,
  as: Component = "h1",
  className,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Split text into characters, preserving spaces
  const characters = text.split("");

  return (
    <Component
      className={cn(
        "inline-flex flex-wrap cursor-default select-none",
        className,
      )}
    >
      {characters.map((char, index) => {
        if (char === " ") {
          return (
            <span key={index} className="w-[0.3em]">
              &nbsp;
            </span>
          );
        }

        // Determine font weight and scale based on distance to hoveredIndex
        let fontWeight = 700; // Base bold font weight for section titles
        let scale = 1;
        let color = "currentColor";

        if (hoveredIndex !== null) {
          const distance = Math.abs(hoveredIndex - index);
          if (distance === 0) {
            fontWeight = 900;
            scale = 1.15;
            color = "#394867";
          } else if (distance === 1) {
            fontWeight = 800;
            scale = 1.08;
            color = "#212A3E";
          } else if (distance === 2) {
            fontWeight = 700;
            scale = 1.03;
          }
        }

        return (
          <motion.span
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              fontWeight,
              scale,
              color: hoveredIndex !== null ? color : "currentColor",
            }}
            transition={{
              type: "spring",
              damping: 15,
              stiffness: 300,
            }}
            style={{ display: "inline-block", originY: 0.8 }}
            className="transition-colors duration-200 pointer-events-auto"
          >
            {char}
          </motion.span>
        );
      })}
    </Component>
  );
};
