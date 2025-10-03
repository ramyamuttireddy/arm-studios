import { useEffect } from "react";
import CustomCursor from "../../Animations/CustomCursor";
import useFadeInOnScroll from "../../Animations/UseFadeInScroll";
import Header from "../../Components/MainComponent/Header";
import Footer from "../../Components/MainComponent/Footer";
import ScroolAbout from "../../Components/Works/ScroolAbout";
import HouseForStaycationGalleryHero from "../../Components/Featured Works gallery/HouseForStaycation/HouseForStaycationGalleryHero";
import HouseForStaycationGalleryLayout from "../../Components/Featured Works gallery/HouseForStaycation/HouseForStaycationGalleryLayout";

export default function HouseForStaycationGallery() {
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
            <HouseForStaycationGalleryHero />
          </div>
          <div className="fade-in pt-10 bg-black">
            <HouseForStaycationGalleryLayout />
          </div>
          <ScroolAbout />
        </main>
        <Footer />
      </div>
    </div>
  );
}
