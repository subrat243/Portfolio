"use client";

import { SkillText } from "@/components/sub/skill-text";
import { motion } from "framer-motion";
import { SKILLS_CATEGORIES } from "@/constants";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { WavyBackground } from "@/components/ui/wavy-background";

export const Skills = () => {
  return (
    <section id="skills" className="relative w-full">
      <WavyBackground containerClassName="py-20 px-8 lg:px-10 min-h-screen" waveOpacity={0.12}>
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <SkillText />

          {/* Category Cards */}
          <div className="w-full mt-2">
            <HoverEffect
              id="skills"
              items={SKILLS_CATEGORIES}
              className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            />
          </div>
        </div>
      </WavyBackground>
    </section>
  );
};
