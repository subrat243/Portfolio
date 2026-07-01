"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";

export type TransitionVariant =
  | "circle"
  | "square"
  | "triangle"
  | "diamond"
  | "rectangle"
  | "hexagon"
  | "star";

interface AnimatedThemeTogglerProps {
  className?: string;
  duration?: number;
  variant?: TransitionVariant;
  fromCenter?: boolean;
  theme?: "light" | "dark";
  onThemeChange?: (theme: "light" | "dark") => void;
}

/**
 * Build the final (fully revealed) clip-path, anchored at (ox, oy).
 * r is the radius/size needed to cover the entire viewport.
 */
function buildEndClip(
  variant: TransitionVariant,
  ox: number,
  oy: number,
  r: number
): string {
  switch (variant) {
    case "circle":
      return `circle(${r}px at ${ox}px ${oy}px)`;
    case "square":
      return `polygon(${ox - r}px ${oy - r}px, ${ox + r}px ${oy - r}px, ${ox + r}px ${oy + r}px, ${ox - r}px ${oy + r}px)`;
    case "rectangle":
      return `polygon(${ox - r}px ${oy - r * 0.6}px, ${ox + r}px ${oy - r * 0.6}px, ${ox + r}px ${oy + r * 0.6}px, ${ox - r}px ${oy + r * 0.6}px)`;
    case "diamond":
      return `polygon(${ox}px ${oy - r}px, ${ox + r}px ${oy}px, ${ox}px ${oy + r}px, ${ox - r}px ${oy}px)`;
    case "triangle":
      return `polygon(${ox}px ${oy - r}px, ${ox + r}px ${oy + r}px, ${ox - r}px ${oy + r}px)`;
    case "hexagon": {
      const pts = [0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return `${ox + r * Math.cos(rad)}px ${oy + r * Math.sin(rad)}px`;
      });
      return `polygon(${pts.join(", ")})`;
    }
    case "star": {
      const pts: string[] = [];
      for (let i = 0; i < 10; i++) {
        const rad = ((i * 36 - 90) * Math.PI) / 180;
        const radius = i % 2 === 0 ? r : r * 0.45;
        pts.push(`${ox + radius * Math.cos(rad)}px ${oy + radius * Math.sin(rad)}px`);
      }
      return `polygon(${pts.join(", ")})`;
    }
    default:
      return `circle(${r}px at ${ox}px ${oy}px)`;
  }
}

/**
 * Build the collapsed (zero-size) clip-path, anchored at (ox, oy).
 */
function buildStartClip(
  variant: TransitionVariant,
  ox: number,
  oy: number
): string {
  switch (variant) {
    case "circle":
      return `circle(0px at ${ox}px ${oy}px)`;
    case "square":
    case "rectangle":
      return `polygon(${ox}px ${oy}px, ${ox}px ${oy}px, ${ox}px ${oy}px, ${ox}px ${oy}px)`;
    case "diamond":
      return `polygon(${ox}px ${oy}px, ${ox}px ${oy}px, ${ox}px ${oy}px, ${ox}px ${oy}px)`;
    case "triangle":
      return `polygon(${ox}px ${oy}px, ${ox}px ${oy}px, ${ox}px ${oy}px)`;
    case "hexagon":
      return `polygon(${[0,1,2,3,4,5].map(() => `${ox}px ${oy}px`).join(", ")})`;
    case "star":
      return `polygon(${[0,1,2,3,4,5,6,7,8,9].map(() => `${ox}px ${oy}px`).join(", ")})`;
    default:
      return `circle(0px at ${ox}px ${oy}px)`;
  }
}

export function AnimatedThemeToggler({
  className,
  duration = 500,
  variant = "circle",
  fromCenter = false,
  theme: controlledTheme,
  onThemeChange,
}: AnimatedThemeTogglerProps) {
  const [isDark, setIsDark] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    setMounted(true);
    if (controlledTheme === undefined) {
      const stored = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const dark = stored === "dark" || (!stored && prefersDark);
      setIsDark(dark);
      document.documentElement.classList.toggle("dark", dark);
    } else {
      setIsDark(controlledTheme === "dark");
      document.documentElement.classList.toggle("dark", controlledTheme === "dark");
    }
  }, []);

  React.useEffect(() => {
    if (controlledTheme !== undefined) {
      setIsDark(controlledTheme === "dark");
      document.documentElement.classList.toggle("dark", controlledTheme === "dark");
    }
  }, [controlledTheme]);

  const toggle = async () => {
    const next = !isDark;
    const nextTheme = next ? "dark" : "light";

    const supportsVT =
      typeof document !== "undefined" && "startViewTransition" in document;

    if (supportsVT && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const ox = fromCenter
        ? window.innerWidth / 2
        : rect.left + rect.width / 2;
      const oy = fromCenter
        ? window.innerHeight / 2
        : rect.top + rect.height / 2;

      // Radius large enough to cover every corner from (ox, oy)
      const r = Math.hypot(
        Math.max(ox, window.innerWidth - ox),
        Math.max(oy, window.innerHeight - oy)
      );

      const startClip = buildStartClip(variant, ox, oy);
      const endClip = buildEndClip(variant, ox, oy, r * 1.1);

      const style = document.createElement("style");
      style.textContent = `
        ::view-transition-old(root) {
          animation: none;
          z-index: 1;
        }
        ::view-transition-new(root) {
          animation: vt-reveal ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
          z-index: 9999;
          will-change: clip-path;
        }
        @keyframes vt-reveal {
          from { clip-path: ${startClip}; }
          to   { clip-path: ${endClip}; }
        }
      `;
      document.head.appendChild(style);

      const transition = (document as any).startViewTransition(() => {
        document.documentElement.classList.toggle("dark", next);
        if (controlledTheme === undefined) {
          localStorage.setItem("theme", nextTheme);
          setIsDark(next);
        }
        onThemeChange?.(nextTheme);
      });

      transition.finished.finally(() => {
        document.head.removeChild(style);
      });
    } else {
      // Fallback: no View Transitions support
      document.documentElement.classList.toggle("dark", next);
      if (controlledTheme === undefined) {
        localStorage.setItem("theme", nextTheme);
        setIsDark(next);
      }
      onThemeChange?.(nextTheme);
    }
  };

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      ref={buttonRef}
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative w-9 h-9 rounded-full border border-[#9BA4B5]/40 bg-white dark:bg-[#1a1f2e] dark:border-[#9BA4B5]/20 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95",
        className
      )}
    >
      <span
        key={isDark ? "sun" : "moon"}
        style={{
          display: "flex",
          transition: "transform 300ms ease, opacity 300ms ease",
          transform: "rotate(0deg)",
        }}
      >
        {isDark ? (
          <SunIcon className="w-4 h-4 text-amber-400" />
        ) : (
          <MoonIcon className="w-4 h-4 text-[#394867] dark:text-[#9BA4B5]" />
        )}
      </span>
    </button>
  );
}
