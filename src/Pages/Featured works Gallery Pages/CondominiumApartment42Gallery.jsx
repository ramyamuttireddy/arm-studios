import { useEffect } from "react";
import CustomCursor from "../../Animations/CustomCursor";
import useFadeInOnScroll from "../../Animations/UseFadeInScroll";
import Header from "../../Components/MainComponent/Header";
import Footer from "../../Components/MainComponent/Footer";
import ScroolAbout from "../../Components/Works/ScroolAbout";
import CondominiumApartment42GalleryHero from "../../Components/Featured Works gallery/CondominiumApartment42/CondominiumApartment42GalleryHero"
import CondominiumApartment42GalleryLayout from "../../Components/Featured Works gallery/CondominiumApartment42/CondominiumApartment42GalleryLayout"

export default function CondominiumApartment42Gallery() {
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
            <CondominiumApartment42GalleryHero />
          </div>
          <div className="fade-in pt-10 bg-black">
            <CondominiumApartment42GalleryLayout />
          </div>
          <ScroolAbout />
        </main>
        <Footer />
      </div>
    </div>
  );
}
