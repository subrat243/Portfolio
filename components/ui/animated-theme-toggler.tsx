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

function getClipPath(variant: TransitionVariant, size: number): string {
  const r = size / 2;
  switch (variant) {
    case "circle":
      return `circle(${size}px at 50% 50%)`;
    case "square":
      return `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`;
    case "triangle":
      return `polygon(50% 0%, 100% 100%, 0% 100%)`;
    case "diamond":
      return `polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)`;
    case "rectangle":
      return `polygon(0% 10%, 100% 10%, 100% 90%, 0% 90%)`;
    case "hexagon":
      return `polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)`;
    case "star":
      return `polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)`;
    default:
      return `circle(${size}px at 50% 50%)`;
  }
}

function getInitialClipPath(variant: TransitionVariant): string {
  switch (variant) {
    case "circle":
      return `circle(0px at 50% 50%)`;
    case "square":
      return `polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)`;
    case "triangle":
      return `polygon(50% 50%, 50% 50%, 50% 50%)`;
    case "diamond":
      return `polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)`;
    case "rectangle":
      return `polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)`;
    case "hexagon":
      return `polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%)`;
    case "star":
      return `polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%)`;
    default:
      return `circle(0px at 50% 50%)`;
  }
}

export function AnimatedThemeToggler({
  className,
  duration = 400,
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

    // Use View Transitions API if available
    if (
      typeof document !== "undefined" &&
      "startViewTransition" in document &&
      buttonRef.current
    ) {
      const btn = buttonRef.current;
      const rect = btn.getBoundingClientRect();
      const originX = fromCenter
        ? window.innerWidth / 2
        : rect.left + rect.width / 2;
      const originY = fromCenter
        ? window.innerHeight / 2
        : rect.top + rect.height / 2;

      // Compute the size needed to cover the full viewport
      const maxDist = Math.hypot(
        Math.max(originX, window.innerWidth - originX),
        Math.max(originY, window.innerHeight - originY)
      );
      const endClip = getClipPath(variant, maxDist * 2.2);
      const startClip = getInitialClipPath(variant);

      const style = document.createElement("style");
      style.textContent = `
        ::view-transition-old(root) { animation: none; }
        ::view-transition-new(root) {
          animation: theme-reveal ${duration}ms ease forwards;
          transform-origin: ${originX}px ${originY}px;
        }
        @keyframes theme-reveal {
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
      // Fallback without View Transitions
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
        className="transition-all duration-300"
        style={{ transform: isDark ? "rotate(0deg)" : "rotate(180deg)", opacity: 1 }}
      >
        {isDark ? (
          <SunIcon className="w-4 h-4 text-amber-400" />
        ) : (
          <MoonIcon className="w-4 h-4 text-[#394867]" />
        )}
      </span>
    </button>
  );
}
