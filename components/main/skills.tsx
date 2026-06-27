"use client";

import { SkillText } from "@/components/sub/skill-text";
import { StarsCanvas } from "@/components/main/star-background";
import { motion } from "framer-motion";
import { SKILLS_CATEGORIES } from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center py-20 px-8 lg:px-10 relative min-h-screen overflow-hidden bg-[#F1F6F9]"
    >
      {/* Background Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <StarsCanvas />
      </div>



      <div className="relative z-10 w-full max-w-7xl">
        <SkillText />

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 w-full mt-10">
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
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="bg-white border border-[#9BA4B5]/40 rounded-2xl p-7 min-h-[240px] text-[#212A3E] shadow-sm hover:shadow-md hover:border-[#212A3E]/50 transition-all duration-300 z-20"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#212A3E]">
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
                    className="text-sm px-4 py-2 rounded-full bg-[#F1F6F9] border border-[#9BA4B5]/30 text-[#394867] hover:border-[#212A3E] hover:bg-[#212A3E]/5 transition-all duration-200 cursor-default font-medium"
                  >
                    {name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
