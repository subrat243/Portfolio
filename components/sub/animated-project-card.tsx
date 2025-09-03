"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

type AnimatedProjectCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: readonly string[];
  isActive: boolean;
};

export const AnimatedProjectCard = ({
  id,
  title,
  description,
  image,
  link,
  technologies,
  isActive,
}: AnimatedProjectCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isActive) {
      setIsFlipped(!isFlipped);
    }
  };

  const cardVariants = {
    inactive: {
      scale: 0.8,
      opacity: 0.6,
      rotateY: 0,
      z: 0,
    },
    active: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      z: 10,
    },
    flipped: {
      scale: 1,
      opacity: 1,
      rotateY: 180,
      z: 10,
    },
  };

  const frontVariants = {
    visible: { rotateY: 0, opacity: 1 },
    hidden: { rotateY: 180, opacity: 0 },
  };

  const backVariants = {
    visible: { rotateY: 0, opacity: 1 },
    hidden: { rotateY: -180, opacity: 0 },
  };

  return (
    <div
      className={`relative w-80 h-96 ${isActive ? "cursor-pointer" : "cursor-default"}`}
      onClick={handleCardClick}
      style={{
        transform: !isActive
          ? "scale(0.8)"
          : isFlipped
            ? "rotateY(180deg)"
            : "scale(1)",
        opacity: isActive ? 1 : 0.6,
        transition: "all 0.6s ease-in-out",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Card Container */}
      <div className="relative w-full h-full">
        {/* Front Side */}
        {!isFlipped && (
          <div className="absolute inset-0 w-full h-full">
            <div
              className={`w-full h-full bg-gradient-to-br from-[#0b0b0b]/90 to-[#1a1a2e]/70 backdrop-blur-sm border rounded-2xl overflow-hidden shadow-2xl group transition-all duration-300 ${isActive ? "border-purple-500/50 shadow-purple-500/20" : "border-[#2A0E61]"}`}
            >
              {/* Image Section */}
              <div className="relative h-2/3 overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Flip Indicator */}
                {isActive && (
                  <div className="absolute top-4 right-4 p-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30">
                    <CodeBracketIcon className="w-5 h-5 text-purple-400" />
                  </div>
                )}
              </div>

              {/* Title Section */}
              <div className="relative h-1/3 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300 line-clamp-2">
                  {title}
                </h3>

                {/* Technologies Preview */}
                <div className="flex flex-wrap gap-1 mt-2">
                  {technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={`${id}-tech-${index}`}
                      className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30">
                      +{technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl" />
              </div>
            </div>
          </div>
        )}

        {/* Back Side */}
        {isFlipped && (
          <div
            className="absolute inset-0 w-full h-full"
            style={{ transform: "rotateY(180deg)" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-[#1a1a2e]/90 to-[#0b0b0b]/70 backdrop-blur-sm border border-purple-500/50 rounded-2xl overflow-hidden shadow-2xl p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 line-clamp-2">
                  {title}
                </h3>
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-full border border-purple-500/30 hover:border-purple-400 transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 text-purple-400" />
                </Link>
              </div>

              {/* Description */}
              <div className="flex-1 mb-4">
                <p className="text-sm text-gray-300 leading-relaxed overflow-y-auto max-h-48 custom-scrollbar pr-2">
                  {description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={`${id}-back-tech-${index}`}
                      className="text-xs px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Card Border Glow */}
        {isActive && (
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur opacity-50 -z-10" />
        )}
      </div>
    </div>
  );
};
