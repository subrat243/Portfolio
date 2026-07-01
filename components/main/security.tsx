"use client";

import { motion } from "framer-motion";
import { ShieldCheckIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { APP_CONFIG } from "@/config/app-config";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Cover } from "@/components/ui/cover";

export const Security = () => {
  return (
    <motion.section
      id="security"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col items-center justify-center py-20 px-8 lg:px-10 relative min-h-screen overflow-hidden bg-transparent"
    >
      <div className="relative z-10 w-full max-w-7xl">
        {/* Section Header */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="Welcome-box py-[8px] px-[7px] border border-[#9BA4B5]/40 opacity-[0.9] mb-3 mx-auto"
        >
          <h1 className="Welcome-text text-[13px] px-2">Security Philosophy</h1>
        </motion.div>

        {/* Cover Title */}
        <motion.h1
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#212A3E] max-w-7xl mx-auto text-center mt-6 mb-0 relative z-20 py-2 pointer-events-auto"
        >
          Cybersecurity & <Cover>Mindset</Cover>
        </motion.h1>

        {/* Sub Heading */}
        <motion.p
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[#394867] text-lg mt-4 mb-8 max-w-2xl mx-auto text-center pointer-events-auto font-medium"
        >
          Strong security begins with the right mindset. These mindset guide how I approach system design, vulnerability assessment, and defensive security.
        </motion.p>

        {/* Security Practice Categories & Defense in Depth */}
        <div className="w-full mt-4">
          <HoverEffect
            id="security"
            items={[
              ...APP_CONFIG.security.bestPractices,
              {
                title: "Think. Test. Secure.",
                description:
                  "I believe effective cybersecurity starts with understanding how attackers think. By combining an offensive mindset with defensive strategies, I focus on identifying weaknesses, reducing risk, and building systems that remain secure, resilient, and prepared for evolving threats.",
                principles: [
                  "Least Privilege",
                  "Continuous Monitoring",
                  "Risk Assessment",
                  "Security Awareness",
                ],
                fullWidth: true,
              },
            ]}
          />
        </div>
      </div>
    </motion.section>
  );
};
