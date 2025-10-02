// src/hooks/useFadeInOnScroll.js
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useFadeInOnScroll(selector = ".fade-in") {
  useEffect(() => {
    const elements = gsap.utils.toArray(selector);

    const animations = elements.map((el) =>
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 50 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse", // optional smooth play/reverse
          },
        }
      )
    );

    return () => {
      // Kill all animations & scroll triggers on unmount
      animations.forEach((anim) => anim.scrollTrigger.kill());
    };
  }, [selector]);
}
