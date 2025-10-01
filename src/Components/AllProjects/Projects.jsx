import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  { id: 1, title: "Conceptual Skyscraper #25", year: "Residential 2021", image: "https://cdn.cosmos.so/7d47d4e2-0eff-4e2f-9734-9d24a8ba067e?format=jpeg" },
  { id: 2, title: "Condominium Apartment #42", year: "Condominium 2020", image: "https://cdn.cosmos.so/5eee2d2d-3d4d-4ae5-96d4-cdbae70a2387?format=jpeg" },
  { id: 3, title: "Condominium Karma Residence", year: "Condominium 2022", image: "https://cdn.cosmos.so/def30e8a-34b2-48b1-86e1-07ec5c28f225?format=jpeg" },
  { id: 4, title: "Farmhouse (Richmond, USA)", year: "Residential 2016", image: "https://cdn.cosmos.so/44d7cb23-6759-49e4-9dc1-acf771b3a0d1?format=jpeg" },
  { id: 5, title: "Flat Interiors #221", year: "Residential 2020", image: "https://cdn.cosmos.so/7712fe42-42ca-4fc5-9590-c89f2db99978?format=jpeg" },
  { id: 6, title: "Forest Resort ", year: "Hospitality 2023", image: "https://cdn.cosmos.so/def30e8a-34b2-48b1-86e1-07ec5c28f225?format=jpeg" },
  { id: 7, title: "House CAD", year: "Residential 2012", image: "https://cdn.cosmos.so/44d7cb23-6759-49e4-9dc1-acf771b3a0d1?format=jpeg" },
  { id: 8, title: "House for Staycation ", year: "Residential 2021", image: "https://cdn.cosmos.so/7d47d4e2-0eff-4e2f-9734-9d24a8ba067e?format=jpeg" },
  { id: 9, title: "Luxury Gated Community", year: "Residential 2022", image: "https://cdn.cosmos.so/5eee2d2d-3d4d-4ae5-96d4-cdbae70a2387?format=jpeg" },
  { id: 10, title: "Mixed Use Apartment (Astralis)", year: "Residential 2023", image: "https://cdn.cosmos.so/7712fe42-42ca-4fc5-9590-c89f2db99978?format=jpeg" },
  { id: 11, title: "Private Villa", year: "Residential 2023", image: "https://cdn.cosmos.so/7712fe42-42ca-4fc5-9590-c89f2db99978?format=jpeg" },
  { id: 12, title: "Residence #11", year: " Residential 2024", image: "https://cdn.cosmos.so/def30e8a-34b2-48b1-86e1-07ec5c28f225?format=jpeg" },
  { id: 13, title: "Residence #622", year: "Residential 2021", image: "https://cdn.cosmos.so/44d7cb23-6759-49e4-9dc1-acf771b3a0d1?format=jpeg" },
  { id: 14, title: "Residence #7 ", year: "Residential 2020", image: "https://cdn.cosmos.so/7d47d4e2-0eff-4e2f-9734-9d24a8ba067e?format=jpeg" },
  { id: 15, title: "Sandalwood Villa Interiors", year: "Residential 2019", image: "https://cdn.cosmos.so/5eee2d2d-3d4d-4ae5-96d4-cdbae70a2387?format=jpeg" },
  { id: 16, title: "Villa #22", year: "Residential 2019", image: "https://cdn.cosmos.so/7712fe42-42ca-4fc5-9590-c89f2db99978?format=jpeg" },
  { id: 17, title: "Private Villa", year: "Residential 2023", image: "https://cdn.cosmos.so/7712fe42-42ca-4fc5-9590-c89f2db99978?format=jpeg" },
  { id: 18, title: "Villa #44", year: " Residential 2023", image: "https://cdn.cosmos.so/def30e8a-34b2-48b1-86e1-07ec5c28f225?format=jpeg" },
  { id: 19, title: "Villa Entrance", year: "Residential 2023", image: "https://cdn.cosmos.so/44d7cb23-6759-49e4-9dc1-acf771b3a0d1?format=jpeg" },
];

export default function Projects() {
  const [hoverImage, setHoverImage] = useState(projects[0].image);
  const [visibleCount, setVisibleCount] = useState(10); 
  const bgRef = useRef(null);
  const navigate = useNavigate();

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

  // Intersection Observer
  const observerRef = useRef(null);
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
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );
    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleClick = () => navigate("/gallery");

  return (
    <div className="relative w-full h-screen 3xl:h-[60vh] bg-black text-white overflow-hidden">
      {/* Background */}
      <img
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-0 transition-transform duration-800 ease-in-out"
        alt="Background Hover"
      />
      <div className="absolute inset-0 bg-white/20 z-5"></div>

      {/* Scrollable project list */}
      <div className="relative z-10 w-full h-full overflow-y-auto scrollbar-none">
        <div className="w-full lg:w-[80%] xl:w-[60%] mx-auto py-8 flex flex-col gap-4 px-4">
          {projects.slice(0, visibleCount).map((project) => (
            <div
              key={project.id}
              className="project-item w-full flex flex-col  sm:flex-row justify-between items-start sm:items-center py-4 3xl:py-10  px-4 sm:px-6 border-b border-white/20 cursor-pointer group relative"
              onMouseEnter={() => setHoverImage(project.image)}
              onClick={handleClick}
            >
              <div className="font-sans text-lg sm:text-md md:text-[18px] 3xl:text-[40px]  font-bold text-white group-hover:text-black transition-colors duration-300">
                {project.title}
              </div>
              <div className="project-year text-base sm:text-md md:text-[18px] 3xl:text-[40px]  text-white group-hover:text-black transition-colors duration-300 mt-1 sm:mt-0">
                {project.year}
              </div>
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            </div>
          ))}
          <div ref={observerRef} className="h-1 w-full"></div>
        </div>
      </div>

      {/* Tailwind custom scrollbar hide */}
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
