"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { StarsCanvas } from "@/components/main/star-background";
import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <section
      id="encryption"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030014]"
    >
      {/* Background Stars */}
      <div className="absolute inset-0 z-stars pointer-events-none opacity-30">
        <StarsCanvas />
      </div>
      {/* Video background - Bottom layer */}
      <div className="absolute inset-0 z-video pointer-events-none">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 z-overlay pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-cyan-900/5"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Overlay above video, below content */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030014]/70 via-transparent to-[#030014]/70 z-overlay pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-content flex flex-col items-center justify-center max-w-6xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">
            Best Practices{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              for
            </span>{" "}
            Security
          </h2>
        </motion.div>

        {/* Lock Animation Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="relative flex flex-col items-center">
            <Image
              src="/lock-top.png"
              alt="Lock top"
              width={50}
              height={50}
              className="translate-y-5 transition-all duration-300 hover:translate-y-3"
            />
            <Image
              src="/lock-main.png"
              alt="Lock main"
              width={90}
              height={90}
              className="relative"
            />
          </div>

          {/* Security Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="Welcome-box px-6 py-4 border border-[#7042F88B] opacity-90 text-center max-w-4xl mt-8"
          >
            <p className="Welcome-text text-sm md:text-base leading-relaxed">
              Security best practices focus on building strong defenses against
              cyber threats. This includes using encryption to protect sensitive
              data, keeping software and systems updated, enforcing strong
              authentication, monitoring for unusual activity, and educating
              users about safe practices. By following these principles, systems
              remain resilient and trustworthy.
            </p>
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
          <p className="cursive text-xl text-gray-300">
            Secure your data with end-to-end encryption.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
