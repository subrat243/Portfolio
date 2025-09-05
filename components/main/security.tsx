"use client";

import { motion } from "framer-motion";
import { ShieldCheckIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { StarsCanvas } from "@/components/main/star-background";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { APP_CONFIG } from "@/config/app-config";

export const Security = () => {
  return (
    <motion.section
      id="security"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col items-center justify-center py-20 px-8 lg:px-10 relative min-h-screen overflow-hidden bg-[#030014] border-t border-[#2A0E61]/50"
    >
      {/* Video background - Bottom layer */}
      <div className="absolute inset-0 z-video pointer-events-none">
        <video
          className="w-full h-full object-cover opacity-40"
          preload="metadata"
          playsInline
          loop
          muted
          autoPlay
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Stars Animation - Above video but below content */}
      <div className="absolute inset-0 z-overlay pointer-events-none opacity-40">
        <StarsCanvas />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 z-overlay pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      </div>

      {/* Enhanced gradient overlays for seamless blending */}
      <div className="absolute top-0 left-0 w-full h-20 z-overlay pointer-events-none bg-gradient-to-b from-[#030014] via-[#030014]/80 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-20 z-overlay pointer-events-none bg-gradient-to-t from-[#030014] via-[#030014]/80 to-transparent" />

      <div className="relative z-content w-full max-w-7xl">
        {/* Section Header */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-10 mx-auto"
        >
          <ShieldCheckIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Security Best Practices</h1>
        </motion.div>

        {/* Main Title */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Cybersecurity
            </span>{" "}
            Best Practices
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Essential security practices and methodologies to protect digital
            assets and maintain a robust security posture in today&apos;s threat
            landscape.
          </p>
        </motion.div>

        {/* Security Practice Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full mt-10">
          {APP_CONFIG.security.bestPractices.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: i * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="bg-gradient-to-br from-[#0b0b0b]/90 to-[#1a1a2e]/80 border border-[#2A0E61] rounded-2xl p-7 min-h-[320px] text-gray-200 shadow-xl backdrop-blur-md hover:border-purple-500/50 transition-all duration-300 z-card"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mr-4">
                  <LockClosedIcon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {category.title}
                </h3>
              </div>

              {/* Practice Items */}
              <div className="space-y-3">
                {category.practices.map((practice, index) => (
                  <motion.div
                    key={`${category.title}-${practice}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.1 + index * 0.05 + 0.3,
                      duration: 0.4,
                    }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-3 group cursor-default"
                  >
                    <div className="flex-shrink-0 mt-2">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:scale-125 transition-transform duration-200" />
                    </div>
                    <span className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-200">
                      {practice}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
                className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Security Focus Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-[#0b0b0b]/90 to-[#1a1a2e]/80 border border-[#2A0E61] rounded-2xl p-8 backdrop-blur-md hover:border-purple-500/50 transition-all duration-300 max-w-4xl mx-auto">
            <motion.div whileHover={{ scale: 1.05 }} className="mb-6">
              <ShieldCheckIcon className="w-16 h-16 text-purple-400 mx-auto mb-4" />
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Defense in Depth
              </span>
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto text-lg">
              Implementing multiple layers of security controls creates a
              comprehensive Defense in Depth strategy. No single security
              measure is sufficient; it&apos;s the combination of people,
              processes, and technology that creates an effective security
              posture against evolving cyber threats.
            </p>

            {/* Key Principles */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {[
                "Zero Trust Architecture",
                "Continuous Monitoring",
                "Threat Intelligence",
                "Security Automation",
              ].map((principle, index) => (
                <motion.span
                  key={principle}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-sm text-white hover:border-purple-400 transition-all duration-300"
                >
                  {principle}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
