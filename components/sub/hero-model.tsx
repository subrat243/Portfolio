"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Center } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

function Model() {
  const { scene } = useGLTF("/3d-model/world.glb");
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={ref} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

function LoadingFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-[#9BA4B5]/30 border-t-[#212A3E] rounded-full animate-spin" />
        <p className="mt-4 text-sm text-[#394867]/70 font-medium text-center">
          Loading 3D Model...
        </p>
      </div>
    </div>
  );
}

export const HeroModel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
      className="flex-1 w-full h-[400px] md:h-[500px] lg:h-[600px] relative order-1 lg:order-2 pointer-events-auto"
    >
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          style={{ background: "transparent" }}
        >
          {/* Simple, clean lighting */}
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <directionalLight position={[-5, -5, -5]} intensity={0.5} />

          {/* 3D Model - auto-centered and fitted */}
          <Center>
            <Model />
          </Center>

          {/* Environment for PBR reflections */}
          <Environment preset="city" />

          {/* Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </Suspense>
    </motion.div>
  );
};

// Preload the model
useGLTF.preload("/3d-model/world.glb");
