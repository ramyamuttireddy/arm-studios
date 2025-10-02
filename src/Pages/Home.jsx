import { useState, useEffect } from "react";
import CustomCursor from "../Animations/CustomCursor";
import useFadeInOnScroll from "../Animations/UseFadeInScroll";
import Header from "../Components/MainComponent/Header"
import HomeHero from "../Components/Home/HomeHero";
import OurProjects from "../Components/Home/OurProjects";
import HomeAbout from "../Components/Home/HomeAbout";
import Footer from "../Components/MainComponent/Footer";
import Preloader from "../Components/MainComponent/PreLoader"
import ScroolText from "../Components/Home/ScroolText";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useFadeInOnScroll(".fade-in");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="bg-black text-white overflow-hidden font-sans h-screen w-screen">
        <Preloader />
      </div>
    );
  }

  return (
    <div className="bg-black text-white font-sans scroll-smooth overflow-x-hidden overflow-y-scroll [&::-webkit-scrollbar]:hidden">
  <CustomCursor />
  <Header />
  <main className="space-y-24">
    <section className="fade-in">
      <HomeHero />
    </section>
    <section className="fade-in">
      <OurProjects />
    </section>
    <section className="fade-in">
      <HomeAbout />
      <ScroolText />
    </section>
  </main>
  <Footer />
</div>

  );
}
