"use client";

import { motion } from "framer-motion";
import Image from "next/image";


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
        <div className="flex flex-col items-center justify-center gap-10 w-full">
          {/* About Content */}
          <motion.div
            variants={slideInFromRight(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6 text-start lg:text-left max-w-[850px] mx-auto w-full"
          >
            {/* Section Header */}
            <motion.div
              variants={slideInFromTop}
              className="Welcome-box py-[8px] px-[7px] border border-[#9BA4B5]/40 opacity-[0.9] self-start mb-[-10px]"
            >
              <h1 className="Welcome-text text-[13px] px-2">Behind the Terminal</h1>
            </motion.div>
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
              Behind every terminal command is a curious mind driven by one question:
              <br />
              <br />
              <Highlighter isView action="box" color="#DDE6ED" className="text-[#212A3E] px-1 italic">
                &quot;How can this be made more secure?&quot;
              </Highlighter>
            </motion.p>

            <motion.p
              variants={slideInFromRight(1.1)}
              className="text-lg text-[#394867]/90 leading-relaxed"
            >
              As a{" "}
              <span className="text-[#212A3E] font-medium">
                cybersecurity enthusiast
              </span>{" "}
              and a learner who thrives on exploring the intricate world of digital security, I focused on{" "}
              <span className="text-[#212A3E] font-medium">
                penetration testing
              </span>,{" "}
              <span className="text-[#212A3E] font-medium">
                web security
              </span>, and{" "}
              <span className="text-[#212A3E] font-medium">
                network defense
              </span>. I enjoy turning curiosity into practical skills through real-world labs, security research, and personal projects.
            </motion.p>

            <motion.p
              variants={slideInFromRight(1.3)}
              className="text-lg text-[#394867]/90 leading-relaxed"
            >
              My goal is simple:{" "}
              <span className="text-[#212A3E] font-medium">never stop learning</span>,{" "}
              <span className="text-[#212A3E] font-medium">never stop experimenting</span>, and{" "}
              <span className="text-[#212A3E] font-medium">never stop improving</span>.
            </motion.p>

          </motion.div>

          {/* GIF Frame */}
          <motion.div
            variants={slideInFromRight(1.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full max-w-[1000px] mt-8 mx-auto relative rounded-2xl overflow-hidden shadow-glow border border-[#9BA4B5]/20"
          >
            <Image
              src="/working.gif"
              alt="Working GIF"
              width={1000}
              height={300}
              className="w-full h-auto object-cover"
              style={{ marginBottom: "-2.5%" }}
              unoptimized
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
