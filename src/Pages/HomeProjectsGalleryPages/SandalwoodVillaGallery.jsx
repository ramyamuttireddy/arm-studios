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
    <div className="bg-black text-white overflow-x-hidden font-sans">
      <CustomCursor />
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
      
    </div>
  );
}
