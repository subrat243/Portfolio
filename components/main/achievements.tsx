"use client";

import { motion } from "framer-motion";
import { SparklesIcon, TrophyIcon, ShieldCheckIcon, AcademicCapIcon, StarIcon } from "@heroicons/react/24/solid";

const ACHIEVEMENTS_DATA = [
  {
    title: "Top 50 in Global CTF Competition",
    description:
      "Achieved a top 50 ranking among 1,200+ global competing teams in an elite Capture The Flag (CTF) competition, solving advanced binary exploitation and reverse engineering challenges.",
    icon: TrophyIcon,
    tag: "CTF Competition",
  },
  {
    title: "Offensive Security & Pentesting Prep",
    description:
      "Successfully completed rigorous training and advanced lab scenarios in penetration testing, network vulnerability scanning, and offensive security methodologies.",
    icon: AcademicCapIcon,
    tag: "Certification & Labs",
  },
  {
    title: "Bug Bounty Hall of Fame",
    description:
      "Acknowledged in multiple enterprise Bug Bounty programs for responsibly disclosing critical vulnerabilities (SQLi, SSRF, and RCE), helping secure major web applications.",
    icon: ShieldCheckIcon,
    tag: "Bug Bounty",
  },
  {
    title: "Open Source Security Contributor",
    description:
      "Actively contributed to prominent open-source cybersecurity tools and libraries, enhancing automated threat detection scripts and vulnerability parsers.",
    icon: StarIcon,
    tag: "Open Source",
  },
];

export const Achievements = () => {
  return (
    <section
      id="achievements"
      className="flex flex-col items-center justify-center py-20 px-8 lg:px-10 relative min-h-screen overflow-hidden bg-[#F1F6F9]"
    >
      <div className="relative z-10 w-full max-w-[1400px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center mb-16"
        >
          <div className="Welcome-box py-[8px] px-[7px] border border-[#9BA4B5]/40 opacity-90 inline-flex items-center mb-8 mx-auto">
            <SparklesIcon className="text-[#394867] mr-[10px] h-5 w-5" />
            <h2 className="Welcome-text text-[13px]">Milestones & Honors</h2>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#212A3E] text-center">
            My Achievements
          </h1>

          <p className="text-[#394867] text-lg mt-4 max-w-2xl mx-auto text-center">
            A showcase of my major milestones, competitive rankings, and notable contributions in the cybersecurity landscape.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-20"
          style={{ pointerEvents: "auto" }}
        >
          {ACHIEVEMENTS_DATA.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="relative group bg-white border border-[#9BA4B5]/40 rounded-2xl p-8 shadow-lg hover:border-[#212A3E] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-4 bg-[#212A3E]/5 border border-[#9BA4B5]/30 rounded-xl group-hover:bg-[#212A3E]/10 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-[#212A3E]" />
                    </div>
                    <span className="px-3 py-1 bg-[#394867]/10 border border-[#394867]/20 rounded-full text-xs font-semibold text-[#394867]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#212A3E] mb-4 group-hover:text-[#394867] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-[#394867]/90 text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#9BA4B5]/20 flex items-center text-sm font-semibold text-[#212A3E] group-hover:translate-x-1 transition-transform duration-300">
                  <span>Verified Accomplishment</span>
                  <svg className="w-4 h-4 ml-2 text-[#212A3E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
