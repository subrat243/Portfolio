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

export const HeroContent = () => {
  const [showSecondLine, setShowSecondLine] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-12 md:py-20 w-full h-full max-w-7xl mx-auto gap-8 lg:gap-12"
    >
      {/* Left Content Section */}
      <div className="flex-1 w-full flex flex-col gap-6 md:gap-8 justify-center text-left lg:pr-8 order-2 lg:order-1">
        {/* Welcome Badge */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-purple-500/55 opacity-90 inline-flex items-center w-fit backdrop-blur-md"
        >
          <SparklesIcon className="text-purple-400 mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] font-medium">My Portfolio</h1>
        </motion.div>

        {/* Main Heading with Typing Animation */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4"
        >
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            <div className="mb-2">
              <TypingAnimation
                text="Hey, I'm "
                delay={500}
                speed={100}
                className="text-white"
                showCursor={false}
                onComplete={() => setShowSecondLine(true)}
              />
            </div>
            {showSecondLine && (
              <div className="flex items-center gap-2">
                <TypingAnimation
                  text="Subrat..."
                  delay={0}
                  speed={120}
                  className="text-gradient-primary"
                  showCursor={true}
                />
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="text-purple-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl ml-2"
                >
                  ^_^
                </motion.span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          variants={slideInFromLeft(0.8)}
          className="max-w-[600px] w-full"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="text-base md:text-lg text-gray-300 leading-relaxed mb-6"
          >
            Welcome to my{" "}
            <span className="text-purple-400 font-semibold">
              cybersecurity journey
            </span>
            ! Explore my skills, projects, and passion for{" "}
            <span className="text-cyan-400 font-semibold">ethical hacking</span>
            .
          </motion.p>

          {/* Role Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.6 }}
            className="flex flex-wrap gap-3"
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
                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-sm text-white hover:border-purple-400/60 transition-all duration-300 backdrop-blur-sm font-medium"
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
          className="flex flex-col sm:flex-row gap-4 mt-6"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-glow text-center"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border-2 border-purple-500/50 text-white font-semibold rounded-lg hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 text-center"
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>

      {/* Right Image Section */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex-1 w-full max-w-lg flex justify-center items-center relative order-1 lg:order-2"
      >
        <div className="relative group">
          {/* Glowing background effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ delay: 2, duration: 1.5 }}
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl transform scale-110"
          />

          {/* Animated rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-purple-500/30 rounded-full hidden md:block"
            style={{ width: "110%", height: "110%", left: "-5%", top: "-5%" }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-cyan-500/20 rounded-full border-dashed hidden md:block"
            style={{ width: "130%", height: "130%", left: "-15%", top: "-15%" }}
          />

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.3 },
            }}
            className="relative z-10"
          >
            <Image
              src="/spiderman.png"
              alt="Cybersecurity Expert - Subrat Samantaray"
              height={400}
              width={400}
              draggable={false}
              className="select-none transition-all duration-300 gpu-optimized drop-shadow-2xl"
              priority
              quality={95}
            />
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
            className="absolute top-10 right-10 w-3 h-3 bg-cyan-400 rounded-full blur-sm"
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
            className="absolute bottom-10 left-10 w-2 h-2 bg-purple-400 rounded-full blur-sm"
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
            className="absolute top-1/2 left-5 w-1.5 h-1.5 bg-green-400 rounded-full blur-sm"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
