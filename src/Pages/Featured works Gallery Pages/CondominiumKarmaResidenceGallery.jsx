import { useEffect } from "react";
import CustomCursor from "../../Animations/CustomCursor";
import useFadeInOnScroll from "../../Animations/UseFadeInScroll";
import Header from "../../Components/MainComponent/Header";
import Footer from "../../Components/MainComponent/Footer";
import ScroolAbout from "../../Components/Works/ScroolAbout";
import CondominiumKarmaResidenceGalleryHero from "../../Components/Featured Works gallery/CondominiumKarmaResidence/CondominiumKarmaResidenceGalleryHero";
import CondominiumKarmaResidenceGalleryLayout from "../../Components/Featured Works gallery/CondominiumKarmaResidence/CondominiumKarmaResidenceGalleryLayout";

export default function CondominiumKarmaResidenceGallery() {
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
            <CondominiumKarmaResidenceGalleryHero />
          </div>
          <div className="fade-in pt-10 bg-black">
            <CondominiumKarmaResidenceGalleryLayout />
          </div>
          <ScroolAbout />
        </main>
        <Footer />
      </div>
    </div>
  );
}
