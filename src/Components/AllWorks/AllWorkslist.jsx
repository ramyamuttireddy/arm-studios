import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import projects from "./projects";

export default function AllWorksList() {
  const [hoverImage, setHoverImage] = useState(projects[0].image);
  const [visibleCount, setVisibleCount] = useState(11);
  const bgRef = useRef(null);
  const navigate = useNavigate();
  const observerRef = useRef(null);

  // Fade-in effect
  useEffect(() => {
    const items = document.querySelectorAll(".project-item");
    items.forEach((item, index) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(20px)";
      setTimeout(() => {
        item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, index * 80);
    });
  }, [visibleCount]);

  // Hover background image
  useEffect(() => {
    if (!bgRef.current) return;
    const currentImage = hoverImage || projects[0].image;
    bgRef.current.src = currentImage;
    bgRef.current.style.transition = "none";
    bgRef.current.style.transform = "scale(1.2)";
    bgRef.current.style.opacity = "1";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bgRef.current.style.transition =
          "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        bgRef.current.style.transform = "scale(1)";
      });
    });
  }, [hoverImage]);

  // Lazy load
  useEffect(() => {
    if (!observerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCount(projects.length);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* ✅ Background Image (always cover full area) */}
      <img
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full object-contain object-center z-0"
        alt="Background Hover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* Project list */}
      <div className="relative z-[5] w-full min-h-screen overflow-y-auto scrollbar-none flex justify-center items-center">
        <div className="w-full lg:w-[50%] xl:w-[40%] 2xl:w-[30%] m-auto py-5 flex flex-col justify-center items-center gap-2  3xl:gap-10">
          {projects.slice(0, visibleCount).map((project) => (
            <div
              key={project.id}
              className="project-item w-full flex flex-col sm:flex-row justify-between items-start sm:items-center sm:px-2 border-b border-white/20 cursor-pointer group relative "
              onMouseEnter={() => setHoverImage(project.image)}
              onClick={() => navigate(project.link)}
            >
              <div className="font-sans text-lg md:text-[15px] 3xl:text-[40px] font-bold text-white group-hover:text-black transition-colors duration-300">
                {project.title}
              </div>
              <div className="project-year text-base md:text-[15px] 3xl:text-[40px] text-white group-hover:text-black transition-colors duration-300 mt-1 sm:mt-0">
                {project.year}
              </div>
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            </div>
          ))}
          <div ref={observerRef} className="h-1 w-full"></div>
        </div>
      </div>

      {/* Hide scrollbar */}
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
    </div>
  );
}
