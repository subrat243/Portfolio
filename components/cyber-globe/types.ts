export type AttackType = "normal" | "suspicious" | "malicious" | "blocked";

export interface CountryNode {
  id: string;
  name: string;
  lat: number;
  lng: number;
  threatLevel: "Low" | "Medium" | "High" | "Critical";
  attackCount: number;
  lastActivity: string;
  riskScore: number;
}

export interface Attack {
  id: string;
  source: CountryNode;
  destination: CountryNode;
  type: AttackType;
  progress: number;
  timestamp: number;
}

export interface TooltipData {
  country: CountryNode;
  x: number;
  y: number;
}
