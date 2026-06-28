// High-performance procedural Canvas 2D rendering pipeline

import { generateSphere, generateParticles, generateRing, Point3D, Particle3D, RingPoint3D } from "./sphere";
import { calculateLighting } from "./lighting";
import { project, rotateX, rotateY } from "./projection";
import { getAsciiChar } from "./utils";
import { AnimationManager } from "./animation";

export class AsciiGlobeRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private animManager: AnimationManager;

  private spherePoints: Point3D[];
  private particles: Particle3D[];
  private ringPoints: RingPoint3D[];

  private width: number = 0;
  private height: number = 0;

  constructor(canvas: HTMLCanvasElement, animManager: AnimationManager) {
    this.canvas = canvas;
    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("Failed to get 2D context");
    }
    this.ctx = context;
    this.animManager = animManager;

    // Generate 3D procedural geometries
    this.spherePoints = generateSphere(1600); // Optimized for dense monospace visual appeal
    this.particles = generateParticles(35);
    this.ringPoints = generateRing(72);

    this.resize();
  }

  public resize(): void {
    const parent = this.canvas.parentElement;
    if (parent) {
      const rect = parent.getBoundingClientRect();
      this.width = rect.width;
      this.height = rect.height;
      
      // Support High DPI / Retina displays
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = this.width * dpr;
      this.canvas.height = this.height * dpr;
      this.canvas.style.width = `${this.width}px`;
      this.canvas.style.height = `${this.height}px`;

      this.ctx.scale(dpr, dpr);
    }
  }

  public render(timestamp: number): void {
    this.animManager.update(timestamp);

    const { rotX, rotY } = this.animManager.getEffectiveRotation();

    // Moving directional light position
    const lightDir = {
      x: Math.sin(this.animManager.lightAngle) * 1.5,
      y: 0.4,
      z: Math.cos(this.animManager.lightAngle) * 1.5,
    };

    // Clear background with Dark Navy (#020617)
    this.ctx.fillStyle = "#020617";
    this.ctx.fillRect(0, 0, this.width, this.height);

    // Render faint background grid
    this.renderGrid();

    // Adjust FOV based on container dimensions to keep globe responsive
    const minDim = Math.min(this.width, this.height);
    const fov = minDim * 0.75;

    // Array to hold all renderable elements for Z-sorting (Painter's algorithm)
    interface RenderItem {
      z: number;
      draw: () => void;
    }
    const renderQueue: RenderItem[] = [];

    // 1. Process Sphere Points
    for (const p of this.spherePoints) {
      // Rotate position
      let ry = rotateY(p.x, p.z, rotY);
      let rx = rotateX(p.y, ry.z, rotX);

      // Rotate normal vector similarly
      let nry = rotateY(p.nx, p.nz, rotY);
      let nrx = rotateX(p.ny, nry.z, rotX);

      // Backface culling: only render front side of sphere or points near the rim
      // rx.z is positive towards viewer, negative away
      if (rx.z < -0.15) {
        continue;
      }

      const proj = project(ry.x, rx.y, rx.z, this.width, this.height, fov);

      // Calculate lighting & color
      const lighting = calculateLighting(nry.x, nrx.y, nrx.z, lightDir);

      // Map brightness to ASCII character
      let char = getAsciiChar(lighting.brightness);
      let color = lighting.color;
      let font = "12px monospace";
      let shadowBlur = 0;
      let shadowColor = "transparent";

      // Blinking hotspots for major cities
      if (p.isHotspot) {
        // Blink effect using sine wave
        const blink = Math.sin(timestamp * 0.005 + p.lat * 10) > 0;
        if (blink) {
          char = "◈"; // Glowing hotspot icon
          color = "#38bdf8"; // Bright sky blue
          font = "bold 14px monospace";
          shadowBlur = 8;
          shadowColor = "#0284c7";
        }
      } else if (lighting.brightness > 0.7) {
        // Soft bloom/glow for bright regions
        shadowBlur = 4;
        shadowColor = "#0ea5e9";
      }

      renderQueue.push({
        z: proj.z,
        draw: () => {
          this.ctx.font = font;
          this.ctx.fillStyle = color;
          this.ctx.shadowBlur = shadowBlur;
          this.ctx.shadowColor = shadowColor;
          this.ctx.fillText(char, proj.x2d, proj.y2d);
        },
      });
    }

    // 2. Process Orbiting Particles
    for (const p of this.particles) {
      // Update orbit position
      p.angle += p.speed;
      p.x = Math.cos(p.angle) * p.radius;
      p.z = Math.sin(p.angle) * p.radius;

      // Rotate with camera
      let ry = rotateY(p.x, p.z, rotY);
      let rx = rotateX(p.y, ry.z, rotX);

      const proj = project(ry.x, rx.y, rx.z, this.width, this.height, fov);

      renderQueue.push({
        z: proj.z,
        draw: () => {
          this.ctx.font = "10px monospace";
          this.ctx.fillStyle = rx.z > 0 ? "rgba(56, 189, 248, 0.9)" : "rgba(30, 58, 138, 0.4)";
          this.ctx.shadowBlur = rx.z > 0 ? 6 : 0;
          this.ctx.shadowColor = "#38bdf8";
          this.ctx.fillText("*", proj.x2d, proj.y2d);
        },
      });
    }

    // 3. Process Rotating Holographic Ring
    for (const r of this.ringPoints) {
      // Rotate ring independently
      r.angle -= 0.002;
      r.x = Math.cos(r.angle) * r.radius;
      r.z = Math.sin(r.angle) * r.radius;

      let ry = rotateY(r.x, r.z, rotY);
      let rx = rotateX(r.y, ry.z, rotX);

      const proj = project(ry.x, rx.y, rx.z, this.width, this.height, fov);

      renderQueue.push({
        z: proj.z,
        draw: () => {
          this.ctx.font = "9px monospace";
          this.ctx.fillStyle = rx.z > 0 ? "rgba(14, 165, 233, 0.6)" : "rgba(30, 58, 138, 0.2)";
          this.ctx.shadowBlur = 0;
          this.ctx.fillText(".", proj.x2d, proj.y2d);
        },
      });
    }

    // Sort render queue by Z depth (ascending: furthest to closest)
    renderQueue.sort((a, b) => a.z - b.z);

    // Execute draw calls
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    for (const item of renderQueue) {
      item.draw();
    }

    // Reset shadow before drawing overlay scanlines
    this.ctx.shadowBlur = 0;

    // Render subtle scanline effects
    this.renderScanlines();
  }

  private renderGrid(): void {
    this.ctx.strokeStyle = "rgba(30, 58, 138, 0.15)"; // Faint navy grid
    this.ctx.lineWidth = 1;
    const gridSize = 40;

    this.ctx.beginPath();
    for (let x = 0; x < this.width; x += gridSize) {
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, this.height);
    }
    for (let y = 0; y < this.height; y += gridSize) {
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(this.width, y);
    }
    this.ctx.stroke();
  }

  private renderScanlines(): void {
    this.ctx.fillStyle = "rgba(2, 6, 23, 0.25)";
    const scanlineHeight = 4;
    for (let y = 0; y < this.height; y += scanlineHeight * 2) {
      this.ctx.fillRect(0, y, this.width, scanlineHeight);
    }
  }
}
