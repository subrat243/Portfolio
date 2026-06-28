// Lambert shading, Rim lighting, and Day/Night transition calculations

import { clamp } from "./utils";

export interface LightingResult {
  brightness: number;
  color: string;
  isNight: boolean;
}

export function calculateLighting(
  nx: number,
  ny: number,
  nz: number,
  lightDir: { x: number; y: number; z: number },
  viewDir: { x: number; y: number; z: number } = { x: 0, y: 0, z: 1 }
): LightingResult {
  // Normalize light direction
  const lenL = Math.sqrt(lightDir.x * lightDir.x + lightDir.y * lightDir.y + lightDir.z * lightDir.z);
  const lx = lightDir.x / lenL;
  const ly = lightDir.y / lenL;
  const lz = lightDir.z / lenL;

  // Lambertian diffuse term
  const dotNL = nx * lx + ny * ly + nz * lz;
  const diffuse = clamp(dotNL, 0, 1);

  // Atmospheric Rim Lighting
  // dotNV is dot product of normal and view direction
  const dotNV = nx * viewDir.x + ny * viewDir.y + nz * viewDir.z;
  // Rim lighting is stronger when normal is perpendicular to view direction (on the edges)
  const rim = clamp(1 - dotNV, 0, 1);
  const rimPower = Math.pow(rim, 3) * 0.6;

  // Day / Night transition logic
  const isNight = dotNL < -0.1;

  // Combine diffuse and rim lighting
  // Add a small ambient floor so dark side is still faintly visible
  const ambient = 0.15;
  const totalBrightness = clamp(diffuse * 0.85 + rimPower + ambient, 0, 1);

  // Determine color based on daylight vs night vs rim
  let color = "rgba(14, 165, 233, 0.9)"; // Base Cyan (Tailwind sky-500)

  if (isNight) {
    // Deep blue / dark navy with high transparency for night side
    color = "rgba(30, 58, 138, 0.4)"; // Tailwind blue-900/40
  } else if (rimPower > 0.4 && diffuse < 0.5) {
    // Bright atmospheric glow on the rim
    color = "rgba(56, 189, 248, 0.95)"; // Tailwind sky-400
  } else {
    // Standard daylight blue/cyan
    const alpha = clamp(totalBrightness + 0.2, 0.4, 0.95);
    color = `rgba(14, 165, 233, ${alpha})`;
  }

  return {
    brightness: totalBrightness,
    color,
    isNight,
  };
}
