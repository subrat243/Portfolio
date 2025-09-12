"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  technologies?: readonly string[];
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  technologies = [],
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="block group h-full"
      tabIndex={0}
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative overflow-hidden rounded-xl shadow-xl border border-[#2A0E61] bg-gradient-to-br from-[#0b0b0b]/90 to-[#1a1a2e]/70 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[16/10] flex-shrink-0">
          <Image
            src={src}
            alt={title}
            width={600}
            height={375}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            priority={false}
            quality={85}
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />

          {/* External Link Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 8 }}
            whileHover={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-4 right-4 group-hover:opacity-100 opacity-0"
          >
            <div className="p-2.5 bg-black/30 backdrop-blur-md rounded-full border border-white/20 shadow-lg hover:bg-black/40 transition-colors duration-200">
              <ArrowTopRightOnSquareIcon className="w-4 h-4 text-white" />
            </div>
          </motion.div>

          {/* Status Badge */}
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            <div className="px-3 py-1 bg-gradient-to-r from-purple-500/80 to-cyan-500/80 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-xs font-medium text-white">Active</span>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-5 lg:p-6 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="text-lg lg:text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300 line-clamp-2 min-h-[3.5rem]">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed text-sm lg:text-base group-hover:text-gray-300 transition-colors duration-300 flex-grow line-clamp-3 mb-4">
            {description}
          </p>

          {/* Technology Tags */}
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
              {technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={tech}
                  className={`px-2 py-1 text-xs rounded-full border transition-colors duration-200 ${
                    index % 2 === 0
                      ? "bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30"
                      : "bg-cyan-500/20 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/30"
                  }`}
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full border border-gray-500/30">
                  +{technologies.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Action Footer */}
          <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-700/50 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150">
            <span className="text-xs text-gray-500 font-medium">
              View Project
            </span>
            <motion.div whileHover={{ x: 2 }} className="text-purple-400">
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            </motion.div>
          </div>

          {/* Bottom Gradient Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-purple-400 to-cyan-500 origin-left"
          />
        </div>

        {/* Card Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
      </motion.div>
    </Link>
  );
};
