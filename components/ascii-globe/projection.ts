// 3D to 2D perspective projection and matrix rotation

export interface ProjectedPoint {
  x2d: number;
  y2d: number;
  z: number;
  scale: number;
}

export function rotateX(y: number, z: number, angle: number): { y: number; z: number } {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    y: y * cos - z * sin,
    z: y * sin + z * cos,
  };
}

export function rotateY(x: number, z: number, angle: number): { x: number; z: number } {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: x * cos + z * sin,
    z: -x * sin + z * cos,
  };
}

export function project(
  x: number,
  y: number,
  z: number,
  width: number,
  height: number,
  fov: number = 400,
  viewDist: number = 4
): ProjectedPoint {
  // Distance from camera
  const distance = viewDist + z;
  
  // Prevent division by zero or negative distance
  const safeDist = Math.max(0.1, distance);

  // Perspective projection factor
  const scale = fov / safeDist;

  // Project to 2D screen space (centered)
  const x2d = width / 2 + x * scale;
  const y2d = height / 2 - y * scale; // Invert Y for canvas coordinates

  return {
    x2d,
    y2d,
    z, // Return rotated Z for depth sorting / backface culling
    scale,
  };
}
