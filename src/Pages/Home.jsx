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

  if (loading) {
    return (
      <div className="bg-black text-white overflow-hidden font-sans h-screen w-screen">
        <Preloader />
      </div>
    );
  }

  return (
    <div className="bg-black text-white font-sans scroll-smooth overflow-x-hidden overflow-y-scroll [&::-webkit-scrollbar]:hidden">
  <CustomCursor />
  <Header />
  <main className="space-y-24">
    <section className="fade-in">
      <Hero />
    </section>
    <section className="fade-in">
      <Projects />
    </section>
    <section className="fade-in">
      <About />
      <ScroolText />
    </section>
  </main>
  <Footer />
</div>

  );
}
