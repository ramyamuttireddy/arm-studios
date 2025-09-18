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

  // Animate menu
  useEffect(() => {
    if (open) {
      gsap.to(menuRef.current, { x: 0, duration: 0.5, ease: "power3.out" });
      gsap.fromTo(
        itemsRef.current,
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, stagger: 0.12, duration: 0.6, ease: "power3.out" }
      );
      gsap.fromTo(
        socialsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power3.out" }
      );
    } else {
      gsap.to(menuRef.current, { x: "-100%", duration: 0.5, ease: "power3.in" });
    }
  }, [open]);

  return (
    <div
      ref={menuRef}
      className="fixed top-0 left-0 w-full md:w-[70%] h-full bg-black z-40 transform -translate-x-full"
      style={{ color: contentColor }}
    >
      <div className="flex h-full gap-60  px-16 py-24">
        {/* Left: Logo + Menu Items */}
        <div className="flex-1 flex flex-col justify-center min-w-[500px]">
          {logoUrl && (
            <div className="mb-16">
              <img src={logoUrl} alt="Logo" className="w-[140px] h-auto object-contain" />
            </div>
          )}
          <div className="flex flex-col space-y-2 uppercase text-[90px] font-bold">
            {items.map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                onClick={() => setOpen(false)}
                className="hover:text-gray-400 transition-colors"
                ref={(el) => (itemsRef.current[idx] = el)}
              >
                {displayItemNumbering && (
                  <span className="mr-6" style={{ color: accentColor }}>
                    {`0${idx + 1}.`}
                  </span>
                )}
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Socials + Contact Info */}
        <div className="flex-1 flex flex-col justify-center items-start pl-24 space-y-12 text-lg">
          {displaySocials && socialItems.length > 0 && (
            <div className="flex flex-col gap-0">
              <h3 className="text-lg font-bold uppercase tracking-widest mb-2">Socials</h3>
              {socialItems.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition-colors "
                  ref={(el) => (socialsRef.current[idx] = el)}
                >
                  {social.label}
                </a>
              ))}
            </div>
          )}

          {contactInfo.address && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest mt-8 mb-2">Address</h3>
              <p>{contactInfo.address}</p>
            </div>
          )}

          {contactInfo.email && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest mt-8 mb-2">Say Hi</h3>
              <a href={`mailto:${contactInfo.email}`} className="hover:text-gray-400">
                {contactInfo.email}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
