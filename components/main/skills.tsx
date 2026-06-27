"use client";

import { SkillText } from "@/components/sub/skill-text";
import { StarsCanvas } from "@/components/main/star-background";
import { motion } from "framer-motion";
import { SKILLS_CATEGORIES } from "@/constants";
import { HoverEffect } from "@/components/ui/card-hover-effect";

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
        <div className="w-full mt-10">
          <HoverEffect
            id="skills"
            items={SKILLS_CATEGORIES}
            className="grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 py-10"
          />
        </div>
      </div>
    </section>
  );
};
