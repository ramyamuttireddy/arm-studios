// src/components/Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col gap-40 min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Container */}
      <div className="w-full max-w-[1200px] mx-auto p-40 md:px-12 lg:px-20 flex gap-10 justify-center h-full">
        {/* Section Counter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-gray-400 text-4xl md:text-6xl font-serif italic  pt-10"
        >
          01
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
          className="font-extrabold leading-[1.1] tracking-tight 
                     text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem]"
        >
          <span className="block mb-2">We design</span>
          <span className="block mb-2">unique</span>
          <span className="block mb-2">web graphic</span>
          <span className="block">experience</span>
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

     <div className="relative w-full flex justify-end pt-50">
  {/* Main Image */}
   <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1.2, duration: 0.6 }}
    className="absolute top-[-100px] right-[200px] w-32 h-32 md:w-48 md:h-48 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2"
  /> 

  <img
    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTnI3_zGoIlHDVvHzHJJccDV8b_w-0PX6hs_tPkZRPgEe18aw66"
    alt="House Design"
    className="w-[800px] object-cover"
  />

  {/* Circle (pin) on image */}
 

  {/* Dark Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
</div>

    </section>
  );
}
