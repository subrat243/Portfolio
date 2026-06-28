// Constants and utility math functions for ASCII Globe

export const DENSITY_RAMP = " .`'^\",:;Il!i~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";

export function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

export function getAsciiChar(brightness: number): string {
  const clamped = clamp(brightness, 0, 1);
  const index = Math.floor(clamped * (DENSITY_RAMP.length - 1));
  return DENSITY_RAMP[index];
}

export function degToRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}

export function lerp(start: number, end: number, amt: number): number {
  return (1 - amt) * start + amt * end;
}
