import React from "react";
import { useNavigate } from "react-router-dom";
import { GoArrowDownRight, GoArrowDown } from "react-icons/go";
import useFadeInOnScroll from "../../Animations/UseFadeInScroll";

export default function OurProjects() {
  useFadeInOnScroll(".fade-in");
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <section className="projects-section relative w-full py-20 md:py-16 lg:py-20 xl:py-10 bg-black text-white overflow-hidden lg:fade-in">
      <div className="px-4 sm:px-6 md:px-2 lg:px-1 xl:px-0">
        {/* Header */}
        <div className="w-full flex flex-col justify-start md:flex-row gap-4 md:gap-10 lg:gap-10 mb-8 md:mb-12 lg:mb-1 3xl:gap-[40px] 3xl:mb-[80px]">
          {/* Number */}
          <div className="w-full lg:w-[30%] 2xl:w-[45%] hero-counter text-white text-2xl sm:text-4xl md:text-5xl italic xl:text-[50px] 2xl:text-[64px] lg:fade-in text-left md:text-right 3xl:text-[180px] 3xl:leading-[180px] font-Cormorant">
            02
          </div>

          {/* Heading */}
          <div className="px-0 flex flex-col w-full xl:w-[100%] 2xl:w-[100%] border-b pb-2">
            <h2 className="hero-headline leading-tight uppercase text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-[75px] 2xl:text-[90px] font-medium 3xl:text-[220px] 3xl:leading-[200px] flex flex-col gap-2">
              OUR PROJECTS
            </h2>
          </div>
        </div>

        <div className="xl:px-16">
          {/* 1st Container */}
          <div>
            <div className="w-full mt-10 md:mt-16 lg:mt-20 xl:mt-[120px] flex flex-col justify-center lg:flex-row gap-10 md:gap-12 lg:gap-[60px] xl:gap-[40px] lg:fade-in 3xl:gap-[100px] 3xl:mt-[240px]">
              {/* Villa #22 */}
              <div
                className="cursor-pointer group flex flex-col gap-6 3xl:gap-20"
                onClick={() => handleClick("/projects/villa22")}
              >
                <h2 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[20px] 2xl:text-[24px] font-medium 3xl:text-[72px]">
                  Villa #22
                </h2>
                <img
                  src="/assets/HomePageImages/Villa 22.png"
                  alt="Villa"
                  className="shadow-slate-50 w-full lg:w-[750px] lg:h-[450px] xl:w-[700px] xl:h-[500px] 2xl:w-[858px] 2xl:h-[536px] object-cover 3xl:w-[1800px] 3xl:h-[1072px] villa22-img"
                />

                <div className="flex justify-between border-b pb-3 md:pb-4 lg:pb-6 xl:pb-[35px] 3xl:pb-[88px]">
                  <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px] 3xl:text-[50px]">
                    <p>Residential</p>
                  </div>
                  <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px] 3xl:text-[50px]">
                    <p>2019</p>
                  </div>
                </div>
              </div>

              {/* Flat Interiors #221 */}
              <div
                className="cursor-pointer group flex flex-col gap-5 3xl:gap-20"
                onClick={() => handleClick("/projects/flatinteriors221")}
              >
                <h2 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[20px] 2xl:text-[24px] font-medium 3xl:text-[72px] villa22-title">
                  Flat Interiors #221
                </h2>
                <img
                  src="/assets/HomePageImages/Flat Interiors 221.png"
                  alt="Flat"
                  className="shadow-slate-50 w-full lg:w-[450px] lg:h-[600px] xl:w-[500px] xl:h-[600px] 2xl:w-[536px] 2xl:h-[697px] object-cover 3xl:w-[1072px] 3xl:h-[1394px] flat221-img"
                />

                <div className="flex justify-between border-b pb-3 md:pb-4 lg:pb-6 xl:pb-[35px] 3xl:pb-[88px]">
                  <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px] 3xl:text-[50px]">
                    <h3>Residential</h3>
                  </div>
                  <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px] 3xl:text-[50px]">
                    <p>2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd Container */}
          <div className="flex flex-col justify-center pt-10 lg:flex-row gap-10 md:gap-12 lg:gap-[40px] lg:fade-in 3xl:gap-[100px] 3xl:p-[100px]">
            <div className="flex flex-col justify-center lg:flex-row gap-10 md:gap-12 lg:gap-[40px] lg:fade-in 3xl:gap-[100px] 3xl:p-[100px]">
              {/* Left Column */}
              <div className="flex flex-col gap-12">
                {/* Villa #44 */}
                <div
                  className="flex flex-col justify-center items-start lg:items-end cursor-pointer group"
                  onClick={() => handleClick("/projects/villa44")}
                >
                  <div className="cursor-pointer group flex flex-col justify-center xl:ml-10 3xl:ml-60 gap-5 3xl:gap-20">
                    <h2 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[20px] 2xl:text-[24px] font-medium 3xl:text-[72px]">
                      Villa #44
                    </h2>
                    <img
                      src="/assets/HomePageImages/Villa 44.png"
                      alt="Villa"
                      className="shadow-slate-50 w-full lg:w-[600px] lg:h-[300px] xl:w-[700px] xl:h-[300px] 2xl:w-[700px] 2xl:h-[394px] object-cover 3xl:w-[1600px] 3xl:h-auto"
                    />

                    <div className="flex justify-between border-b pb-3 md:pb-4 lg:pb-6 xl:pb-[35px] 3xl:pb-[88px]">
                      <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px] 3xl:text-[50px] flex flex-col 3xl:gap-8">
                        <h3>Residential</h3>
                      </div>
                      <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px] 3xl:text-[50px]">
                        <p>2023</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow Button */}
                <div
                  className="mt-10 md:mt-16 lg:mt-40 flex justify-center lg:justify-start"
                  onClick={() => handleClick("/projects/sandalwoodvilla")}
                >
                  <button className="arrow-button flex items-center justify-center rounded-full border border-gray-400 hover:border-white hover:bg-white transition duration-300 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] 2xl:w-[250px] 2xl:h-[250px] 3xl:w-[500px] 3xl:h-[500px] 3xl:m-[100px]">
                    <GoArrowDownRight className="text-gray-400 w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] 2xl:w-[100px] 2xl:h-[100px] 3xl:w-[120px] 3xl:h-[120px]" />
                  </button>
                </div>

                {/* Sandalwood Villa */}
                <div className="flex flex-col items-start lg:items-end mt-8 md:mt-12 lg:fade-in">
                  <div
                    className="cursor-pointer group flex flex-col justify-center xl:ml-10 gap-5 3xl:gap-20"
                    onClick={() => handleClick("/projects/sandalwoodvilla")}
                  >
                    <h2 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[20px] 2xl:text-[24px] font-medium 3xl:text-[72px]">
                      Sandalwood Villa
                    </h2>

                    <img
                      src="/assets/HomePageImages/Sandalwood Villa.png"
                      alt="Villa"
                      className="w-full lg:w-[450px] lg:h-[600px] 2xl:w-[536px] 2xl:h-[697px] object-cover 3xl:w-[1072px] 3xl:h-[1394px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    />

                    <div className="flex justify-between border-b pb-3 md:pb-4 lg:pb-6 xl:pb-[35px] 3xl:pb-[88px]">
                      <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px] 3xl:text-[50px] flex flex-col 3xl:gap-8">
                        <h3>Residential</h3>
                      </div>
                      <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px] 3xl:text-[50px]">
                        <p>2019</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow Button */}
                <div
                  className="mt-10 md:mt-16 lg:mt-40 flex justify-center lg:justify-end"
                  onClick={() => handleClick("/projects/villaentrance")}
                >
                  <button className="arrow-button flex items-center justify-center rounded-full border border-gray-400 hover:border-white hover:bg-white transition duration-300 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] 2xl:w-[250px] 2xl:h-[250px] 3xl:w-[500px] 3xl:h-[500px] 3xl:m-[100px]">
                    <GoArrowDown className="text-gray-400 w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] 2xl:w-[100px] 2xl:h-[100px] 3xl:w-[120px] 3xl:h-[120px]" />
                  </button>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-12">
                {/* Arrow Button */}
                {/* Right Column */}
                <div className="flex flex-col gap-12">
                  {/* Arrow Button */}
                  <div
                    className="mt-10 md:mt-16 lg:mt-40 hidden md:flex justify-center lg:justify-end"
                    onClick={() => handleClick("/projects/residence11")}
                  >
                    <button className="arrow-button flex items-center justify-center rounded-full border border-gray-400 hover:border-white hover:bg-white transition duration-300 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] 2xl:w-[250px] 2xl:h-[250px] 3xl:w-[500px] 3xl:h-[500px] 3xl:m-[100px]">
                      <GoArrowDown className="text-gray-400 w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] 2xl:w-[100px] 2xl:h-[100px] 3xl:w-[120px] 3xl:h-[120px]" />
                    </button>
                  </div>
                </div>

                {/* Residence #11 */}
                <div className="flex flex-col items-start lg:items-end mt-8 md:mt-12 lg:fade-in">
                  <div
                    className="cursor-pointer group flex flex-col gap-5 3xl:gap-20"
                    onClick={() => handleClick("/projects/residence11")}
                  >
                    <h2 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[24px] 2xl:text-[24px] font-medium 3xl:text-[72px]">
                      Residence #11
                    </h2>
                    <img
                      src="/assets/HomePageImages/Residence 11.png"
                      alt="Villa"
                      className="shadow-slate-50 w-full lg:w-[550px] lg:h-[750px] 2xl:w-[615px] 2xl:h-[820px] object-cover 3xl:w-[1200px] 3xl:h-auto"
                    />

                    <div className="flex justify-between border-b pb-3 md:pb-4 lg:pb-6 xl:pb-[35px] 3xl:pb-[88px]">
                      <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px] 3xl:text-[50px] flex flex-col 3xl:gap-8">
                        <h3>USA</h3>
                        <h3>Residential</h3>
                      </div>
                      <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px] 3xl:text-[50px]">
                        <p>2024</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Residence #622 */}
                <div className="flex flex-col items-start lg:items-end mt-8 md:mt-12 lg:fade-in">
                  <div
                    className="cursor-pointer group flex flex-col gap-5 3xl:gap-20"
                    onClick={() => handleClick("/projects/residence622")}
                  >
                    <h2 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[20px] 2xl:text-[24px] font-medium 3xl:text-[72px]">
                      Residence #622
                    </h2>
                    <img
                      src="/assets/HomePageImages/Residence 622.png"
                      alt="Villa"
                      className="shadow-slate-50 w-full lg:w-[550px] lg:h-[700px] 2xl:w-[615px] 2xl:h-[769px] object-cover 3xl:w-[1200px] 3xl:h-auto"
                    />

                    <div className="flex justify-between border-b pb-3 md:pb-4 lg:pb-6 xl:pb-[35px] 3xl:pb-[88px]">
                      <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px] 3xl:text-[50px] flex flex-col 3xl:gap-8">
                        <h3>Residential</h3>
                      </div>
                      <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px] 3xl:text-[50px]">
                        <p>2021</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3rd Container */}
          <div className="third-container flex justify-center w-full lg:[90%] m-auto h-full">
            <div className="mt-10 md:mt-16 lg:mt-20 2xl:mt-[90px] flex flex-col lg:flex-row-reverse gap-10 md:gap-12 lg:gap-[40px] lg:fade-in 3xl:gap-[120px] 3xl:flex-row-reverse justify-center">
              {/* Villa Entrance */}
              <div
                className="cursor-pointer group flex flex-col gap-5 3xl:gap-20"
                onClick={() => handleClick("/projects/villaentrance")}
              >
                <h2 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[20px] 2xl:text-[24px] font-medium 3xl:text-[72px]">
                  Villa Entrance
                </h2>
                <img
                  src="/assets/HomePageImages/Villa Entrance.png"
                  alt="Villa"
                  className="shadow-slate-50 w-full lg:w-[750px] lg:h-[450px] 2xl:w-[858px] 2xl:h-[536px] object-cover 3xl:w-[1600px] 3xl:h-[800px]"
                />
                <div className="flex justify-between border-b pb-3 md:pb-4 lg:pb-6 xl:pb-[35px] 3xl:pb-[88px]">
                  <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px] 3xl:text-[50px] flex flex-col 3xl:gap-8">
                    <h3>Residential</h3>
                  </div>
                  <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px] 3xl:text-[50px]">
                    <p>2023</p>
                  </div>
                </div>
              </div>

              {/* Private Villa */}
              <div
                className="cursor-pointer group flex flex-col gap-5 3xl:gap-20"
                onClick={() => handleClick("/projects/privatevilla")}
              >
                <h2 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[20px] 2xl:text-[24px] font-medium 3xl:text-[72px]">
                  Private Villa
                </h2>
                <img
                  src="/assets/HomePageImages/Private Villa.png"
                  alt="Flat"
                  className="shadow-slate-50 w-full lg:w-[450px] lg:h-[600px] 2xl:w-[511px] 2xl:h-[681px] object-cover 3xl:w-[1200px] 3xl:h-[1400px]"
                />

                <div className="flex justify-between border-b pb-3 md:pb-4 lg:pb-6 xl:pb-[35px] 3xl:pb-[88px]">
                  <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px] 3xl:text-[50px] flex flex-col 3xl:gap-8">
                    <h3>USA</h3>
                    <h3>Residential</h3>
                  </div>
                  <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px] 3xl:text-[50px]">
                    <p>2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Circle Container */}
          <div className="circle-container w-full h-full">
            <div className="mt-10 md:mt-16 lg:mt-[140px] 3xl:mt-[280px] flex justify-center lg:fade-in">
              <button
                type="button"
                className="circle-button bg-[#0100FC] w-[150px] sm:w-[200px] lg:w-[250px] xl:w-[320px] 3xl:w-[700px] h-[150px] sm:h-[200px] lg:h-[250px] xl:h-[320px] 3xl:h-[700px] flex items-center justify-center rounded-full hover:bg-blue transition duration-300 shadow-2xl"
                onClick={() => handleClick("/allworks")}
              >
                <div className="text-base sm:text-lg md:text-xl lg:text-[24px] 3xl:text-[55px] circle-button-text">
                  <h3>All projects 19</h3>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
