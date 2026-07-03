"use client";
import { motion } from "framer-motion";
import { PROJECTS } from "@/constants";

import { InfiniteMovingProjects } from "@/components/ui/infinite-moving-projects";
import VariableProximity from "@/components/ui/variable-proximity";
import { useRef } from "react";

export const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 relative min-h-screen overflow-hidden bg-transparent w-full"
    >
      <div className="relative z-10 w-full max-w-[1400px] px-8 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center mb-2 pointer-events-auto"
        >
          <div className="Welcome-box py-[8px] px-[7px] border border-[#9BA4B5]/40 opacity-90 inline-flex items-center mb-3 mx-auto">
            <h2 className="Welcome-text text-[13px] px-2">Featured Work</h2>
          </div>

          <div
            className="w-full"
            ref={containerRef}
            style={{ position: "relative" }}
          >
            <VariableProximity
              label="Featured Projects"
              className="text-4xl md:text-5xl font-bold text-[#212A3E] text-center justify-center [font-optical-sizing:auto] block w-full"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
          </div>

          <p className="text-[#394867] text-lg mt-4 max-w-2xl mx-auto text-center">
            Every project begins with a question and ends with a lesson. These
            projects demonstrate my approach to cybersecurity—building tools,
            automating tasks, and applying knowledge to solve real-world
            security challenges.
          </p>
        </motion.div>
      </div>

      {/* Infinite Moving Project Cards - Edge to Edge */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full relative z-20 mt-4"
      >
        <InfiniteMovingProjects
          items={PROJECTS}
          direction="right"
          speed="slow"
        />
      </motion.div>
    </section>
  );
};
