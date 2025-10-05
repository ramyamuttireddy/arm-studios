import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

import img1 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 2.png"
import img2 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 3.png"
import img3 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 4.png"
import img4 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 8.png"
import img5 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 9.png"
import img6 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 10.png"
import img7 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 14.png"
import img8 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 18.png"
import img9 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 19.png"
import img10 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 28.png"
import img11 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 29.png"
import img12 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 30.png"
import img13 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 31.png"
import img14 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 32.png"
import img15 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 36.png"
import img16 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 41.png"
import img17 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 45.png"
import img18 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 46.png"
import img19 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 51.png"
import img20 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 52.png"
import img21 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 53.png"
import img22 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 58.png"
import img23 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 59.png"
import img24 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 61.png"
import img25 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 62.png"
import img26 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 65.png"
import img27 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 66.png"
import img28 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 67.png"
import img29 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 68.png"
import img30 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 69.png"
import img31 from "../../../../public/assets/PROJECTSALLPROJECTS/Forest Resort/PNG image 71.png"



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
   {id:14, img:img14},
  {id:15, img:img15},
   {id:16, img:img16},
  {id:17, img:img17},
  {id:18, img:img18},
  {id:19, img:img19},
   {id:20, img:img20},
  {id:21, img:img21},
  {id:22, img:img22},
  {id:23, img:img23},
  {id:24, img:img24},
  {id:25, img:img25},
  {id:26, img:img26},
  {id:27, img:img27},
   {id:28, img:img28},
  {id:29, img:img29},
  {id:30, img:img30},
  {id:31, img:img31},
  
];

export default function ForestResortGalleryLayout() {
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
     <section className="relative w-full lg:h-screen bg-black text-white flex flex-col items-center justify-center">
      {/* Main Slides */}
      <div className="relative w-full aspect-video overflow-hidden">
        {slideData.map((slide, i) => (
          <div
            key={slide.id}
            ref={(el) => (slidesRef.current[i] = el)}
            className="absolute inset-0 w-full h-full bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.img})`,
              backgroundSize: "contain", // 👈 image full ga kanipistundi
              opacity: i === current ? 1 : 0,
            }}
          />
        ))}

        {/* Custom Navigation Arrows */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2   w-12 h-24 flex items-center justify-center z-10"
        >
          <SlArrowLeft className="text-white text-2xl xl:text-4xl 2xl:text-5xl" />
        </button>
        <button
          onClick={() => navigate(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2   w-12 h-24 flex items-center justify-center z-10"
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
              className="w-10 h-10 sm:w-10 sm:h-10 md:w-15 md:h-15 3xl:w-40 3xl:h-40 bg-cover bg-center transition-transform transition-opacity"
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
