"use client";

import React, { useEffect, useRef, useState } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";

export const ChromeDino = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(742);
  const [gameOver, setGameOver] = useState(false);

  // Game loop references
  const stateRef = useRef({
    isAutoPlay: true,
    dinoY: 0, // 0 is ground level
    velocityY: 0,
    jumping: false,
    gravity: 0.6,
    jumpPower: -10.5,
    obstacles: [] as { x: number; width: number; height: number; passed: boolean }[],
    clouds: [] as { x: number; y: number; speed: number }[],
    gameSpeed: 5,
    score: 0,
    gameOver: false,
    animId: 0,
    legFlag: false,
    timer: 0,
  });

  // Keep stateRef in sync with React state for toggle
  useEffect(() => {
    stateRef.current.isAutoPlay = isAutoPlay;
  }, [isAutoPlay]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = 400;
    canvas.height = 150;

    // Initial clouds
    stateRef.current.clouds = [
      { x: 100, y: 30, speed: 0.5 },
      { x: 280, y: 20, speed: 0.7 },
      { x: 380, y: 40, speed: 0.4 },
    ];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        if (stateRef.current.gameOver) {
          restartGame();
          return;
        }
        if (stateRef.current.isAutoPlay) {
          setIsAutoPlay(false);
          stateRef.current.isAutoPlay = false;
        }
        if (!stateRef.current.jumping) {
          stateRef.current.jumping = true;
          stateRef.current.velocityY = stateRef.current.jumpPower;
        }
      }
    };

    const handleClick = () => {
      if (stateRef.current.gameOver) {
        restartGame();
        return;
      }
      if (stateRef.current.isAutoPlay) {
        setIsAutoPlay(false);
        stateRef.current.isAutoPlay = false;
      }
      if (!stateRef.current.jumping) {
        stateRef.current.jumping = true;
        stateRef.current.velocityY = stateRef.current.jumpPower;
      }
    };

    canvas.addEventListener("click", handleClick);
    window.addEventListener("keydown", handleKeyDown);

    function restartGame() {
      stateRef.current.gameOver = false;
      stateRef.current.score = 0;
      stateRef.current.dinoY = 0;
      stateRef.current.velocityY = 0;
      stateRef.current.jumping = false;
      stateRef.current.obstacles = [];
      setGameOver(false);
    }

    // Drawing helper: Dino
    function drawDino(ctx: CanvasRenderingContext2D, y: number, leg: boolean) {
      ctx.fillStyle = "#212A3E"; // Premium dark slate
      const baseY = 110 - y;

      // Body (boxy/pixel style)
      ctx.fillRect(40, baseY - 25, 20, 25);
      // Head
      ctx.fillRect(52, baseY - 35, 16, 16);
      // Snout/eye notch
      ctx.fillStyle = "#F1F6F9";
      ctx.fillRect(56, baseY - 32, 4, 4);
      ctx.fillStyle = "#212A3E";
      // Arm
      ctx.fillRect(58, baseY - 18, 8, 4);
      // Tail
      ctx.fillRect(36, baseY - 20, 6, 12);

      // Legs
      if (y > 0) {
        // Jumping legs
        ctx.fillRect(42, baseY, 6, 6);
        ctx.fillRect(52, baseY, 6, 6);
      } else if (leg) {
        ctx.fillRect(42, baseY, 6, 10);
        ctx.fillRect(52, baseY, 6, 4);
      } else {
        ctx.fillRect(42, baseY, 6, 4);
        ctx.fillRect(52, baseY, 6, 10);
      }
    }

    // Drawing helper: Cactus
    function drawCactus(ctx: CanvasRenderingContext2D, x: number, width: number, height: number) {
      ctx.fillStyle = "#394867";
      const baseY = 120 - height;
      // Main stem
      ctx.fillRect(x + width * 0.3, baseY, width * 0.4, height);
      // Left arm
      ctx.fillRect(x, baseY + height * 0.3, width * 0.3, 4);
      ctx.fillRect(x, baseY + height * 0.1, 4, height * 0.2 + 4);
      // Right arm
      ctx.fillRect(x + width * 0.7, baseY + height * 0.4, width * 0.3, 4);
      ctx.fillRect(x + width - 4, baseY + height * 0.2, 4, height * 0.2 + 4);
    }

    // Drawing helper: Cloud
    function drawCloud(ctx: CanvasRenderingContext2D, x: number, y: number) {
      ctx.fillStyle = "#9BA4B5";
      ctx.globalAlpha = 0.5;
      ctx.fillRect(x, y, 30, 10);
      ctx.fillRect(x + 5, y - 5, 20, 5);
      ctx.fillRect(x + 10, y - 10, 10, 5);
      ctx.globalAlpha = 1.0;
    }

    // Game Loop
    function update() {
      if (!ctx || !canvas) return;
      const state = stateRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!state.gameOver) {
        state.timer++;
        state.score += 0.2;
        if (Math.floor(state.score) % 100 === 0 && state.gameSpeed < 10) {
          state.gameSpeed += 0.2;
        }

        // Leg flag toggle for running animation
        if (state.timer % 10 === 0) {
          state.legFlag = !state.legFlag;
        }

        // Update Dino Physics
        if (state.jumping) {
          state.dinoY -= state.velocityY;
          state.velocityY += state.gravity;
          if (state.dinoY <= 0) {
            state.dinoY = 0;
            state.jumping = false;
            state.velocityY = 0;
          }
        }

        // Auto-play AI Logic (Jump if obstacle is near)
        if (state.isAutoPlay && !state.jumping) {
          const nextObstacle = state.obstacles[0];
          if (nextObstacle && nextObstacle.x < 125 && nextObstacle.x > 40) {
            state.jumping = true;
            state.velocityY = state.jumpPower;
          }
        }

        // Spawn Obstacles
        if (state.obstacles.length === 0 || state.obstacles[state.obstacles.length - 1].x < canvas.width - 200 - Math.random() * 150) {
          const height = Math.random() > 0.5 ? 25 : 35;
          const width = 15;
          state.obstacles.push({ x: canvas.width, width, height, passed: false });
        }

        // Update & Draw Obstacles
        for (let i = state.obstacles.length - 1; i >= 0; i--) {
          const obs = state.obstacles[i];
          obs.x -= state.gameSpeed;

          // Check Collision
          const dinoBox = { x: 40, y: 110 - state.dinoY - 25, width: 20, height: 25 };
          const obsBox = { x: obs.x, y: 120 - obs.height, width: obs.width, height: obs.height };

          if (
            dinoBox.x < obsBox.x + obsBox.width &&
            dinoBox.x + dinoBox.width > obsBox.x &&
            dinoBox.y < obsBox.y + obsBox.height &&
            dinoBox.y + dinoBox.height > obsBox.y
          ) {
            state.gameOver = true;
            setGameOver(true);
            if (state.score > highScore) {
              setHighScore(Math.floor(state.score));
            }
          }

          if (obs.x + obs.width < 0) {
            state.obstacles.splice(i, 1);
          } else {
            drawCactus(ctx, obs.x, obs.width, obs.height);
          }
        }

        // Update & Draw Clouds
        state.clouds.forEach((cloud) => {
          cloud.x -= cloud.speed;
          if (cloud.x < -40) cloud.x = canvas.width;
          drawCloud(ctx, cloud.x, cloud.y);
        });
      } else {
        // Draw existing obstacles if game over
        state.obstacles.forEach((obs) => {
          drawCactus(ctx, obs.x, obs.width, obs.height);
        });
        state.clouds.forEach((cloud) => {
          drawCloud(ctx, cloud.x, cloud.y);
        });
      }

      // Draw Ground
      ctx.strokeStyle = "#9BA4B5";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, 120);
      ctx.lineTo(canvas.width, 120);
      ctx.stroke();

      // Draw small ground bumps
      ctx.fillStyle = "#9BA4B5";
      ctx.fillRect(80, 122, 3, 2);
      ctx.fillRect(180, 121, 4, 1);
      ctx.fillRect(290, 122, 2, 2);
      ctx.fillRect(360, 121, 5, 2);

      // Draw Dino
      drawDino(ctx, state.dinoY, state.legFlag);

      // Update React Score Display periodically
      if (state.timer % 5 === 0) {
        setScore(Math.floor(state.score));
      }

      state.animId = requestAnimationFrame(update);
    }

    update();

    return () => {
      cancelAnimationFrame(stateRef.current.animId);
      canvas.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [highScore]);

  return (
    <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-md border border-[#9BA4B5]/40 rounded-2xl shadow-xl w-full max-w-[440px] pointer-events-auto">
      {/* Top Bar / Scores */}
      <div className="flex items-center justify-between w-full mb-4 px-2 font-mono text-sm text-[#212A3E]">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 transition-all ${
              isAutoPlay
                ? "bg-[#212A3E] text-white shadow-md"
                : "bg-transparent border border-[#212A3E] text-[#212A3E]"
            }`}
          >
            <SparklesIcon className="w-3.5 h-3.5" />
            {isAutoPlay ? "AI Auto-Play" : "Manual Mode"}
          </button>
        </div>
        <div className="flex items-center gap-4 font-bold tracking-wider">
          <span className="text-[#9BA4B5]">HI {String(highScore).padStart(5, "0")}</span>
          <span>{String(score).padStart(5, "0")}</span>
        </div>
      </div>

      {/* Canvas Game Area */}
      <div className="relative w-full overflow-hidden rounded-xl bg-[#F8F9FA]/80 border border-[#9BA4B5]/20 shadow-inner flex justify-center cursor-pointer">
        <canvas ref={canvasRef} className="w-full h-[150px] block" />
        {gameOver && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3 animate-fade-in">
            <span className="font-mono font-bold text-lg text-[#212A3E] tracking-widest">G A M E  O V E R</span>
            <button
              onClick={() => {
                stateRef.current.gameOver = false;
                stateRef.current.score = 0;
                stateRef.current.dinoY = 0;
                stateRef.current.velocityY = 0;
                stateRef.current.jumping = false;
                stateRef.current.obstacles = [];
                setGameOver(false);
              }}
              className="px-6 py-2 bg-[#212A3E] text-white font-mono text-xs font-bold rounded-lg hover:bg-[#394867] transition-all shadow"
            >
              PLAY AGAIN
            </button>
          </div>
        )}
      </div>

      {/* Instructions Footer */}
      <div className="flex items-center justify-between w-full mt-4 px-2 text-xs text-[#394867]/80 font-medium">
        <span>{isAutoPlay ? "AI is playing automatically" : "Press SPACE or CLICK to jump"}</span>
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="underline hover:text-[#212A3E]"
        >
          {isAutoPlay ? "Take over" : "Enable AI Bot"}
        </button>
      </div>
    </div>
  );
};
