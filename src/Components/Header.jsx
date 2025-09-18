import { useState } from "react";
import { Link } from "react-router-dom"; // 👈 use Link instead of ScrollLink
import { motion, AnimatePresence } from "framer-motion";
import { FaTh } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Animated text for overlay
  const AnimatedText = ({ text }) => {
    const letters = text.split("");
    return (
      <motion.div
        className="flex space-x-1 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
      >
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            className="text-6xl md:text-[8rem] font-bold uppercase leading-none"
            variants={{
              hidden: { y: 200, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { type: "spring", stiffness: 120 },
              },
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  const RightItem = ({ title, lines, className }) => (
    <motion.div
      className={`flex flex-col items-center md:items-start cursor-pointer border border-transparent p-2 rounded-md hover:border-white transition-all duration-300 ${className}`}
      whileHover={{ scale: 1.05, opacity: 1 }}
    >
      <p className="uppercase text-gray-400">{title}</p>
      {lines.map((line, idx) => (
        <p key={idx} className="text-white">{line}</p>
      ))}
    </motion.div>
  );

  return (
    <>
      {/* Header Bar */}
      <header className="fixed top-0 left-0 w-full z-40 px-6 md:px-16 py-6 flex justify-between items-center bg-black">
        <div className="flex items-center gap-4">
          <FaTh
            className="text-2xl md:text-3xl cursor-pointer hover:text-gray-400 transition-colors"
            onClick={() => setMenuOpen(true)}
          />
          {/* Logo → goes HomePage */}
          <Link
            to="/homepage"
            className="text-xl md:text-2xl font-bold tracking-widest cursor-pointer"
          >
            ARM STUDIO
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 uppercase text-sm tracking-wide">
          <Link to="/works" className="hover:text-gray-400">Works</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </nav>
      </header>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black text-white z-50 flex flex-col md:flex-row"
          >
            {/* Left Big Menu Items */}
            <div className="flex-1 flex flex-col justify-center items-center p-16 space-y-12">
              {[
                { text: "Home", path: "/homepage" },
                { text: "Works", path: "/works" },
                { text: "About", path: "/about" },
                { text: "Contact", path: "/contact" },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="group cursor-pointer"
                >
                  <AnimatedText text={item.text} />
                  <motion.div className="h-1 bg-white mt-2 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              ))}
            </div>

            {/* Right Side Info */}
            <div className="flex-1 flex flex-col justify-center items-center md:items-start space-y-8 mt-12 md:mt-0">
              <RightItem title="Socials" lines={["Twitter", "Instagram", "Facebook"]} />
              <RightItem title="Office" lines={["Melikishvili 23", "Tbilisi, Georgia"]} />
              <RightItem title="Email" lines={["info@obys.design"]} />
            </div>

            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-8 text-3xl md:text-5xl"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
