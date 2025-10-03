import { useEffect } from "react";
import CustomCursor from "../../Animations/CustomCursor";
import useFadeInOnScroll from "../../Animations/UseFadeInScroll";
import Header from "../../Components/MainComponent/Header";
import Footer from "../../Components/MainComponent/Footer";

import ScroolAbout from "../../Components/Works/ScroolAbout";

import Residence11GalleryLayout from "../../Components/Gallery/Residence11/Residence11GalleryLayout";
import Residence11GalleryHero from "../../Components/Gallery/Residence11/Residence11GalleryHero";

export default function Residence11Gallery() {
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
            <Residence11GalleryHero />
          </div>
          <div className="fade-in pt-10 bg-black">
            <Residence11GalleryLayout />
            <ScroolAbout />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
