import { Hero } from "@/components/hero/hero";
import { About } from "@/components/about/about";
import { Projects } from "@/components/projects/projects";
import { Skills } from "@/components/skills/skills";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <main className="min-h-[100dvh]">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
