import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="featured"
      className="relative flex flex-col gap-40 bg-black text-white overflow-hidden h-screen 3xl:gap-[120px]"
    >
      {/* Container */}
      <div className="w-full max-w-[1200px] mx-auto p-5 pt-40 md:px-12 lg:px-20 flex gap-10 justify-center h-full xl:p-30 xl:gap-20 3xl:px-40 3xl:pt-80 3xl:gap-20 hero-container">
        {/* Section Counter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="italic font-light text-2xl sm:text-4xl md:text-5xl xl:text-[50px] 2xl:text-[64px] 3xl:text-[140px] fade-in text-right hero-counter"
        >
          11
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
          className="leading-[50px] uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] 2xl:text-[120px] 2xl:leading-[140px] 3xl:text-[320px] 3xl:leading-[280px] font-medium hero-headline"
        >
          <span className="block mb-2 3xl:mb-4">Featured</span>
          <span className="block mb-2 3xl:mb-4">Work</span>
        </motion.h1>
      </div>

      {/* Bottom Info Section (like top section in second hero) */}
      {/* Bottom Info Section (like top section in second hero) */}
      <div className="w-full bg-black/80 flex justify-end p-8 pb-0 z-20 3xl:pb-8">
        <div className="text-right border-b border-white/30 p-3 3xl:p-6">
          <p className="text-sm 2xl:text-[24px] 3xl:text-[48px] 2xl:leading-[1.6] 3xl:leading-[1.8]">
            Architecture
          </p>
          <p className="text-sm 2xl:text-[24px] 3xl:text-[48px] 2xl:leading-[1.6] 3xl:leading-[1.8]">
            Interior
          </p>
          <p className="text-sm mt-1 2xl:text-[24px] 3xl:text-[48px] 2xl:leading-[1.6] 3xl:leading-[1.8]">
            Design (Architecture + Interior)
          </p>
        </div>
      </div>
    </section>
  );
}
