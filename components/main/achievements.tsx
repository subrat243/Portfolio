"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SparklesIcon, TrophyIcon, ShieldCheckIcon, AcademicCapIcon, StarIcon } from "@heroicons/react/24/solid";
import VariableProximity from "@/components/ui/variable-proximity";
import { useRef } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { CardStack } from "@/components/ui/card-stack";

const Skeleton = ({ tag, Icon }: { tag: string; Icon: any }) => (
  <div className="flex flex-1 w-full h-full min-h-[7rem] rounded-xl bg-gradient-to-br from-[#F1F6F9] to-[#DDE6ED] border border-[#9BA4B5]/30 p-4 flex flex-col justify-between overflow-hidden relative group/skeleton">
    <div className="flex items-center justify-between z-10">
      <span className="px-3 py-1 bg-[#394867]/10 border border-[#394867]/20 rounded-full text-xs font-semibold text-[#394867]">
        {tag}
      </span>
      <Icon className="w-6 h-6 text-[#212A3E]/40 group-hover/skeleton:text-[#212A3E] transition-colors duration-300" />
    </div>
    <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-[#9BA4B5]/10 rounded-full blur-xl group-hover/skeleton:bg-[#9BA4B5]/20 transition-all duration-300" />
  </div>
);

const THMSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[7rem] rounded-xl bg-[#1a1f2e] border border-[#9BA4B5]/20 flex flex-col justify-center p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-[#0f1219] z-0" />
    <div className="relative z-10 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-[#9BA4B5]/20 shrink-0 bg-[#212A3E] flex items-center justify-center">
          <span className="text-xl">🕵️</span>
        </div>
        <div>
          <h3 className="text-white font-bold text-sm leading-none">0xKaizen</h3>
          <p className="text-[#9BA4B5] text-[10px] mt-1">[0xA][WIZARD] 🇮🇳 <span className="bg-white/10 px-1.5 py-0.5 rounded text-[8px] ml-1">Student</span></p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="bg-[#212A3E] rounded-lg p-3 border border-[#9BA4B5]/10 flex items-center justify-between">
          <span className="text-[#9BA4B5] text-[10px] font-medium uppercase tracking-wider">Rank <span className="text-yellow-500 lowercase ml-1 font-bold">top 4%</span></span>
          <span className="text-white font-bold flex items-center gap-2 text-sm"><span className="text-yellow-500">🏆</span> 76766</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-[#212A3E] rounded-lg p-3 border border-[#9BA4B5]/10">
            <span className="text-[#9BA4B5] text-[10px] font-medium uppercase tracking-wider block mb-1">Badges</span>
            <span className="text-white font-bold flex items-center gap-2 text-sm">🏵️ 22</span>
          </div>
          <div className="bg-[#212A3E] rounded-lg p-3 border border-[#9BA4B5]/10">
            <span className="text-[#9BA4B5] text-[10px] font-medium uppercase tracking-wider block mb-1">Rooms</span>
            <span className="text-white font-bold flex items-center gap-2 text-sm">🚪 159</span>
          </div>
        </div>
        <div className="bg-[#212A3E] rounded-lg p-3 border border-[#9BA4B5]/10 flex items-center justify-between">
          <span className="text-[#9BA4B5] text-[10px] font-medium uppercase tracking-wider">Streak</span>
          <span className="text-white font-bold flex items-center gap-2 text-sm">🔥 0</span>
        </div>
      </div>
    </div>
  </div>
);

const CTFSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[7rem] rounded-xl bg-[#1a1f2e] border border-[#9BA4B5]/20 flex flex-col overflow-hidden relative">
    {/* Certificate Image */}
    <div className="relative w-full h-36 shrink-0 overflow-hidden">
      <Image
        src="/achieve/defcon-pune.png"
        alt="DEF CON Pune CTF"
        fill
        sizes="400px"
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1f2e]" />
    </div>
    {/* Header: rank */}
    <div className="flex items-center gap-3 px-4 pb-4">
      <div>
        <p className="text-white font-bold text-sm leading-none">kaizen</p>
        <p className="text-[#9BA4B5] text-[10px] font-mono mt-0.5">TEAM RANK: <span className="text-[#f97316]">#10</span></p>
      </div>
      <div className="ml-auto text-right">
        <p className="text-[#9BA4B5] text-[10px] font-mono">DEF CON Pune CTF</p>
        <p className="text-[#9BA4B5] text-[10px] font-mono">26 Mar, 2026</p>
      </div>
    </div>
  </div>
);

const CERT_DATA = [
  { name: "Jr Penetration Tester", designation: "TryHackMe", file: "jr-pentester.jpg" },
  { name: "Pre Security", designation: "TryHackMe", file: "pre-security.jpg" },
  { name: "Certified Network Security Professional", designation: "The SecOps Group", file: "cnsp.jpg" },
  { name: "Advent of Cyber", designation: "TryHackMe", file: "aoc-2025.jpg" },
  { name: "Certified Cyber Security Expert", designation: "The Red Team Leader", file: "ccep.jpg" },
  { name: "Cybersecurity Internship", designation: "CyberDojo", file: "cyberdojo.jpg" },
  { name: "Cybersecurity Fundamental", designation: "IBM SkillsBuild", file: "cybersec-fundamental.jpg" },
  { name: "Skill India Cybersecurity", designation: "Skill India", file: "cybersec-skillindia.jpg" },
  { name: "Cybersecurity 101", designation: "TryHackMe", file: "cybersecurity-101.jpg" },
  { name: "Cybersecurity Fundamentals", designation: "Cybrary", file: "cybersecurity-fundamentals.jpg" },
  { name: "Defensive Security & Cyber Risk", designation: "Cybrary", file: "defensive-security-and-cyber-risk.jpg" },
  { name: "Defensive Security Operations", designation: "Cybrary", file: "defensive-security-operations.jpg" },
  { name: "Cybersecurity Internship", designation: "Internship Studio", file: "internship-studio.jpg" },
  { name: "Intro to Cybersecurity", designation: "Cisco", file: "intro-to-cybersec.jpg" },
  { name: "Network Basics", designation: "Cisco", file: "network-basic.jpg" },
  { name: "Network Fundamentals", designation: "Cybrary", file: "network-fundamentals.jpg" },
];

const CERTIFICATE_CARDS = CERT_DATA.map((cert, index) => ({
  id: index,
  name: cert.name,
  designation: cert.designation,
  image: `/certs/${cert.file}`,
  content: (
    <div className="relative w-full h-full min-h-[112px] flex items-center justify-center overflow-hidden bg-[#212A3E]/5 p-1">
      <Image
        src={`/certs/${cert.file}`}
        alt={`${cert.name} Certificate`}
        fill
        sizes="280px"
        className="object-cover rounded-lg opacity-90"
      />
    </div>
  ),
}));

const ACHIEVEMENTS_DATA = [
  {
    title: "0xKaizen — TryHackMe Profile",
    description:
      "Just a cyber enthusiast working through labs and real-world stuff. Ranked in the top 4% globally with 159 completed rooms.",
    icon: StarIcon,
    tag: "TryHackMe",
    isTHM: true,
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
    title: "#10 Rank — DEF CON Pune CTF",
    description:
      "Captured 17/31 flags and scored 5020/9410 points in the DEF CON Pune CTF (Jeopardy format), competing solo against 204 players. Ranked #10 in the team leaderboard.",
    icon: TrophyIcon,
    tag: "CTF Competition",
    isCTF: true,
  },
];

export const Achievements = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="achievements"
      className="flex flex-col items-center justify-center py-20 px-8 lg:px-10 relative min-h-screen overflow-hidden bg-transparent"
    >
      <div className="relative z-10 w-full max-w-[1400px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center mb-8 pointer-events-auto"
        >
          <div className="Welcome-box py-[8px] px-[7px] border border-[#9BA4B5]/40 opacity-90 inline-flex items-center mb-3 mx-auto">
            <h2 className="Welcome-text text-[13px] px-2">Milestones & Honors</h2>
          </div>

          <div className="w-full" ref={containerRef} style={{ position: 'relative' }}>
            <VariableProximity
              label="Achievements & Milestones"
              className="text-4xl md:text-5xl font-bold text-[#212A3E] text-center justify-center [font-optical-sizing:auto] block w-full"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff='linear'
            />
          </div>

          <p className="text-[#394867] text-lg mt-4 max-w-2xl mx-auto text-center">
            Every achievement represents hours of learning, hands-on practice, and a commitment to becoming a better cybersecurity professional.
          </p>
        </motion.div>

        {/* Bento Grid Achievements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full relative z-20 mt-10 pointer-events-auto"
        >
          <BentoGrid className="max-w-6xl mx-auto">
            {ACHIEVEMENTS_DATA.map((item, i) => {
              const IconComponent = item.icon;
              const isCert = item.title === "Offensive Security & Pentesting Prep";
              const isCTF = (item as any).isCTF;
              return (
                <BentoGridItem
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  header={
                    isCert ? (
                      <CardStack items={CERTIFICATE_CARDS} />
                    ) : isCTF ? (
                      <CTFSkeleton />
                    ) : (item as any).isTHM ? (
                      <THMSkeleton />
                    ) : (
                      <Skeleton tag={item.tag} Icon={IconComponent} />
                    )
                  }
                  icon={<IconComponent className="h-6 w-6 text-[#212A3E]" />}
                  className={i === 1 || i === 2 ? "md:col-span-2" : ""}
                  isHorizontal={isCert}
                />
              );
            })}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
};


