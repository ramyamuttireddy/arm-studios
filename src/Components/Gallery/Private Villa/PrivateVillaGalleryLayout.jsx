import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
// FontAwesome Imports
import { SlArrowRight , SlArrowLeft  } from "react-icons/sl";

const slideData = [
  { title: "Cosmic Harmony", img: "https://cdn.cosmos.so/1d4dbaff-8087-4451-a727-9d3266b573dd?format=jpeg" },
  { title: "Astral Journey", img: "https://cdn.cosmos.so/67ef01f5-09c8-4117-9199-04ec5323d64f?format=jpeg" },
  { title: "Ethereal Vision", img: "https://cdn.cosmos.so/77f73423-0eb7-4eaa-a782-036457985290?format=jpeg" },
  { title: "Quantum Field", img: "https://cdn.cosmos.so/3dd498a9-169d-4b69-8e2e-df042123c124?format=jpeg" },
  { title: "Celestial Path", img: "https://cdn.cosmos.so/ca346107-04c8-4241-85e6-f26c8b64c85c?format=jpeg" },
  { title: "Cosmic Whisper", img: "https://cdn.cosmos.so/7d2c5113-b2d3-4f9d-8215-f46fbb679f31?format=jpeg" },
];

export default function PrivateVillaGalleryLayout() {
  const slidesRef = useRef([]);
  const thumbsRef = useRef([]);
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Animate active thumbnail (heartbeat effect)
  useEffect(() => {
    thumbsRef.current.forEach((thumb, i) => {
      gsap.killTweensOf(thumb);
      if (i === current && thumb) {
        gsap.to(thumb, {
          scale: 1.05,
          duration: 0.6,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
        thumb.style.opacity = 1;
      } else if (thumb) {
        thumb.style.opacity = 0.5;
        thumb.style.transform = "scale(1)";
      }
    });
  }, [current]);

  const goToSlide = (index) => {
    if (index === current || isAnimating) return;
    setIsAnimating(true);

    const prevSlide = slidesRef.current[current];
    const nextSlide = slidesRef.current[index];

    gsap
      .timeline({
        onComplete: () => {
          setCurrent(index);
          setIsAnimating(false);
        },
      })
      .fromTo(
        nextSlide,
        { scale: 0.1, yPercent: 100, autoAlpha: 1 },
        { duration: 0.7, scale: 0.4, yPercent: 0, ease: "expo" }
      )
      .to(nextSlide, { duration: 1, scale: 1, ease: "power4.inOut" }, ">-0.3")
      .to(prevSlide, { duration: 1, autoAlpha: 0, ease: "power4.inOut" }, "<");
  };

  const navigate = (dir) => {
    let nextIndex = dir === 1 ? current + 1 : current - 1;
    if (nextIndex >= slideData.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = slideData.length - 1;
    goToSlide(nextIndex);
  };

  return (
    <section className="relative w-full h-[90vh] bg-black text-white flex flex-col items-center justify-center">
      {/* Main Slides */}
      <div className="relative w-full aspect-video overflow-hidden">
        {slideData.map((slide, i) => (
          <div
            key={i}
            ref={(el) => (slidesRef.current[i] = el)}
            className="absolute inset-0 bg-cover bg-center will-change-transform w-full h-full"
            style={{
              backgroundImage: `url(${slide.img})`,
              opacity: i === current ? 1 : 0,
            }}
          />
        ))}

        {/* Custom Navigation Arrows with FontAwesome */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/90 hover:bg-black/70 w-12 h-24 flex items-center justify-center z-10"
        >
          <SlArrowLeft
            className="size-20 xl:size-40 2xl:size-60 3xl:text-[400px] text-white"
            style={{
              WebkitTextStroke: "0.5px black",
              WebkitTextFillColor: "white",
            }}
          />
        </button>
        <button
          onClick={() => navigate(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/90 hover:bg-black/70 w-12 h-24 flex items-center justify-center z-10"
        >
          <SlArrowRight
            className="size-20 xl:size-40 2xl:size-60 3xl:size-[80] text-white"
            style={{
              WebkitTextStroke: "1px black", // border stroke
              WebkitTextFillColor: "white", // inside fill
            }}
          />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="w-full flex gap-2 mt-4 overflow-x-auto px-2 justify-center pb-8">
        {slideData.map((slide, i) => (
          <div
            key={i}
            className="flex flex-col items-center flex-shrink-0 cursor-pointer"
          >
            <div
              ref={(el) => (thumbsRef.current[i] = el)}
              onClick={() => goToSlide(i)}
              className="w-20 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 3xl:w-60 3xl:h-60 bg-cover bg-center transition-transform transition-opacity"
              style={{ backgroundImage: `url(${slide.img})` }}
            />
            <div
              className={`h-[2px] w-full mt-1 rounded-full transition-all ${
                i === current ? "bg-white" : "bg-gray-500"
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
