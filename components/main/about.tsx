"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SparklesIcon } from "@heroicons/react/24/solid";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { Highlighter } from "@/components/ui/highlighter";
import { KineticText } from "@/components/ui/kinetic-text";

export const About = () => {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col items-center justify-center py-20 px-8 lg:px-10 relative min-h-screen overflow-hidden bg-transparent"
    >
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl">
        {/* Section Header */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="Welcome-box py-[8px] px-[7px] border border-[#9BA4B5]/40 opacity-[0.9] mb-3 mx-auto"
        >
          <SparklesIcon className="text-[#394867] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Wanna Know About Me</h1>
        </motion.div>

        <div className="flex flex-col items-center justify-center gap-10 w-full">
          {/* About Content */}
          <motion.div
            variants={slideInFromRight(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6 text-start lg:text-left max-w-2xl mx-auto"
          >
            <motion.div
              variants={slideInFromRight(0.6)}
              className="pointer-events-auto"
            >
              <KineticText text="Who Am I?" className="text-4xl md:text-5xl font-bold text-[#212A3E] text-left justify-start [font-optical-sizing:auto]" />
            </motion.div>

            <motion.p
              variants={slideInFromRight(0.9)}
              className="text-lg text-[#394867] leading-relaxed"
            >
              I&apos;m a passionate{" "}
              <Highlighter isView action="highlight" color="#DDE6ED" className="text-[#212A3E] font-bold px-1">
                Cybersecurity student
              </Highlighter>{" "}
              and{" "}
              <Highlighter isView action="highlight" color="#DDE6ED" strokeWidth={2} className="text-[#212A3E] font-bold">
                security enthusiast
              </Highlighter>{" "}
              who thrives on exploring the intricate world of digital security.
              I specialize in{" "}
              <Highlighter isView action="box" color="#9BA4B5" className="text-[#394867] font-semibold px-1">
                Penetration Testing
              </Highlighter>,{" "}
              <Highlighter isView action="box" color="#9BA4B5" className="text-[#394867] font-semibold px-1">
                Network Security
              </Highlighter>, and{" "}
              <Highlighter isView action="box" color="#9BA4B5" className="text-[#394867] font-semibold px-1">
                Web Application Security
              </Highlighter>.
            </motion.p>

            <motion.p
              variants={slideInFromRight(1.1)}
              className="text-lg text-[#394867]/90 leading-relaxed"
            >
              With hands-on experience using industry-standard tools like{" "}
              <Highlighter isView action="underline" color="#9BA4B5" className="text-[#212A3E] font-medium">Nmap</Highlighter>,{" "}
              <Highlighter isView action="underline" color="#9BA4B5" className="text-[#212A3E] font-medium">Wireshark</Highlighter>,{" "}
              <Highlighter isView action="underline" color="#9BA4B5" className="text-[#212A3E] font-medium">Metasploit</Highlighter>, and{" "}
              <Highlighter isView action="underline" color="#9BA4B5" className="text-[#212A3E] font-medium">Burp Suite</Highlighter>, I have
              developed a deep understanding of network protocols, security
              frameworks, and threat detection methodologies.
            </motion.p>

            <motion.p
              variants={slideInFromRight(1.3)}
              className="text-lg text-[#394867]/90 leading-relaxed"
            >
              My passion extends beyond technical skills to include{" "}
              <Highlighter isView action="highlight" color="#DDE6ED" className="text-[#212A3E] font-medium px-1">ethical hacking</Highlighter>,{" "}
              <Highlighter isView action="highlight" color="#DDE6ED" className="text-[#212A3E] font-medium px-1">digital forensics</Highlighter>, and{" "}
              <Highlighter isView action="highlight" color="#DDE6ED" className="text-[#212A3E] font-medium px-1">threat intelligence</Highlighter>. My
              ultimate goal is to contribute to building a safer digital world
              through continuous learning, practical security implementations,
              and knowledge sharing with the cybersecurity community.
            </motion.p>

          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
