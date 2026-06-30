"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, ContactShadows } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

function Model() {
  const { scene } = useGLTF("/3d-model/model.gltf");
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={ref} dispose={null}>
      <primitive
        object={scene}
        scale={1.8}
        position={[0, -0.5, 0]}
      />
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
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          {/* Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1.2}
            castShadow
          />
          <directionalLight
            position={[-3, 3, -3]}
            intensity={0.4}
            color="#9BA4B5"
          />
          <pointLight position={[0, 3, 0]} intensity={0.5} color="#394867" />

          {/* 3D Model */}
          <Model />

          {/* Contact Shadows */}
          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.4}
            scale={8}
            blur={2.5}
          />

          {/* Environment for reflections */}
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
useGLTF.preload("/3d-model/model.gltf");
