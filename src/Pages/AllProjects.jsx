import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";

// Projects data
const projects = [
  {
    id: 1,
    title: "Silence",
    year: "2021",
    image: "https://cdn.cosmos.so/7d47d4e2-0eff-4e2f-9734-9d24a8ba067e?format=jpeg",
  },
  {
    id: 2,
    title: "Resonance",
    year: "2022",
    image: "https://cdn.cosmos.so/5eee2d2d-3d4d-4ae5-96d4-cdbae70a2387?format=jpeg",
  },
  {
    id: 3,
    title: "Essence",
    year: "2022",
    image: "https://cdn.cosmos.so/def30e8a-34b2-48b1-86e1-07ec5c28f225?format=jpeg",
  },
  {
    id: 4,
    title: "Void",
    year: "2023",
    image: "https://cdn.cosmos.so/44d7cb23-6759-49e4-9dc1-acf771b3a0d1?format=jpeg",
  },
  {
    id: 5,
    title: "Presence",
    year: "2023",
    image: "https://cdn.cosmos.so/7712fe42-42ca-4fc5-9590-c89f2db99978?format=jpeg",
  },
];

export default function AllProjects() {
  const [hoverImage, setHoverImage] = useState(projects[0].image);
  const bgRef = useRef(null);
  const navigate = useNavigate();

  // Animate project items on mount
  useEffect(() => {
    const items = document.querySelectorAll(".project-item");
    items.forEach((item, index) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(20px)";
      setTimeout(() => {
        item.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, index * 60);
    });
  }, []);

  // Background zoom effect
  useEffect(() => {
    if (!bgRef.current) return;
    if (!hoverImage) {
      bgRef.current.style.opacity = "0";
    } else {
      bgRef.current.src = hoverImage;
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
    }
  }, [hoverImage]);

  // Every project goes to Gallery
  const handleClick = () => {
    navigate("/gallery");
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      <Header />

      {/* Background Image */}
      <img
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none opacity-0 transition-opacity duration-500"
        alt="Background Hover"
      />

      {/* Color Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 pointer-events-none"></div>

      {/* Projects List */}
      <div
        className="relative z-10 w-full max-w-3xl overflow-y-auto p-6 space-y-4"
        onMouseLeave={() => setHoverImage(projects[0].image)} // Reset to first image on mouse leave
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-item relative flex justify-between items-center py-4 border-b border-white/10 cursor-pointer group"
            onMouseEnter={() => setHoverImage(project.image)}
            onClick={handleClick} // All projects go to Gallery
          >
            <div className="project-title text-2xl sm:text-xl font-bold mix-blend-exclusion">
              {project.title}
            </div>
            <div className="project-year text-xl sm:text-lg mix-blend-exclusion">
              {project.year}
            </div>

            {/* Hover overlay effect */}
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-200"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
