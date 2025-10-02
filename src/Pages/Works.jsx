import { useState, useEffect } from "react";
import CustomCursor from "../Animations/CustomCursor"
import useFadeInOnScroll from "../Animations/UseFadeInScroll"
import Preloader from "../Components/MainComponent/PreLoader"
import Header from "../Components/MainComponent/Header"
import WorksHero from "../Components/Works/WorksHero";
import WorkProjects from "../Components/Works/WorksProjects"
import ScrollAbout from "../Components/Works/ScroolAbout"
import Footer from "../Components/MainComponent/Footer"


export default function Works() {
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
      <WorksHero />
    </section>
    <section className="fade-in">
      <WorkProjects />
    </section>
    <section className="fade-in">
      <ScrollAbout />
    </section>
  </main>
  <Footer />
</div>

  );
}
