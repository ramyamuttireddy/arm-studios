import CustomCursor from "../Animations/CustomCursor"
import useFadeInOnScroll from "../Animations/UseFadeInScroll"
import Header from "../Components/MainComponent/Header";
import WorksHero from "../Components/Works/WorksHero";
import WorkProjects from "../Components/Works/WorksProjects"
import ScrollAbout from "../Components/Works/ScroolAbout"
import Footer from "../Components/MainComponent/Footer"


export default function Works() {
 
  useFadeInOnScroll(".fade-in");

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
