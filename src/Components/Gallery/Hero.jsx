import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className=" flex flex-col gap-40 bg-[#0100FC] text-white overflow-hidden "
    >
      {/* Main Container */}
      <div className=" max-w-[1200px] mx-auto p-5 pt-40 md:px-12 lg:px-10 flex  gap-10 h-full">
        
        {/* Section Counter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-white text-2xl sm:text-4xl md:text-5xl font-serif italic xl:text-[50px] 2xl:text-[70px] text-right"
        >
          25
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
          className="leading-[50px] uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] font-medium"
        >
          <span className="block mb-2">Office Design #1</span>
          
        </motion.h1>
      </div>

      {/* Bottom Info */}
      <div className=" w-full bg-[#0100FC] flex justify-end p-8 pb-6">
        <div className="text-right border-b border-white/30 p-3">
          <p className="text-sm">Commercial </p>
          <p className="text-sm">Europe</p>
          <p className="text-sm mt-1">2023</p>
        </div>
      </div>
    </section>
  );
}
