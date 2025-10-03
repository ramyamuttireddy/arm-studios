// src/pages/Home.jsx
import { useEffect } from "react";
import CustomCursor from "../Animations/CustomCursor";
import useFadeInOnScroll from "../Animations/UseFadeInScroll";
import Header from "../Components/MainComponent/Header";
import HomeHero from "../Components/Home/HomeHero";
import OurProjects from "../Components/Home/OurProjects";
import HomeAbout from "../Components/Home/HomeAbout";
import Footer from "../Components/MainComponent/Footer";
import ScroolText from "../Components/Home/ScroolText";

export default function Home() {
  useFadeInOnScroll(".fade-in");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="smooth-wrapper">
      {/* Fixed header OUTSIDE smooth-content */}
      <Header />

      <div id="smooth-content" className="relative">
          <main className="pt-20"> {/* adjust pt to match header height */}
          <section className="fade-in">
            <HomeHero />
          </section>
          <section className="fade-in">
            <OurProjects />
          </section>
          <section className="fade-in bg-black text-white">
            <HomeAbout />
            <ScroolText />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
