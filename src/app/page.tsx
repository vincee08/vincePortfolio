import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Journey } from "@/components/sections/Journey";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white selection:bg-blue-500/30 transition-colors duration-300">
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      <Journey />
      <Projects />
      <Certifications />
      <Contact />
      
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
        <p>© {new Date().getFullYear()} Vince Buladaco. All rights reserved.</p>
      </footer>
    </main>
  );
}
