import { HeroContent } from "@/components/sub/hero-content";
import { StarsCanvas } from "@/components/main/star-background";

export const Hero = () => {
  return (
    <div
      id="home"
      className="relative flex flex-col min-h-screen w-full overflow-hidden bg-transparent"
    >
      {/* Stars Animation */}
      <div className="absolute inset-0 z-[10] pointer-events-none">
        <StarsCanvas />
      </div>

      {/* Blackhole Video */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="rotate-180 absolute top-[-400px] w-full h-full object-cover blur-sm opacity-80 pointer-events-none"
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-[20] flex-1 flex items-center justify-center">
        <HeroContent />
      </div>
    </div>
  );
};
