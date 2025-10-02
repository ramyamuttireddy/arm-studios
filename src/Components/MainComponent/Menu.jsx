import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { IoMdClose } from "react-icons/io"; // Close icon

export default function StaggeredMenu({
  open,
  setOpen,
  items = [],
  socialItems = [],
  contactInfo = {},
  displaySocials = true,
  accentColor = "#3b82f6",
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
    <>
      {/* Full overlay */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-black z-50 transform -translate-x-full shadow-xl text-white overflow-y-auto"
      >
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-white text-4xl md:text-5xl z-50 hover:text-gray-400 transition-colors"
        >
          <IoMdClose />
        </button>

        <div
          className="
            flex flex-col md:flex-row h-full 
            px-6 md:px-12 py-8 md:py-20 gap-6 md:gap-12
            xl:px-20 xl:py-20
            2xl:px-28 2xl:py-28
            3xl:px-40 3xl:py-40 3xl:gap-40
          "
        >
          {/* Left: Logo + Menu Items */}
          <div className="flex-1 flex flex-col justify-center min-w-0">
            {logoUrl && (
              <div className="mb-6 xl:mb-10 3xl:mb-24">
                <img
                  src={logoUrl}
                  alt="Logo"
                  className="w-[80px] md:w-[120px] xl:w-[160px] 2xl:w-[180px] 3xl:w-[540px] h-auto object-contain"
                />
              </div>
            )}

            <div className="flex flex-col uppercase font-bold leading-tight">
              {items.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.link}
                  onClick={() => setOpen(false)}
                  ref={(el) => (itemsRef.current[idx] = el)}
                  className="
                    hover:[-webkit-text-stroke:1px_white] relative
                    text-[40px] md:text-[60px] xl:text-[80px] 2xl:text-[90px] 3xl:text-[270px]
                    mb-4 xl:mb-6 3xl:mb-20
                    hover:text-transparent transition-colors duration-300
                  "
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Socials + Contact Info */}
          <div className="flex-1 flex flex-col justify-center items-start gap-10 xl:gap-16 3xl:gap-32">
            {displaySocials && socialItems.length > 0 && (
              <div className="flex flex-col">
                <h3 className="text-xs md:text-sm xl:text-base 2xl:text-lg 3xl:text-5xl font-bold uppercase tracking-widest mb-3 3xl:mb-10">
                  Socials
                </h3>
                {socialItems.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      hover:text-gray-400 transition-colors
                      text-sm md:text-base xl:text-lg 2xl:text-xl 3xl:text-5xl 
                      mb-2 3xl:mb-8
                    "
                    ref={(el) => (socialsRef.current[idx] = el)}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            )}

            {contactInfo.address && (
              <div className="3xl:mb-12">
                <h3 className="text-xs md:text-sm xl:text-base 2xl:text-lg 3xl:text-5xl font-semibold uppercase tracking-widest mb-2 3xl:mb-8">
                  Address
                </h3>
                <p className="text-sm md:text-base xl:text-lg 2xl:text-xl 3xl:text-5xl leading-relaxed 3xl:leading-[5.5rem]">
                  {contactInfo.address}
                </p>
              </div>
            )}

            {contactInfo.email && (
              <div>
                <h3 className="text-xs md:text-sm xl:text-base 2xl:text-lg 3xl:text-5xl font-semibold uppercase tracking-widest mb-2 3xl:mb-8">
                  Say Hi
                </h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="
                    hover:text-gray-400 block
                    text-sm md:text-base xl:text-lg 2xl:text-xl 3xl:text-5xl
                    3xl:leading-[5rem]
                  "
                >
                  {contactInfo.email}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
