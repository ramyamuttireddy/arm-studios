// src/Animations/UseFadeInScroll.js
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function useFadeInOnScroll(selector = ".fade-in") {
  useEffect(() => {
    // Initialize smooth scrolling
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,           // adjust smoothness
      effects: true,          // enable data-speed and data-lag
      normalizeScroll: true,  // prevent stuck scroll
      ignoreMobileResize: true,
    });

    // Fade-in animations
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
            toggleActions: "play none none reverse",
          },
        }
      )
    );

    return () => {
      animations.forEach((anim) => anim.scrollTrigger.kill());
      smoother.kill();
    };
  }, [selector]);
}
