import { useEffect } from "react";
import CustomCursor from "../../Animations/CustomCursor";
import useFadeInOnScroll from "../../Animations/UseFadeInScroll";
import Header from "../../Components/MainComponent/Header";
import Footer from "../../Components/MainComponent/Footer";
import ScroolAbout from "../../Components/Works/ScroolAbout";
import Villa22GalleryLayout from "../../Components/Gallery/Villa22/Villa22GalleryLayout";
import Villa22GalleryHero from "../../Components/Gallery/Villa22/Villa22GalleryHero";

export default function Villa22Gallery() {
  useFadeInOnScroll(".fade-in");

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white font-sans scroll-smooth overflow-x-hidden overflow-y-scroll [&::-webkit-scrollbar]:hidden">
      <CustomCursor />
      <Header />
      <main className="space-y-24">
        <div className="fade-in">
          <Villa22GalleryHero />
        </div>
        <div className="fade-in">
          <Villa22GalleryLayout />
        </div>
        <ScroolAbout />
      </main>
      <Footer />
    </div>
  );
}
