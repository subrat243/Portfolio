"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const OrbitRings: React.FC = () => {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const scanRingRef = useRef<THREE.Mesh>(null);
  const satelliteGroupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Rotate outer holographic rings slowly
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.1;
      ring1Ref.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.2) * 0.05;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.15;
      ring2Ref.current.rotation.y = Math.cos(t * 0.2) * 0.05;
    }

    // Animated scan rings beneath the globe
    if (scanRingRef.current) {
      scanRingRef.current.rotation.z = t * 0.5;
      const scale = 1 + (t % 3) * 0.1;
      scanRingRef.current.scale.set(scale, scale, 1);
      (scanRingRef.current.material as THREE.MeshBasicMaterial).opacity =
        Math.max(0, 1 - (t % 3) / 3) * 0.5;
    }

    // Orbiting satellites
    if (satelliteGroupRef.current) {
      satelliteGroupRef.current.rotation.y = t * 0.2;
      satelliteGroupRef.current.rotation.z = t * 0.05;
    }
  });

  return (
    <group>
      {/* Holographic Ring 1 */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 2, 0, 0]} scale={[1.4, 1.4, 1]}>
        <ringGeometry args={[115, 116, 64]} />
        <meshBasicMaterial
          color="#38BDF8"
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Holographic Ring 2 */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 3, Math.PI / 6, 0]} scale={[1.6, 1.6, 1]}>
        <ringGeometry args={[125, 125.5, 64]} />
        <meshBasicMaterial
          color="#2563EB"
          transparent
          opacity={0.4}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Animated Scan Ring Beneath Globe */}
      <mesh
        ref={scanRingRef}
        position={[0, -102, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <ringGeometry args={[90, 105, 64]} />
        <meshBasicMaterial
          color="#2563EB"
          transparent
          opacity={0.5}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Floating Satellites & Orbit Markers */}
      <group ref={satelliteGroupRef}>
        {[
          { pos: [130, 20, 0], size: 1.5 },
          { pos: [-140, -30, 50], size: 1.2 },
          { pos: [50, 140, -40], size: 1.8 },
          { pos: [-60, -130, -60], size: 1.4 },
        ].map((sat, idx) => (
          <group key={idx} position={sat.pos as [number, number, number]}>
            <mesh>
              <octahedronGeometry args={[sat.size]} />
              <meshBasicMaterial color="#38BDF8" />
            </mesh>
            <mesh>
              <sphereGeometry args={[sat.size * 2, 16, 16]} />
              <meshBasicMaterial
                color="#2563EB"
                transparent
                opacity={0.3}
                blending={THREE.AdditiveBlending}
              />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
};
