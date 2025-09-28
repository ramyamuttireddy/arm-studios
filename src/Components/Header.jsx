import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTh } from "react-icons/fa";
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
        className="header-container fixed top-0 left-0 w-full z-50 px-6 md:px-16 py-4 md:py-6 flex justify-between items-center bg-black text-white transition-all duration-500
  3xl:px-32 3xl:py-12
"
      >
        {/* Logo & Hamburger */}
        <div className="header-logo-wrapper flex items-center gap-4 3xl:gap-12">
          <FaTh
            className="header-hamburger text-2xl md:text-3xl cursor-pointer text-white hover:text-blue-400 transition-colors duration-300 3xl:text-[5rem]"
            onClick={toggleMenu}
          />
          <span
            onClick={handleLogoClick}
            className="header-logo-text text-xl md:text-2xl font-extrabold tracking-widest text-white hover:text-blue-400 cursor-pointer leading-none 3xl:text-[4rem]"
          >
            ARM STUDIO
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="header-nav hidden md:flex gap-10 uppercase text-sm tracking-widest font-medium 3xl:gap-24 3xl:text-[2.5rem]">
          {menuItems.slice(1).map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="text-white hover:[-webkit-text-stroke:1px_white] hover:text-blue-600 transition-all duration-300 text-[14px] relative after:content-[''] after:block after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full 3xl:text-[2.5rem]"
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
