import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "../Components/main.css"; // <-- import the CSS

export default function StaggeredMenu({
  open,
  setOpen,
  items = [],
  socialItems = [],
  contactInfo = {},
  displaySocials = true,
  accentColor = "#3b82f6",
  contentColor = "white",
  logoUrl,
}) {
  const menuRef = useRef(null);
  const itemsRef = useRef([]);
  const socialsRef = useRef([]);

  useEffect(() => {
    if (open) {
      gsap.to(menuRef.current, { x: 0, duration: 0.5, ease: "power3.out" });
      gsap.fromTo(
        itemsRef.current,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.6,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        socialsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power3.out" }
      );
    } else {
      gsap.to(menuRef.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [open]);

  return (
    <div
      ref={menuRef}
      className="staggered-menu fixed top-0 left-0 w-full md:w-[80%] h-full bg-black z-40 transform -translate-x-full shadow-xl shadow-slate-700"
      style={{ color: contentColor }}
    >
      <div className="staggered-menu-container flex flex-col md:flex-row h-full px-6 md:px-12 py-8 md:py-20 gap-6 md:gap-12">
        {/* Left: Logo + Menu Items */}
        <div className="staggered-menu-logo flex-1 flex flex-col justify-center min-w-0">
          {logoUrl && (
            <div className="mb-4 md:mb-8">
              <img src={logoUrl} alt="Logo" className="w-[80px] md:w-[120px] h-auto object-contain" />
            </div>
          )}
          <div className="staggered-menu-items flex flex-col uppercase font-bold w-full">
            {items.map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                onClick={() => setOpen(false)}
                ref={(el) => (itemsRef.current[idx] = el)}
                className={`hover:[-webkit-text-stroke:1px_white] relative text-[30px] sm:text-[40px] md:text-[60px] lg:text-[50px] xl:text-[80px] 2xl:text-[90px] mb-4 md:mb-6 hover:text-transparent transition-colors duration-300`}
              >
                {item.label}
                <span
                  className="absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300"
                  style={{ backgroundColor: accentColor }}
                ></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Socials + Contact Info */}
        <div className="staggered-menu-right flex-1 flex flex-col justify-start md:justify-center items-start md:pl-6 lg:pl-12">
          {displaySocials && socialItems.length > 0 && (
            <div className="staggered-menu-socials flex flex-col mb-4">
              <h3 className="staggered-menu-heading text-xs sm:text-lg md:text-lg font-bold uppercase tracking-widest mb-2">
                Socials
              </h3>
              {socialItems.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition-colors text-sm sm:text-base md:text-lg mb-1"
                  ref={(el) => (socialsRef.current[idx] = el)}
                >
                  {social.label}
                </a>
              ))}
            </div>
          )}

          <div className="staggered-menu-contact">
            {contactInfo.address && (
              <div className="mb-4">
                <h3 className="staggered-menu-heading text-xs sm:text-sm md:text-sm font-semibold uppercase tracking-widest mt-8 mb-2">
                  Address
                </h3>
                <p className="text-sm sm:text-base md:text-base">{contactInfo.address}</p>
              </div>
            )}

            {contactInfo.email && (
              <div>
                <h3 className="staggered-menu-heading text-xs sm:text-sm md:text-sm font-semibold uppercase tracking-widest mt-8 mb-2">
                  Say Hi
                </h3>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-gray-400 text-sm sm:text-base md:text-base">
                  {contactInfo.email}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
