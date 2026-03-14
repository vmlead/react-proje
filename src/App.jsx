import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar darkMode={darkMode} onToggleTheme={toggleTheme} />

      <main className="relative pt-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-96 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[420px] w-[480px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/40 via-fuchsia-500/30 to-cyan-500/20 blur-3xl" />
          <div className="absolute left-1/4 top-28 h-[300px] w-[380px] rounded-full bg-gradient-to-tr from-amber-400/30 via-emerald-400/20 to-transparent blur-3xl" />
        </div>

        <div className="relative">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
