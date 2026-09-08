import { useEffect } from "react";
import "./App.css";
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";

function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");
    const updateScrollState = () => {
      const progress = Math.min(window.scrollY / 700, 1.2);
      document.documentElement.style.setProperty(
        "--scroll-progress",
        progress.toFixed(3),
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    revealItems.forEach((item) => observer.observe(item));
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  return (
    <div className="portfolio-shell">
      <Header />

      <main>
        <Hero />
        <Projects />
        <About />
      </main>

      <Footer />
    </div>
  );
}

export default App;
