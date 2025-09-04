"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingAnimationProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
}

export const TypingAnimation = ({
  text,
  delay = 0,
  speed = 50,
  className = "",
  showCursor = true,
  onComplete,
}: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showBlinkingCursor, setShowBlinkingCursor] = useState(false);

  useEffect(() => {
    const startTyping = setTimeout(() => {
      setIsTyping(true);
      setShowBlinkingCursor(true);
    }, delay);

    return () => clearTimeout(startTyping);
  }, [delay]);

  useEffect(() => {
    if (!isTyping || currentIndex >= text.length) {
      if (currentIndex >= text.length && onComplete) {
        onComplete();
      }
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(text.slice(0, currentIndex + 1));
      setCurrentIndex(currentIndex + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, speed, isTyping, onComplete]);

  return (
    <span className={`inline-block ${className}`}>
      {displayedText}
      {showCursor && showBlinkingCursor && (
        <motion.span
          className="inline-block ml-1 w-0.5 h-6 md:h-8 bg-gradient-to-b from-purple-500 to-cyan-500"
          animate={{
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </span>
  );
};

interface MultiLineTypingProps {
  lines: string[];
  lineDelay?: number;
  speed?: number;
  className?: string;
  showCursor?: boolean;
}

export const MultiLineTyping = ({
  lines,
  lineDelay = 1000,
  speed = 50,
  className = "",
  showCursor = true,
}: MultiLineTypingProps) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const handleLineComplete = () => {
    if (currentLineIndex < lines.length - 1) {
      setTimeout(() => {
        setCurrentLineIndex(currentLineIndex + 1);
      }, lineDelay);
    }
  };

  return (
    <div className={className}>
      {lines.map((line, index) => (
        <div key={index} className="min-h-[1.2em]">
          {index <= currentLineIndex && (
            <TypingAnimation
              text={line}
              delay={index === 0 ? 0 : 0}
              speed={speed}
              showCursor={index === currentLineIndex && showCursor}
              onComplete={index === currentLineIndex ? handleLineComplete : undefined}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TypingAnimation;
