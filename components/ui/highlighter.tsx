"use client";

import React, { useEffect, useRef } from "react";
import { annotate } from "rough-notation";
import { useInView } from "react-intersection-observer";

interface HighlighterProps {
  children: React.ReactNode;
  color?: string;
  action?:
    | "highlight"
    | "circle"
    | "box"
    | "bracket"
    | "crossed-off"
    | "strike-through"
    | "underline";
  strokeWidth?: number;
  animationDuration?: number;
  iterations?: number;
  padding?: number;
  multiline?: boolean;
  isView?: boolean;
  className?: string;
}

export const Highlighter: React.FC<HighlighterProps> = ({
  children,
  color = "#ffd1dc",
  action = "highlight",
  strokeWidth = 1.5,
  animationDuration = 500,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false,
  className = "",
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Combine refs for intersection observer and rough-notation container
  const setRefs = (node: HTMLSpanElement | null) => {
    containerRef.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const shouldShow = isView ? inView : true;

    if (shouldShow) {
      const annotation = annotate(containerRef.current, {
        type: action,
        color,
        strokeWidth,
        animationDuration,
        iterations,
        padding,
        multiline,
      });

      annotation.show();

      return () => {
        annotation.remove();
      };
    }
  }, [inView, isView, action, color, strokeWidth, animationDuration, iterations, padding, multiline]);

  return (
    <span ref={setRefs} className={className}>
      {children}
    </span>
  );
};
