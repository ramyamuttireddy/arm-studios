import { useState, useEffect } from "react";
import CustomCursor from "../animations/CursorPointer";
import useFadeInOnScroll from "../animations/useFadeInOnScroll";
import Preloader from "../Components/PreLoader"
import Header from "../Components/Header"
import Hero from "../Components/Work/Hero";
import WorkProjects from "../Components/Work/WorkProjects"
import About from "../Components/Work/About"
import Footer from "../Components/Footer"


export default function Works() {
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
      <WorkProjects />
    </section>
    <section className="fade-in">
      <About />
    </section>
  </main>
  <Footer />
</div>

  );
}
