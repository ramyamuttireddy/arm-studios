import CustomCursor from "../../Animations/CustomCursor";
import useFadeInOnScroll from "../../Animations/UseFadeInScroll";
import Header from "../../Components/MainComponent/Header";
import Footer from "../../Components/MainComponent/Footer";
import ScroolAbout from "../../Components/Works/ScroolAbout";

import PrivateVillaGalleryHero from "../../Components/Gallery/Private Villa/PrivateVillaGalleryHero";
import PrivateVillaGalleryLayout from "../../Components/Gallery/Private Villa/PrivateVillaGalleryLayout";

export default function PrivateVillaGallery() {
  useFadeInOnScroll(".fade-in");

  return (
    <div className="bg-black text-white overflow-x-hidden font-sans">
      <Header />
      <main className="space-y-24">
        <div className="fade-in">
          <PrivateVillaGalleryHero />
        </div>
        <div className="fade-in">
          <PrivateVillaGalleryLayout />
          <ScroolAbout />
        </div>
      </main>
      <Footer />
      <CustomCursor />
    </div>
  );
}
