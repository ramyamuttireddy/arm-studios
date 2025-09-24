import { useState, useEffect } from "react";
import CustomCursor from "../animations/CursorPointer";
import useFadeInOnScroll from "../animations/useFadeInOnScroll";
import Header from "../Components/Header";
import Hero from "../Components/Gallery/Hero";
import Footer from "../Components/Footer";
import Preloader from "../Components/PreLoader";
import GalleryLayout from "../Components/Gallery/GalleryLayout";

export default function Gallery() {
  const [loading, setLoading] = useState(true);
  useFadeInOnScroll(".fade-in");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <div className="bg-black text-white overflow-x-hidden font-sans">
      <Header />
      <main className="space-y-24">
        <div className="fade-in">
          <Hero />
        </div>
        <div className="fade-in">
          <GalleryLayout />
        </div>
      </main>
      <Footer />
      <CustomCursor />
    </div>
  );
}
