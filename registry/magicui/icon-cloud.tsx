"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

interface IconCloudProps {
  icons?: React.ReactNode[];
  images?: string[];
}

interface CloudItem {
  x: number;
  y: number;
  z: number;
  scale: number;
  opacity: number;
  element: React.ReactNode;
}

export function IconCloud({ icons = [], images = [] }: IconCloudProps) {
  const [items, setItems] = useState<CloudItem[]>([]);
  const rotationRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const previousMousePosRef = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Combine icons and images into a single list of React elements
  const allElements = useMemo(() => {
    const renderedImages = images.map((url, i) => (
      <img key={`img-${i}`} src={url} alt="icon" className="w-12 h-12 rounded-full object-contain" />
    ));
    return [...icons, ...renderedImages];
  }, [icons, images]);

  const count = allElements.length;

  // Initial spherical coordinates using Fibonacci lattice
  const initialPositions = useMemo(() => {
    const positions = [];
    const radius = 160; // radius of the sphere in px
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      positions.push({ x, y, z });
    }
    return positions;
  }, [count]);

  useEffect(() => {
    let animationFrameId: number;
    let currentRotX = 0.003;
    let currentRotY = 0.003;

    const updatePositions = () => {
      if (!isDraggingRef.current) {
        // Apply slight gentle auto-rotation when not dragging
        rotationRef.current.x += currentRotX;
        rotationRef.current.y += currentRotY;
      }

      const sinX = Math.sin(rotationRef.current.x);
      const cosX = Math.cos(rotationRef.current.x);
      const sinY = Math.sin(rotationRef.current.y);
      const cosY = Math.cos(rotationRef.current.y);

      const updatedItems: CloudItem[] = initialPositions.map((pos, index) => {
        // Rotate around Y axis
        const x1 = pos.x * cosY + pos.z * sinY;
        const z1 = -pos.x * sinY + pos.z * cosY;

        // Rotate around X axis
        const y2 = pos.y * cosX - z1 * sinX;
        const z2 = pos.y * sinX + z1 * cosX;

        // Perspective transformation
        const perspective = 350;
        const scale = perspective / (perspective - z2);
        const opacity = Math.min(Math.max((z2 + 200) / 350, 0.25), 1);

        return {
          x: x1 * scale,
          y: y2 * scale,
          z: z2,
          scale,
          opacity,
          element: allElements[index],
        };
      });

      // Sort by Z index to ensure correct visual layering
      updatedItems.sort((a, b) => a.z - b.z);
      setItems(updatedItems);

      animationFrameId = requestAnimationFrame(updatePositions);
    };

    updatePositions();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [initialPositions, allElements]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    previousMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - previousMousePosRef.current.x;
    const deltaY = e.clientY - previousMousePosRef.current.y;

    rotationRef.current.y += deltaX * 0.005;
    rotationRef.current.x -= deltaY * 0.005;

    previousMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="relative flex w-[350px] h-[350px] sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px] items-center justify-center select-none cursor-grab active:cursor-grabbing overflow-hidden pointer-events-auto"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {items.map((item, i) => (
          <div
            key={i}
            className="absolute flex items-center justify-center transition-transform duration-75 ease-out"
            style={{
              transform: `translate3d(${item.x}px, ${item.y}px, 0px) scale(${item.scale})`,
              opacity: item.opacity,
              zIndex: Math.round(item.z + 200),
            }}
          >
            <div className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center pointer-events-auto hover:scale-125 transition-transform duration-200 text-white">
              {item.element}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
