import { useEffect } from "react";
import CustomCursor from "../../Animations/CustomCursor";
import useFadeInOnScroll from "../../Animations/UseFadeInScroll";
import Header from "../../Components/MainComponent/Header";
import Footer from "../../Components/MainComponent/Footer";
import ScroolAbout from "../../Components/Works/ScroolAbout";
import ForestResortGalleryHero from "../../Components/Featured Works gallery/ForestResort/ForestResortGalleryHero";
import ForestResortGalleryLayout from "../../Components/Featured Works gallery/ForestResort/ForestResortGalleryLayout";


export default function ForestResortGallery() {
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
            <ForestResortGalleryHero />
          </div>
          <div className="fade-in pt-10 bg-black">
            <ForestResortGalleryLayout />
          </div>
          <ScroolAbout />
        </main>
        <Footer />
      </div>
    </div>
  );
}
