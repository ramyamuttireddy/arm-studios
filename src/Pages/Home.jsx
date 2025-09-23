import { useState, useEffect } from "react";
import CustomCursor from "../animations/CursorPointer";
import useFadeInOnScroll from "../animations/useFadeInOnScroll";
import Header from "../Components/Header";
import Hero from "../Components/Homepage/Hero";
import Projects from "../Components/Homepage/Projects";
import About from "../Components/Homepage/About";
import Footer from "../Components/Footer";
import Preloader from "../Components/PreLoader";
import ScroolText from "../Components/Homepage/ScroolText";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  useFadeInOnScroll(".fade-in");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <div className="bg-black text-white overflow-x-hidden font-sans">
      <CustomCursor />
      <Header />
      <main className="space-y-24">
        <div className="fade-in">
          <Hero />
        </div>
        <div className="fade-in">
          <Projects />
        </div>
        <div className="fade-in">
          <About />
          <ScroolText />
        </div>
      </main>
      <Footer />
    </div>
  );
}
