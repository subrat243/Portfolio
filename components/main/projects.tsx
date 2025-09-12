"use client";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { APP_CONFIG } from "@/config/app-config";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { StarsCanvas } from "@/components/main/star-background";

export const Projects = () => {
  // Split projects into rows of 4
  const projectRows = [];
  for (let i = 0; i < PROJECTS.length; i += 4) {
    projectRows.push(PROJECTS.slice(i, i + 4));
  }

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 px-8 lg:px-10 relative min-h-screen overflow-hidden bg-[#030014] border-t border-[#2A0E61]/50"
    >
      {/* Background Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <StarsCanvas />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
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
          <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-90 inline-flex items-center mb-8 mx-auto">
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h2 className="Welcome-text text-[13px]">Featured Work</h2>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center">
            My Projects
          </h1>

          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto text-center">
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 z-10 relative"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
            className="space-y-6"
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Ready to Collaborate?
                </span>
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                I'm always excited to work on new cybersecurity projects and
                explore innovative security solutions. Let's build something
                amazing together!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="https://github.com/subrat243"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 shadow-lg hover:shadow-glow cursor-pointer relative group"
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
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-purple-500/50 text-white font-semibold rounded-lg hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 cursor-pointer"
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
      </div>
    </section>
  );
};
