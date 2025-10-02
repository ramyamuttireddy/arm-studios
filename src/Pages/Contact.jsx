import CustomCursor from "../Animations/CustomCursor"
import useFadeInOnScroll from "../Animations/UseFadeInScroll";
import Header from "../Components/MainComponent/Header";
import Footer from "../Components/MainComponent/Footer";
import ContactHero from "../Components/Contact/ContactHero";
import ContactSection from "../Components/Contact/ContactSection";

export default function Contact() {
  useFadeInOnScroll(".fade-in");

  return (
    <div className="bg-black text-white font-sans scroll-smooth overflow-x-hidden overflow-y-scroll [&::-webkit-scrollbar]:hidden">
  <CustomCursor />
  <Header />
  <main className="space-y-24">
    <section className="fade-in">
      <ContactHero />
    </section>
    <section className="fade-in">
      <ContactSection  />
    </section>
    <section className="fade-in">
      
    </section>
  </main>
  <Footer />
</div>

  );
}
