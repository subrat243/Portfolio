"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  SparklesIcon,
  TrophyIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import VariableProximity from "@/components/ui/variable-proximity";
import { useRef } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { CardStack } from "@/components/ui/card-stack";
import { ACHIEVEMENTS_DATA, CERTIFICATE_CARDS } from "@/constants/achievements";

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
  <div className="flex flex-1 w-full h-full min-h-[7rem] rounded-xl bg-[#1a1f2e] border border-[#9BA4B5]/20 flex flex-col overflow-hidden relative">
    <div className="relative w-full h-36 shrink-0 overflow-hidden bg-slate-200">
      <Image
        src="/achieve/thm.png"
        alt="TryHackMe Profile"
        fill
        sizes="400px"
        className="object-contain object-center p-1"
      />
    </div>
    {/* Stats */}
    <div className="flex items-center gap-3 p-4 mt-auto">
      <div>
        <p className="text-white font-bold text-sm leading-none">0xKaizen</p>
        <p className="text-[#9BA4B5] text-[10px] font-mono mt-0.5">
          GLOBAL RANK: <span className="text-yellow-500">top 4%</span>
        </p>
      </div>
      <div className="ml-auto text-right">
        <p className="text-[#9BA4B5] text-[10px] font-mono">
          TryHackMe Profile
        </p>
        <p className="text-[#9BA4B5] text-[10px] font-mono">
          160+ Rooms | 22 Badges
        </p>
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
    </div>
    {/* Header: rank */}
    <div className="flex items-center gap-3 p-4 mt-auto">
      <div>
        <p className="text-white font-bold text-sm leading-none">kaizen</p>
        <p className="text-[#9BA4B5] text-[10px] font-mono mt-0.5">
          TEAM RANK: <span className="text-[#f97316]">#10</span>
        </p>
      </div>
      <div className="ml-auto text-right">
        <p className="text-[#9BA4B5] text-[10px] font-mono">DEF CON Pune CTF</p>
        <p className="text-[#9BA4B5] text-[10px] font-mono">26 Mar, 2026</p>
      </div>
    </div>
  </div>
);

const StellarSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[7rem] rounded-xl bg-[#1a1f2e] border border-[#9BA4B5]/20 flex flex-col overflow-hidden relative">
    <div className="relative w-full h-36 shrink-0 overflow-hidden bg-white">
      <Image
        src="/achieve/stellar.png"
        alt="Stellar Hackathon"
        fill
        sizes="400px"
        className="object-contain object-center p-2"
      />
    </div>
    <div className="flex items-center gap-3 p-4 mt-auto">
      <div>
        <p className="text-[#9BA4B5] text-[10px] font-mono mt-0.5">
          RANK: <span className="text-yellow-500">#9</span>
        </p>
        <p className="text-[#9BA4B5] text-[10px] font-mono">Solo Participant</p>
      </div>
      <div className="ml-auto text-right">
        <p className="text-[#9BA4B5] text-[10px] font-mono">
          Stellar Hackathon
        </p>
      </div>
    </div>
  </div>
);

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
            <h2 className="Welcome-text text-[13px] px-2">
              Milestones & Honors
            </h2>
          </div>

          <div
            className="w-full"
            ref={containerRef}
            style={{ position: "relative" }}
          >
            <VariableProximity
              label="Achievements & Milestones"
              className="text-4xl md:text-5xl font-bold text-[#212A3E] text-center justify-center [font-optical-sizing:auto] block w-full"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
          </div>

          <p className="text-[#394867] text-lg mt-4 max-w-2xl mx-auto text-center">
            Every achievement represents hours of learning, hands-on practice,
            and a commitment to becoming a better cybersecurity professional.
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
              const isCert = item.tag === "Certification & Labs";
              const isCTF = (item as any).isCTF;
              const isStellar = (item as any).isStellar;
              return (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={
                    isCert ? (
                      <CardStack items={CERTIFICATE_CARDS} />
                    ) : isCTF ? (
                      <CTFSkeleton />
                    ) : isStellar ? (
                      <StellarSkeleton />
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
