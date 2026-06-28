"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SparklesIcon } from "@heroicons/react/24/solid";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { CometCard } from "@/components/ui/comet-card";
import { Highlighter } from "@/components/ui/highlighter";

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
          className="Welcome-box py-[8px] px-[7px] border border-[#9BA4B5]/40 opacity-[0.9] mb-10 mx-auto"
        >
          <SparklesIcon className="text-[#394867] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">About Me</h1>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full">
          {/* Profile Card */}
          <motion.div
            variants={slideInFromLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group"
            >
              <CometCard className="w-80">
                <div
                  className="flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 md:p-4 shadow-xl"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "none",
                    opacity: 1,
                  }}
                >
                  <div className="mx-2 flex-1">
                    <div className="relative mt-2 aspect-[3/4] w-full overflow-hidden rounded-[16px]">
                      <Image
                        loading="lazy"
                        className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover"
                        alt="Subrat Samantaray"
                        src="/profile.jpg"
                        fill
                        sizes="(max-width: 768px) 100vw, 320px"
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                          opacity: 1,
                        }}
                      />
                    </div>
                  </div>
                  <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                    <div className="text-xs font-bold">Subrat Samantaray</div>
                    <div className="text-xs text-gray-300 opacity-50">#kaizen</div>
                  </div>
                </div>
              </CometCard>
            </motion.div>
          </motion.div>

          {/* About Content */}
          <motion.div
            variants={slideInFromRight(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6 text-start lg:text-left max-w-2xl"
          >
            <motion.h2
              variants={slideInFromRight(0.6)}
              className="text-4xl font-bold text-[#212A3E]"
            >
              Who Am I?
            </motion.h2>

            <motion.p
              variants={slideInFromRight(0.9)}
              className="text-lg text-[#394867] leading-relaxed"
            >
              I&apos;m a passionate{" "}
              <Highlighter isView action="highlight" color="#DDE6ED" className="text-[#212A3E] font-bold px-1">
                Cybersecurity student
              </Highlighter>{" "}
              and{" "}
              <Highlighter isView action="underline" color="#394867" strokeWidth={2} className="text-[#212A3E] font-bold">
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

            {/* Skills Highlight */}
            <motion.div
              variants={slideInFromRight(1.5)}
              className="flex flex-wrap gap-3 mt-4"
            >
              {[
                "Penetration Testing",
                "Network Security",
                "Web App Security",
                "Security Analyst"
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white border border-[#9BA4B5]/40 rounded-full text-sm text-[#212A3E] hover:border-[#212A3E] hover:bg-[#212A3E]/5 transition-all duration-300 font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
