// src/components/Projects.jsx
import React from "react";

const projects = [
  {
    title: "Villa #22",
    workType: "Residential",
    year: "2023",
    image: "https://scontent.fvtz3-2.fna.fbcdn.net/v/t39.30808-6/470177983_18299929606226203_495389390746194773_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tD2yQx9GMrEQ7kNvwEEiVxM&_nc_oc=AdmfkAv7eZo4zsbneiDNcZRmjd3JN9oqEX1m9AItr1n6CNJ36ZbMK-FCElQMAwQB5Wk&_nc_zt=23&_nc_ht=scontent.fvtz3-2.fna&_nc_gid=_qttOKFibAc8TGxDZhSytw&oh=00_AfaCB7luGhKFUOg-GaNunBY6wKadqhKYbQRgffquGyIErA&oe=68C8CBEC",
  },
  {
    title: "Flat Interiors #221",
    workType: "Residential",
    year: "2022",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQPDVUrwYwioQX1kBXoTQpBg9UrTQKI_8zu0Hetjjt3DKYEqZO-",
  },
  {
    title: "Villa #44",
    workType: "Residential",
    year: "2023",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ0Vhiew4fY_Gk2B_yrA6tVGod1VocPQjG61nJ4_ntIKgCkCJSz",
  },
  {
    title: "Residence #11",
    workType: "Residential",
    year: "2021",
    image: "https://obys.agency/wp-content/uploads/2022/11/Showreel-2022-preview-1.jpg",
  },
];

export default function Projects() {
  return (
    <section className="relative w-full py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex justify-between items-start mb-16">
          <div className="text-gray-400 text-4xl font-serif italic">02</div>
          <h2 className="text-5xl md:text-6xl font-bold border-b-4 border-white pb-2 tracking-wide">
            OUR PROJECTS
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="flex flex-col space-y-16">
            {projects.filter((_, i) => i % 2 === 0).map((project, i) => (
              <div key={i} className="group relative">
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

                {/* Arrow Circle */}
                {i !== projects.filter((_, idx) => idx % 2 === 0).length - 1 && (
                  <div className="flex justify-center mt-8">
                    <div className="w-20 h-20 md:w-24 md:h-24 border-4 border-gray-600 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:border-white">
                      <span className="text-3xl md:text-4xl text-gray-400 group-hover:text-white animate-bounce">↓</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-16 mt-24 md:mt-48">
            {projects.filter((_, i) => i % 2 !== 0).map((project, i) => (
              <div key={i} className="group relative">
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

                {/* Arrow Circle */}
                {i !== projects.filter((_, idx) => idx % 2 !== 0).length - 1 && (
                  <div className="flex justify-center mt-8">
                    <div className="w-20 h-20 md:w-24 md:h-24 border-4 border-gray-600 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:border-white">
                      <span className="text-3xl md:text-4xl text-gray-400 group-hover:text-white animate-bounce">↓</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
