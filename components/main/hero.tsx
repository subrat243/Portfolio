"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroContent } from "@/components/sub/hero-content";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export const Hero = () => {
  return (
    <div
      id="home"
      className="relative flex flex-col min-h-screen w-full overflow-hidden bg-[#F1F6F9]"
    >
      {/* Background Ripple Effect */}
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-100">
        <BackgroundRippleEffect rows={20} cols={30} cellSize={60} />
      </div>



      {/* Content - Top layer */}
      <div className="relative z-10 flex-1 flex items-center justify-center pointer-events-none">
        <HeroContent />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#394867] text-sm font-medium"
          >
            Scroll to explore
          </motion.p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-[#212A3E]/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-[#212A3E] rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Smooth transition gradient to About Me section */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#F1F6F9] to-transparent z-0 pointer-events-none" />
    </div>
  );
};
