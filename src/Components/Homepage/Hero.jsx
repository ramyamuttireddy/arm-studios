import { motion } from "framer-motion";
import "./home.css";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col gap-40 min-h-screen bg-black text-white overflow-hidden hero-top-padding"
    >
      {/* Container */}
      <div className="hero-container w-full max-w-[1200px] mx-auto p-5 pt-40 md:px-12 lg:px-20 flex gap-10 justify-center h-full xl:p-30 xl:gap-20">
        {/* Section Counter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hero-counter text-white text-2xl sm:text-4xl md:text-5xl font-serif italic xl:text-[50px] 2xl:text-[96px] fade-in text-right"
        >
          8
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
          className="hero-headline leading-[50px] uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] font-medium"
        >
          <span className="block">We design</span>
          <span className="block">unique</span>
          <span className="block">web graphic</span>
          <span className="block">experienc</span>
        </motion.h1>

        {/* Hidden image hover effect */}
        <div className="absolute top-1/2 right-10 hidden md:block">
          <img
            src="https://obys.agency/wp-content/uploads/2022/11/Showreel-2022-preview-1.jpg"
            alt="hover"
            className="hover-img w-48 opacity-0 hover:opacity-100 transition duration-700"
          />
        </div>
      </div>

      {/* Main Image Section */}
      <div className="relative w-full flex justify-end pt-50 hero-bottom-padding">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="floating-circle absolute top-[-100px] right-[200px] w-32 h-32 md:w-48 md:h-48 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2"
        />

        <img
          src="assets/img/hero_circle.png"
          alt="House Design"
          className="hero-main-img w-[1300px] object-cover"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
    </section>
  );
}
