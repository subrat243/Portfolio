import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        preload="metadata"
        playsInline
        className="rotate-180 absolute top-[-300px] left-0 w-full h-full object-cover -z-20 blur-lg opacity-100"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      {/* Overlay for smoother text visibility */}
      <div className="absolute inset-0 bg-black/30 -z-20" />

      {/* Foreground Content */}
      <HeroContent />
    </div>
  );
};
