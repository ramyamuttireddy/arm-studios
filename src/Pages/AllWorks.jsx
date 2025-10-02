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
    <div className="bg-black text-white font-sans scroll-smooth overflow-x-hidden overflow-y-scroll [&::-webkit-scrollbar]:hidden">
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
