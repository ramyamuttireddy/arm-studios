import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

export default function StaggeredMenu({
  open,
  setOpen,
  items = [],
  socialItems = [],
  contactInfo = {},
  displaySocials = true,
  displayItemNumbering = true,
  accentColor = "#ff6b6b",
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
      className="fixed top-0 left-0 w-full md:w-[80%] h-full bg-black z-40 transform -translate-x-full shadow-xl shadow-slate-700"
      style={{ color: contentColor }}
    >
      <div className="flex flex-col md:flex-row h-full px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12 md:py-20 gap-6 sm:gap-8 md:gap-12 lg:gap-96 xl:">
        {/* Left: Logo + Menu Items */}
        <div className="flex-1 flex flex-col justify-center min-w-0">
          {logoUrl && (
            <div className="mb-2 sm:mb-4 md:mb-8 lg:mb-12">
              <img
                src={logoUrl}
                alt="Logo"
                className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px] xl:w-[140px] h-auto object-contain"
              />
            </div>
          )}
          <div className="flex flex-col uppercase font-bold w-full">
            {items.map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                onClick={() => setOpen(false)}
                className="hover:text-gray-400 transition-colors w-full  text-[30px] sm:text-[40px] md:text-[60px] lg:text-[40px] xl:text-[80px] 2xl:text-[90px]"
                ref={(el) => (itemsRef.current[idx] = el)}
              > 
                {/* {displayItemNumbering && (
                  <span
                    className="mr-1 sm:mr-2 md:mr-3 lg:mr-4 xl:mr-6"
                    style={{ color: accentColor }}
                  >
                    {`0${idx + 1}.`}
                  </span>
                )} */}
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Socials + Contact Info */}
        <div className="flex-1 flex flex-col justify-start md:justify-center items-start md:pl-6 lg:pl-12">
          {displaySocials && socialItems.length > 0 && (
            <div className="flex flex-col mb-4">
              <h3 className="text-xs sm:text-lg md:text-lg font-bold uppercase tracking-widest mb-1">
                Socials
              </h3>
              {socialItems.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition-colors text-sm sm:text-base md:text-lg"
                  ref={(el) => (socialsRef.current[idx] = el)}
                >
                  {social.label}
                </a>
              ))}
            </div>
          )}

          {contactInfo.address && (
            <div className="mb-4">
              <h3 className="text-xs sm:text-sm md:text-sm font-semibold uppercase tracking-widest mt-14 mb-2">
                Address
              </h3>
              <p className="text-sm sm:text-base md:text-base">
                {contactInfo.address}
              </p>
            </div>
          )}

          {contactInfo.email && (
            <div>
              <h3 className="text-xs sm:text-sm md:text-sm font-semibold uppercase tracking-widest mt-14 mb-2">
                Say Hi
              </h3>
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:text-gray-400 text-sm sm:text-base md:text-base"
              >
                {contactInfo.email}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
