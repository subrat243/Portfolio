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
        <div className="py-10">
          <About />
        </div>
        <div className="py-10">
          <Skills />
        </div>
        <div className="py-10">
          <Encryption />
        </div>
        <div className="py-10">
          <Projects />
        </div>
      </div>
    </main>
  );
}
