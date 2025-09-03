import { HeroContent } from "@/components/sub/hero-content";
import { StarsCanvas } from "@/components/main/star-background";

export const Hero = () => {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-[#030014]/80 to-[#030014] z-0" />

      {/* Blackhole Video */}
      <video
        autoPlay
        muted
        loop
        preload="metadata"
        playsInline
        className="rotate-180 absolute top-[-400px] left-0 w-full h-full object-cover z-30 blur-md opacity-100 pointer-events-none"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      {/* Stars Animation */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <StarsCanvas />
      </div>

      {/* Foreground Content */}
      <div className="relative z-40 flex-1 flex items-center justify-center">
        <HeroContent />
      </div>
    </div>
  );
};
