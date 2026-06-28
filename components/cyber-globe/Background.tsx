"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const Background: React.FC = () => {
  const starsRef = useRef<THREE.Points>(null);
  const nebulaRef = useRef<THREE.Group>(null);

  // Generate tiny stars in the distant background
  const starPositions = useMemo(() => {
    const count = 500;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 300 + Math.random() * 200; // Far behind the globe

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = clock.getElapsedTime() * 0.005;
    }
    if (nebulaRef.current) {
      nebulaRef.current.rotation.z = clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <group>
      {/* Tiny Stars */}
      <points ref={starsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[starPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={1.5}
          color="#ffffff"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      {/* Faint Nebula / Soft Volumetric Glow */}
      <group ref={nebulaRef} position={[0, 0, -250]}>
        {[
          { pos: [-100, 50, 0], color: "#2563EB", size: 150 },
          { pos: [120, -80, 0], color: "#38BDF8", size: 180 },
          { pos: [0, 20, -50], color: "#1e293b", size: 220 },
        ].map((glow, idx) => (
          <mesh key={idx} position={glow.pos as [number, number, number]}>
            <planeGeometry args={[glow.size, glow.size]} />
            <meshBasicMaterial
              color={glow.color}
              transparent
              opacity={0.15}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
};
