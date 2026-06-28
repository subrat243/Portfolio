"use client";
import { motion } from "framer-motion";
import { PROJECTS } from "@/constants";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { InfiniteMovingProjects } from "@/components/ui/infinite-moving-projects";
import { KineticText } from "@/components/ui/kinetic-text";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 px-8 lg:px-10 relative min-h-screen overflow-hidden bg-transparent"
    >
      <div className="relative z-10 w-full max-w-[1400px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center mb-2 pointer-events-auto"
        >
          <div className="Welcome-box py-[8px] px-[7px] border border-[#9BA4B5]/40 opacity-90 inline-flex items-center mb-8 mx-auto">
            <SparklesIcon className="text-[#394867] mr-[10px] h-5 w-5" />
            <h2 className="Welcome-text text-[13px]">Featured Work</h2>
          </div>

          <KineticText text="My Projects" className="text-4xl md:text-5xl font-bold text-[#212A3E] text-center justify-center [font-optical-sizing:auto]" />

          <p className="text-[#394867] text-lg mt-4 max-w-2xl mx-auto text-center">
            Explore my cybersecurity projects and tools that demonstrate my
            skills in ethical hacking, network security, and threat detection.
          </p>
        </motion.div>

        {/* Infinite Moving Project Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full relative z-20"
        >
          <InfiniteMovingProjects items={PROJECTS} direction="right" speed="slow" />
        </motion.div>

      </div>
    </section>
  );
};
