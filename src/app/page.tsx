import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Hero />
      <About />
      <Projects />
      <Team />
      <Tools />
      <Contact />
    </main>
  );
}
