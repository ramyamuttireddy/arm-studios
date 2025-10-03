import { useEffect } from "react";
import CustomCursor from "../../Animations/CustomCursor";
import useFadeInOnScroll from "../../Animations/UseFadeInScroll";
import Header from "../../Components/MainComponent/Header";
import Footer from "../../Components/MainComponent/Footer";
import ScroolAbout from "../../Components/Works/ScroolAbout";

import SandalwoodVillaGalleryLayout from "../../Components/Gallery/Sandalwood Villa/SandalwoodVillaGalleryLayout";
import SandalwoodVillaGalleryHero from "../../Components/Gallery/Sandalwood Villa/SandalwoodVillaGalleryHero";

export default function SandalwoodVillaGallery() {
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
            <SandalwoodVillaGalleryHero />
          </div>
          <div className="fade-in pt-10 bg-black">
            <SandalwoodVillaGalleryLayout />
            <ScroolAbout />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
