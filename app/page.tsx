import { About } from "@/components/main/about";
import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative">
      <div className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
