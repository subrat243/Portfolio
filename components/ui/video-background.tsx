"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface VideoBackgroundProps {
  src: string;
  fallbackSrc?: string;
  className?: string;
  style?: React.CSSProperties;
  opacity?: number;
  blur?: boolean;
  overlay?: boolean;
  overlayOpacity?: number;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  preload?: "auto" | "metadata" | "none";
  onLoad?: () => void;
  onError?: () => void;
  children?: React.ReactNode;
}

export const VideoBackground = ({
  src,
  fallbackSrc,
  className = "",
  style,
  opacity = 0.6,
  blur = false,
  overlay = false,
  overlayOpacity = 0.4,
  autoPlay = true,
  loop = true,
  muted = true,
  preload = "auto",
  onLoad,
  onError,
  children,
}: VideoBackgroundProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLoadedData = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    console.warn(`Video failed to load: ${src}`);
    setHasError(true);
    if (onError) onError();
  };

  // Don't render on server to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className={`absolute inset-0 ${className}`} style={style}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
        {children}
      </div>
    );
  }

  const videoStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: hasError ? 0 : opacity,
    filter: blur ? "blur(1px)" : "none",
    transition: "opacity 0.5s ease-in-out",
    ...style,
  };

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Background gradient fallback */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#030014] via-[#0f0522] to-[#030014]" />

      {/* Video element */}
      {!hasError && (
        <motion.video
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline
          preload={preload}
          style={videoStyle}
          onLoadedData={handleLoadedData}
          onError={handleError}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded && !hasError ? opacity : 0 }}
          transition={{ duration: 0.5 }}
        >
          <source src={src} type="video/webm" />
          {fallbackSrc && <source src={fallbackSrc} type="video/mp4" />}
          Your browser does not support the video tag.
        </motion.video>
      )}

      {/* Overlay for better contrast */}
      {overlay && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Loading state */}
      {!isLoaded && !hasError && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin opacity-50" />
          </div>
        </motion.div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-purple-900/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-xs text-gray-500 opacity-50">
              Video unavailable
            </div>
          </div>
        </div>
      )}

      {children}
    </div>
  );
};

// Preloader component for critical videos
export const VideoPreloader = ({ src }: { src: string }) => {
  useEffect(() => {
    const video = document.createElement("video");
    video.src = src;
    video.preload = "metadata";
    video.load();

    return () => {
      video.remove();
    };
  }, [src]);

  return null;
};

// Hook for video loading state
export const useVideoPreload = (src: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = document.createElement("video");
    video.src = src;
    video.preload = "auto";

    const handleLoad = () => setIsLoaded(true);
    const handleError = () => setHasError(true);

    video.addEventListener("loadeddata", handleLoad);
    video.addEventListener("error", handleError);
    video.load();

    return () => {
      video.removeEventListener("loadeddata", handleLoad);
      video.removeEventListener("error", handleError);
      video.remove();
    };
  }, [src]);

  return { isLoaded, hasError };
};

export default VideoBackground;
