import { useEffect } from "react";
import CustomCursor from "../Animations/CustomCursor";
import useFadeInOnScroll from "../Animations/UseFadeInScroll";
import Header from "../Components/MainComponent/Header";
import Footer from "../Components/MainComponent/Footer";

import AboutHero from "../Components/About/AboutHero";
import OurStudio from "../Components/About/OurStudio";
import OurServices from "../Components/About/OurServices";
import OurTeam from "../Components/About/OurTeam";
import IndustryLeaders from "../Components/About/IndustryLeaders";
import ScrollText from "../Components/About/Scrooltext";

export default function About() {
  useFadeInOnScroll(".fade-in");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="smooth-wrapper">
      {/* Fixed header OUTSIDE smooth-content */}
      <Header />

      <div id="smooth-content" className="relative bg-black text-white">
        <main className="">
          <section className="fade-in">
            <AboutHero />
          </section>
          <section className="fade-in">
            <OurStudio />
            <OurServices />
          </section>
          <section className="fade-in">
            <OurTeam />
            <IndustryLeaders />
          </section>
          <section className="fade-in">
            <ScrollText />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
