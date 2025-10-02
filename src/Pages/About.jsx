import CustomCursor from "../Animations/CustomCursor";
import useFadeInOnScroll from "../Animations/UseFadeInScroll";
import Header from "../Components/MainComponent/Header";
import Footer from "../Components/MainComponent/Footer";

import AboutHero from "../Components/About/AboutHero"
import OurStudio from "../Components/About/OurStudio"
import OurServices from "../Components/About/OurServices"
import OurTeam from "../Components/About/OurTeam"
import IndustryLeaders from "../Components/About/IndustryLeaders"

export default function About() {
  useFadeInOnScroll(".fade-in");

  return (
    <div className="bg-black text-white font-sans scroll-m-48 overflow-x-hidden [&::-webkit-scrollbar]:hidden">
      <CustomCursor />
      <Header />
      <main className="space-y-24">
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
      </main>
      <Footer />
    </div>
  );
}
