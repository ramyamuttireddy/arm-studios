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
    <div className="bg-black text-white overflow-x-hidden font-sans">
      <CustomCursor />
      <Header />
      <main className="space-y-24">
        <div className="fade-in">
          <Residence11GalleryHero />
        </div>
        <div className="fade-in">
          <Residence11GalleryLayout />
          <ScroolAbout />
        </div>
      </main>
      <Footer />
      
    </div>
  );
}
