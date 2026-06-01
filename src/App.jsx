import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

function App() {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    if (theme === "neon") {
      document.documentElement.classList.add("theme-neon");
    } else {
      document.documentElement.classList.remove("theme-neon");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "default" ? "neon" : "default"));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header onToggleTheme={toggleTheme} />
      <Hero />
      <Projects />
      <About />
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;
