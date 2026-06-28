"use client";

import { SkillText } from "@/components/sub/skill-text";
import { motion } from "framer-motion";
import { SKILLS_CATEGORIES } from "@/constants";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import LinkPreviewDemo from "@/components/link-preview-demo";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center py-20 px-8 lg:px-10 relative min-h-screen overflow-hidden bg-[#F1F6F9]"
    >
      <div className="relative z-10 w-full max-w-7xl">
        <SkillText />

        {/* Category Cards */}
        <div className="w-full mt-10">
          <HoverEffect
            id="skills"
            items={SKILLS_CATEGORIES}
            className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10"
          />
        </div>

        {/* Link Preview Demo */}
        <div className="w-full mt-12 relative z-20">
          <LinkPreviewDemo />
        </div>
      </div>
    </section>
  );
};
