"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { CountryNode } from "./types";

interface HotspotsProps {
  countries: CountryNode[];
  onHover: (data: { country: CountryNode; x: number; y: number } | null) => void;
  onClick: (country: CountryNode) => void;
}

function latLngToVector3(
  lat: number,
  lng: number,
  radius: number = 100.5
): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  return new THREE.Vector3(x, y, z);
}

const HotspotItem: React.FC<{
  country: CountryNode;
  onHover: (data: { country: CountryNode; x: number; y: number } | null) => void;
  onClick: (country: CountryNode) => void;
}> = ({ country, onHover, onClick }) => {
  const groupRef = useRef<THREE.Group>(null);
  const outerSphereRef = useRef<THREE.Mesh>(null);
  const pos = useMemo(
    () => latLngToVector3(country.lat, country.lng, 100.5),
    [country.lat, country.lng]
  );

  // Pulse effect
  useFrame(({ clock }) => {
    if (outerSphereRef.current) {
      const t = clock.getElapsedTime() * 3 + country.lat;
      const scale = 1 + Math.sin(t) * 0.3;
      outerSphereRef.current.scale.set(scale, scale, scale);
      (outerSphereRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.3 + Math.sin(t) * 0.2;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[pos.x, pos.y, pos.z]}
      onPointerOver={(e) => {
        e.stopPropagation();
        onHover({ country, x: e.clientX, y: e.clientY });
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        onHover(null);
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClick(country);
      }}
    >
      {/* Inner solid glow */}
      <mesh>
        <sphereGeometry args={[1.2, 16, 16]} />
        <meshBasicMaterial color="#38BDF8" />
      </mesh>
      {/* Outer pulsing aura */}
      <mesh ref={outerSphereRef}>
        <sphereGeometry args={[2.5, 16, 16]} />
        <meshBasicMaterial
          color="#2563EB"
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
};

export const Hotspots: React.FC<HotspotsProps> = ({
  countries,
  onHover,
  onClick,
}) => {
  return (
    <>
      {countries.map((country) => (
        <HotspotItem
          key={country.id}
          country={country}
          onHover={onHover}
          onClick={onClick}
        />
      ))}
    </>
  );
};
