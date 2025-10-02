import { useState, useEffect } from "react";
import CustomCursor from "../../Animations/CustomCursor";
import useFadeInOnScroll from "../../Animations/UseFadeInScroll";
import Header from "../../Components/MainComponent/Header";
import Footer from "../../Components/MainComponent/Footer";
import Preloader from "../../Components/MainComponent/PreLoader";
import ScroolAbout from "../../Components/Works/ScroolAbout";

import SandalwoodVillaGalleryLayout from "../../Components/Gallery/Sandalwood Villa/SandalwoodVillaGalleryLayout";
import SandalwoodVillaGalleryHero from "../../Components/Gallery/Sandalwood Villa/SandalwoodVillaGalleryHero";

export default function SandalwoodVillaGallery() {
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
          <SandalwoodVillaGalleryHero />
        </div>
        <div className="fade-in">
          <SandalwoodVillaGalleryLayout />
          <ScroolAbout />
        </div>
      </main>
      <Footer />
      <CustomCursor />
    </div>
  );
}
