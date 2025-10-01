import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StaggeredMenu from "../MENUPAGE/Menupage"; // Adjust path

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", link: "/homepage" },
    { label: "Works", link: "/works" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "Instagram", link: "https://instagram.com" },
    { label: "Facebook", link: "https://facebook.com" },
  ];

  const contactInfo = {
    address: "Manikonda, Bhagyanagar, Bharat",
    email: "info@armstudios.design",
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleLogoClick = () => {
    toggleMenu();
    navigate("/homepage");
  };

  return (
    <>
      <header
        className="header-container fixed top-0 left-0 w-full z-50 px-6 md:px-16 py-4  flex justify-between items-center bg-black text-white transition-all duration-500
  3xl:px-32 3xl:py-12
"
      >
        {/* Logo & Hamburger */}
        <div className="flex items-center">
          {/* Left Icon Logo (replacing FaTh) */}
          <img
            src="/assets/img/logo.png" // <-- replace with your 9-dots logo path
            alt="Menu Logo"
            onClick={toggleMenu}
            className="cursor-pointer w-8 h-8 md:w-10 md:h-10 object-contain hover:opacity-80 transition 3xl:w-[4rem] 3xl:h-[5rem]"
          />

          {/* Right Logo (replacing ARM STUDIO text) */}
          <img
            src="/assets/Landing Page/arm_content.png" // <-- replace with your ARM logo path
            alt="ARM Studio Logo"
            onClick={handleLogoClick}
            className="cursor-pointer w-[105px] md:w-[105px] object-contain hover:opacity-80 transition 3xl:w-[200px]"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="header-nav hidden md:flex gap-10 uppercase text-sm tracking-widest font-medium 3xl:gap-24 3xl:text-md">
          {menuItems.slice(1).map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="text-white hover:[-webkit-text-stroke:1px_white] hover:text-blue-600 transition-all duration-300 text-[12px] relative after:content-[''] after:block after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full 3xl:text-4xl"
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
