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
    <div className="bg-black text-white overflow-x-hidden font-sans">
      <CustomCursor />
      <Header />
      <main className="space-y-24">
        <div className="fade-in">
          <PrivateVillaGalleryHero />
        </div>
        <div className="fade-in">
          <PrivateVillaGalleryLayout />
          <ScroolAbout />
        </div>
      </main>
      <Footer />
    </div>
  );
}
