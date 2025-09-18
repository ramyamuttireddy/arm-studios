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
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 md:px-16 py-6 flex justify-between items-center bg-black text-white">
        <div className="flex items-center gap-4">
          <FaTh
            className="text-2xl md:text-3xl cursor-pointer text-white hover:text-gray-400 transition-colors"
            onClick={toggleMenu}
          />
          <span
            onClick={handleLogoClick}
            className="text-xl md:text-2xl font-bold tracking-widest text-white hover:text-gray-400 cursor-pointer"
          >
            ARM STUDIO
          </span>
        </div>

        <nav className="hidden md:flex gap-8 uppercase text-sm tracking-wide text-white">
          <Link to="/works" className="text-white hover:text-gray-400">Works</Link>
          <Link to="/about" className="text-white hover:text-gray-400">About</Link>
          <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>
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
