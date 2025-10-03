import { useEffect } from "react";
import CustomCursor from "../Animations/CustomCursor";
import useFadeInOnScroll from "../Animations/UseFadeInScroll";
import Header from "../Components/MainComponent/Header";
import AllWorksHero from "../Components/AllWorks/AllWorksHero";
import AllWorksList from "../Components/AllWorks/AllWorkslist";
import Footer from "../Components/MainComponent/Footer";

export default function AllWorks() {
  useFadeInOnScroll(".fade-in");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="smooth-wrapper">
      {/* Fixed header OUTSIDE smooth-content */}
      <Header />

      <div id="smooth-content" className="relative">
        <main className="bg-black">
          <div className="fade-in">
            <AllWorksHero />
          </div>
          <div className="fade-in">
            <AllWorksList />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
