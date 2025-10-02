import { useState, useEffect } from "react";
import CustomCursor from "../../Animations/CustomCursor";
import useFadeInOnScroll from "../../Animations/UseFadeInScroll";
import Header from "../../Components/MainComponent/Header";
import Footer from "../../Components/MainComponent/Footer";
import Preloader from "../../Components/MainComponent/PreLoader";
import ScroolAbout from "../../Components/Works/ScroolAbout";

import  VillaEntranceGalleryHero from "../../Components/Gallery/Villa Entrance/VillaEntranceGalleryHero"
import  VillaEntranceGalleryLayout from "../../Components/Gallery/Villa Entrance/VillaEntranceGalleryLayout";

export default function VillaEntranceGallery() {
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
          <VillaEntranceGalleryHero />
        </div>
        <div className="fade-in">
          <VillaEntranceGalleryLayout />
          <ScroolAbout />
        </div>
      </main>
      <Footer />
      <CustomCursor />
    </div>
  );
}
