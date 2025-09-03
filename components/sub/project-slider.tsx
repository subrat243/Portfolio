"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { AnimatedProjectCard } from "./animated-project-card";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: readonly string[];
  featured: boolean;
};

type ProjectSliderProps = {
  projects: Project[];
};

export const ProjectSlider = ({ projects }: ProjectSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + projects.length) % projects.length;
      cards.push({
        ...projects[index],
        position: i,
        isActive: i === 0,
      });
    }
    return cards;
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4">
      {/* Main Slider Container */}
      <div className="relative min-h-[500px] flex items-center justify-center">
        {/* Cards Container */}
        <div className="relative w-full flex items-center justify-center">
          <div className="flex items-center justify-center space-x-6 overflow-visible">
            {getVisibleCards().map((project, index) => (
              <motion.div
                key={`${project.id}-${currentIndex}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity:
                    project.position === 0
                      ? 1
                      : 0.6 - Math.abs(project.position) * 0.1,
                  scale:
                    project.position === 0
                      ? 1
                      : 0.8 - Math.abs(project.position) * 0.1,
                  x: project.position * 90,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                className={`relative ${
                  project.position === 0
                    ? "z-30"
                    : Math.abs(project.position) === 1
                      ? "z-20"
                      : "z-10"
                }`}
              >
                <AnimatedProjectCard
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  technologies={project.technologies}
                  isActive={project.isActive}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <motion.button
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="absolute left-4 z-40 p-3 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 hover:border-purple-400 rounded-full backdrop-blur-sm transition-all duration-300 group"
          aria-label="Previous project"
        >
          <ChevronLeftIcon className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="absolute right-4 z-40 p-3 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 hover:border-purple-400 rounded-full backdrop-blur-sm transition-all duration-300 group"
          aria-label="Next project"
        >
          <ChevronRightIcon className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
        </motion.button>
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center space-x-3 mt-8">
        {projects.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-gradient-to-r from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/50"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
