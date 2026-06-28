"use client";

import React from "react";
import { TooltipData } from "./types";

interface TooltipProps {
  data: TooltipData | null;
}

export const Tooltip: React.FC<TooltipProps> = ({ data }) => {
  if (!data) return null;

  const { country, x, y } = data;

  const getThreatBadge = (level: string) => {
    switch (level) {
      case "Critical":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "High":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "Medium":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-green-500/20 text-green-400 border-green-500/30";
    }
  };

  return (
    <div
      className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full mb-4 transition-all duration-150 ease-out"
      style={{ left: x, top: y - 10 }}
    >
      <div className="w-64 bg-[#0f172a]/55 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-[0_0_20px_rgba(59,130,246,0.45)] flex flex-col gap-3 text-left">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="text-white font-bold text-base">{country.name}</span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full border font-medium ${getThreatBadge(
              country.threatLevel
            )}`}
          >
            {country.threatLevel}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex flex-col gap-1">
            <span className="text-gray-400">Attack Count</span>
            <span className="text-white font-semibold text-sm">
              {country.attackCount.toLocaleString()}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-gray-400">Risk Score</span>
            <span className="text-[#38BDF8] font-semibold text-sm">
              {country.riskScore}/100
            </span>
          </div>

          <div className="flex flex-col gap-1 col-span-2 mt-1 border-t border-white/5 pt-2">
            <span className="text-gray-400">Last Activity</span>
            <span className="text-gray-200 font-medium">
              {country.lastActivity}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
