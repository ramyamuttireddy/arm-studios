import { useEffect } from "react";
import CustomCursor from "../../Animations/CustomCursor";
import useFadeInOnScroll from "../../Animations/UseFadeInScroll";
import Header from "../../Components/MainComponent/Header";
import Footer from "../../Components/MainComponent/Footer";
import ScroolAbout from "../../Components/Works/ScroolAbout";

import Residence622GalleryHero from "../../Components/Gallery/Residence622/Residence622GalleryHero";
import Residence622GalleryLayout from "../../Components/Gallery/Residence622/Residence622GalleryLayout";

export default function Residence622Gallery() {
  
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
          <Residence622GalleryHero />
        </div>
        <div className="fade-in">
          <Residence622GalleryLayout />
          <ScroolAbout />
        </div>
      </main>
      <Footer />
      
    </div>
  );
}
