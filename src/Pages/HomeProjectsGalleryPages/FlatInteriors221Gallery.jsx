import CustomCursor from "../../Animations/CustomCursor";
import useFadeInOnScroll from "../../Animations/UseFadeInScroll";
import Header from "../../Components/MainComponent/Header";
import Footer from "../../Components/MainComponent/Footer";
import ScroolAbout from "../../Components/Works/ScroolAbout";
import { useEffect } from "react";

import FlatInteriors221GalleryLayout from "../../Components/Gallery/FlatInteriors221/FlatInteriors221GalleryLayout";
import FlatInteriors221GalleryHero from "../../Components/Gallery/FlatInteriors221/FlatInteriors221GalleryHero";

export default function FlatInteriors221Gallery() {
  useFadeInOnScroll(".fade-in");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="smooth-wrapper">
      {/* Fixed header OUTSIDE smooth-content */}
      <Header />

      <div id="smooth-content" className="relative">
        <main className="">
          <div className="fade-in">
            <FlatInteriors221GalleryHero />
          </div>
          <div className="fade-in pt-10 bg-black">
            <FlatInteriors221GalleryLayout />
            <ScroolAbout />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
