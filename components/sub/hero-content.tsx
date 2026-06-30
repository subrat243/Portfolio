"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";

import { TypingAnimation } from "@/components/sub/typing-animation";
import {
  slideInFromLeft,
  slideInFromTop,
} from "@/lib/motion";
import { EncryptedText } from "@/components/ui/encrypted-text";

const HeroModel = dynamic(
  () => import("@/components/sub/hero-model").then((mod) => mod.HeroModel),
  { ssr: false }
);

export const HeroContent = () => {
  const [showSecondLine, setShowSecondLine] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-10 py-12 md:py-20 w-full h-full max-w-[1400px] mx-auto gap-8 lg:gap-12 pointer-events-none"
    >
      {/* Left Content Section */}
      <div className="flex-1 w-full flex flex-col gap-4 md:gap-5 justify-center text-left lg:pr-8 order-2 lg:order-1 pointer-events-none">
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
                text="Hello, I'm "
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
                  text="Subrat Samantaray"
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
              "Security Analyst",
              "Security Researcher",
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

      {/* Right Side - 3D Model */}
      <HeroModel />
    </motion.div>
  );
};
