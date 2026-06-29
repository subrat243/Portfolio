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
      <div className="relative w-[640px] h-[520px] flex items-center justify-center scale-[0.55] sm:scale-[0.8] xl:scale-100 transition-transform duration-300 origin-center">
        <div className="relative w-[640px] h-[520px] font-sans">
          {/* Column 1 (Far Left) */}
          <Word delay={1} text="PROVIDERS" className="top-[10px] left-[65px] text-[20px] font-semibold tracking-tighter text-[#394867]" />
          <Word delay={2} text="STRATEGY" className="top-[32px] left-[65px] text-[26px] font-bold tracking-tight text-[#212A3E]" />
          <Word delay={3} text="TRAILS" className="top-[62px] left-[95px] text-[28px] font-black tracking-tight text-[#212A3E]" />
          <Word delay={4} text="PROMOTIONS" className="top-[94px] left-[95px] text-[16px] font-semibold tracking-tight text-[#394867]" />
          <Word delay={5} text="HACKERS" className="top-[114px] left-[95px] text-[24px] font-bold tracking-tight text-[#212A3E]" />
          <Word delay={6} text="DETECTION" className="top-[115px] left-[65px] text-[22px] font-bold tracking-tight text-[#394867]" style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }} />
          
          {/* Mid Left */}
          <Word delay={7} text="PUBLIC" className="top-[143px] left-[95px] text-[48px] font-black tracking-tighter text-[#212A3E] leading-none" />
          <Word delay={8} text="STRATEGY" className="top-[195px] left-[0px] text-[40px] font-black tracking-tighter text-[#212A3E] leading-none" />
          <Word delay={9} text="ATTACKS" className="top-[234px] left-[38px] text-[34px] font-bold tracking-tight text-[#394867] leading-none" />
          
          {/* Lower Left */}
          <Word delay={10} text="MODEL" className="top-[275px] left-[20px] text-[28px] font-bold tracking-tight text-[#394867] leading-none" style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }} />
          <Word delay={11} text="RESPONSE" className="top-[272px] left-[65px] text-[36px] font-black tracking-tight text-[#212A3E] leading-none" />
          <Word delay={12} text="PROTECTION" className="top-[308px] left-[65px] text-[22px] font-bold tracking-tight text-[#394867] leading-none" />
          <Word delay={13} text="PRIVACY" className="top-[332px] left-[65px] text-[38px] font-black tracking-tight text-[#212A3E] leading-none" />
          <Word delay={14} text="SOFTWARE" className="top-[372px] left-[10px] text-[38px] font-bold tracking-tight text-[#212A3E] leading-none" />
          <Word delay={15} text="INFRASTRUCTURE" className="top-[411px] left-[38px] text-[18px] font-semibold tracking-tight text-[#394867] leading-none" />
          
          {/* Vertical Pillars Left-Center */}
          <Word delay={16} text="BROWSER" className="top-[310px] left-[184px] text-[26px] font-bold tracking-tight text-[#394867] leading-none" style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }} />
          <Word delay={17} text="COMPUTING" className="top-[270px] left-[214px] text-[28px] font-black tracking-tight text-[#212A3E] leading-none" style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }} />
          <Word delay={18} text="TECHNOLOGY" className="top-[428px] left-[155px] text-[36px] font-bold tracking-tight text-[#394867] leading-none" />
          <Word delay={19} text="ACCESS" className="top-[464px] left-[157px] text-[48px] font-black tracking-tight text-[#212A3E] leading-none" />

          {/* Upper Center Vertical Group */}
          <Word delay={20} text="DEVICE" className="top-[5px] left-[265px] text-[52px] font-black tracking-tighter text-[#212A3E] leading-none" style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }} />
          <Word delay={21} text="ISSUES" className="top-[65px] left-[315px] text-[38px] font-bold tracking-tight text-[#394867] leading-none" style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }} />
          <Word delay={22} text="PASSWORDS" className="top-[58px] left-[358px] text-[22px] font-bold tracking-tight text-[#212A3E] leading-none" style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }} />
          <Word delay={23} text="BUSINESS" className="top-[94px] left-[386px] text-[36px] font-bold tracking-tight text-[#212A3E] leading-none" style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }} />

          {/* Monumental Center Words */}
          <Word delay={24} text="CYBER" className="top-[188px] left-[162px] text-[82px] font-black tracking-tighter text-[#212A3E] leading-none scale-y-[1.1] origin-left" />
          <Word delay={25} text="SECURITY" className="top-[262px] left-[242px] text-[82px] font-black tracking-tighter text-[#212A3E] leading-none scale-y-[1.1] origin-left" />

          {/* Lower Center */}
          <Word delay={26} text="GOVERNMENT" className="top-[348px] left-[246px] text-[22px] font-bold tracking-tight text-[#394867] leading-none" />
          <Word delay={27} text="SHARING" className="top-[372px] left-[246px] text-[22px] font-medium tracking-tight text-[#394867] leading-none" />
          <Word delay={28} text="LEGAL" className="top-[392px] left-[246px] text-[40px] font-black tracking-tight text-[#212A3E] leading-none" />
          <Word delay={29} text="AUDIT" className="top-[370px] left-[334px] text-[46px] font-black tracking-tighter text-[#394867] leading-none" style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }} />
          <Word delay={30} text="SECURE" className="top-[388px] left-[384px] text-[32px] font-bold tracking-tight text-[#212A3E] leading-none" style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }} />

          {/* Upper Right */}
          <Word delay={31} text="BREACH" className="top-[45px] left-[550px] text-[48px] font-black tracking-tighter text-[#212A3E] leading-none" style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }} />
          <Word delay={32} text="LOGS" className="top-[142px] left-[424px] text-[52px] font-black tracking-tighter text-[#212A3E] leading-none" />
          <Word delay={33} text="SECURE" className="top-[190px] left-[424px] text-[46px] font-black tracking-tighter text-[#212A3E] leading-none" />
          <Word delay={34} text="VULNERABLE" className="top-[238px] left-[424px] text-[24px] font-bold tracking-tight text-[#394867] leading-none" />

          {/* Mid Right Stack */}
          <Word delay={35} text="APPS" className="top-[270px] left-[556px] text-[22px] font-black tracking-tight text-[#212A3E] leading-none" />
          <Word delay={36} text="INSIDER" className="top-[294px] left-[556px] text-[16px] font-bold tracking-tight text-[#394867] leading-none" />
          <Word delay={37} text="TRAILS" className="top-[312px] left-[556px] text-[16px] font-bold tracking-tight text-[#212A3E] leading-none" />

          {/* Lower Right */}
          <Word delay={38} text="MALWARE" className="top-[332px] left-[384px] text-[56px] font-black tracking-tighter text-[#212A3E] leading-none scale-y-[1.05] origin-left" />
          <Word delay={39} text="INTERNET" className="top-[385px] left-[419px] text-[46px] font-black tracking-tighter text-[#212A3E] leading-none" />
          <Word delay={40} text="NETWORK" className="top-[432px] left-[434px] text-[46px] font-black tracking-tighter text-[#212A3E] leading-none" />
        </div>
      </div>
    </div>
  );
};
