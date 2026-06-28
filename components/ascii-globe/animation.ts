// Animation state, smooth easing, and rotation management

import { lerp } from "./utils";

export class AnimationManager {
  public rotY: number = 0;
  public rotX: number = 0.25; // Slight initial X-axis tilt
  public targetRotYOffset: number = 0;
  public targetRotXOffset: number = 0;
  public currentRotYOffset: number = 0;
  public currentRotXOffset: number = 0;
  public lightAngle: number = 0;
  private lastTime: number = 0;

  // One full rotation every 25 seconds at 60 FPS
  private rotationSpeedY: number = (Math.PI * 2) / (25 * 60);
  private lightSpeed: number = 0.005;

  public update(timestamp: number): void {
    if (!this.lastTime) {
      this.lastTime = timestamp;
    }
    const delta = timestamp - this.lastTime;
    this.lastTime = timestamp;

    // Adjust speed based on delta time to maintain smooth 60 FPS pacing
    const timeScale = Math.min(2.0, Math.max(0.5, delta / (1000 / 60)));

    // Continuous globe rotation around Y axis
    this.rotY += this.rotationSpeedY * timeScale;
    if (this.rotY > Math.PI * 2) {
      this.rotY -= Math.PI * 2;
    }

    // Moving directional light angle
    this.lightAngle += this.lightSpeed * timeScale;
    if (this.lightAngle > Math.PI * 2) {
      this.lightAngle -= Math.PI * 2;
    }

    // Smooth easing for mouse parallax interaction
    this.currentRotYOffset = lerp(this.currentRotYOffset, this.targetRotYOffset, 0.05);
    this.currentRotXOffset = lerp(this.currentRotXOffset, this.targetRotXOffset, 0.05);
  }

  public setMouseParallax(nx: number, ny: number): void {
    // nx, ny are normalized mouse coordinates from -1 to 1
    this.targetRotYOffset = nx * 0.35; // Maximum Y rotation offset
    this.targetRotXOffset = ny * 0.25; // Maximum X rotation offset
  }

  public resetMouseParallax(): void {
    this.targetRotYOffset = 0;
    this.targetRotXOffset = 0;
  }

  public getEffectiveRotation(): { rotX: number; rotY: number } {
    return {
      rotX: this.rotX + this.currentRotXOffset,
      rotY: this.rotY + this.currentRotYOffset,
    };
  }
}
