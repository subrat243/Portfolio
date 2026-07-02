import Image from "next/image";
import {
  TrophyIcon,
  AcademicCapIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import React from "react";

export const CERT_DATA = [
  {
    name: "Jr Penetration Tester",
    designation: "TryHackMe",
    file: "jr-pentester.jpg",
  },
  { name: "Pre Security", designation: "TryHackMe", file: "pre-security.jpg" },
  {
    name: "Certified Network Security Professional",
    designation: "The SecOps Group",
    file: "cnsp.jpg",
  },
  { name: "Advent of Cyber", designation: "TryHackMe", file: "aoc-2025.jpg" },
  {
    name: "Certified Cyber Security Expert",
    designation: "The Red Team Leader",
    file: "ccep.jpg",
  },
  {
    name: "Cybersecurity Internship",
    designation: "CyberDojo",
    file: "cyberdojo.jpg",
  },
  {
    name: "Cybersecurity Fundamental",
    designation: "IBM SkillsBuild",
    file: "cybersec-fundamental.jpg",
  },
  {
    name: "Skill India Cybersecurity",
    designation: "Skill India",
    file: "cybersec-skillindia.jpg",
  },
  {
    name: "Cybersecurity 101",
    designation: "TryHackMe",
    file: "cybersecurity-101.jpg",
  },
  {
    name: "Cybersecurity Fundamentals",
    designation: "Cybrary",
    file: "cybersecurity-fundamentals.jpg",
  },
  {
    name: "Defensive Security & Cyber Risk",
    designation: "Cybrary",
    file: "defensive-security-and-cyber-risk.jpg",
  },
  {
    name: "Defensive Security Operations",
    designation: "Cybrary",
    file: "defensive-security-operations.jpg",
  },
  {
    name: "Cybersecurity Internship",
    designation: "Internship Studio",
    file: "internship-studio.jpg",
  },
  {
    name: "Intro to Cybersecurity",
    designation: "Cisco",
    file: "intro-to-cybersec.jpg",
  },
  { name: "Network Basics", designation: "Cisco", file: "network-basic.jpg" },
  {
    name: "Network Fundamentals",
    designation: "Cybrary",
    file: "network-fundamentals.jpg",
  },
];

export const CERTIFICATE_CARDS = CERT_DATA.map((cert, index) => ({
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

export const ACHIEVEMENTS_DATA = [
  {
    title: (
      <a
        href="https://tryhackme.com/p/0xKaizen"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline decoration-[#9BA4B5] underline-offset-4"
      >
        0xKaizen — TryHackMe Profile
      </a>
    ),
    description:
      "Just a cyber enthusiast working through labs and real-world stuff. Ranked in the top 4% globally with 160+ completed rooms.",
    icon: StarIcon,
    tag: "TryHackMe",
    isTHM: true,
  },
  {
    title: "Credential Vault",
    description:
      "Earned recognized certifications and completed a cybersecurity internship that reinforce my knowledge in networking, cybersecurity fundamentals, and offensive security while supporting my commitment to continuous learning.",
    icon: AcademicCapIcon,
    tag: "Certification & Labs",
  },
  {
    title: "Stellar Blockchain Hackathon",
    description:
      "Ranked #9 as a solo participant among 100+ hackers in the Stellar Blockchain Hackathon hosted at Centurion University Bhubaneswar. Designed and built DeCent Pay, a decentralized escrow platform powered by the Stellar blockchain, earning a cash prize and official hackathon merchandise.",
    icon: TrophyIcon,
    tag: "Hackathon",
    isStellar: true,
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
