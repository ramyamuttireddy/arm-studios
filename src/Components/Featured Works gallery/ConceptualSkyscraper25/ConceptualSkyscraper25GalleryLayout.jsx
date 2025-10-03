import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

import img1 from "../../../../public/assets/PROJECTSALLPROJECTS/Villa 22/PNG image 1.png"
import img2 from "../../../../public/assets/PROJECTSALLPROJECTS/Villa 22/PNG image 2.png"
import img3 from "../../../../public/assets/PROJECTSALLPROJECTS/Villa 22/PNG image 3.png"
import img4 from "../../../../public/assets/PROJECTSALLPROJECTS/Villa 22/PNG image 4.png"
import img5 from "../../../../public/assets/PROJECTSALLPROJECTS/Villa 22/PNG image 5.png"
import img6 from "../../../../public/assets/PROJECTSALLPROJECTS/Villa 22/PNG image 6.png"
import img7 from "../../../../public/assets/PROJECTSALLPROJECTS/Villa 22/PNG image 7.png"
import img8 from "../../../../public/assets/PROJECTSALLPROJECTS/Villa 22/PNG image 8.png"
import img9 from "../../../../public/assets/PROJECTSALLPROJECTS/Villa 22/PNG image 9.png"
import img10 from "../../../../public/assets/PROJECTSALLPROJECTS/Villa 22/PNG image 10.png"
import img11 from "../../../../public/assets/PROJECTSALLPROJECTS/Villa 22/PNG image 11.png"
import img12 from "../../../../public/assets/PROJECTSALLPROJECTS/Villa 22/PNG image 12.png"
import img13 from "../../../../public/assets/PROJECTSALLPROJECTS/Villa 22/PNG image 13.png"

const slideData = [
  {id:1, img:img1},
  {id:2, img:img2},
  {id:3, img:img3},
  {id:4, img:img4},
   {id:5, img:img5},
  {id:6, img:img6},
  {id:7, img:img7},
  {id:8, img:img8},
   {id:9, img:img9},
  {id:10, img:img10},
  {id:11, img:img11},
  {id:12, img:img12},
   {id:13, img:img13},
];

export default function ConceptualSkyscraper25GalleryLayout() {
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
            key={slide.id}
            ref={(el) => (slidesRef.current[i] = el)}
            className="absolute inset-0 bg-cover bg-center will-change-transform w-full h-full"
            style={{
              backgroundImage: `url(${slide.img})`,
              opacity: i === current ? 1 : 0,
            }}
          />
        ))}

        {/* Custom Navigation Arrows */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 w-12 h-24 flex items-center justify-center z-10"
        >
          <SlArrowLeft className="text-white text-2xl xl:text-4xl 2xl:text-5xl" />
        </button>
        <button
          onClick={() => navigate(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 w-12 h-24 flex items-center justify-center z-10"
        >
          <SlArrowRight className="text-white text-2xl xl:text-4xl 2xl:text-5xl" />
        </button>
      </div>

      {/* Thumbnails with horizontal scroll */}
      <div className="w-full overflow-x-auto flex gap-2 mt-4 px-2 pb-8 scrollbar-none justify-center">
        {slideData.map((slide, i) => (
          <div
            key={slide.id}
            className="flex flex-col items-center flex-shrink-0 cursor-pointer"
            onClick={() => goToSlide(i)}
          >
            <div
              ref={(el) => (thumbsRef.current[i] = el)}
              className="w-20 h-12 sm:w-24 sm:h-16 md:w-20 md:h-20 3xl:w-60 3xl:h-60 bg-cover bg-center transition-transform transition-opacity"
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

      {/* Tailwind scrollbar hide */}
      <style>
        {`
          .scrollbar-none::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-none {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
}
