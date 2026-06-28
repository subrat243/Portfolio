import { About } from "@/components/main/about";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Achievements } from "@/components/main/achievements";
import { Security } from "@/components/main/security";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative">
      <div className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Security />
      </div>
    </main>
  );
}
