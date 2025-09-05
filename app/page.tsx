import { About } from "@/components/main/about";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Security } from "@/components/main/security";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative">
      <div className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Security />
        <Projects />
      </div>
    </main>
  );
}
