import { CountryNode } from "./types";

// Major countries and hotspots
export const MAJOR_COUNTRIES: CountryNode[] = [
  {
    id: "usa",
    name: "USA",
    lat: 38.0,
    lng: -97.0,
    threatLevel: "Critical",
    attackCount: 1428,
    lastActivity: "Just now",
    riskScore: 92,
  },
  {
    id: "can",
    name: "Canada",
    lat: 56.1304,
    lng: -106.3468,
    threatLevel: "Medium",
    attackCount: 432,
    lastActivity: "2s ago",
    riskScore: 45,
  },
  {
    id: "bra",
    name: "Brazil",
    lat: -14.235,
    lng: -51.9253,
    threatLevel: "High",
    attackCount: 892,
    lastActivity: "1s ago",
    riskScore: 78,
  },
  {
    id: "gbr",
    name: "UK",
    lat: 55.3781,
    lng: -3.436,
    threatLevel: "High",
    attackCount: 954,
    lastActivity: "Just now",
    riskScore: 81,
  },
  {
    id: "deu",
    name: "Germany",
    lat: 51.1657,
    lng: 10.4515,
    threatLevel: "High",
    attackCount: 876,
    lastActivity: "3s ago",
    riskScore: 75,
  },
  {
    id: "fra",
    name: "France",
    lat: 46.2276,
    lng: 2.2137,
    threatLevel: "Medium",
    attackCount: 612,
    lastActivity: "4s ago",
    riskScore: 58,
  },
  {
    id: "rus",
    name: "Russia",
    lat: 61.524,
    lng: 105.3188,
    threatLevel: "Critical",
    attackCount: 1845,
    lastActivity: "Just now",
    riskScore: 95,
  },
  {
    id: "ind",
    name: "India",
    lat: 20.5937,
    lng: 78.9629,
    threatLevel: "High",
    attackCount: 1120,
    lastActivity: "1s ago",
    riskScore: 84,
  },
  {
    id: "chn",
    name: "China",
    lat: 35.8617,
    lng: 104.1954,
    threatLevel: "Critical",
    attackCount: 2150,
    lastActivity: "Just now",
    riskScore: 98,
  },
  {
    id: "jpn",
    name: "Japan",
    lat: 36.2048,
    lng: 138.2529,
    threatLevel: "High",
    attackCount: 780,
    lastActivity: "2s ago",
    riskScore: 72,
  },
  {
    id: "sgp",
    name: "Singapore",
    lat: 1.3521,
    lng: 103.8198,
    threatLevel: "Medium",
    attackCount: 540,
    lastActivity: "3s ago",
    riskScore: 62,
  },
  {
    id: "aus",
    name: "Australia",
    lat: -25.2744,
    lng: 133.7751,
    threatLevel: "Medium",
    attackCount: 490,
    lastActivity: "5s ago",
    riskScore: 52,
  },
  {
    id: "zaf",
    name: "South Africa",
    lat: -30.5595,
    lng: 22.9375,
    threatLevel: "Medium",
    attackCount: 380,
    lastActivity: "6s ago",
    riskScore: 48,
  },
];

// Predefined attack pairs (source -> destination)
export const ATTACK_ROUTES = [
  { source: "usa", destination: "deu" }, // USA -> Germany
  { source: "chn", destination: "ind" }, // China -> India
  { source: "rus", destination: "gbr" }, // Russia -> UK
  { source: "bra", destination: "usa" }, // Brazil -> USA
  { source: "ind", destination: "aus" }, // India -> Australia
  { source: "jpn", destination: "sgp" }, // Japan -> Singapore
  { source: "fra", destination: "can" }, // France -> Canada
  { source: "chn", destination: "sgp" }, // South Korea -> UAE equivalent / China -> Singapore
  { source: "zaf", destination: "deu" }, // South Africa -> Germany
  { source: "can", destination: "jpn" }, // Canada -> Japan
  { source: "usa", destination: "chn" },
  { source: "rus", destination: "usa" },
  { source: "gbr", destination: "fra" },
  { source: "bra", destination: "zaf" },
  { source: "aus", destination: "jpn" },
];

export const ATTACK_COLORS = {
  normal: "#2563EB",     // Blue: Normal traffic
  suspicious: "#F97316", // Orange: Suspicious activity
  malicious: "#EF4444",  // Red: Malicious traffic
  blocked: "#10B981",    // Green: Blocked attack
};
