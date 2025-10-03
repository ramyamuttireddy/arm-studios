import CustomCursor from "../Animations/CustomCursor";
import useFadeInOnScroll from "../Animations/UseFadeInScroll";
import Header from "../Components/MainComponent/Header";
import GalleryHero from "../Components/Gallery/Main Gallery/GalleryHero";
import Footer from "../Components/MainComponent/Footer";
import GalleryLayout from "../Components/Gallery/Main Gallery/GalleryLayout";
import ScroolAbout from "../Components/Works/ScroolAbout";
import { useEffect } from "react";

export default function Gallery() {
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
            <GalleryHero />
          </div>
          <div className="fade-in pt-10 bg-black">
            <GalleryLayout />
            <ScroolAbout />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
