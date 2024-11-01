import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
 import Projects from "@/components/Projects";
 import Skills from "@/components/Skills";
  import About from "@/components/About";
  
export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <About/>
    </main>
  );
}
