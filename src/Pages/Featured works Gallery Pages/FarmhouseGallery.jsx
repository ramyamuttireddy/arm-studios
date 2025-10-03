import { useEffect } from "react";
import CustomCursor from "../../Animations/CustomCursor";
import useFadeInOnScroll from "../../Animations/UseFadeInScroll";
import Header from "../../Components/MainComponent/Header";
import Footer from "../../Components/MainComponent/Footer";
import ScroolAbout from "../../Components/Works/ScroolAbout";
import Villa22GalleryLayout from "../../Components/Gallery/Villa22/Villa22GalleryLayout";
import Villa22GalleryHero from "../../Components/Gallery/Villa22/Villa22GalleryHero";

export default function FarmhouseGallery() {
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
            <FarmhouseGalleryHero />
          </div>
          <div className="fade-in pt-10 bg-black">
            <FarmhouseGalleryLayout />
          </div>
          <ScroolAbout />
        </main>
        <Footer />
      </div>
    </div>
  );
}
