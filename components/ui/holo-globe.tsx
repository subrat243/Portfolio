"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const GlobeModel = () => {
  const globeRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const satellitesRef = useRef<THREE.Group>(null);

  // Generate random points on sphere for holographic data nodes
  const points = useMemo(() => {
    const pts = [];
    const count = 150;
    const radius = 1.82;
    for (let i = 0; i < count; i++) {
      // Fibonacci lattice for even distribution
      const theta = Math.acos(-1 + (2 * i) / count);
      const phi = Math.sqrt(count * Math.PI) * theta;
      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(theta);
      pts.push(new THREE.Vector3(x, y, z));
    }
    return pts;
  }, []);

  // Generate satellite positions
  const satellites = useMemo(() => {
    const sats = [];
    const radius = 2.2;
    for (let i = 0; i < 6; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const x = (radius + Math.random() * 0.5) * Math.sin(phi) * Math.cos(theta);
      const y = (radius + Math.random() * 0.5) * Math.sin(phi) * Math.sin(theta);
      const z = (radius + Math.random() * 0.5) * Math.cos(phi);
      sats.push({ pos: [x, y, z] as [number, number, number], speed: Math.random() * 0.5 + 0.5 });
    }
    return sats;
  }, []);

  useFrame((state, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.15;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.2;
      ring1Ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.25;
      ring2Ref.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (satellitesRef.current) {
      satellitesRef.current.rotation.y -= delta * 0.1;
      satellitesRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group>
      {/* Central Hologram Globe */}
      <group ref={globeRef}>
        {/* Core glowing sphere */}
        <mesh>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshBasicMaterial color="#1a2333" transparent opacity={0.7} />
        </mesh>

        {/* Outer Wireframe Grid */}
        <mesh>
          <sphereGeometry args={[1.8, 32, 16]} />
          <meshBasicMaterial color="#9BA4B5" wireframe transparent opacity={0.3} />
        </mesh>

        {/* Data Nodes (Points on sphere) */}
        {points.map((pos, i) => (
          <mesh key={i} position={[pos.x, pos.y, pos.z]}>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshBasicMaterial color={i % 5 === 0 ? "#00ffcc" : "#9BA4B5"} transparent opacity={0.8} />
          </mesh>
        ))}
      </group>

      {/* Orbital Ring 1 */}
      <mesh ref={ring1Ref} rotation={[0.4, 0.2, 0]}>
        <torusGeometry args={[2.3, 0.008, 16, 100]} />
        <meshBasicMaterial color="#9BA4B5" transparent opacity={0.4} />
      </mesh>

      {/* Orbital Ring 2 */}
      <mesh ref={ring2Ref} rotation={[-0.3, 0.4, 0]}>
        <torusGeometry args={[2.7, 0.012, 16, 100]} />
        <meshBasicMaterial color="#00ffcc" transparent opacity={0.3} />
      </mesh>

      {/* Satellites */}
      <group ref={satellitesRef}>
        {satellites.map((sat, i) => (
          <group key={i} position={sat.pos}>
            <mesh>
              <sphereGeometry args={[0.05, 16, 16]} />
              <meshBasicMaterial color="#00ffcc" />
            </mesh>
            <mesh>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshBasicMaterial color="#00ffcc" transparent opacity={0.3} />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
};

export const HoloGlobe = () => {
  return (
    <div className="w-full h-[400px] sm:h-[450px] md:h-[500px] flex items-center justify-center relative select-none cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <React.Suspense fallback={null}>
          <GlobeModel />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1.5}
            maxPolarAngle={Math.PI / 2 + 0.3}
            minPolarAngle={Math.PI / 2 - 0.3}
          />
        </React.Suspense>
      </Canvas>
      
      {/* Holographic HUD Overlays */}
      <div className="absolute top-4 left-4 border border-[#9BA4B5]/30 bg-[#212A3E]/40 backdrop-blur-md px-3 py-1 rounded text-[10px] text-[#00ffcc] tracking-widest uppercase flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00ffcc] animate-pulse"></span>
        Sec-Ops Core // Active
      </div>
      <div className="absolute bottom-4 right-4 border border-[#9BA4B5]/30 bg-[#212A3E]/40 backdrop-blur-md px-3 py-1 rounded text-[10px] text-[#9BA4B5] tracking-widest uppercase flex items-center gap-2">
        Global Defense // 99.9%
      </div>
    </div>
  );
};
