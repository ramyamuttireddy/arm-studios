import { useEffect } from "react";
import CustomCursor from "../../Animations/CustomCursor";
import useFadeInOnScroll from "../../Animations/UseFadeInScroll";
import Header from "../../Components/MainComponent/Header";
import Footer from "../../Components/MainComponent/Footer";
import ScroolAbout from "../../Components/Works/ScroolAbout";
import MixedUseApartmentAstralisGalleryHero from "../../Components/Featured Works gallery/MixedUseApartmentAstralis/MixedUseApartmentAstralisGalleryHero";
import MixedUseApartmentAstralisGalleryLayout from "../../Components/Featured Works gallery/MixedUseApartmentAstralis/MixedUseApartmentAstralisGalleryLayout";

export default function MixedUseApartmentAstralisGallery() {
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
            <MixedUseApartmentAstralisGalleryHero />
          </div>
          <div className="fade-in pt-10 bg-black">
            <MixedUseApartmentAstralisGalleryLayout />
          </div>
          <ScroolAbout />
        </main>
        <Footer />
      </div>
    </div>
  );
}
