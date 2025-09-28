import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  { id: 1, title: "Villa #22", year: "2020", image: "https://cdn.cosmos.so/7d47d4e2-0eff-4e2f-9734-9d24a8ba067e?format=jpeg" },
  { id: 2, title: "Flat Interiors #221", year: "2022", image: "https://cdn.cosmos.so/5eee2d2d-3d4d-4ae5-96d4-cdbae70a2387?format=jpeg" },
  { id: 3, title: "Villa #44", year: "2019", image: "https://cdn.cosmos.so/def30e8a-34b2-48b1-86e1-07ec5c28f225?format=jpeg" },
  { id: 4, title: "Residence #11", year: "2020", image: "https://cdn.cosmos.so/44d7cb23-6759-49e4-9dc1-acf771b3a0d1?format=jpeg" },
  { id: 5, title: "Sandalwood Villa", year: "2021", image: "https://cdn.cosmos.so/7712fe42-42ca-4fc5-9590-c89f2db99978?format=jpeg" },
  { id: 6, title: "Residence #622", year: "2017", image: "https://cdn.cosmos.so/def30e8a-34b2-48b1-86e1-07ec5c28f225?format=jpeg" },
  { id: 7, title: "Private Villa", year: "2021", image: "https://cdn.cosmos.so/44d7cb23-6759-49e4-9dc1-acf771b3a0d1?format=jpeg" },
  { id: 8, title: "Villa Entrance", year: "2022", image: "https://cdn.cosmos.so/7d47d4e2-0eff-4e2f-9734-9d24a8ba067e?format=jpeg" },
  { id: 9, title: "Condominium Apartment #42", year: "2018", image: "https://cdn.cosmos.so/5eee2d2d-3d4d-4ae5-96d4-cdbae70a2387?format=jpeg" },
  { id: 10, title: "Conceptual Skyscraper #25", year: "2023", image: "https://cdn.cosmos.so/7712fe42-42ca-4fc5-9590-c89f2db99978?format=jpeg" },
  { id: 5, title: "Condominium Karma Residence", year: "2021", image: "https://cdn.cosmos.so/7712fe42-42ca-4fc5-9590-c89f2db99978?format=jpeg" },
  { id: 6, title: "House For Staycation", year: "2017", image: "https://cdn.cosmos.so/def30e8a-34b2-48b1-86e1-07ec5c28f225?format=jpeg" },
  { id: 7, title: "Luxury Gated Community", year: "2021", image: "https://cdn.cosmos.so/44d7cb23-6759-49e4-9dc1-acf771b3a0d1?format=jpeg" },
  { id: 8, title: "House CAD", year: "2022", image: "https://cdn.cosmos.so/7d47d4e2-0eff-4e2f-9734-9d24a8ba067e?format=jpeg" },
  { id: 9, title: "Residence #7", year: "2018", image: "https://cdn.cosmos.so/5eee2d2d-3d4d-4ae5-96d4-cdbae70a2387?format=jpeg" },
  { id: 10, title: "Mixed Use Apartment (Astralis)", year: "2023", image: "https://cdn.cosmos.so/7712fe42-42ca-4fc5-9590-c89f2db99978?format=jpeg" },
  { id: 11, title: "Villa Entrance", year: "2022", image: "https://cdn.cosmos.so/7d47d4e2-0eff-4e2f-9734-9d24a8ba067e?format=jpeg" },
  { id: 12, title: "Farmhouse", year: "2018", image: "https://cdn.cosmos.so/5eee2d2d-3d4d-4ae5-96d4-cdbae70a2387?format=jpeg" },
  { id: 13, title: "Forest Resort", year: "2023", image: "https://cdn.cosmos.so/7712fe42-42ca-4fc5-9590-c89f2db99978?format=jpeg" },
];

export default function Projects() {
  const [hoverImage, setHoverImage] = useState(projects[0].image);
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
  }, []);

  // Update background image
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

  const handleClick = () => navigate("/gallery");

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">

      {/* Full-width image section */}
      <div className="relative w-full flex-grow flex justify-center items-center py-8 z-10">
        <div className="relative w-full h-auto flex justify-center items-center overflow-hidden">
          {/* Background image */}
          <img
            ref={bgRef}
            className="absolute top-0 left-0 w-full h-full object-cover object-center z-0 transition-transform duration-800 ease-in-out"
            alt="Background Hover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-white/20 z-5"></div>

          {/* Project list */}
          <div className="  z-5 relative z-10 w-full max-w-[1200px] h-auto overflow-y-visible px-4 py-6 flex flex-col gap-4 2xl:mt-40 2xl:mb-20">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-item w-full flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 px-4 sm:px-6 border-b border-white/20 cursor-pointer group relative"
                onMouseEnter={() => setHoverImage(project.image)}
                onClick={handleClick}
              >
                <div className="project-title text-lg sm:text-xl font-bold text-white group-hover:text-black transition-colors duration-300">
                  {project.title}
                </div>
                <div className="project-year text-base sm:text-lg text-white group-hover:text-black transition-colors duration-300 mt-1 sm:mt-0">
                  {project.year}
                </div>
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
