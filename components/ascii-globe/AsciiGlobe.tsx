"use client";

import React, { useEffect, useRef } from "react";
import { AnimationManager } from "./animation";
import { AsciiGlobeRenderer } from "./renderer";

export const AsciiGlobe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animManagerRef = useRef<AnimationManager | null>(null);
  const rendererRef = useRef<AsciiGlobeRenderer | null>(null);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const animManager = new AnimationManager();
    animManagerRef.current = animManager;

    const renderer = new AsciiGlobeRenderer(canvasRef.current, animManager);
    rendererRef.current = renderer;

    const renderLoop = (timestamp: number) => {
      renderer.render(timestamp);
      requestRef.current = requestAnimationFrame(renderLoop);
    };

    requestRef.current = requestAnimationFrame(renderLoop);

    const handleResize = () => {
      if (rendererRef.current) {
        rendererRef.current.resize();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !animManagerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Normalize mouse coordinates from -1 to 1
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;

    animManagerRef.current.setMouseParallax(nx, ny);
  };

  const handleMouseLeave = () => {
    if (animManagerRef.current) {
      animManagerRef.current.resetMouseParallax();
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] bg-[#020617] border border-[#1e3a8a]/40 rounded-2xl overflow-hidden shadow-2xl group select-none cursor-crosshair pointer-events-auto"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* Subtle overlay decorative elements */}
      <div className="absolute top-4 left-4 px-3 py-1 bg-[#1e3a8a]/30 border border-[#38bdf8]/30 rounded-md backdrop-blur-sm pointer-events-none">
        <span className="text-xs font-mono text-[#38bdf8] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
          GLOBAL THREAT RADAR
        </span>
      </div>

      <div className="absolute bottom-4 right-4 pointer-events-none">
        <span className="text-[10px] font-mono text-[#38bdf8]/60">
          SYS.LOC: 0x7F // SEC_GRID: ACTIVE
        </span>
      </div>
    </div>
  );
};
