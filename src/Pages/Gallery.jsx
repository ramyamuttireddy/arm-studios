import CustomCursor from "../Animations/CustomCursor";
import useFadeInOnScroll from "../Animations/UseFadeInScroll";
import Header from "../Components/MainComponent/Header";
import GalleryHero from "../Components/Gallery/Main Gallery/GalleryHero";
import Footer from "../Components/MainComponent/Footer";
import GalleryLayout from "../Components/Gallery/Main Gallery/GalleryLayout";
import ScroolAbout from "../Components/Works/ScroolAbout"

export default function Gallery() {
  useFadeInOnScroll(".fade-in");

  return (
    <div className="bg-black text-white overflow-x-hidden font-sans">
      <Header />
      <main className="space-y-24">
        <div className="fade-in">
          <GalleryHero />
        </div>
        <div className="fade-in">
          <GalleryLayout />
          <ScroolAbout />
        </div>
      </main>
      <Footer />
      <CustomCursor />
    </div>
  );
}
