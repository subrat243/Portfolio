"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] relative z-content">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-col items-center justify-center gap-8">
          {/* Show both Social Media and Contact Me sections horizontally */}
          {FOOTER_DATA.map((column, columnIndex) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: columnIndex * 0.2, duration: 0.5 }}
              className="flex flex-col items-center justify-center w-full"
            >
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="font-bold text-[18px] mb-4 text-white cursor-default"
              >
                {column.title}
              </motion.h3>
              <div className="flex flex-row items-center justify-center gap-4 md:gap-6 flex-wrap">
                {column.data.map(({ icon: Icon, name, link }, index) => (
                  <motion.div
                    key={`${column.title}-${name}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: columnIndex * 0.2 + index * 0.1,
                      duration: 0.3,
                    }}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex flex-row items-center group relative p-2 md:p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-cyan-500/10 hover:shadow-lg hover:shadow-purple-500/20 border border-transparent hover:border-purple-500/30"
                    >
                      {/* Background glow effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/20 group-hover:to-cyan-500/20 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>

                      {/* Icon with animation */}
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                      >
                        {Icon && (
                          <Icon className="text-xl text-gray-300 group-hover:text-white transition-colors duration-200" />
                        )}
                      </motion.div>

                      {/* Text with gradient on hover */}
                      <span className="text-[12px] md:text-[14px] ml-[6px] md:ml-[8px] relative text-gray-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-200 font-medium">
                        {name}
                      </span>

                      {/* Hover indicator */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
                      />
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8 md:mt-12 mb-[20px] text-[13px] md:text-[15px] text-center border-t border-gray-700/50 pt-6 md:pt-8 w-full max-w-4xl"
        >
          <span className="text-gray-400">
            &copy; Subrat Samantaray {new Date().getFullYear()} All rights
            reserved.
          </span>
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-2 text-xs text-purple-400"
          >
            Built with fun and Curiosity
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
