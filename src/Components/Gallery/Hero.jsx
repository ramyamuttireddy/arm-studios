import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col gap-40 bg-[#0100FC] text-white overflow-hidden h-screen 3xl:h-screen"
    >
      {/* Main Container */}
      <div className="max-w-[1200px] 3xl:max-w-[2000px] mx-auto p-5 pt-40 md:px-12 lg:px-10 flex gap-10 h-full 3xl:pt-80">
        
        {/* Section Counter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-white text-2xl sm:text-4xl md:text-5xl xl:text-[50px] 2xl:text-[70px] 3xl:text-[140px] font-serif italic text-right"
        >
          25
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
          className="leading-[50px] uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] 2xl:text-[150px] 3xl:text-[300px] font-medium 3xl:leading-[1.1]"
        >
          <span className="block mb-2 3xl:mb-4">Office Design #1</span>
        </motion.h1>
      </div>

      {/* Bottom Info */}
      <div className="w-full bg-[#0100FC] flex justify-end p-8 pb-6 3xl:pb-12">
        <div className="text-right border-b border-white/30 p-3 3xl:p-6">
          <p className="text-sm 3xl:text-[35px] 3xl:leading-[1.4]">Commercial</p>
          <p className="text-sm 3xl:text-[35px] 3xl:leading-[1.4]">Europe</p>
          <p className="text-sm mt-1 3xl:text-[35px] 3xl:leading-[1.4]">2023</p>
        </div>
      </div>
    </section>
  );
}
