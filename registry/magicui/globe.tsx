"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.22, 0.28, 0.4],
  markerColor: [0.98, 0.39, 0.38],
  glowColor: [0.61, 0.64, 0.71],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.0522, -118.2437], size: 0.08 },
    { location: [37.7749, -122.4194], size: 0.1 },
    { location: [51.5074, -0.1278], size: 0.08 },
    { location: [48.8566, 2.3522], size: 0.06 },
    { location: [35.6762, 139.6503], size: 0.1 },
  ],
  onPointerInteraction: () => {},
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);

  useEffect(() => {
    let globe: any;
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
      globe = createGlobe(canvasRef.current, {
        ...config,
        width: width * 2,
        height: width * 2,
        onRender: (state) => {
          if (!pointerInteracting.current) {
            phi += 0.005;
          }
          state.phi = phi + pointerInteractionMovement.current;
          state.width = width * 2;
          state.height = width * 2;
        },
      });
    }

    const handleResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      globe?.destroy();
    };
  }, [config]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full h-full w-full opacity-100 transition-opacity duration-500",
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX as any;
          canvasRef.current?.style.setProperty("cursor", "grabbing");
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          canvasRef.current?.style.setProperty("cursor", "grab");
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          canvasRef.current?.style.setProperty("cursor", "grab");
        }}
        onPointerMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - (pointerInteracting.current as any);
            pointerInteractionMovement.current = delta / 200;
          }
        }}
      />
    </div>
  );
}
