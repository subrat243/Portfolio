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

        {/* Main Title */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#212A3E] mb-4">
            <span>
              Cybersecurity
            </span>{" "}
            Best Practices
          </h2>
          <p className="text-xl text-[#394867] max-w-3xl mx-auto leading-relaxed">
            Essential security practices and methodologies to protect digital
            assets and maintain a robust security posture in today&apos;s threat
            landscape.
          </p>
        </motion.div>

        {/* Security Practice Categories & Defense in Depth */}
        <div className="w-full mt-10">
          <HoverEffect
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
