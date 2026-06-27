"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ASCII_FRAMES = [
  // Spider / Cyber Web
  [
    "       \\         /       ",
    "        \\       /        ",
    "     .---.-.-.-.---.     ",
    "    /   /   |   \\   \\    ",
    "   |   |    |    |   |   ",
    "   |    \\   |   /    |   ",
    "    \\    `-.|.-'    /    ",
    "     `-.   /|\\   .-'     ",
    "    /  /`-' | `-'\\  \\    ",
    "   /  /     |     \\  \\   ",
    "  /  /      |      \\  \\  ",
    " ----------------------- "
  ],
  // Cyber Skull / Pentester
  [
    "     .-------------.     ",
    "    /   _       _   \\    ",
    "   |  /(o)     (o)\\  |   ",
    "   |       <       |   | ",
    "    \\    \\_____/    /    ",
    "     `---.     .---'     ",
    "         | | | |         ",
    "         |_|_|_|         ",
    "     ___/       \\___     ",
    "    /               \\    ",
    "   /                 \\   ",
    " ----------------------- "
  ],
  // Shield & Lock / Security
  [
    "     .-------------.     ",
    "     |   .-----.   |     ",
    "     |  /       \\  |     ",
    "     |  |       |  |     ",
    "    .---+-------+---.    ",
    "   /    |       |    \\   ",
    "  |     | ( ( ) |     |  ",
    "  |     |   |   |     |  ",
    "  |     |   |   |     |  ",
    "   \\    `-------'    /   ",
    "    `-.           .-'    ",
    "       `---------'       "
  ]
];

export const AsciiAnimation = ({ className }: { className?: string }) => {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % ASCII_FRAMES.length);
    }, 4000); // Change ASCII symbol every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const currentFrame = ASCII_FRAMES[frameIndex];

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center p-6 bg-[#1F2121] border border-[#9BA4B5]/40 rounded-2xl shadow-2xl font-mono text-xs sm:text-sm text-[#9BA4B5] overflow-hidden select-none group w-[320px] h-[320px] sm:w-[360px] sm:h-[360px]",
        className
      )}
    >
      {/* Glow / Scanline effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9BA4B5]/10 to-transparent opacity-50 pointer-events-none group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />

      {/* Terminal Header */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-[#151616] border-b border-[#9BA4B5]/20 flex items-center px-4 justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[11px] text-[#9BA4B5]/70 tracking-widest font-mono">
          SEC_SHELL v1.0.1
        </span>
        <div className="w-4 h-4 rounded-full bg-[#9BA4B5]/10 animate-ping" />
      </div>

      {/* ASCII Content */}
      <motion.div
        key={frameIndex}
        initial={{ opacity: 0, filter: "blur(4px)", scale: 0.95 }}
        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
        exit={{ opacity: 0, filter: "blur(4px)", scale: 0.95 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mt-6 z-10 w-full"
      >
        <pre className="text-left font-mono tracking-widest text-[#F1F6F9] font-bold leading-5 text-[12px] sm:text-[14px]">
          {currentFrame.join("\n")}
        </pre>
      </motion.div>

      {/* Status bar */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-[#9BA4B5]/80 border-t border-[#9BA4B5]/20 pt-2 z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="font-semibold text-white">SYS_ACTIVE</span>
        </div>
        <span className="font-mono text-[10px] text-[#9BA4B5]/60">
          [TARGET: ZERO_DAY]
        </span>
      </div>
    </div>
  );
};
