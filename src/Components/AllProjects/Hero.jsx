// src/components/Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col gap-40  bg-black text-white overflow-hidden"
    >
      {/* Container */}
      <div className="w-full max-w-[1200px] mx-auto p-5 pt-40 md:px-12 lg:px-20 flex  gap-10 justify-center h-full xl:p-30 xl:gap-20 ">
        {/* Section Counter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-white text-2xl sm:text-4xl md:text-5xl font-serif italic xl:text-[50px] 2xl:text-[96px] fade-in  text-right"
        >
          88
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
          className=" leading-[50px] uppercase  
                     text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] font-medium "
        >
          <span className="block mb-2 ">ALL </span>
          <span className="block mb-2">WORKS</span>
        
        </motion.h1>

        {/* Hidden image hover effect */}
        <div className="absolute top-1/2 right-10 hidden md:block">
          <img
            src="https://obys.agency/wp-content/uploads/2022/11/Showreel-2022-preview-1.jpg"
            alt="hover"
            className="w-48 opacity-0 hover:opacity-100 transition duration-700"
          />
        </div>
      </div>



    

    </section>
  );
}
