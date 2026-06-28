// Procedural 3D Sphere, Particles, and Holographic Ring generation

export interface Point3D {
  x: number;
  y: number;
  z: number;
  nx: number; // Normal X
  ny: number; // Normal Y
  nz: number; // Normal Z
  lat: number;
  lon: number;
  isHotspot?: boolean;
}

export interface Particle3D {
  x: number;
  y: number;
  z: number;
  angle: number;
  radius: number;
  speed: number;
  yOffset: number;
}

export interface RingPoint3D {
  x: number;
  y: number;
  z: number;
  angle: number;
  radius: number;
}

export function generateSphere(numPoints: number = 1800): Point3D[] {
  const points: Point3D[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

  // Major city approximate coordinates (lat, lon in radians)
  const hotspots = [
    { lat: 0.71, lon: -1.29 }, // New York
    { lat: 0.90, lon: -0.01 }, // London
    { lat: 0.62, lon: 2.44 },  // Tokyo
    { lat: 0.22, lon: 1.81 },  // Singapore
    { lat: -0.59, lon: 151 },  // Sydney (approx angle)
    { lat: 0.65, lon: -2.13 }, // San Francisco
    { lat: 0.44, lon: 0.96 },  // Dubai
    { lat: 0.88, lon: 0.04 },  // Paris
    { lat: -0.41, lon: -0.81 },// São Paulo
  ];

  for (let i = 0; i < numPoints; i++) {
    const y = 1 - (i / (numPoints - 1)) * 2; // y goes from 1 to -1
    const radiusAtY = Math.sqrt(1 - y * y); // radius at y
    const theta = phi * i; // golden angle increment

    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;

    // Approximate lat/lon
    const lat = Math.asin(y);
    const lon = Math.atan2(z, x);

    // Check if point is near a hotspot
    let isHotspot = false;
    for (const h of hotspots) {
      const dLat = lat - h.lat;
      const dLon = lon - h.lon;
      const dist = Math.sqrt(dLat * dLat + dLon * dLon);
      if (dist < 0.12) {
        isHotspot = true;
        break;
      }
    }

    points.push({
      x,
      y,
      z,
      nx: x,
      ny: y,
      nz: z,
      lat,
      lon,
      isHotspot,
    });
  }

  return points;
}

export function generateParticles(numParticles: number = 40): Particle3D[] {
  const particles: Particle3D[] = [];
  for (let i = 0; i < numParticles; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 1.2 + Math.random() * 0.4;
    const yOffset = (Math.random() - 0.5) * 0.8;
    const speed = 0.005 + Math.random() * 0.015;

    particles.push({
      x: Math.cos(angle) * radius,
      y: yOffset,
      z: Math.sin(angle) * radius,
      angle,
      radius,
      speed,
      yOffset,
    });
  }
  return particles;
}

export function generateRing(numPoints: number = 90, radius: number = 1.35, yOffset: number = -1.1): RingPoint3D[] {
  const ring: RingPoint3D[] = [];
  for (let i = 0; i < numPoints; i++) {
    const angle = (i / numPoints) * Math.PI * 2;
    ring.push({
      x: Math.cos(angle) * radius,
      y: yOffset,
      z: Math.sin(angle) * radius,
      angle,
      radius,
    });
  }
  return ring;
}
