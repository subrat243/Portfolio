"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { FOOTER_DATA } from "@/constants";
import { APP_CONFIG } from "@/config/app-config";
import { WordRotate } from "@/registry/magicui/word-rotate";

export const Footer = () => {
  return (
    <footer id="contact" className="w-full h-full bg-transparent text-[#394867] shadow-md p-[15px] py-20 relative z-[9999] overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center m-auto relative z-[10000] pointer-events-auto">
        {/* Call to Action - Ready to Collaborate */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 z-10 relative w-full px-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="max-w-2xl mx-auto">
              <div className="mb-4 pointer-events-auto flex items-center justify-center text-3xl font-bold text-[#212A3E]">
                <div className="py-2 flex items-center justify-end w-[140px] md:w-[160px] text-right">
                  <span>Ready to</span>
                </div>
                <div className="flex items-center justify-start w-[200px] md:w-[220px] pl-2">
                  <WordRotate
                    className="text-3xl font-bold text-[#212A3E] text-left"
                    words={["Collaborate", "Innovate", "Secure", "Build"]}
                  />
                </div>
              </div>
              <p className="text-[#394867] mb-6 leading-relaxed text-base md:text-lg">
                I&apos;m always excited to work on new cybersecurity projects
                and explore innovative security solutions. Let&apos;s build
                something amazing together!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="https://github.com/subrat243"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#212A3E] text-white font-semibold rounded-lg hover:bg-[#394867] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#212A3E]/45 focus:ring-offset-2 shadow-md hover:shadow-lg cursor-pointer relative group"
                tabIndex={0}
                style={{ pointerEvents: "auto" }}
              >
                <span className="relative z-10">View More Projects</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.a>

              <motion.a
                href={APP_CONFIG.social.email}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#212A3E] text-[#212A3E] font-semibold rounded-lg hover:bg-[#212A3E]/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#212A3E]/45 focus:ring-offset-2 cursor-pointer"
                style={{ pointerEvents: "auto" }}
              >
                <span>Get In Touch</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <div className="w-full max-w-5xl h-full flex flex-col md:flex-row items-center justify-around gap-10 md:gap-6 mx-auto border-t border-[#9BA4B5]/20 pt-12">
          {/* Show both Social Media and Contact Me sections horizontally */}
          {FOOTER_DATA.map((column, columnIndex) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: columnIndex * 0.2, duration: 0.5 }}
              className="flex-1 flex flex-col items-center justify-center pointer-events-auto"
            >
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="font-bold text-[18px] mb-4 text-[#212A3E] cursor-default"
              >
                {column.title}
              </motion.h3>
              <div className="flex flex-row items-center justify-center gap-4 md:gap-6 flex-wrap pointer-events-auto">
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
                    className="pointer-events-auto"
                  >
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex flex-row items-center group relative p-2 md:p-3 rounded-xl transition-all duration-300 hover:bg-[#394867]/10 border border-transparent hover:border-[#9BA4B5]/30 cursor-pointer z-[10001] pointer-events-auto"
                      style={{ pointerEvents: "auto", position: "relative" }}
                    >
                      {/* Icon with animation */}
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                        className="relative pointer-events-none"
                      >
                        {Icon && (
                          <Icon className="text-xl text-[#394867] group-hover:text-[#212A3E] transition-colors duration-200 pointer-events-none" />
                        )}
                      </motion.div>

                      {/* Text */}
                      <span className="text-[12px] md:text-[14px] ml-[6px] md:ml-[8px] relative text-[#394867] group-hover:text-[#212A3E] transition-all duration-200 font-medium pointer-events-none">
                        {name}
                      </span>

                      {/* Hover indicator */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 h-0.5 bg-[#212A3E] rounded-full pointer-events-none"
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
          className="mt-8 md:mt-12 mb-[20px] text-[13px] md:text-[15px] text-center border-t border-[#9BA4B5]/30 pt-6 md:pt-8 w-full max-w-4xl pointer-events-auto"
        >
          <span className="text-[#9BA4B5]">
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
            className="mt-2 text-xs text-[#394867]"
          >
            Built with fun and Curiosity
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
