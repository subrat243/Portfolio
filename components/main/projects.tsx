"use client";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { APP_CONFIG } from "@/config/app-config";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { StarsCanvas } from "@/components/main/star-background";

import InfiniteMovingCardsDemo from "@/components/infinite-moving-cards-demo";

export const Projects = () => {
  // Split projects into rows of 4
  const projectRows = [];
  for (let i = 0; i < PROJECTS.length; i += 4) {
    projectRows.push(PROJECTS.slice(i, i + 4));
  }

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 px-8 lg:px-10 relative min-h-screen overflow-hidden bg-[#F1F6F9]"
    >
      {/* Background Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <StarsCanvas />
      </div>



      <div className="relative z-10 w-full max-w-[1400px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center mb-16"
        >
          <div className="Welcome-box py-[8px] px-[7px] border border-[#9BA4B5]/40 opacity-90 inline-flex items-center mb-8 mx-auto">
            <SparklesIcon className="text-[#394867] mr-[10px] h-5 w-5" />
            <h2 className="Welcome-text text-[13px]">Featured Work</h2>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#212A3E] text-center">
            My Projects
          </h1>

          <p className="text-[#394867] text-lg mt-4 max-w-2xl mx-auto text-center">
            Explore my cybersecurity projects and tools that demonstrate my
            skills in ethical hacking, network security, and threat detection.
          </p>
        </motion.div>

        {/* Projects Rows */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-12 relative z-20"
          style={{ pointerEvents: "auto" }}
        >
          {projectRows.map((row, rowIndex) => (
            <motion.div
              key={`row-${rowIndex}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: rowIndex * 0.3,
                ease: "easeOut",
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            >
              {row.map((project, projectIndex) => {
                const globalIndex = rowIndex * 4 + projectIndex;
                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.6,
                      delay: projectIndex * 0.15,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      scale: 1.03,
                      y: -8,
                      transition: { duration: 0.3 },
                    }}
                    style={{ pointerEvents: "auto" }}
                    className="flex-1 min-w-0 group"
                  >
                    <ProjectCard
                      src={project.image}
                      title={project.title}
                      description={project.description}
                      link={project.link}
                      technologies={project.technologies}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 w-full relative z-20">
          <InfiniteMovingCardsDemo />
        </div>

      </div>
    </section>
  );
};
