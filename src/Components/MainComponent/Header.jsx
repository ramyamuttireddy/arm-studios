import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StaggeredMenu from "./Menu"; // Adjust path

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", link: "/home" },
    { label: "Works", link: "/works" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "Instagram", link: "https://instagram.com" },
    { label: "LinkedIn", link: "https://www.linkedin.com/" },
  ];

  const contactInfo = {
   address: "Manikonda,\nBhagyanagar,\nBharat",
    email: "info@armstudios.design",
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleLogoClick = () => {
    navigate("/home");
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full h-16 3xl:h-40 z-50 px-6 md:px-16 flex justify-between items-center 
        bg-black/20 backdrop-blur-sm text-white transition-all duration-500 3xl:px-32"
      >
        {/* Logo & Hamburger */}
        <div className="flex items-center">
          {/* Left Icon Logo */}
          <img
            src="/assets/hederimages/logo.png"
            alt="Menu Logo"
            onClick={toggleMenu}
            className="cursor-pointer w-8 md:w-[42px] object-contain hover:opacity-80 transition 3xl:w-[5rem] 3xl:h-[5rem]"
          />

          {/* Right Logo */}
          <img
            src="/assets/hederimages/arm_content.png"
            alt="ARM Studio Logo"
            onClick={handleLogoClick}
            className="cursor-pointer w-[105px] md:w-[110px] object-contain hover:opacity-80 transition 3xl:w-[300px] 3xl:h-[300px]"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="header-nav hidden md:flex gap-10 uppercase text-sm tracking-widest font-medium 3xl:gap-24 3xl:text-md">
          {menuItems.slice(1).map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="text-white  hover:font-bold transition-all duration-300 text-[12px]  3xl:text-4xl"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* GSAP Staggered Menu */}
      <StaggeredMenu
        open={menuOpen}
        setOpen={setMenuOpen}
        items={menuItems}
        socialItems={socialItems}
        contactInfo={contactInfo}
        displaySocials={true}
        displayItemNumbering={true}
        accentColor="#ff6b6b"
        contentColor="white"
      />
    </>
  );
}
