import { useEffect } from "react";
import CustomCursor from "../../Animations/CustomCursor";
import useFadeInOnScroll from "../../Animations/UseFadeInScroll";
import Header from "../../Components/MainComponent/Header";
import Footer from "../../Components/MainComponent/Footer";
import ScroolAbout from "../../Components/Works/ScroolAbout";

import Villa44GalleryLayout from "../../Components/Gallery/Villa44/Villa44GalleryLayout";
import Villa44GalleryHero from "../../Components/Gallery/Villa44/Villa44GalleryHero";

export default function Villa44Gallery() {
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
            <Villa44GalleryHero />
          </div>
          <div className="fade-in pt-10 bg-black">
            <Villa44GalleryLayout />
            <ScroolAbout />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
