import { useState, useEffect } from "react";
import CustomCursor from "../Animations/CustomCursor";
import useFadeInOnScroll from "../Animations/UseFadeInScroll";
import Header from "../Components/MainComponent/Header";
import AllWorksHero from "../Components/AllWorks/AllWorksHero";
import AllWorksList from "../Components/AllWorks/AllWorkslist";
import Footer from "../Components/MainComponent/Footer";
import Preloader from "../Components/MainComponent/PreLoader";

export default function AllWorks() {
  const [loading, setLoading] = useState(true);
  useFadeInOnScroll(".fade-in");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <div className="bg-black text-white overflow-x-hidden font-sans">
      <CustomCursor />
      <Header />
      <main className="space-y-24">
        <div className="fade-in">
          <AllWorksHero/>
        </div>
        <div className="fade-in">
          <AllWorksList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
