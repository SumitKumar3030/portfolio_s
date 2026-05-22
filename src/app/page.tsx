import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills"; // New import
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
    <main className="max-w-6xl mx-auto space-y-12 pb-20">
      {/* Navbar */}
      <Navbar />

      {/*  Hero: Name & Summary */}
      <Hero />
      
      {/*  Skills: Tech Stack Badge Area */}
      <Skills />
      
      {/*  Projects: Your Work */}
      <Projects />
      
      {/*  Experience: Your History */}
      <Experience />

      {/* Remaining: Certifications & Contact Form */}
      <Contact />
    </main>

    {/* Footer */}
      <footer className="border-t border-zinc-800/60 py-8 mt-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-600 text-sm font-mono">
          <span>
            Built by{" "}
            <span className="text-zinc-400">Sumit Kumar</span> with Next.js &
            Tailwind
          </span>
          <span>
            &copy; {new Date().getFullYear()} — All rights reserved
          </span>
        </div>
      </footer>
    </>
  );
}