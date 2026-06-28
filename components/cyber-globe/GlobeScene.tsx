"use client";

import React, { useMemo, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import ThreeGlobe from "three-globe";
import { Attack, CountryNode } from "./types";
import { AttackArcs } from "./AttackArcs";
import { Hotspots } from "./Hotspots";
import { OrbitRings } from "./OrbitRings";
import { Particles } from "./Particles";
import { Background } from "./Background";

interface GlobeSceneProps {
  attacks: Attack[];
  countries: CountryNode[];
  onHover: (data: { country: CountryNode; x: number; y: number } | null) => void;
  onClick: (country: CountryNode) => void;
}

const GlobeContainer: React.FC<{
  globe: ThreeGlobe;
  attacks: Attack[];
  countries: CountryNode[];
  onHover: (data: { country: CountryNode; x: number; y: number } | null) => void;
  onClick: (country: CountryNode) => void;
}> = ({ globe, attacks, countries, onHover, onClick }) => {
  const groupRef = useRef<THREE.Group>(null);

  // Slight mouse parallax effect
  useFrame(({ pointer }) => {
    if (groupRef.current) {
      const targetX = pointer.y * 0.05;
      const targetY = pointer.x * 0.05;
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* ThreeGlobe Instance */}
      <primitive object={globe} />
      {/* Subcomponents */}
      <AttackArcs globe={globe} attacks={attacks} />
      <Hotspots countries={countries} onHover={onHover} onClick={onClick} />
      <OrbitRings />
      <Particles />
      <Background />
    </group>
  );
};

export const GlobeScene: React.FC<GlobeSceneProps> = ({
  attacks,
  countries,
  onHover,
  onClick,
}) => {
  const globe = useMemo(() => new ThreeGlobe(), []);

  useEffect(() => {
    if (!globe) return;

    // Apply premium dark blue ocean / earth material
    const globeMaterial = new THREE.MeshPhongMaterial({
      color: 0x0a192f,
      emissive: 0x020617,
      shininess: 15,
      transparent: true,
      opacity: 0.92,
    });

    globe
      .globeMaterial(globeMaterial)
      .showAtmosphere(true)
      .atmosphereColor("#38BDF8")
      .atmosphereAltitude(0.15);

    // Fetch and apply country polygons
    fetch(
      "https://raw.githubusercontent.com/vasturiano/three-globe/master/example/country_polygons/ne_110m_admin_0_countries.geojson"
    )
      .then((res) => res.json())
      .then((data) => {
        globe
          .polygonsData(data.features)
          .polygonPolygonGeometryOffset(0.005)
          .polygonCapColor(() => "#1e293b")
          .polygonSideColor(() => "#0f172a")
          .polygonStrokeColor(() => "#2563eb");
      })
      .catch((err) => console.warn("Failed to load geojson polygons", err));
  }, [globe]);

  return (
    <div className="w-full h-full relative select-none cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 260], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        {/* Elegant Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[100, 100, 200]} intensity={1.5} />
        <directionalLight position={[-100, -100, -200]} intensity={0.5} />
        <pointLight position={[0, 0, 200]} intensity={1} color="#38BDF8" />

        {/* Globe Container & Elements */}
        <GlobeContainer
          globe={globe}
          attacks={attacks}
          countries={countries}
          onHover={onHover}
          onClick={onClick}
        />

        {/* Orbit Controls with auto-rotation (1 rotation every 35 seconds) */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          rotateSpeed={0.8}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(Math.PI * 3) / 4}
        />
      </Canvas>
    </div>
  );
};
