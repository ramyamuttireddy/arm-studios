import { motion } from "framer-motion";

export default function Residence11GalleryHero() {
  return (
    <section
      id="featured"
      className="relative flex flex-col  gap-8 bg-black text-white overflow-hidden h-[80vh] lg:h-screen 3xl:gap-[120px]"
    >
      {/* Container */}
      <div
        className="max-w-[1000px] mx-auto
          hero-container w-full p-5 pt-60 md:px-12 lg:px-20 flex gap-10 justify-center items-start 
          xl:p-30 xl:gap-10 
          3xl:gap-[100px] 3xl:px-[130px] lg:pt-[200px] xl:pt-[280px] 2xl:pt-[300px] 3xl:pt-[700px]
        "
      >
        {/* Section Counter - Left */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="
            hero-counter text-white text-2xl sm:text-4xl md:text-5xl italic xl:text-[50px] 2xl:text-[64px]
            fade-in text-left 3xl:text-[180px] 3xl:leading-[180px] font-Cormorant
          "
        >
          24'
        </motion.div>

        {/* Hero Headline - Right */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
          className="
            hero-headline leading-[50px] uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[80px] font-medium
            3xl:text-[220px] 3xl:leading-[200px] flex flex-col gap-2
          "
        >
          <span className="block 3xl:mb-6">Residence #11</span>
        </motion.h1>
      </div>

      {/* Bottom Info Section */}
      <div className="w-full bg-black/80 flex justify-end md:justify-end p-8 pb-0 z-20 3xl:pb-8">
        <div className="text-left border-b border-white/30 p-3 3xl:p-6">
          {/* Wrapper with right margin alignment like FlatInteriors */}
          <div className="max-w-[1000px] mx-auto flex flex-col lg:mr-[100px] xl:mr-[200px] 2xl:mr-96">
            <p className="text-sm 2xl:text-[20px] 3xl:text-[48px] 2xl:leading-[1.6] 3xl:leading-[1.8]">
              Residential
            </p>
            <p className="text-sm 2xl:text-[20px] 3xl:text-[48px] 2xl:leading-[1.6] 3xl:leading-[1.8]"></p>
            <p className="text-sm mt-1 2xl:text-[20px] 3xl:text-[48px] 2xl:leading-[1.6] 3xl:leading-[1.8]">
              2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
