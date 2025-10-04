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
            flex flex-col md:flex-row  h-full
            gap-20 lg:gap-[400px]
          "
        >
          {/* Left: Logo + Menu Items */}
          <div className=" flex flex-col justify-center items-start pt-20 md:pt-0 min-w-0 ">
            {logoUrl && (
              <div className="mb-6 xl:mb-10 3xl:mb-24">
                <img
                  src={logoUrl}
                  alt="Logo"
                  className="w-[80px] md:w-[120px] xl:w-[160px] 2xl:w-[180px] 3xl:w-[540px] h-auto object-contain"
                />
              </div>
            )}

            <div className="flex flex-col uppercase font-semibold leading-tight">
              {items.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.link}
                  onClick={() => setOpen(false)}
                  ref={(el) => (itemsRef.current[idx] = el)}
                  className="
                    hover:[-webkit-text-stroke:0.5px_white] relative italic
                    text-[40px] md:text-[60px] xl:text-[80px] 2xl:text-[90px] 3xl:text-[250px]
                     3xl:mb-6
                    hover:text-transparent transition-colors duration-300 pl-10 font-myfont
                  "
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Socials + Contact Info */}
          <div className=" flex flex-col justify-center items-start gap-20 lg:gap-10 xl:gap-12 3xl:gap-32 px-20 md:px-0">
            {displaySocials && socialItems.length > 0 && (
              <div className="flex flex-col">
                <h3 className="text-xs md:text-sm xl:text-sm 2xl:text-sm 3xl:text-5xl font-light uppercase tracking-widest mb-3 3xl:mb-10">
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
                      text-sm md:text-base xl:text-xl 2xl:text-2xl 3xl:text-5xl 
                      leading-tight 3xl:mb-8
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
                <h3 className="text-xs md:text-sm xl:text-sm 2xl:text-sm 3xl:text-5xl font-light uppercase tracking-widest mb-2 3xl:mb-8">
                  Address
                </h3>
                <p className="text-sm md:text-base xl:text-xl 2xl:text-2xl 3xl:text-5xl leading-relaxed 3xl:leading-[5.5rem] whitespace-pre-line break-words">
                  {contactInfo.address}
                </p>
              </div>
            )}

            {contactInfo.email && (
              <div>
                <h3 className="text-xs md:text-sm xl:text-sm 2xl:text-sm 3xl:text-5xl font-light uppercase tracking-widest mb-2 3xl:mb-8">
                  Say Hi
                </h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="
                    hover:text-gray-400 block
                    text-sm md:text-base xl:text-xl 2xl:text-2xl 3xl:text-5xl
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
