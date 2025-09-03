"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SparklesIcon } from "@heroicons/react/24/solid";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const About = () => {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col items-center justify-center py-20 px-10 relative z-[30] bg-transparent"
    >
      {/* Section Header */}
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-10"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">About Me</h1>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full max-w-6xl">
        {/* Profile Card */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateY: 180 }}
            whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.3 },
            }}
            className="relative group perspective-1000"
          >
            <div className="relative w-80 h-96 bg-transparent rounded-2xl border border-[#2A0E61] overflow-hidden shadow-2xl z-[35]">
              {/* Card Background Effect */}
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-[36]" />

              {/* Profile Image */}
              <div className="relative z-[40] flex flex-col items-center justify-center h-full p-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-40 h-40 rounded-full border-4 border-purple-500 overflow-hidden mb-6 shadow-lg"
                >
                  <Image
                    src="/cyber-hero.jpeg"
                    alt="Subrat Samantaray"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  Subrat Samantaray
                </h3>
                <p className="text-purple-400 text-center font-semibold">
                  Cybersecurity Student
                </p>
                <p className="text-gray-300 text-center text-sm mt-2">
                  Ethical Hacker & Security Researcher
                </p>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full"
              />
              <motion.div
                animate={{
                  y: [10, -10, 10],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full"
              />
            </div>
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
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
          >
            Who Am I?
          </motion.h2>

          <motion.p
            variants={slideInFromRight(0.9)}
            className="text-lg text-gray-300 leading-relaxed"
          >
            I&apos;m a passionate{" "}
            <span className="text-purple-400 font-semibold">
              Cybersecurity student
            </span>{" "}
            and
            <span className="text-cyan-400 font-semibold">
              {" "}
              security enthusiast
            </span>{" "}
            who thrives on exploring the intricate world of digital security. I
            specialize in{" "}
            <span className="text-purple-400">Penetration Testing</span>,
            <span className="text-cyan-400"> Network Security</span>, and{" "}
            <span className="text-purple-400">Web Application Security</span>.
          </motion.p>

          <motion.p
            variants={slideInFromRight(1.1)}
            className="text-lg text-gray-300 leading-relaxed"
          >
            With hands-on experience using industry-standard tools like{" "}
            <span className="text-green-400">Nmap</span>,
            <span className="text-blue-400"> Wireshark</span>,{" "}
            <span className="text-red-400">Metasploit</span>, and
            <span className="text-orange-400"> Burp Suite</span>, I have
            developed a deep understanding of network protocols, security
            frameworks, and threat detection methodologies.
          </motion.p>

          <motion.p
            variants={slideInFromRight(1.3)}
            className="text-lg text-gray-300 leading-relaxed"
          >
            My passion extends beyond technical skills to include{" "}
            <span className="text-purple-400">ethical hacking</span>,
            <span className="text-cyan-400"> digital forensics</span>, and{" "}
            <span className="text-green-400">threat intelligence</span>. My
            ultimate goal is to contribute to building a safer digital world
            through continuous learning, practical security implementations, and
            knowledge sharing with the cybersecurity community.
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
              "Threat Detection",
              "Digital Forensics",
              "Ethical Hacking",
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-sm text-white hover:border-purple-400 transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
