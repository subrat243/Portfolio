"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";

const CyberCore = () => {
  const coreRef = useRef<THREE.Mesh>(null);
  const shieldRef = useRef<THREE.Mesh>(null);
  const scannerRef = useRef<THREE.Mesh>(null);
  const textGroupRef = useRef<THREE.Group>(null);
  const outerRingsRef = useRef<THREE.Group>(null);

  // Floating cyber tech words & binary streams
  const cyberWords = useMemo(() => {
    const words = [
      "0101010", "0x7FFF", "AES-256", "SECURE", "ROOT", "SYN_ACK",
      "FIREWALL", "KERNEL", "BLOCK", "ECDSA", "DECRYPT", "CYBER_SEC",
      "1011001", "PORT_443", "ZERO_TRUST", "MD5_HASH", "AI_NEURAL"
    ];
    const items = [];
    const count = words.length;
    const radius = 2.8;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      items.push({ text: words[i], pos: [x, y, z] as [number, number, number] });
    }
    return items;
  }, []);

  // Floating data nodes
  const nodes = useMemo(() => {
    const pts = [];
    const count = 40;
    const radius = 2.2;
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      pts.push([x, y, z] as [number, number, number]);
    }
    return pts;
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    
    // Core rotation and pulsating scale
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.3;
      coreRef.current.rotation.y += delta * 0.5;
      const scale = 1 + Math.sin(time * 3) * 0.05;
      coreRef.current.scale.set(scale, scale, scale);
    }

    // Shield outer rotation
    if (shieldRef.current) {
      shieldRef.current.rotation.y -= delta * 0.2;
      shieldRef.current.rotation.z += delta * 0.1;
    }

    // Scanner ring sweeping up and down
    if (scannerRef.current) {
      scannerRef.current.position.y = Math.sin(time * 1.5) * 2.0;
      scannerRef.current.rotation.z += delta * 1.0;
    }

    // Text group rotating
    if (textGroupRef.current) {
      textGroupRef.current.rotation.y += delta * 0.15;
      textGroupRef.current.rotation.x = Math.sin(time * 0.5) * 0.1;
    }

    // Outer geometric rings
    if (outerRingsRef.current) {
      outerRingsRef.current.rotation.z -= delta * 0.25;
      outerRingsRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group>
      {/* Central Quantum Data Core (Octahedron) */}
      <mesh ref={coreRef}>
        <octahedronGeometry args={[1.3, 0]} />
        <meshStandardMaterial color="#212A3E" roughness={0.2} metalness={0.8} wireframe={false} />
        {/* Inner glow wireframe */}
        <mesh>
          <octahedronGeometry args={[1.35, 0]} />
          <meshBasicMaterial color="#00ffcc" wireframe transparent opacity={0.6} />
        </mesh>
      </mesh>

      {/* Geodesic Security Shield (Icosahedron Wireframe Forcefield) */}
      <mesh ref={shieldRef}>
        <icosahedronGeometry args={[2.3, 2]} />
        <meshBasicMaterial color="#9BA4B5" wireframe transparent opacity={0.25} />
      </mesh>

      {/* Security Intercept Nodes */}
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <boxGeometry args={[0.06, 0.06, 0.06]} />
          <meshBasicMaterial color={i % 3 === 0 ? "#00ffcc" : "#9BA4B5"} transparent opacity={0.7} />
        </mesh>
      ))}

      {/* Vulnerability Scanner Wave Ring */}
      <mesh ref={scannerRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.9, 2.4, 32]} />
        <meshBasicMaterial color="#00ffcc" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>

      {/* Outer High-Tech Alignment Rings */}
      <group ref={outerRingsRef}>
        <mesh rotation={[0.4, 0, 0]}>
          <torusGeometry args={[2.9, 0.015, 16, 100]} />
          <meshBasicMaterial color="#394867" transparent opacity={0.6} />
        </mesh>
        <mesh rotation={[-0.4, 0.3, 0]}>
          <torusGeometry args={[3.3, 0.01, 16, 100]} />
          <meshBasicMaterial color="#9BA4B5" transparent opacity={0.4} />
        </mesh>
        {/* Rotating lock node */}
        <mesh position={[0, 3.3, 0]}>
          <octahedronGeometry args={[0.15, 0]} />
          <meshBasicMaterial color="#00ffcc" />
        </mesh>
      </group>

      {/* Floating Cryptographic Data Streams */}
      <group ref={textGroupRef}>
        {cyberWords.map((item, i) => (
          <Text
            key={i}
            position={item.pos}
            color={i % 2 === 0 ? "#00ffcc" : "#9BA4B5"}
            fontSize={0.15}
            anchorX="center"
            anchorY="middle"
            fontStyle="italic"
          >
            {item.text}
          </Text>
        ))}
      </group>
    </group>
  );
};

export const CyberArt = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative select-none cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 7.2], fov: 55 }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <directionalLight position={[-5, 5, -5]} intensity={0.8} />
        <React.Suspense fallback={null}>
          <CyberCore />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1.5}
            maxPolarAngle={Math.PI / 2 + 0.4}
            minPolarAngle={Math.PI / 2 - 0.4}
          />
        </React.Suspense>
      </Canvas>
    </div>
  );
};
