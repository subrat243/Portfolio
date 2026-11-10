"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, type PointsProps, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense, useEffect } from "react";
import type { Points as PointsType } from "three";

export const StarBackground = (props: PointsProps) => {
  const ref = useRef<PointsType | null>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 }),
  );

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={new Float32Array(sphere)}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#212A3E"
          size={0.004}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => {
  const [webGLAvailable, setWebGLAvailable] = useState(false);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const context =
      canvas.getContext("webgl2") ?? canvas.getContext("webgl");

    if (context) {
      context.getExtension("WEBGL_lose_context")?.loseContext();
      setWebGLAvailable(true);
    }
  }, []);

  return (
    <div className="w-full h-full fixed inset-0 z-[5] pointer-events-none opacity-20">
      {webGLAvailable && (
        <Canvas
          camera={{ position: [0, 0, 1] }}
          style={{ pointerEvents: "none" }}
        >
          <Suspense fallback={null}>
            <StarBackground />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};
