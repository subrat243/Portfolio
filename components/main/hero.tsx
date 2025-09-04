"use client";

import { motion } from "framer-motion";
import { HeroContent } from "@/components/sub/hero-content";
import { StarsCanvas } from "@/components/main/star-background";

export const Hero = () => {
  return (
    <div
      id="home"
      className="relative flex flex-col min-h-screen w-full overflow-hidden bg-[#030014]"
    >
      {/* Blackhole Video - Bottom layer */}
      <div className="absolute inset-0 z-video pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="rotate-180 absolute top-[-400px] w-full h-full object-cover blur-sm opacity-80 pointer-events-none"
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>
      </div>

      {/* Stars Animation - Above video but below content */}
      <div className="absolute inset-0 z-overlay pointer-events-none opacity-60">
        <StarsCanvas />
      </div>

      {/* Content - Top layer */}
      <div className="relative z-content flex-1 flex items-center justify-center">
        <HeroContent />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 text-sm font-medium"
          >
            Scroll to explore
          </motion.p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
