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
            slogan="Secure by design, resilient by defense"
            revealText="Protecting digital assets & systems"
            revealSlogan="Continuous vigilance against evolving cyber threats"
            className="w-full max-w-4xl mx-auto bg-[#1F2121] border-[#9BA4B5]/30 rounded-2xl shadow-lg p-6"
          />
        </motion.div>

        {/* Visitor Guide */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-md border border-[#9BA4B5]/30 rounded-2xl p-8 mb-12 shadow-sm text-[#212A3E]"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#212A3E]">
            <span className="w-2 h-6 bg-[#394867] rounded-full inline-block"></span>
            Visitor Security Guide: Protecting Your Digital Footprint
          </h2>
          <p className="text-base md:text-lg text-[#394867] mb-6 leading-relaxed">
            Welcome! As a visitor in an interconnected digital world, understanding core security principles is your first line of defense. Implementing these structured practices ensures your digital identity and assets remain uncompromised.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#394867]">
            <div className="p-4 bg-[#F1F6F9] rounded-xl border border-[#9BA4B5]/20">
              <h3 className="font-bold text-base text-[#212A3E] mb-2">1. Network Security</h3>
              <p>Secure your connection. Ensure encryption (HTTPS/VPN) is active before transmitting sensitive data across public or untrusted networks.</p>
            </div>
            <div className="p-4 bg-[#F1F6F9] rounded-xl border border-[#9BA4B5]/20">
              <h3 className="font-bold text-base text-[#212A3E] mb-2">2. Access Control</h3>
              <p>Verify identity and enforce least privilege. Utilize Multi-Factor Authentication (MFA) and robust credential management to lock down accounts.</p>
            </div>
            <div className="p-4 bg-[#F1F6F9] rounded-xl border border-[#9BA4B5]/20">
              <h3 className="font-bold text-base text-[#212A3E] mb-2">3. Application Security</h3>
              <p>Validate and sanitize all inputs. Ensure the software and web applications you interact with adhere to secure coding practices and active defense protocols.</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-[#1F2121] text-[#9BA4B5] rounded-xl border border-[#9BA4B5]/30 flex items-center justify-between gap-4">
            <p className="text-sm">
              <strong className="text-white">The Golden Rule — Defense in Depth:</strong> Never rely on a single layer of security. Combining layered controls guarantees that if one barrier fails, backup mechanisms stand ready to neutralize the threat. Explore the detailed practices below to learn how to fortify your digital posture.
            </p>
          </div>
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
