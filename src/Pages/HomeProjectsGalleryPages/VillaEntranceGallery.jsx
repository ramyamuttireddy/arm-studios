import { useEffect } from "react";
import CustomCursor from "../../Animations/CustomCursor";
import useFadeInOnScroll from "../../Animations/UseFadeInScroll";
import Header from "../../Components/MainComponent/Header";
import Footer from "../../Components/MainComponent/Footer";
import ScroolAbout from "../../Components/Works/ScroolAbout";

import VillaEntranceGalleryHero from "../../Components/Gallery/Villa Entrance/VillaEntranceGalleryHero";
import VillaEntranceGalleryLayout from "../../Components/Gallery/Villa Entrance/VillaEntranceGalleryLayout";

export default function VillaEntranceGallery() {
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
            <VillaEntranceGalleryHero />
          </div>
          <div className="ade-in pt-10 bg-black">
            <VillaEntranceGalleryLayout />
            <ScroolAbout />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
