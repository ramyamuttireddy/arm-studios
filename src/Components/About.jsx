import React from "react";

export default function About() {
  return (
    <div className="bg-black py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-20">
          {/* Left Number */}
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[120px] text-white font-light italic opacity-50">
            02
          </div>

          {/* Right Section */}
          <div className="w-full">
            {/* Title */}
            <div className="border-b border-white pb-6 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-16 mb-8 lg:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[120px] text-white font-medium uppercase">
                About Us
              </h1>
            </div>

            {/* Paragraphs */}
            <div className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] font-medium space-y-6 mb-12 lg:mb-16">
              <p>
                Founded in 2022, ARM STUDIOS offers 15+ years of experience to
                the Deccan Plateaus Community. Recognized for our commitment and
                passion for the Bharatiya Continent, our team continues to make
                contributions as architects, developers, philanthropists! After
                founding the firm, Founding Principal Moganti Deepak welcomed
                Dr.Devakanth Pulicherla in 2023 as the firm’s second principal.
              </p>
              <p>
                In 2025, Naidu Babu Rongali joined as firm Design Principal.
                Today, ARM STUDIOS team of architects, designers and creative
                thinkers brings an unmatched level of diligence and youthful
                enthusiasm to each project.
              </p>
            </div>

            {/* Image + Text Section */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-20">
              {/* Image */}
              <div className="flex-1 flex justify-center lg:justify-start">
                <div className="bg-slate-100 p-4 sm:p-6 md:p-8 lg:p-10 max-w-sm lg:max-w-none">
                  <img src="public/assets/img/Logo.png" alt="ARM Studios Logo" className="w-full h-auto" />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] font-medium space-y-6 mt-6 lg:mt-0">
                <p>
                  ARM STUDIOS LLP. is a high-energy, Bharatiya design firm
                  offering architecture, interior design, planning, and
                  sustainability services to a diverse group of clients. Since
                  our firm has developed expertise in commercial, educational,
                  corporate, healthcare, and civic projects - each with a
                  philosophy of sustainability woven into them.
                </p>
                <p>
                  ARM Studios brings quality assurance to bear on every project
                  we undertake. Your needs drive our vision to design and build
                  excellent spaces for your organization.
                </p>
                <p className="pb-6 sm:pb-8 md:pb-10 lg:pb-12">
                  ARM Studios balances a project’s function, identity, and
                  aesthetics throughout the project in order to provide maximum
                  efficiency to clients. Mindful space planning and attention to
                  the finest detail allows us to provide an optimized schedule
                  while reducing construction costs.
                </p>
              </div>
            </div>

            {/* Stats Box */}
            <div className="flex justify-end mt-12 lg:mt-16 xl:mt-20 2xl:mt-[-100px] 2xl:ml-[-200px]">
              <div className="w-full lg:w-1/2 bg-[#0100fc] px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-14 xl:px-16 xl:py-16">
                {[1, 2, 3, 4].map((_, i) => (
                  <div
                    key={i}
                    className={`flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 ${
                      i !== 3 ? "border-b border-white" : ""
                    }`}
                  >
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px] text-white font-medium">
                      Project {i + 1}
                    </div>
                    <div className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-medium mt-2 sm:mt-0 text-right">
                      <div>it is a long</div>
                      <div>established fact</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}