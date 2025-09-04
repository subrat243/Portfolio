"use client";

import { HeroContent } from "@/components/sub/hero-content";
import { StarsCanvas } from "@/components/main/star-background";
import VideoBackground from "@/components/ui/video-background";

export const Hero = () => {
  return (
    <div
      id="home"
      className="relative flex flex-col min-h-screen w-full overflow-hidden bg-[#030014]"
      style={{ minHeight: "100vh" }}
    >
      {/* Blackhole Video Background */}
      <VideoBackground
        src="/videos/blackhole.webm"
        fallbackSrc="/videos/blackhole.mp4"
        className="z-[5] pointer-events-none"
        opacity={0.6}
        blur={true}
        overlay={true}
        overlayOpacity={0.4}
        style={{
          transform: "rotate(180deg) scale(1.1)",
        }}
      />

      {/* Stars Animation */}
      <div className="absolute inset-0 z-[10] pointer-events-none">
        <StarsCanvas />
      </div>

      {/* Additional gradient overlay for text readability */}
      <div className="absolute inset-0 z-[15] bg-gradient-to-b from-transparent via-transparent to-[#030014]/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-[30] flex-1 flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-7xl mx-auto">
          <HeroContent />
        </div>
      </div>
    </div>
  );
};
