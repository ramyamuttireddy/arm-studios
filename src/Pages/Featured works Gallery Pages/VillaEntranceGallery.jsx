import { useEffect } from "react";
import CustomCursor from "../../Animations/CustomCursor";
import useFadeInOnScroll from "../../Animations/UseFadeInScroll";
import Header from "../../Components/MainComponent/Header";
import Footer from "../../Components/MainComponent/Footer";
import ScroolAbout from "../../Components/Works/ScroolAbout";
import VillaEntranceGalleryHero from "../../Components/Featured Works gallery/VillaEntrance/VillaEntranceGalleryHero";
import VillaEntranceGalleryLayout from "../../Components/Featured Works gallery/VillaEntrance/VillaEntranceGalleryLayout";

export default function VillaEntranceGallery() {
  useFadeInOnScroll(".fade-in");

  // Scroll to top on mount
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
          <div className="fade-in pt-10 bg-black">
            <VillaEntranceGalleryLayout />
          </div>
          <ScroolAbout />
        </main>
        <Footer />
      </div>
    </div>
  );
}
