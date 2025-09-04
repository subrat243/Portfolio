"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import VideoBackground from "@/components/ui/video-background";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="encryption"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030014]"
      style={{ minHeight: "100vh" }}
    >
      {/* Encryption Video Background */}
      <VideoBackground
        src="/videos/encryption-bg.webm"
        fallbackSrc="/videos/encryption-bg.mp4"
        className="z-[4] pointer-events-none"
        opacity={0.6}
        blur={false}
        overlay={true}
        overlayOpacity={0.4}
      />

      {/* Gradient overlays for seamless blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030014]/70 via-transparent to-[#030014]/70 z-[8] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-[15] flex flex-col items-center justify-center max-w-6xl mx-auto px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4 leading-tight">
            Best Practices{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              for
            </span>{" "}
            Security
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Lock Animation Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="relative flex flex-col items-center group">
            {/* Lock Top */}
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <Image
                src="/lock-top.png"
                alt="Lock top"
                width={50}
                height={50}
                className="transition-all duration-300 drop-shadow-lg"
                style={{
                  filter: "drop-shadow(0 0 10px rgba(112, 66, 248, 0.5))",
                }}
              />
            </motion.div>

            {/* Lock Main */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="relative mt-2"
            >
              <Image
                src="/lock-main.png"
                alt="Lock main"
                width={90}
                height={90}
                className="relative drop-shadow-2xl"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(112, 66, 248, 0.3))",
                }}
              />

              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Floating particles */}
            {mounted && (
              <>
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                    x: [-5, 5, -5],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-8 w-2 h-2 bg-cyan-400 rounded-full"
                />
                <motion.div
                  animate={{
                    y: [10, -10, 10],
                    x: [5, -5, 5],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-6 -left-6 w-3 h-3 bg-purple-400 rounded-full"
                />
                <motion.div
                  animate={{
                    y: [-5, 15, -5],
                    x: [-8, 8, -8],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute top-8 -left-10 w-1.5 h-1.5 bg-green-400 rounded-full"
                />
              </>
            )}
          </div>

          {/* Security Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative max-w-4xl mt-12"
          >
            {/* Background card */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b0b]/90 to-[#1a1a2e]/80 rounded-2xl border border-[#2A0E61]/50 backdrop-blur-md" />

            {/* Content */}
            <div className="relative z-10 px-8 py-8 rounded-2xl">
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-green-400 tracking-wider uppercase">
                    Security Principles
                  </span>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </div>
              </div>

              <p className="text-base md:text-lg leading-relaxed text-gray-300 text-center mb-8">
                Security best practices focus on building strong defenses
                against cyber threats. This includes using{" "}
                <span className="text-purple-400 font-semibold">
                  encryption
                </span>{" "}
                to protect sensitive data, keeping software and systems updated,
                enforcing{" "}
                <span className="text-cyan-400 font-semibold">
                  strong authentication
                </span>
                , monitoring for unusual activity, and educating users about
                safe practices.
              </p>

              {/* Security principles grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-lg border border-purple-500/20"
                >
                  <div className="text-2xl mb-2">🔐</div>
                  <div className="text-sm font-medium text-purple-300">
                    Strong Encryption
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 rounded-lg border border-cyan-500/20"
                >
                  <div className="text-2xl mb-2">🛡️</div>
                  <div className="text-sm font-medium text-cyan-300">
                    Active Monitoring
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-lg border border-green-500/20"
                >
                  <div className="text-2xl mb-2">🔑</div>
                  <div className="text-sm font-medium text-green-300">
                    Access Control
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Animated border */}
            <motion.div
              animate={{
                background: [
                  "linear-gradient(0deg, rgba(112, 66, 248, 0.3) 0%, rgba(0, 210, 255, 0.3) 100%)",
                  "linear-gradient(90deg, rgba(112, 66, 248, 0.3) 0%, rgba(0, 210, 255, 0.3) 100%)",
                  "linear-gradient(180deg, rgba(112, 66, 248, 0.3) 0%, rgba(0, 210, 255, 0.3) 100%)",
                  "linear-gradient(270deg, rgba(112, 66, 248, 0.3) 0%, rgba(0, 210, 255, 0.3) 100%)",
                  "linear-gradient(0deg, rgba(112, 66, 248, 0.3) 0%, rgba(0, 210, 255, 0.3) 100%)",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-2xl p-0.5 opacity-50"
            >
              <div className="w-full h-full bg-transparent rounded-2xl" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center"
        >
          <p className="cursive text-xl md:text-2xl text-gray-300 mb-4">
            &ldquo;Secure your data with end-to-end encryption.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-purple-500" />
            <div className="w-2 h-2 bg-purple-500 rounded-full" />
            <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500" />
            <div className="w-2 h-2 bg-cyan-500 rounded-full" />
            <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
