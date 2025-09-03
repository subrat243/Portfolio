import { HeroContent } from "@/components/sub/hero-content";
import { StarsCanvas } from "@/components/main/star-background";

export const Hero = () => {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-purple-900/20 to-[#030014]" />

      {/* Blackhole Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      {/* Stars Animation */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <StarsCanvas />
      </div>

      {/* Content */}
      <div className="relative z-30 flex-1 flex items-center justify-center">
        <HeroContent />
      </div>
    </div>
  );
};
