// src/pages/HomePage.jsx
import Header from "../../componets/Header";
import Hero from "../../componets/Hero";
import Preloader from "../../componets/PreLoader";
import Projects from "../../componets/Projects";
import Footer from "../../componets/Footer";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <div className="bg-black text-white overflow-x-hidden font-sans">
      <Header />
      <main>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
