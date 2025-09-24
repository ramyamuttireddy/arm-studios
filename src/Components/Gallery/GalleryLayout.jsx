import React, { useRef, useState } from "react";
import gsap from "gsap";

const slideData = [
  { title: "Cosmic Harmony", img: "https://cdn.cosmos.so/1d4dbaff-8087-4451-a727-9d3266b573dd?format=jpeg" },
  { title: "Astral Journey", img: "https://cdn.cosmos.so/67ef01f5-09c8-4117-9199-04ec5323d64f?format=jpeg" },
  { title: "Ethereal Vision", img: "https://cdn.cosmos.so/77f73423-0eb7-4eaa-a782-036457985290?format=jpeg" },
  { title: "Quantum Field", img: "https://cdn.cosmos.so/3dd498a9-169d-4b69-8e2e-df042123c124?format=jpeg" },
  { title: "Celestial Path", img: "https://cdn.cosmos.so/ca346107-04c8-4241-85e6-f26c8b64c85c?format=jpeg" },
  { title: "Cosmic Whisper", img: "https://cdn.cosmos.so/7d2c5113-b2d3-4f9d-8215-f46fbb679f31?format=jpeg" },
];

export default function GalleryLayout() {
  const slidesRef = useRef([]);
  const thumbsRef = useRef([]);
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const formatCounter = (i) => String(i + 1).padStart(2, "0");

  const goToSlide = (index) => {
    if (index === current || isAnimating) return;
    setIsAnimating(true);

    const prevSlide = slidesRef.current[current];
    const nextSlide = slidesRef.current[index];

    gsap.timeline({
      onComplete: () => {
        setCurrent(index);
        setIsAnimating(false);
      },
    })
      .fromTo(nextSlide, { scale: 0.1, yPercent: 100, autoAlpha: 1 }, { duration: 0.7, scale: 0.4, yPercent: 0, ease: "expo" })
      .to(nextSlide, { duration: 1, scale: 1, ease: "power4.inOut" }, ">-0.3")
      .to(prevSlide, { duration: 1, autoAlpha: 0, ease: "power4.inOut" }, "<");

    // Update thumbnails
    thumbsRef.current.forEach((thumb, i) => {
      gsap.killTweensOf(thumb); // remove previous heartbeat
      if (i === index) {
        thumb.style.opacity = 1;
        gsap.to(thumb, { scale: 1.05, duration: 0.6, repeat: -1, yoyo: true, ease: "power1.inOut" });
      } else {
        thumb.style.opacity = 0.5;
        thumb.style.transform = "scale(1)";
      }
    });
  };

  const navigate = (dir) => {
    let nextIndex = dir === 1 ? current + 1 : current - 1;
    if (nextIndex >= slideData.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = slideData.length - 1;
    goToSlide(nextIndex);
  };

  return (
    <section className="relative w-full min-h-screen bg-[#0100FC] text-white font-sans flex flex-col items-center justify-center p-8">
      
      {/* Main Slides */}
      <div className="relative w-full max-w-screen-xl aspect-video overflow-hidden">
        <div className="absolute inset-0 z-0">
          {slideData.map((slide, i) => (
            <div
              key={i}
              ref={(el) => (slidesRef.current[i] = el)}
              className="absolute inset-0 bg-cover bg-center will-change-transform"
              style={{ backgroundImage: `url(${slide.img})`, opacity: i === current ? 1 : 0 }}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div onClick={() => navigate(-1)} className="absolute left-0 top-0 bottom-0 w-20 flex items-center justify-center cursor-pointer bg-black/30 hover:bg-black/50 transition-colors z-10">
          <span className="text-4xl">{"<"}</span>
        </div>
        <div onClick={() => navigate(1)} className="absolute right-0 top-0 bottom-0 w-20 flex items-center justify-center cursor-pointer bg-black/30 hover:bg-black/50 transition-colors z-10">
          <span className="text-4xl">{">"}</span>
        </div>
      </div>

      {/* Title and Counter */}
      <div className="flex items-center justify-between w-full max-w-screen-xl mt-4 px-2">
        <h2 className="text-xl font-bold opacity-90">{slideData[current].title}</h2>
        <span className="text-sm opacity-70">{formatCounter(current)} / {formatCounter(slideData.length)}</span>
      </div>

      {/* Thumbnails */}
      <div className="w-full max-w-screen-xl flex gap-2 mt-4 z-10 justify-center">
        {slideData.map((slide, i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              ref={(el) => (thumbsRef.current[i] = el)}
              onClick={() => goToSlide(i)}
              className="w-[120px] h-20 bg-cover bg-center cursor-pointer transition-transform transition-opacity"
              style={{ backgroundImage: `url(${slide.img})`, opacity: i === current ? 1 : 0.5 }}
            />
            {/* Small line under thumbnail */}
            <div className={`h-1 w-full mt-1 rounded-full transition-all ${i === current ? "bg-white" : "bg-gray-500"}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
