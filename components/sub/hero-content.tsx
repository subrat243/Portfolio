"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { CometCard } from "@/components/ui/comet-card";

export const HeroContent = () => {
  const [showSecondLine, setShowSecondLine] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-10 py-12 md:py-20 w-full h-full max-w-7xl mx-auto gap-8 lg:gap-16 pointer-events-none"
    >
      {/* Left Content Section */}
      <div className="w-full lg:w-[60%] xl:w-[65%] flex flex-col gap-4 md:gap-5 justify-center text-left lg:pr-8 order-2 lg:order-1 pointer-events-none">
        {/* Welcome Badge */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#9BA4B5]/40 opacity-90 inline-flex items-center w-fit backdrop-blur-md pointer-events-auto"
        >
          <h1 className="Welcome-text text-[13px] font-medium px-2">Hack Yourself First</h1>
        </motion.div>

        {/* Main Heading with Encrypted Text Animation */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 pointer-events-none"
        >
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-[var(--color-primary-purple)] leading-[1.1] pointer-events-none transition-colors duration-300">
            <div className="mb-2 pointer-events-none">
              <EncryptedText
                text="Hello, I'm "
                encryptedClassName="text-[var(--color-border-primary)] font-mono"
                revealedClassName="text-[var(--color-primary-purple)] transition-colors duration-300"
                revealDelayMs={100}
                flipDelayMs={80}
                onComplete={() => setShowSecondLine(true)}
              />
            </div>
            {showSecondLine && (
              <div className="flex items-center gap-2 pointer-events-none md:whitespace-nowrap">
                <EncryptedText
                  text="Subrat Samantaray"
                  encryptedClassName="text-[var(--color-border-primary)] font-mono"
                  revealedClassName="text-[var(--color-primary-cyan)] transition-colors duration-300"
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
            className="text-base md:text-lg text-[var(--color-primary-cyan)] leading-relaxed mb-6 pointer-events-none font-medium transition-colors duration-300"
          >
            <EncryptedText
              text="Welcome to my cybersecurity journey! Explore my skills, projects, and passion for ethical hacking."
              encryptedClassName="text-[var(--color-border-primary)] font-mono"
              revealedClassName="text-[var(--color-primary-purple)] transition-colors duration-300"
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
            className="flex flex-wrap gap-3 pointer-events-none"
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
                className="px-4 py-2 bg-[var(--color-dark-main)] border border-[var(--color-border-primary)] rounded-full text-sm text-[var(--color-primary-purple)] hover:border-[var(--color-primary-purple)] transition-all duration-300 backdrop-blur-sm font-medium pointer-events-auto"
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
          className="flex flex-col sm:flex-row gap-4 mt-6 pointer-events-none"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[var(--color-primary-purple)] text-[var(--color-dark-main)] font-semibold rounded-lg hover:bg-[var(--color-primary-cyan)] transition-all duration-300 shadow-md hover:shadow-lg text-center pointer-events-auto"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border-2 border-[var(--color-primary-purple)] text-[var(--color-primary-purple)] font-semibold rounded-lg hover:bg-[var(--color-primary-purple)]/5 transition-all duration-300 text-center pointer-events-auto"
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>

      {/* Right Content Section - Profile Card */}
      <div className="w-full lg:w-[40%] xl:w-[35%] flex justify-center items-center order-1 lg:order-2 pointer-events-none mt-10 lg:mt-0">
        <motion.div
          variants={slideInFromRight(0.5)}
          className="flex flex-col items-center pointer-events-none"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            className="relative group pointer-events-auto"
          >
            <CometCard className="w-80">
              <div
                className="flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 md:p-4 shadow-xl"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "none",
                  opacity: 1,
                }}
              >
                <div className="mx-2 flex-1">
                  <div className="relative mt-2 aspect-[3/4] w-full overflow-hidden rounded-[16px]">
                    <Image
                      loading="lazy"
                      className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover"
                      alt="Subrat Samantaray"
                      src="/profile.jpg"
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>
                <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                  <div className="text-xs font-bold">Subrat Samantaray</div>
                  <div className="text-xs text-gray-300 opacity-50">#kaizen</div>
                </div>
              </div>
            </CometCard>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
