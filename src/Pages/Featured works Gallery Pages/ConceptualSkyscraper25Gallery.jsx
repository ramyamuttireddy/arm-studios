import { useEffect } from "react";
import CustomCursor from "../../Animations/CustomCursor";
import useFadeInOnScroll from "../../Animations/UseFadeInScroll";
import Header from "../../Components/MainComponent/Header";
import Footer from "../../Components/MainComponent/Footer";
import ScroolAbout from "../../Components/Works/ScroolAbout";
import ConceptualSkyscraper25GalleryHero from "../../Components/Featured Works gallery/ConceptualSkyscraper25/ConceptualSkyscraper25GalleryHero"
import ConceptualSkyscraper25GalleryLayout from "../../Components//Featured Works gallery/ConceptualSkyscraper25/ConceptualSkyscraper25GalleryLayout";

export default function ConceptualSkyscraper25Gallery() {
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
            <ConceptualSkyscraper25GalleryHero />
          </div>
          <div className="fade-in pt-10 bg-black">
            <ConceptualSkyscraper25GalleryLayout />
          </div>
          <ScroolAbout />
        </main>
        <Footer />
      </div>
    </div>
  );
}
