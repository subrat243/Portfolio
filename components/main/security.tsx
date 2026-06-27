"use client";

import { motion } from "framer-motion";
import { ShieldCheckIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { StarsCanvas } from "@/components/main/star-background";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { APP_CONFIG } from "@/config/app-config";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export const Security = () => {
  return (
    <motion.section
      id="security"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col items-center justify-center py-20 px-8 lg:px-10 relative min-h-screen overflow-hidden bg-[#F1F6F9]"
    >
      {/* Background Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <StarsCanvas />
      </div>



      <div className="relative z-10 w-full max-w-7xl">
        {/* Section Header */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="Welcome-box py-[8px] px-[7px] border border-[#9BA4B5]/40 opacity-[0.9] mb-10 mx-auto"
        >
          <ShieldCheckIcon className="text-[#394867] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Security Best Practices</h1>
        </motion.div>

        {/* Main Title / TextRevealCard */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center justify-center w-full mb-12"
        >
          <TextRevealCard
            text="Cybersecurity Best Practices"
            slogan="Essential security measures that every organization and individual must follow"
            revealText="Protecting digital assets & systems"
            revealSlogan="Protecting digital assets requires universal commitment and continuous vigilance"
            className="w-full max-w-4xl mx-auto bg-[#1F2121] border-[#9BA4B5]/30 rounded-2xl shadow-lg p-6"
          />
        </motion.div>

        {/* Security Practice Categories & Defense in Depth */}
        <div className="w-full mt-10">
          <HoverEffect
            id="security"
            items={[
              ...APP_CONFIG.security.bestPractices,
              {
                title: "Defense in Depth",
                description:
                  "Implementing multiple layers of security controls creates a comprehensive Defense in Depth strategy. No single security measure is sufficient; it's the combination of people, processes, and technology that creates an effective security posture against evolving cyber threats.",
                principles: [
                  "Zero Trust Architecture",
                  "Continuous Monitoring",
                  "Threat Intelligence",
                  "Security Automation",
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
