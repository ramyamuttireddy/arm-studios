import { useEffect } from "react";
import CustomCursor from "../../Animations/CustomCursor";
import useFadeInOnScroll from "../../Animations/UseFadeInScroll";
import Header from "../../Components/MainComponent/Header";
import Footer from "../../Components/MainComponent/Footer";
import ScroolAbout from "../../Components/Works/ScroolAbout";

import PrivateVillaGalleryHero from "../../Components/Gallery/Private Villa/PrivateVillaGalleryHero";
import PrivateVillaGalleryLayout from "../../Components/Gallery/Private Villa/PrivateVillaGalleryLayout";

export default function PrivateVillaGallery() {
  useFadeInOnScroll(".fade-in");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="smooth-wrapper">
        {/* Fixed header OUTSIDE smooth-content */}
        <Header />

        <div id="smooth-content" className="relative">
          <main className="">
            <div className="fade-in">
              <PrivateVillaGalleryHero />
            </div>
            <div className="fade-in pt-10 bg-black">
              <PrivateVillaGalleryLayout />
              <ScroolAbout />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
