"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import { NAV_LINKS, CV_DOWNLOAD_URL } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px] relative">
        <div className="hidden md:block text-gray-300">Subrat Samantaray</div>

        {/* Web Navbar */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-center">
          <div className="flex items-center justify-between w-full h-auto border-[rgba(145, 109, 255, 0.38)] bg-[rgb(3, 0, 20)] px-[20px] py-[10px] rounded-full text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link.startsWith("#") ? `/${link.link}` : link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Download CV Button - Absolute Right Corner */}
        <div className="hidden md:flex">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <Link
              href={CV_DOWNLOAD_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white font-medium hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 relative overflow-hidden"
            >
              {/* Background pulse effect */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
              />
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <ArrowDownTrayIcon className="w-4 h-4" />
              </motion.div>
              <span className="relative z-10">Download CV</span>
            </Link>

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              whileHover={{ opacity: 1, y: 0, scale: 1 }}
              className="absolute top-full mt-2 right-0 bg-black/90 text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap pointer-events-none border border-gray-700"
            >
              View & Download CV
              <div className="absolute bottom-full right-4 w-2 h-2 bg-black/90 border-l border-t border-gray-700 rotate-45"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Layout - CV Button and Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          {/* Mobile CV Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={CV_DOWNLOAD_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white text-sm font-medium hover:from-purple-600 hover:to-cyan-600 transition-all duration-300"
            >
              <ArrowDownTrayIcon className="w-3 h-3" />
              CV
            </Link>
          </motion.div>

          {/* Hamburger Menu */}
          <button
            className="text-white focus:outline-none text-3xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 md:hidden">
          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link.startsWith("#") ? `/${link.link}` : link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="flex justify-center gap-6 mt-6" />
        </div>
      )}
    </div>
  );
};
