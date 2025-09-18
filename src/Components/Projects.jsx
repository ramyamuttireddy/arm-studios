import React from "react";
import { useNavigate } from "react-router-dom"; // React Router
import AllProjects from "../Pages/AllProjects";

const projects = [
  {
    title: "Villa #22",
    workType: "Residential",
    year: "2023",
    image:
      "https://obys.agency/wp-content/uploads/2022/06/OCHI.png",
  },
  {
    title: "Flat Interiors #221",
    workType: "Residential",
    year: "2022",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQPDVUrwYwioQX1kBXoTQpBg9UrTQKI_8zu0Hetjjt3DKYEqZO-",
  },
  {
    title: "Villa #44",
    workType: "Residential",
    year: "2023",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ0Vhiew4fY_Gk2B_yrA6tVGod1VocPQjG61nJ4_ntIKgCkCJSz",
  },
  {
    title: "Residence #11",
    workType: "Residential",
    year: "2021",
    image:
      "https://obys.agency/wp-content/uploads/2022/11/Showreel-2022-preview-1.jpg",
  },
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-start mb-16">
          <div className="text-gray-400 text-4xl font-serif italic">02</div>
          <h2 className="text-5xl md:text-6xl font-bold border-b-4 border-white pb-2 tracking-wide">
            OUR PROJECTS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative cursor-pointer"
              onClick={() => navigate("/allprojects")} // Go to AllProjects page
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="mt-4 transition-opacity duration-500 opacity-80 group-hover:opacity-100">
                <h3 className="text-2xl md:text-3xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 text-sm md:text-base">{project.workType}</p>
                <p className="text-gray-500 text-xs md:text-sm mt-1">{project.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
