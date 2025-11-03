import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";

import { useState, useEffect } from "react";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Update isDarkMode on every render
  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));
    console.log("Set dark mode");
  });

  return (
    <div className="bg-gray-950 text-white scroll-smooth md:w-full  min-h-screen w-full overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <section id="home" className="pt-16 md:pt-8">
          <Hero isDarkMode={isDarkMode} />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
