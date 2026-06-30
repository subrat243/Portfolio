"use client";

import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Center } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

function Model() {
  const { scene } = useGLTF("/3d-model/scene.glb");
  const ref = useRef<THREE.Group>(null);

  useEffect(() => {
    scene.traverse((child: any) => {
      if (child.isMesh && child.material) {
        const mat = child.material;

        // "hide" material — invisible bounding geometry
        if (mat.name === "hide") {
          child.visible = false;
          return;
        }

        // Render the plasma as dark, visible geometry
        mat.transparent = true;
        mat.side = THREE.DoubleSide;
        mat.depthWrite = false;
        mat.blending = THREE.NormalBlending;
        mat.opacity = 0.7;

        // Dark base color
        mat.color = new THREE.Color(0x1a1a2e);

        // Subtle dark emissive for depth
        if (mat.map) {
          mat.emissiveMap = mat.map;
          mat.emissive = new THREE.Color(0x16213e);
          mat.emissiveIntensity = 0.3;
        }

        mat.needsUpdate = true;
      }
    });
  }, [scene]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={ref} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

function SceneSetup() {
  const { gl } = useThree();

  useEffect(() => {
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = 1.5;
    gl.outputColorSpace = THREE.SRGBColorSpace;
  }, [gl]);

  return null;
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
            alpha: false,
            powerPreference: "high-performance",
          }}
          style={{ background: "transparent" }}
        >
          <SceneSetup />

          {/* Lighting - bright and multi-directional for plasma glow */}
          <ambientLight intensity={1.0} />
          <directionalLight position={[5, 5, 5]} intensity={2.0} />
          <directionalLight position={[-5, 3, -5]} intensity={1.0} color="#a78bfa" />
          <directionalLight position={[0, -3, 5]} intensity={0.8} color="#60a5fa" />
          <pointLight position={[3, 0, 3]} intensity={1.5} color="#c084fc" />
          <pointLight position={[-3, 0, -3]} intensity={1.5} color="#38bdf8" />

          {/* 3D Model - auto-centered and fitted */}
          <Center>
            <Model />
          </Center>

          {/* Environment for reflections & iridescence */}
          <Environment preset="sunset" />

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
useGLTF.preload("/3d-model/scene.glb");
