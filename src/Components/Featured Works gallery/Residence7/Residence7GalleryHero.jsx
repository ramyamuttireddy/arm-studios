import { motion } from "framer-motion";

export default function Residence7GalleryHero() {
  return (
      <section
      id="featured"
      className="relative flex flex-col gap-40 bg-black text-white overflow-hidden h-screen 3xl:gap-[120px]"
    >
      {/* Container */}
      <div
        className="
          hero-container w-full p-5 pt-60 md:px-12 lg:px-20 flex gap-10 justify-center items-start h-[80vh]
          xl:p-30 xl:gap-20 
           3xl:gap-[100px] 3xl:px-[130px]  lg:pt-[200px] xl:pt-[280px] 2xl:pt-[300px] 3xl:pt-[700px]
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
         19'
        </motion.div>

        {/* Hero Headline - Right */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
          className="
            hero-headline leading-[50px] uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] font-medium
            3xl:text-[220px] 3xl:leading-[200px] flex flex-col gap-2
          "
        >
          <span className="block 3xl:mb-6">Villa #22</span>
          
          
        </motion.h1>

        {/* Hidden image hover effect */}
        {/* <div className="absolute top-1/2 right-10 hidden md:block">
          <img
            src="https://obys.agency/wp-content/uploads/2022/11/Showreel-2022-preview-1.jpg"
            alt="hover"
            className="
              hover-img w-48 opacity-0 hover:opacity-100 transition duration-700
              3xl:w-[96px]
            "
          />
        </div> */}
      </div>


      {/* Bottom Info Section (like top section in second hero) */}
      {/* Bottom Info Section (like top section in second hero) */}
      <div className="w-full bg-black/80 flex justify-center md:justify-end p-8 pb-0 z-20 3xl:pb-8">
        <div className="text-left border-b border-white/30 p-3 3xl:p-6">
          <p className="text-sm 2xl:text-[20px] 3xl:text-[48px] 2xl:leading-[1.6] 3xl:leading-[1.8]">
            Residential  
          </p>
          <p className="text-sm 2xl:text-[20px] 3xl:text-[48px] 2xl:leading-[1.6] 3xl:leading-[1.8]">
           
          </p>
          <p className="text-sm mt-1 2xl:text-[20px] 3xl:text-[48px] 2xl:leading-[1.6] 3xl:leading-[1.8]">
           2019
          </p>
        </div>
      </div>
    </section>
  );
}
