import CustomCursor from "../../Animations/CustomCursor";
import useFadeInOnScroll from "../../Animations/UseFadeInScroll";
import Header from "../../Components/MainComponent/Header";
import Footer from "../../Components/MainComponent/Footer";
import ScroolAbout from "../../Components/Works/ScroolAbout";

import Villa44GalleryLayout from "../../Components/Gallery/Villa44/Villa44GalleryLayout";
import Villa44GalleryHero from "../../Components/Gallery/Villa44/Villa44GalleryHero";

export default function Villa44Gallery() {
  
  useFadeInOnScroll(".fade-in");



  return (
    <div className="bg-black text-white overflow-x-hidden font-sans">
      <Header />
      <main className="space-y-24">
        <div className="fade-in">
          <Villa44GalleryHero />
        </div>
        <div className="fade-in">
          <Villa44GalleryLayout />
          <ScroolAbout />
        </div>
      </main>
      <Footer />
      <CustomCursor />
    </div>
  );
}
