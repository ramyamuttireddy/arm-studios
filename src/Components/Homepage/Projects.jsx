import React from "react";
import { useNavigate } from "react-router-dom";
import { GoArrowDownRight } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import useFadeInOnScroll from "../../animations/useFadeInOnScroll";

export default function Projects() {
  useFadeInOnScroll(".fade-in");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/allprojects"); // 👈 goes to gallery
  };

  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 xl:py-24 bg-black text-white overflow-hidden fade-in">
      <div className=" px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Header */}
        <div className="flex justify-center  items-center md:flex-row gap-4 md:gap-10 lg:gap-16 xl:gap-20 xl:justify-end xl:items-end  mb-8 md:mb-12 lg:mb-16">
          {/* Number */}
          <div className="text-white text-2xl sm:text-4xl md:text-5xl font-serif italic xl:text-[50px] 2xl:text-[96px] fade-in w-[30%] text-right">
            02
          </div>

          {/* Heading */}
          <div className="border-b-2 w-full md:w-[85%] lg:w-[82%] xl:w-[70%] p-2 flex justify-start">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[100px] 2xl:text-[110px] font-medium border-white pb-2 tracking-wide fade-in">
              OUR PROJECTS
            </h2>
          </div>
        </div>

        {/* 1st container */}
        <div>
          <div className="container m-auto mt-10 md:mt-16 lg:mt-20 xl:mt-[120px] flex flex-col lg:flex-row gap-10 md:gap-12 lg:gap-[60px] fade-in">
            {/* Villa #22 */}
            <div className="cursor-pointer group" onClick={handleClick}>
              <h2 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[36px] font-medium mb-6 md:mb-8">
                Villa #22
              </h2>
              <img
                src="/assets/img/Villa 22.png"
                alt="Villa"
                className="shadow-slate-50 w-full lg:w-[750px] lg:h-[450px] xl:w-[800px] xl:h-[500px] 2xl:w-[858px] 2xl:h-[536px] object-cover"
              />
              <div className="w-[100px] sm:w-[120px] md:w-[134px] h-[30px] sm:h-[32px] md:h-[35px] bg-white mt-3 md:mt-4"></div>
              <div className="flex justify-between border-b pb-3 md:pb-4 lg:pb-6 mt-2">
                <div className="text-base sm:text-lg md:text-xl lg:text-[24px]">
                  <h3>xxxxxxxxxxxxxxx</h3>
                  <h3>Residential</h3>
                </div>
                <div className="text-base sm:text-lg md:text-xl lg:text-[24px]">
                  <p>0000</p>
                </div>
              </div>
            </div>

            {/* Flat Interiors #221 */}
            <div className="cursor-pointer group fade-in" onClick={handleClick}>
              <h2 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[36px] font-medium mb-6 md:mb-8">
                Flat Interiors #221
              </h2>
              <img
                src="/assets/img/Flat Interiors 221.png"
                alt="Flat"
                className="shadow-slate-50 w-full lg:w-[450px] lg:h-[600px] xl:w-[500px] xl:h-[600px] 2xl:w-[536px] 2xl:h-[697px] object-cover"
              />
              <div className="w-[100px] sm:w-[120px] md:w-[134px] h-[30px] sm:h-[32px] md:h-[35px] bg-white mt-3 md:mt-4"></div>
              <div className="flex justify-between border-b pb-3 md:pb-4 lg:pb-6 mt-2">
                <div className="text-base sm:text-lg md:text-xl lg:text-[24px]">
                  <h3>Lorem Ipsum ajdf</h3>
                  <h3>Residential</h3>
                </div>
                <div className="text-base sm:text-lg md:text-xl lg:text-[24px]">
                  <p>0000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd container */}
        <div className="container m-auto w-full h-full mt-12 md:mt-16 lg:mt-20 fade-in">
          <div className="flex flex-col lg:flex-row gap-10 md:gap-12 lg:gap-[60px] fade-in">
            <div className="flex-2">
              {/* Villa #44 */}
              <div
                className="flex flex-col items-start lg:items-end cursor-pointer group"
                onClick={handleClick}
              >
                <div className="ml-0 lg:ml-[20px] 2xl:ml-[50px]">
                  <h2 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[36px] font-medium mb-6 md:mb-8">
                    Villa #44
                  </h2>
                  <img
                    src="/assets/img/Villa 44.png"
                    alt="Villa"
                    className="shadow-slate-50 w-full lg:w-[600px] lg:h-[300px] xl:w-[650px] xl:h-[300px] 2xl:w-[700px] 2xl:h-[394px] object-cover"
                  />
                  <div className="w-[100px] sm:w-[120px] md:w-[134px] h-[30px] sm:h-[32px] md:h-[35px] bg-white mt-3 md:mt-4"></div>
                  <div className="flex justify-between border-b pb-3 md:pb-4 lg:pb-6 mt-2">
                    <div className="text-base sm:text-lg md:text-xl lg:text-[24px]">
                      <h3>xxxxxxxxxxxxxxx</h3>
                      <h3>Residential</h3>
                    </div>
                    <div className="text-base sm:text-lg md:text-xl lg:text-[24px]">
                      <p>0000</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow Button */}
              <div className="mt-10 md:mt-16 lg:mt-[140px] flex justify-center lg:justify-start fade-in">
                <button
                  type="button"
                  className="w-[150px] sm:w-[200px] lg:w-[250px] h-[150px] sm:h-[200px] lg:h-[250px] flex items-center justify-center rounded-full border border-gray-400 hover:border-white hover:bg-white transition duration-300"
                >
                  <GoArrowDownRight
                    size={40}
                    sm={50}
                    lg={60}
                    className="text-gray-400"
                  />
                </button>
              </div>

              {/* Sandalwood Villa */}
              <div className="flex flex-col items-start lg:items-end mt-8 md:mt-12 lg:mt-[50px] fade-in">
                <div
                  className="cursor-pointer group fade-in"
                  onClick={handleClick}
                >
                  <h2 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[36px] font-medium mb-6 md:mb-8">
                    Sandalwood Villa
                  </h2>
                  <img
                    src="/assets/img/Sandalwood Villa.png"
                    alt="Villa"
                    className="shadow-slate-50 w-full lg:w-[450px] lg:h-[600px] 2xl:w-[536px] 2xl:h-[697px] object-cover"
                  />
                  <div className="w-[100px] sm:w-[120px] md:w-[134px] h-[30px] sm:h-[32px] md:h-[35px] bg-white mt-3 md:mt-4"></div>
                  <div className="flex justify-between border-b pb-3 md:pb-4 lg:pb-6 mt-2">
                    <div className="text-base sm:text-lg md:text-xl lg:text-[24px]">
                      <h3>xxxxxxxxxxxxxxx</h3>
                      <h3>Residential</h3>
                    </div>
                    <div className="text-base sm:text-lg md:text-xl lg:text-[24px]">
                      <p>0000</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow Button */}
              <div className="mt-10 md:mt-16 lg:mt-[140px] flex justify-center lg:justify-end fade-in">
                <button
                  type="button"
                  className="w-[150px] sm:w-[200px] lg:w-[250px] h-[150px] sm:h-[200px] lg:h-[250px] flex items-center justify-center rounded-full border border-gray-400 hover:border-white hover:bg-white transition duration-300"
                >
                  <GoArrowDown
                    size={40}
                    sm={50}
                    lg={60}
                    className="text-gray-400"
                  />
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-2">
              {/* Arrow Button */}
              <div className="mt-10 md:mt-16 lg:mt-[140px] flex justify-center lg:justify-end fade-in">
                <button
                  type="button"
                  className="w-[150px] sm:w-[200px] lg:w-[250px] h-[150px] sm:h-[200px] lg:h-[250px] flex items-center justify-center rounded-full border border-gray-400 hover:border-white hover:bg-white transition duration-300"
                >
                  <GoArrowDown
                    size={40}
                    sm={50}
                    lg={60}
                    className="text-gray-400"
                  />
                </button>
              </div>

              {/* Residence #11 */}
              <div className="flex flex-col items-start lg:items-end mt-8 md:mt-12 lg:pt-[40px] fade-in">
                <div
                  className="cursor-pointer group fade-in"
                  onClick={handleClick}
                >
                  <h2 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[36px] font-medium mb-6 md:mb-8">
                    Residence #11
                  </h2>
                  <img
                    src="/assets/img/Residence 11.png"
                    alt="Villa"
                    className="shadow-slate-50 w-full lg:w-[550px] lg:h-[750px] 2xl:w-[615px] 2xl:h-[820px] object-cover"
                  />
                  <div className="w-[100px] sm:w-[120px] md:w-[134px] h-[30px] sm:h-[32px] md:h-[35px] bg-white mt-3 md:mt-4"></div>
                  <div className="flex justify-between border-b pb-3 md:pb-4 lg:pb-6 mt-2">
                    <div className="text-base sm:text-lg md:text-xl lg:text-[24px]">
                      <h3>USA</h3>
                      <h3>Residential</h3>
                    </div>
                    <div className="text-base sm:text-lg md:text-xl lg:text-[24px]">
                      <p>0000</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Residence #622 */}
              <div className="flex flex-col items-start lg:items-end mt-8 md:mt-12 lg:pt-[70px] fade-in">
                <div
                  className="cursor-pointer group fade-in"
                  onClick={handleClick}
                >
                  <h2 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[36px] font-medium mb-6 md:mb-8">
                    Residence #622
                  </h2>
                  <img
                    src="/assets/img/Residence 622.png"
                    alt="Villa"
                    className="shadow-slate-50 w-full lg:w-[550px] lg:h-[700px] 2xl:w-[615px] 2xl:h-[769px] object-cover"
                  />
                  <div className="w-[100px] sm:w-[120px] md:w-[134px] h-[30px] sm:h-[32px] md:h-[35px] bg-white mt-3 md:mt-4"></div>
                  <div className="flex justify-between border-b pb-3 md:pb-4 lg:pb-6 mt-2">
                    <div className="text-base sm:text-lg md:text-xl lg:text-[24px]">
                      <h3>xxxxxxxxxxxxxxx</h3>
                      <h3>Residential</h3>
                    </div>
                    <div className="text-base sm:text-lg md:text-xl lg:text-[24px]">
                      <p>0000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3rd Container */}
        <div className="container m-auto">
          <div className="mt-10 md:mt-16 lg:mt-20 2xl:mt-[90px] flex flex-col lg:flex-row-reverse gap-10 md:gap-12 lg:gap-[60px] fade-in">
            {/* Villa Entrance */}
            <div className="2xl:mt-[100px] fade-in">
              <h2 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[36px] font-medium mb-6 md:mb-8">
                Villa Entrance
              </h2>
              <img
                src="/assets/img/Villa Entrance.png"
                alt="Villa"
                className="shadow-slate-50 w-full lg:w-[750px] lg:h-[450px] 2xl:w-[858px] 2xl:h-[536px] object-cover"
              />
              <div className="w-[100px] sm:w-[120px] md:w-[134px] h-[30px] sm:h-[32px] md:h-[35px] bg-white mt-3 md:mt-4"></div>
              <div className="flex justify-between border-b pb-3 md:pb-4 lg:pb-6 mt-2">
                <div className="text-base sm:text-lg md:text-xl lg:text-[24px]">
                  <h3>xxxxxxxxxxxxxxx</h3>
                  <h3>Residential</h3>
                </div>
                <div className="text-base sm:text-lg md:text-xl lg:text-[24px]">
                  <p>0000</p>
                </div>
              </div>
            </div>

            {/* Private Villa */}
            <div className="fade-in">
              <h2 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[36px] font-medium mb-6 md:mb-8">
                Private Villa
              </h2>
              <img
                src="/assets/img/Private Villa.png"
                alt="Flat"
                className="shadow-slate-50 w-full lg:w-[450px] lg:h-[600px] 2xl:w-[511px] 2xl:h-[681px] object-cover"
              />
              <div className="w-[100px] sm:w-[120px] md:w-[134px] h-[30px] sm:h-[32px] md:h-[35px] bg-white mt-3 md:mt-4"></div>
              <div className="flex justify-between border-b pb-3 md:pb-4 lg:pb-6 mt-2">
                <div className="text-base sm:text-lg md:text-xl lg:text-[24px]">
                  <h3>USA</h3>
                  <h3>Residential</h3>
                </div>
                <div className="text-base sm:text-lg md:text-xl lg:text-[24px]">
                  <p>0000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* circle Container */}

        <div>
          {/* Arrow Button */}
          <div className="mt-10 md:mt-16 lg:mt-[140px] flex justify-center fade-in">
            <button
              type="button"
              className="bg-[#0100FC] w-[150px] sm:w-[200px] lg:w-[250px] h-[150px] sm:h-[200px] lg:h-[250px] 2xl:w-[320px] 2xl:h-[320px] flex items-center justify-center rounded-full   hover:bg-blue transition duration-300 shadow-2xl"
            >
              <div className="text-base sm:text-lg md:text-xl lg:text-[24px]">
                <h3>All projects 48</h3>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
