"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { TypingAnimation } from "@/components/sub/typing-animation";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { HoloGlobe } from "@/components/ui/holo-globe";

export const HeroContent = () => {
  const [showSecondLine, setShowSecondLine] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-12 md:py-20 w-full h-full max-w-7xl mx-auto gap-8 lg:gap-12 pointer-events-none"
    >
      {/* Left Content Section */}
      <div className="flex-1 w-full flex flex-col gap-6 md:gap-8 justify-center text-left lg:pr-8 order-2 lg:order-1 pointer-events-none">
        {/* Welcome Badge */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#9BA4B5]/40 opacity-90 inline-flex items-center w-fit backdrop-blur-md pointer-events-auto"
        >
          <SparklesIcon className="text-[#394867] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] font-medium">Hack Yourself First</h1>
        </motion.div>

        {/* Main Heading with Encrypted Text Animation */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 pointer-events-none"
        >
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#212A3E] leading-tight pointer-events-none">
            <div className="mb-2 pointer-events-none">
              <EncryptedText
                text="Hey, I'm "
                encryptedClassName="text-[#9BA4B5] font-mono"
                revealedClassName="text-[#212A3E]"
                revealDelayMs={100}
                flipDelayMs={80}
                onComplete={() => setShowSecondLine(true)}
              />
            </div>
            {showSecondLine && (
              <div className="flex items-center gap-2 pointer-events-none">
                <EncryptedText
                  text="Subrat..."
                  encryptedClassName="text-[#9BA4B5] font-mono"
                  revealedClassName="text-[#394867]"
                  revealDelayMs={120}
                  flipDelayMs={80}
                />
              </div>
            )}
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          variants={slideInFromLeft(0.8)}
          className="max-w-[600px] w-full pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="text-base md:text-lg text-[#394867]/90 leading-relaxed mb-6 pointer-events-none font-medium"
          >
            <EncryptedText
              text="Welcome to my cybersecurity journey! Explore my skills, projects, and passion for ethical hacking."
              encryptedClassName="text-[#9BA4B5] font-mono"
              revealedClassName="text-[#212A3E]"
              revealDelayMs={20}
              flipDelayMs={40}
              startDelayMs={1800}
            />
          </motion.div>

          {/* Role Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.6 }}
            className="flex flex-wrap gap-3 pointer-events-auto"
          >
            {[
              "Penetration Tester",
              "Security Researcher",
              "Ethical Hacker",
            ].map((role, index) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3.2 + index * 0.2, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-white border border-[#9BA4B5]/40 rounded-full text-sm text-[#212A3E] hover:border-[#212A3E]/60 transition-all duration-300 backdrop-blur-sm font-medium"
              >
                {role}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-6 pointer-events-auto"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#212A3E] text-white font-semibold rounded-lg hover:bg-[#394867] transition-all duration-300 shadow-md hover:shadow-lg text-center"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border-2 border-[#212A3E] text-[#212A3E] font-semibold rounded-lg hover:bg-[#212A3E]/5 transition-all duration-300 text-center"
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>

      {/* Right Content Section / Hologram Globe */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex-1 w-full max-w-lg flex justify-center items-center relative order-1 lg:order-2 pointer-events-auto my-auto"
      >
        <div className="relative group w-[380px] h-[380px] sm:w-[440px] sm:h-[440px] md:w-[500px] md:h-[500px] flex items-center justify-center">
          {/* Glowing background effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ delay: 2, duration: 1.5 }}
            className="absolute inset-0 bg-[#9BA4B5]/10 rounded-full blur-3xl transform scale-110"
          />

          {/* Animated rings - guaranteed perfect full circles */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-[#9BA4B5]/40 rounded-full hidden md:block aspect-square"
            style={{ width: "110%", height: "110%", left: "-5%", top: "-5%" }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-[#394867]/20 rounded-full border-dashed hidden md:block aspect-square"
            style={{ width: "130%", height: "130%", left: "-15%", top: "-15%" }}
          />

          {/* Main Holo Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
            className="relative z-10 w-full h-full flex items-center justify-center"
          >
            <HoloGlobe />
          </motion.div>

          {/* Floating particles */}
          <motion.div
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-10 right-10 w-3 h-3 bg-[#394867] rounded-full blur-sm"
          />
          <motion.div
            animate={{
              y: [10, -10, 10],
              x: [5, -5, 5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-10 left-10 w-2 h-2 bg-[#9BA4B5] rounded-full blur-sm"
          />
          <motion.div
            animate={{
              y: [-5, 5, -5],
              x: [-8, 8, -8],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-1/2 left-5 w-1.5 h-1.5 bg-[#9BA4B5]/70 rounded-full blur-sm"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
