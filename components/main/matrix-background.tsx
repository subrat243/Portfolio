"use client";

import { useEffect, useRef } from "react";

export const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const chars = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 16;
    let columns = Math.floor(width / fontSize);

    // Array to store the vertical position of each drop
    let drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Start at random positions above the screen
    }

    const draw = () => {
      // Clear the canvas completely for transparent background
      ctx.clearRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Draw the tail
        const tailLength = 15;
        for (let j = 0; j < tailLength; j++) {
          const yPos = (drops[i] - j) * fontSize;
          
          if (yPos < 0 || yPos > height) continue;

          // Opacity fades out the further back in the tail we are
          const opacity = 1 - (j / tailLength);
          
          // Use #9BA4B5 with varying opacity
          ctx.fillStyle = `rgba(155, 164, 181, ${opacity})`;
          
          const text = chars.charAt(Math.floor(Math.random() * chars.length));
          ctx.fillText(text, i * fontSize, yPos);
        }

        // Move the drop down
        drops[i]++;

        // Reset drop to the top randomly after it crosses the screen
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      
      const newDrops = [];
      for (let i = 0; i < columns; i++) {
        newDrops[i] = drops[i] !== undefined ? drops[i] : Math.random() * -100;
      }
      drops = newDrops;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-full fixed inset-0 z-[5] pointer-events-none opacity-30">
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
};
