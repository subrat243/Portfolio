"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SparklesIcon, TrophyIcon, ShieldCheckIcon, AcademicCapIcon, StarIcon } from "@heroicons/react/24/solid";
import { KineticText } from "@/components/ui/kinetic-text";
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

const CERTIFICATE_CARDS = [
  {
    id: 0,
    name: "Jr Penetration Tester",
    designation: "TryHackMe",
    image: "/certs/jr-pentester.jpg",
    content: (
      <div className="relative w-full h-full min-h-[112px] flex items-center justify-center overflow-hidden bg-[#212A3E]/5 p-1">
        <Image
          src="/certs/jr-pentester.jpg"
          alt="Jr Penetration Tester Certificate"
          fill
          sizes="280px"
          className="object-cover rounded-lg opacity-90"
        />
      </div>
    ),
  },
  {
    id: 1,
    name: "Certified Network Security Professional",
    designation: "ICSI",
    image: "/certs/cnsp.jpg",
    content: (
      <div className="relative w-full h-full min-h-[112px] flex items-center justify-center overflow-hidden bg-[#212A3E]/5 p-1">
        <Image
          src="/certs/cnsp.jpg"
          alt="Certified Network Security Professional Certificate"
          fill
          sizes="280px"
          className="object-cover rounded-lg opacity-90"
        />
      </div>
    ),
  },
  {
    id: 2,
    name: "Pre Security",
    designation: "TryHackMe",
    image: "/certs/pre-security.jpg",
    content: (
      <div className="relative w-full h-full min-h-[112px] flex items-center justify-center overflow-hidden bg-[#212A3E]/5 p-1">
        <Image
          src="/certs/pre-security.jpg"
          alt="Pre Security Certificate"
          fill
          sizes="280px"
          className="object-cover rounded-lg opacity-90"
        />
      </div>
    ),
  },
];

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

          <KineticText text="My Achievements" className="text-4xl md:text-5xl font-bold text-[#212A3E] text-center justify-center [font-optical-sizing:auto]" />

          <p className="text-[#394867] text-lg mt-4 max-w-2xl mx-auto text-center">
            A showcase of my major milestones, competitive rankings, and notable contributions in the cybersecurity landscape.
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
              return (
                <BentoGridItem
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  header={
                    isCert ? (
                      <CardStack items={CERTIFICATE_CARDS} />
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


