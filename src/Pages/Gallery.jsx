import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import Header from "../Components/Header";

gsap.registerPlugin(Observer);

const slideTitles = [
  "Cosmic Harmony",
  "Astral Journey",
  "Ethereal Vision",
  "Quantum Field",
  "Celestial Path",
  "Cosmic Whisper"
];

const slideImages = [
  "https://cdn.cosmos.so/1d4dbaff-8087-4451-a727-9d3266b573dd?format=jpeg",
  "https://cdn.cosmos.so/67ef01f5-09c8-4117-9199-04ec5323d64f?format=jpeg",
  "https://cdn.cosmos.so/77f73423-0eb7-4eaa-a782-036457985290?format=jpeg",
  "https://cdn.cosmos.so/3dd498a9-169d-4b69-8e2e-df042123c124?format=jpeg",
  "https://cdn.cosmos.so/ca346107-04c8-4241-85e6-f26c8b64c85c?format=jpeg",
  "https://cdn.cosmos.so/7d2c5113-b2d3-4f9d-8215-f46fbb679f31?format=jpeg"
];

export default function Gallery() {
  const slidesRef = useRef([]);
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Counter formatter
  const formatCounter = (i) => String(i + 1).padStart(2, "0");

  const navigate = (dir, targetIndex = null) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const prev = current;
    const next =
      targetIndex !== null
        ? targetIndex
        : dir === 1
        ? current < slideImages.length - 1
          ? current + 1
          : 0
        : current > 0
        ? current - 1
        : slideImages.length - 1;

    if (next === prev) {
      setIsAnimating(false);
      return;
    }

    const prevSlide = slidesRef.current[prev];
    const nextSlide = slidesRef.current[next];

    gsap
      .timeline({
        onStart: () => {
          gsap.set(nextSlide, { autoAlpha: 1 });
          nextSlide.classList.add("z-20"); // slide below header
        },
        onComplete: () => {
          gsap.set(prevSlide, { autoAlpha: 0 });
          nextSlide.classList.remove("z-20");
          setCurrent(next);
          setIsAnimating(false);
        }
      })
      .fromTo(
        nextSlide,
        { scale: 0.1, yPercent: dir === 1 ? 100 : -100 },
        { duration: 0.7, ease: "expo", scale: 0.4, yPercent: 0 }
      )
      .to(nextSlide, { duration: 1, ease: "power4.inOut", scale: 1 }, ">-0.3")
      .to(prevSlide, { duration: 1, ease: "power4.inOut", autoAlpha: 0 }, "<");
  };

  const goToSlide = (index) => {
    if (index !== current) {
      navigate(index > current ? 1 : -1, index);
    }
  };

  // Observer for scroll & drag
  useEffect(() => {
    Observer.create({
      type: "wheel,touch,pointer",
      onUp: () => navigate(1),
      onDown: () => navigate(-1),
      wheelSpeed: -1
    });

    const keyHandler = (e) => {
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
  }, [current, isAnimating]);

  // Heartbeat line animation
  useEffect(() => {
    gsap.to(".heartbeat-line", {
      scaleX: 1.2,
      repeat: -1,
      yoyo: true,
      duration: 0.8,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden font-[TheGoodMonolith]">
      {/* Header stays on top */}
      <div className="relative z-[9999]">
        <Header />
      </div>

      {/* Slides */}
      <div className="absolute inset-0 z-0">
        {slideImages.map((src, i) => (
          <div
            key={i}
            ref={(el) => (slidesRef.current[i] = el)}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      {/* Bottom UI */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[720px] max-w-full flex flex-col items-center z-10">
        <div className="text-xl font-bold mb-8 opacity-90 tracking-wide">
          COSMIC SERIES
        </div>

        {/* Counter */}
        <div className="flex items-center justify-between w-full text-xs mb-6">
          <button
            onClick={() => navigate(-1)}
            className="cursor-pointer opacity-70 hover:opacity-100"
          >
            ⟪
          </button>
          <div className="flex gap-2 items-center">
            <span>{formatCounter(current)}</span>
            <span className="opacity-60">//</span>
            <span>{formatCounter(slideImages.length - 1)}</span>
          </div>
          <button
            onClick={() => navigate(1)}
            className="cursor-pointer opacity-70 hover:opacity-100"
          >
            ⟫
          </button>
        </div>

        {/* Title */}
        <div className="h-8 overflow-hidden mb-4 relative">
          <div className="absolute inset-0 text-base opacity-80 transition-all duration-500">
            {slideTitles[current]}
          </div>
        </div>

        {/* Heartbeat line */}
        <div className="relative w-full h-6 overflow-hidden mb-3 flex justify-center">
          <div className="heartbeat-line w-[80%] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent origin-center" />
        </div>

        {/* Tick Lines */}
        <div className="w-full flex justify-between items-center mb-2">
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} className="w-[2px] h-6 bg-white/70" />
          ))}
        </div>

        {/* Thumbnails */}
        <div className="w-full bg-black/50 flex gap-0">
          {slideImages.map((src, i) => (
            <div
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-[120px] h-20 bg-cover bg-center cursor-pointer transition-opacity ${
                i === current ? "opacity-100" : "opacity-50 hover:opacity-80"
              }`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
