import { useEffect } from "react";
import CustomCursor from "../Animations/CustomCursor";
import useFadeInOnScroll from "../Animations/UseFadeInScroll";
import Header from "../Components/MainComponent/Header";
import Footer from "../Components/MainComponent/Footer";
import ContactHero from "../Components/Contact/ContactHero";
import ContactSection from "../Components/Contact/ContactSection";

export default function Contact() {
  useFadeInOnScroll(".fade-in");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="smooth-wrapper">
      {/* Fixed header OUTSIDE smooth-content */}
      <Header />

      <div id="smooth-content" className=" bg-black text-white">
        <main className="">
          <section className="fade-in">
            <ContactHero />
          </section>
          <section className="fade-in">
            <ContactSection />
          </section>
          <section className="fade-in"></section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
