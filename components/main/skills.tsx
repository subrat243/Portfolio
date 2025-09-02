"use client";
import { SkillText } from "@/components/sub/skill-text";
import { motion } from "framer-motion";
import { SKILLS_CATEGORIES } from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 min-h-screen relative overflow-hidden py-20 bg-[#030014]"
    >
      {/* Video in front */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <video
          className="w-full h-full object-cover opacity-80"
          preload="metadata"
          playsInline
          loop
          muted
          autoPlay
        >
          <source src="/videos/skills-bg.webm" type="video/webm" />
        </video>
      </div>
      {/* Overlay above video, below content */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030014]/70 via-transparent to-[#030014]/70 z-30 pointer-events-none" />
      <div className="relative z-40 w-full max-w-7xl">
        <SkillText />

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 w-full px-8 mt-10">
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
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="bg-gradient-to-br from-[#0b0b0b]/80 to-[#1a1a2e]/60 border border-[#2A0E61] rounded-2xl p-7 min-h-[240px] text-gray-200 shadow-xl backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-white bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((name) => (
                  <motion.span
                    key={`${cat.title}-${name}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-[#2A0E61] hover:border-purple-400/50 transition-all duration-200 cursor-default"
                  >
                    {name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* (Background video now handled above for z-index layering) */}
    </section>
  );
};
