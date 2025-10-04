import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <section
      id="home"
      className="
        relative flex flex-col gap-40 min-h-screen bg-black text-white overflow-hidden
        hero-top-padding
        3xl:gap-[300px]  lg:gap-80 xl:gap-40 2xl:gap-40
      "
    >
      {/* Container */}
      <div
        className="
          hero-container w-full p-5 pt-60 md:px-12 lg:px-20 flex gap-10 justify-center items-start h-[60vh]
          xl:p-30 xl:gap-8 
           3xl:gap-[100px] 3xl:px-[130px]  lg:pt-[180px] xl:pt-[180px] 2xl:pt-[200px] 3xl:pt-[700px]
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
          08
        </motion.div>

        {/* Hero Headline - Right */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
          className="
            hero-headline leading-[0px] uppercase text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-[75px] 2xl:text-[90px] font-medium
            3xl:text-[220px] 3xl:leading-[200px] flex flex-col gap-2
          "
        >
          <span className="block 3xl:mb-6">WE DESIGN</span>
          <span className="block 3xl:mb-6">UNIQUE SPACIAL</span>
          <span className="block 3xl:mb-6">EXPERIENCES</span>
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

      {/* Main Image Section */}
      <div className="relative w-full flex justify-end pt-50  xl:pb-[150px]  3xl:pt-[100px]">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="
            floating-circle absolute top-[-100px] right-[200px] w-32 h-32 md:w-48 md:h-48 bg-blue-500 rounded-full
            -translate-x-1/2 -translate-y-1/2
            3xl:w-[24rem] 3xl:h-[24rem] 3xl:top-[-200px] 3xl:right-[400px]
          "
        />

        <img
          src="/assets/HomePageImages/hero_circle.png"
          alt="House Design" 
          className="w-full lg:w-[400px] xl:w-[950px] 2xl:w-[1370px] object-cover 3xl:w-[2800px] 3xl:h-auto"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
    </section>
  );
}
