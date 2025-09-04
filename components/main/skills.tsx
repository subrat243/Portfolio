"use client";

import { SkillText } from "@/components/sub/skill-text";
import { StarsCanvas } from "@/components/main/star-background";
import VideoBackground from "@/components/ui/video-background";
import { motion } from "framer-motion";
import { SKILLS_CATEGORIES } from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center gap-3 min-h-screen overflow-hidden py-20 bg-[#030014]"
      style={{ minHeight: "100vh" }}
    >
      {/* Skills Video Background */}
      <VideoBackground
        src="/videos/skills-bg.webm"
        fallbackSrc="/videos/skills-bg.mp4"
        className="z-[4] pointer-events-none"
        opacity={0.4}
        blur={false}
        overlay={true}
        overlayOpacity={0.5}
      />

      {/* Stars Animation */}
      <div className="absolute inset-0 z-[7] pointer-events-none">
        <StarsCanvas />
      </div>

      {/* Gradient overlays for seamless blending */}
      <div className="absolute top-0 left-0 w-full h-32 z-[8] pointer-events-none bg-gradient-to-b from-[#030014] via-[#030014]/80 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 z-[8] pointer-events-none bg-gradient-to-t from-[#030014] via-[#030014]/80 to-transparent" />

      {/* Content Container */}
      <div className="relative z-[40] w-full max-w-7xl mx-auto px-4">
        <SkillText />

        {/* Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-10">
          {SKILLS_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="relative group"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b0b]/95 to-[#1a1a2e]/90 rounded-2xl border border-[#2A0E61]/50 backdrop-blur-md transition-all duration-300 group-hover:border-purple-500/50 group-hover:shadow-2xl group-hover:shadow-purple-500/10" />

              {/* Card Content */}
              <div className="relative z-10 p-8 min-h-[280px] rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-white bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.items.map((name, index) => (
                    <motion.span
                      key={`${cat.title}-${name}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.1 + index * 0.05 + 0.3,
                        duration: 0.3,
                      }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      className="relative text-sm px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-[#2A0E61]/70 hover:border-purple-400/50 transition-all duration-300 cursor-default text-gray-200 hover:text-white font-medium"
                      style={{
                        backdropFilter: "blur(4px)",
                        WebkitBackdropFilter: "blur(4px)",
                      }}
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />
                      <span className="relative z-10">{name}</span>
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Card hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom spacing */}
        <div className="h-20" />
      </div>
    </section>
  );
};
