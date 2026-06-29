"use client";

import React from "react";
import { motion } from "framer-motion";

type WordProps = {
  text: string;
  className: string;
  style?: React.CSSProperties;
  delay?: number;
};

const Word = ({ text, className, style, delay = 0 }: WordProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ delay: delay * 0.03, duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.05, zIndex: 50, transition: { duration: 0.2 } }}
      className={`absolute cursor-default transition-colors duration-200 hover:text-[#394867] ${className}`}
      style={style}
    >
      {text}
    </motion.div>
  );
};

export const CyberWordCloud = () => {
  return (
    <div className="relative w-full flex items-center justify-center my-auto py-4 select-none pointer-events-auto">
      {/* Responsive scaling wrapper */}
      <div className="relative w-[640px] h-[460px] flex items-center justify-center scale-[0.6] sm:scale-[0.85] xl:scale-100 transition-transform duration-300 origin-center">
        <div className="relative w-[640px] h-[460px] font-sans">
          {/* Column 1 (Far Left) */}
          <Word delay={1} text="PROVIDERS" className="top-[10px] left-[65px] text-[16px] font-semibold tracking-tighter text-[#394867]" />
          <Word delay={2} text="STRATEGY" className="top-[30px] left-[65px] text-[20px] font-bold tracking-tight text-[#212A3E]" />
          <Word delay={3} text="TRAILS" className="top-[55px] left-[65px] text-[22px] font-black tracking-tight text-[#212A3E]" />
          <Word delay={4} text="PROMOTIONS" className="top-[82px] left-[65px] text-[14px] font-semibold tracking-tight text-[#394867]" />
          <Word delay={5} text="HACKERS" className="top-[100px] left-[65px] text-[20px] font-bold tracking-tight text-[#212A3E]" />
          <Word delay={6} text="DETECTION" className="top-[30px] left-[35px] text-[16px] font-bold tracking-tight text-[#394867]" style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }} />
          
          {/* Mid Left */}
          <Word delay={7} text="PUBLIC" className="top-[128px] left-[65px] text-[36px] font-black tracking-tighter text-[#212A3E] leading-none" />
          <Word delay={8} text="STRATEGY" className="top-[168px] left-[20px] text-[30px] font-black tracking-tighter text-[#212A3E] leading-none" />
          <Word delay={9} text="ATTACKS" className="top-[202px] left-[40px] text-[24px] font-bold tracking-tight text-[#394867] leading-none" />
          
          {/* Lower Left */}
          <Word delay={10} text="MODEL" className="top-[240px] left-[15px] text-[20px] font-bold tracking-tight text-[#394867] leading-none" style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }} />
          <Word delay={11} text="RESPONSE" className="top-[235px] left-[45px] text-[26px] font-black tracking-tight text-[#212A3E] leading-none" />
          <Word delay={12} text="PROTECTION" className="top-[266px] left-[45px] text-[16px] font-bold tracking-tight text-[#394867] leading-none" />
          <Word delay={13} text="PRIVACY" className="top-[286px] left-[45px] text-[28px] font-black tracking-tight text-[#212A3E] leading-none" />
          <Word delay={14} text="SOFTWARE" className="top-[320px] left-[25px] text-[28px] font-bold tracking-tight text-[#212A3E] leading-none" />
          <Word delay={15} text="INFRASTRUCTURE" className="top-[354px] left-[45px] text-[14px] font-semibold tracking-tight text-[#394867] leading-none" />
          
          {/* Vertical Pillars Left-Center */}
          <Word delay={16} text="BROWSER" className="top-[235px] left-[220px] text-[18px] font-bold tracking-tight text-[#394867] leading-none" style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }} />
          <Word delay={17} text="COMPUTING" className="top-[225px] left-[245px] text-[20px] font-black tracking-tight text-[#212A3E] leading-none" style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }} />
          <Word delay={18} text="TECHNOLOGY" className="top-[375px] left-[120px] text-[26px] font-bold tracking-tight text-[#394867] leading-none" />
          <Word delay={19} text="ACCESS" className="top-[405px] left-[120px] text-[36px] font-black tracking-tight text-[#212A3E] leading-none" />

          {/* Upper Center Vertical Group */}
          <Word delay={20} text="DEVICE" className="top-[15px] left-[230px] text-[38px] font-black tracking-tighter text-[#212A3E] leading-none" style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }} />
          <Word delay={21} text="ISSUES" className="top-[55px] left-[275px] text-[28px] font-bold tracking-tight text-[#394867] leading-none" style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }} />
          <Word delay={22} text="PASSWORDS" className="top-[45px] left-[310px] text-[16px] font-bold tracking-tight text-[#212A3E] leading-none" style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }} />
          <Word delay={23} text="BUSINESS" className="top-[75px] left-[335px] text-[26px] font-bold tracking-tight text-[#212A3E] leading-none" style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }} />

          {/* Monumental Center Words */}
          <Word delay={24} text="CYBER" className="top-[150px] left-[180px] text-[60px] font-black tracking-tighter text-[#212A3E] leading-none origin-left" />
          <Word delay={25} text="SECURITY" className="top-[208px] left-[270px] text-[60px] font-black tracking-tighter text-[#212A3E] leading-none origin-left" />

          {/* Lower Center */}
          <Word delay={26} text="GOVERNMENT" className="top-[272px] left-[275px] text-[16px] font-bold tracking-tight text-[#394867] leading-none" />
          <Word delay={27} text="SHARING" className="top-[292px] left-[275px] text-[16px] font-medium tracking-tight text-[#394867] leading-none" />
          <Word delay={28} text="LEGAL" className="top-[312px] left-[275px] text-[28px] font-black tracking-tight text-[#212A3E] leading-none" />
          <Word delay={29} text="AUDIT" className="top-[275px] left-[395px] text-[32px] font-black tracking-tighter text-[#394867] leading-none" style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }} />
          <Word delay={30} text="SECURE" className="top-[290px] left-[435px] text-[24px] font-bold tracking-tight text-[#212A3E] leading-none" style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }} />

          {/* Upper Right */}
          <Word delay={31} text="BREACH" className="top-[35px] left-[520px] text-[36px] font-black tracking-tighter text-[#212A3E] leading-none" style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }} />
          <Word delay={32} text="LOGS" className="top-[90px] left-[380px] text-[38px] font-black tracking-tighter text-[#212A3E] leading-none" />
          <Word delay={33} text="SECURE" className="top-[132px] left-[380px] text-[34px] font-black tracking-tighter text-[#212A3E] leading-none" />
          <Word delay={34} text="VULNERABLE" className="top-[170px] left-[380px] text-[18px] font-bold tracking-tight text-[#394867] leading-none" />

          {/* Mid Right Stack */}
          <Word delay={35} text="APPS" className="top-[212px] left-[565px] text-[18px] font-black tracking-tight text-[#212A3E] leading-none" />
          <Word delay={36} text="INSIDER" className="top-[234px] left-[565px] text-[14px] font-bold tracking-tight text-[#394867] leading-none" />
          <Word delay={37} text="TRAILS" className="top-[252px] left-[565px] text-[14px] font-bold tracking-tight text-[#212A3E] leading-none" />

          {/* Lower Right */}
          <Word delay={38} text="MALWARE" className="top-[272px] left-[475px] text-[40px] font-black tracking-tighter text-[#212A3E] leading-none origin-left" />
          <Word delay={39} text="INTERNET" className="top-[316px] left-[485px] text-[34px] font-black tracking-tighter text-[#212A3E] leading-none" />
          <Word delay={40} text="NETWORK" className="top-[354px] left-[495px] text-[34px] font-black tracking-tighter text-[#212A3E] leading-none" />
        </div>
      </div>
    </div>
  );
};

