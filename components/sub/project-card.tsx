"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

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
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative overflow-hidden rounded-xl shadow-sm border border-[#9BA4B5]/40 bg-white hover:border-[#212A3E]/60 transition-all duration-300 h-full flex flex-col"
      >
        {/* Content Container */}
        <div className="p-5 lg:p-6 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="text-lg lg:text-xl font-bold text-[#212A3E] mb-3 group-hover:text-[#394867] transition-all duration-300 line-clamp-2 min-h-[3.5rem]">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[#394867]/90 leading-relaxed text-sm lg:text-base group-hover:text-[#394867] transition-colors duration-300 flex-grow line-clamp-3 mb-4">
            {description}
          </p>

          {/* Technology Tags */}
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4 transition-all duration-300">
              {technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs rounded-full border transition-colors duration-200 bg-[#F1F6F9] text-[#394867] border-[#9BA4B5]/40 hover:bg-[#212A3E]/5"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="px-2 py-1 bg-[#F1F6F9] text-[#394867] text-xs rounded-full border border-[#9BA4B5]/40">
                  +{technologies.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Action Footer */}
          <div className="flex items-center justify-between mt-auto pt-2 border-t border-[#9BA4B5]/20 transition-all duration-300">
            <span className="text-xs text-[#9BA4B5] font-medium">
              View Project
            </span>
            <motion.div whileHover={{ x: 2 }} className="text-[#212A3E]">
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            </motion.div>
          </div>

          {/* Bottom Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-[#212A3E] origin-left"
          />
        </div>
      </motion.div>
    </Link>
  );
};
