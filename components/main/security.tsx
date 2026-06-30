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
          <h1 className="Welcome-text text-[13px] px-2">Security Best Practices</h1>
        </motion.div>

        {/* Cover Title */}
        <motion.h1
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#212A3E] max-w-7xl mx-auto text-center mt-6 mb-0 relative z-20 py-2 pointer-events-auto"
        >
          Cybersecurity & <Cover>Best Practices</Cover>
        </motion.h1>

        {/* Sub Heading */}
        <motion.p
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[#394867] text-lg mt-4 mb-8 max-w-2xl mx-auto text-center pointer-events-auto font-medium"
        >
          Fundamental security principles and advanced defensive methodologies essential for protecting modern systems and mitigating emerging threats.
        </motion.p>

        {/* Security Practice Categories & Defense in Depth */}
        <div className="w-full mt-4">
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
