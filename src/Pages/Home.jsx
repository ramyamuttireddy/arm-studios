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

  return (
    <div className="bg-black text-white font-sans scroll-m-48 overflow-x-hidden [&::-webkit-scrollbar]:hidden">
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
