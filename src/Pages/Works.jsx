import { useEffect } from "react";
import CustomCursor from "../Animations/CustomCursor";
import useFadeInOnScroll from "../Animations/UseFadeInScroll";
import Header from "../Components/MainComponent/Header";
import WorksHero from "../Components/Works/WorksHero";
import WorkProjects from "../Components/Works/WorksProjects";
import ScrollAbout from "../Components/Works/ScroolAbout";
import Footer from "../Components/MainComponent/Footer";

export default function Works() {
  useFadeInOnScroll(".fade-in");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="smooth-wrapper">
      {/* Fixed header OUTSIDE smooth-content */}
      <Header />

      <div id="smooth-content" className="relative">
        <main className="">
          <section className="fade-in">
            <WorksHero />
          </section>
          <section className="fade- bg-black text-white">
            <WorkProjects />
          </section>
          <section className="fade-in">
            <ScrollAbout />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
