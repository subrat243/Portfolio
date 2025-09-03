"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaTelegram } from "react-icons/fa";
import { MdEmail, MdClose, MdShare } from "react-icons/md";
import { RxLinkedinLogo, RxTwitterLogo, RxGithubLogo } from "react-icons/rx";

export const FloatingSocial = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const socialLinks = [
    {
      name: "X (Twitter)",
      icon: RxTwitterLogo,
      url: "https://x.com/0xSubrat",
      color: "#1DA1F2",
      bgClass: "hover:bg-blue-500/20 hover:shadow-blue-500/30",
    },
    {
      name: "LinkedIn",
      icon: RxLinkedinLogo,
      url: "https://linkedin.com/in/subrat243",
      color: "#0077B5",
      bgClass: "hover:bg-blue-600/20 hover:shadow-blue-600/30",
    },
    {
      name: "GitHub",
      icon: RxGithubLogo,
      url: "https://github.com/subrat243",
      color: "#333",
      bgClass: "hover:bg-gray-600/20 hover:shadow-gray-500/30",
    },
    {
      name: "Telegram",
      icon: FaTelegram,
      url: "https://t.me/subrat243",
      color: "#0088cc",
      bgClass: "hover:bg-blue-500/20 hover:shadow-blue-500/30",
    },
    {
      name: "Email",
      icon: MdEmail,
      url: "mailto:subratsamantaray43@gmail.com",
      color: "#EA4335",
      bgClass: "hover:bg-red-500/20 hover:shadow-red-500/30",
    },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[50]">
      <div className="flex flex-col items-center">
        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 mb-4"
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="close"
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -180, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MdClose className="text-white text-xl" />
              </motion.div>
            ) : (
              <motion.div
                key="share"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MdShare className="text-white text-xl" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Social Links */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1, duration: 0.2 }}
                  whileHover={{ x: -5 }}
                >
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={`group relative flex items-center bg-black/70 backdrop-blur-sm border border-gray-700 rounded-full p-3 transition-all duration-300 ${social.bgClass} hover:border-gray-500`}
                  >
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <social.icon className="text-gray-300 text-lg group-hover:text-white transition-colors duration-200" />
                    </motion.div>

                    {/* Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, x: 10, scale: 0.8 }}
                      whileHover={{ opacity: 1, x: 0, scale: 1 }}
                      className="absolute right-full mr-3 px-3 py-2 bg-black/90 text-white text-sm rounded-lg whitespace-nowrap pointer-events-none border border-gray-700"
                    >
                      {social.name}
                      {/* Arrow */}
                      <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-black/90 border-r border-b border-gray-700 rotate-45"></div>
                    </motion.div>

                    {/* Pulse Effect */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      className="absolute inset-0 rounded-full border-2 border-purple-400"
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Connection Lines */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100px", opacity: 0.3 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="w-px bg-gradient-to-b from-purple-500 to-transparent mt-4"
            />
          )}
        </AnimatePresence>
      </div>

      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur-xl -z-[5]"
      />
    </div>
  );
};
