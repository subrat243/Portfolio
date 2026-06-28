"use client";

import React, { useState } from "react";
import { useAttackSimulation } from "./hooks/useAttackSimulation";
import { GlobeScene } from "./GlobeScene";
import { Tooltip } from "./Tooltip";
import { TooltipData, CountryNode } from "./types";

export const CyberGlobe: React.FC = () => {
  const { attacks, countries } = useAttackSimulation();
  const [tooltipData, setTooltipData] = useState<TooltipData | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<CountryNode | null>(null);

  const handleCountryClick = (country: CountryNode) => {
    setSelectedCountry(country);
    // Auto resume idle animation / deselect after 3 seconds
    setTimeout(() => {
      setSelectedCountry(null);
    }, 3000);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[650px] lg:h-[700px] flex items-center justify-center overflow-hidden rounded-2xl bg-[#020617]/40 border border-white/10 backdrop-blur-sm shadow-[0_0_40px_rgba(59,130,246,0.15)] group">
      {/* Live Active Attack Ticker Header */}
      <div className="absolute top-6 left-6 z-20 flex items-center gap-3 px-4 py-2 rounded-xl bg-[#0f172a]/55 border border-white/10 backdrop-blur-md shadow-lg">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
        <div className="flex flex-col text-left">
          <span className="text-xs font-semibold text-white tracking-wider uppercase">
            Live Threat Intel
          </span>
          <span className="text-[10px] text-gray-400">
            {attacks.length} active global attack vectors
          </span>
        </div>
      </div>

      {/* Attack Status Legend */}
      <div className="absolute bottom-6 left-6 z-20 flex flex-wrap gap-4 px-4 py-2.5 rounded-xl bg-[#0f172a]/55 border border-white/10 backdrop-blur-md shadow-lg text-[11px] font-medium text-gray-300">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
          <span>Normal</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#F97316]" />
          <span>Suspicious</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#EF4444]" />
          <span>Malicious</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#10B981]" />
          <span>Blocked</span>
        </div>
      </div>

      {/* Selected Country Banner */}
      {selectedCountry && (
        <div className="absolute top-6 right-6 z-20 flex items-center gap-3 px-4 py-2 rounded-xl bg-[#2563eb]/20 border border-[#38bdf8]/30 backdrop-blur-md text-white animate-fade-in">
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold text-[#38bdf8]">
              Target: {selectedCountry.name}
            </span>
            <span className="text-[10px] text-gray-300">
              Risk Score: {selectedCountry.riskScore} | Analyzing traffic...
            </span>
          </div>
        </div>
      )}

      {/* Main 3D Globe Scene */}
      <div className="w-full h-full absolute inset-0 z-10">
        <GlobeScene
          attacks={attacks}
          countries={countries}
          onHover={setTooltipData}
          onClick={handleCountryClick}
        />
      </div>

      {/* Hover Tooltip */}
      <Tooltip data={tooltipData} />
    </div>
  );
};
