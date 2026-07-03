"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  technologies?: readonly string[];
};

export const ProjectCard = ({
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
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#9BA4B5]/20 bg-white/60 backdrop-blur-xl hover:shadow-[0_20px_40px_rgba(33,42,62,0.08)] hover:border-[#212A3E]/30 transition-all duration-500 h-full flex flex-col"
      >
        {/* Decorative Background Elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-[#212A3E]/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 ease-out" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-[#9BA4B5]/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 ease-out" />

        {/* Content Container */}
        <div className="relative p-6 lg:p-8 flex flex-col flex-grow z-10">
          {/* Header Icon */}
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F1F6F9] to-white border border-[#9BA4B5]/20 flex items-center justify-center text-[#212A3E] shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
              <ShieldCheckIcon className="w-6 h-6 stroke-[1.5]" />
            </div>

            {/* Minimal External Link Icon */}
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-transparent group-hover:bg-[#F1F6F9] text-[#9BA4B5] group-hover:text-[#212A3E] transition-colors duration-300">
              <ArrowTopRightOnSquareIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-[#212A3E] mb-3 group-hover:text-[#212A3E] transition-colors duration-300 line-clamp-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[#394867]/80 leading-relaxed text-sm lg:text-base transition-colors duration-300 flex-grow line-clamp-3 mb-6">
            {description}
          </p>

          {/* Technology Tags */}
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6 transition-all duration-300">
              {technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase rounded-md border transition-colors duration-300 bg-white text-[#394867] border-[#9BA4B5]/30 group-hover:border-[#212A3E]/20 group-hover:bg-[#F1F6F9]"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="px-2.5 py-1 bg-white text-[#394867] text-[11px] font-semibold tracking-wide uppercase rounded-md border border-[#9BA4B5]/30">
                  +{technologies.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Action Footer */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#9BA4B5]/10">
            <span className="text-sm text-[#212A3E] font-semibold group-hover:translate-x-1 transition-transform duration-300">
              View Project
            </span>
            <motion.div className="text-[#212A3E] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </motion.div>
          </div>

          {/* Bottom Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#212A3E] via-[#394867] to-[#212A3E] origin-left"
          />
        </div>
      </motion.div>
    </Link>
  );
};
