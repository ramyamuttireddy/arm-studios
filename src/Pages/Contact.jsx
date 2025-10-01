import { useState, useEffect } from "react";
import CustomCursor from "../animations/CursorPointer";
import useFadeInOnScroll from "../animations/useFadeInOnScroll";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Preloader from "../Components/PreLoader";
import Hero from "../Components/Contact/Hero";
import ContactSection from "../Components/Contact/contactSection";

export default function Contact() {
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
      <ContactSection  />
    </section>
    <section className="fade-in">
      
    </section>
  </main>
  <Footer />
</div>

  );
}
