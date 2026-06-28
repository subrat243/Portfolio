"use client";

import React, { useEffect } from "react";
import ThreeGlobe from "three-globe";
import { Attack } from "./types";
import { ATTACK_COLORS } from "./constants";

interface AttackArcsProps {
  globe: ThreeGlobe;
  attacks: Attack[];
}

export const AttackArcs: React.FC<AttackArcsProps> = ({ globe, attacks }) => {
  useEffect(() => {
    if (!globe) return;

    // Update globe arcs data
    globe
      .arcsData(attacks)
      .arcStartLat((d: any) => d.source.lat)
      .arcStartLng((d: any) => d.source.lng)
      .arcEndLat((d: any) => d.destination.lat)
      .arcEndLng((d: any) => d.destination.lng)
      .arcColor(
        (d: any) =>
          ATTACK_COLORS[d.type as keyof typeof ATTACK_COLORS] || "#2563EB"
      )
      .arcDashLength(0.4)
      .arcDashGap(2)
      .arcDashInitialGap(() => Math.random() * 2)
      .arcDashAnimateTime(1500)
      .arcStroke(0.6);
  }, [globe, attacks]);

  return null;
};
