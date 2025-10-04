import React from "react";
import { useNavigate } from "react-router-dom";
import useFadeInOnScroll from "../../Animations/UseFadeInScroll";

export default function WorkProjects() {
  useFadeInOnScroll(".fade-in");
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      {/* image section */}
      <div className="flex flex-col justify-center items-center p-4 xl:p-20 2xl:p-40 3xl:gap-[200px]">
        {/* condominium and conceptual section */}
        <div className="flex flex-col gap-20 lg:flex-row lg:gap-12 3xl:gap-[120px]">
          {/* first div */}
          <div className="flex flex-col gap-20 3xl:gap-40">
            <div
              className="fade-in cursor-pointer group flex flex-col gap-5 3xl:gap-20"
              onClick={() => handleClick("/projects/condominium-apartment42")}
            >
              <div className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[25px] 2xl:text-[30px] font-medium   3xl:text-[72px]">
                <h2 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[20px] 2xl:text-[24px] font-medium   3xl:text-[72px]">
                  Condominium Apartment #42
                </h2>
              </div>
              <div>
                <img
                  src="/assets/Featured Works/Condominium-apartment-2.jpeg"
                  alt=""
                  className=""
                />
              </div>
              <div className="flex justify-between border-b pb-3 md:pb-4 lg:pb-6 xl:pb-[35px] 3xl:pb-[88px]">
                <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px]  3xl:text-[50px]">
                   Condominium
                </div>
                <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px] 3xl:text-[50px]">
                  2020
                </div>
              </div>
            </div>
            <div
              className="fade-in lg:pl-20 cursor-pointer group flex flex-col gap-5 3xl:gap-20"
              onClick={() => handleClick("/projects/condominium-karmaResidence")}
            >
              <div className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[20px] 2xl:text-[24px] font-medium   3xl:text-[72px]">
                Condominium Karma Residence
              </div>
              <div>
                <img
                  src="/assets/Featured Works/Condominium-apartment-1.jpeg"
                  alt=""
                />
              </div>
              <div className="flex justify-between border-b pb-3 md:pb-4 lg:pb-6 xl:pb-[35px] 3xl:pb-[88px]">
                <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px]  3xl:text-[50px]">
                  Condominium
                </div>
                <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px]  3xl:text-[50px]">
                  2022
                </div>
              </div>
            </div>
          </div>
          {/* first div */}

          {/* second div */}
          <div className="flex flex-col gap-20 xl:gap-28 ">
            <div className="flex justify-center lg:justify-end">
              <div className="border size-48 rounded-full flex justify-center items-center 3xl:size-96">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 25 25"
                  strokeWidth="0.1"
                  stroke="currentColor"
                  className="size-32 xl:size-36 3xl:size-56"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </svg>
              </div>
            </div>
            <div
              className="fade-in cursor-pointer group flex flex-col gap-5 3xl:gap-20"
              onClick={() => handleClick("/projects/conceptual-skyscraper25")}
            >
              <div className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[20px] 2xl:text-[24px] font-medium   3xl:text-[72px]">
                Conceptual Skyscraper #25
              </div>
              <div>
                <img
                  src="/assets/Featured Works/conceptual-skyscraper-3.jpeg"
                  alt=""
                  className=""
                />
              </div>
              <div className="flex justify-between border-b pb-3 md:pb-4 lg:pb-6 xl:pb-[35px] 3xl:pb-[88px]">
                <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px]  3xl:text-[50px]">
                  Residential
                </div>
                <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px]  3xl:text-[50px]">
                  2021
                </div>
              </div>
            </div>
          </div>
          {/* second div */}
        </div>
        {/* condominium and conceptual section */}

        {/* House for Staycation section */}
        <div className="pt-20 flex flex-col gap-20 lg:flex-row lg:pt-28 lg:pl-20 xl:gap-80 ">
          <div className="flex justify-center items-end lg:pb-20 ">
            <div className="border size-48 rounded-full flex justify-center items-center 3xl:size-96">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 25 25"
                strokeWidth="0.1"
                stroke="currentColor"
                className="size-32 xl:size-36 3xl:size-56"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
            </div>
          </div>
          <div
            className="fade-in cursor-pointer group flex flex-col gap-5 3xl:gap-20"
            onClick={() => handleClick("/projects/housefor-staycation")}
          >
            <div className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[20px] 2xl:text-[24px] font-medium   3xl:text-[72px]">
              House For Staycation
            </div>
            <div>
              <img
                src="/assets/Featured Works/house-for-staycation.jpeg"
                alt=""
                className=""
              />
            </div>
            <div className="flex justify-between border-b pb-3 md:pb-4 lg:pb-6 xl:pb-[35px] 3xl:pb-[88px]">
              <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px]  3xl:text-[50px] flex flex-col 3xl:gap-8">
                
                <h3>Residential</h3>
              </div>
              <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px]  3xl:text-[50px]">
                <p>2021</p>
              </div>
            </div>
          </div>
        </div>
        {/* House for Staycation section */}

        {/* Luxury Gated Community and CAD section */}
        <div className="flex flex-col gap-[45px] pt-20 lg:flex-row lg:pl-16 3xl:gap-[120px] ">
          <div
            className="fade-in cursor-pointer group flex flex-col gap-5 3xl:gap-20"
            onClick={() => handleClick("/projects/luxurygated-community")}
          >
            <div className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[20px] 2xl:text-[24px] font-medium   3xl:text-[72px]">
              Luxury Gated Community
            </div>
            <div>
              <img
                src="/assets/Featured Works/luxury-gated-community.jpeg"
                alt=""
                className=""
              />
            </div>
            <div className="flex justify-between border-b pb-3 md:pb-4 lg:pb-6 xl:pb-[35px] 3xl:pb-[88px]">
              <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px]  3xl:text-[50px] flex flex-col 3xl:gap-8">
                
                <div>Residential</div>
              </div>
              <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px]  3xl:text-[50px]">2022</div>
            </div>
          </div>
          <div
            className="fade-in cursor-pointer group flex flex-col gap-5 3xl:gap-20"
            onClick={() => handleClick("/projects/house-cad")}
          >
            <div className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[20px] 2xl:text-[24px] font-medium   3xl:text-[72px]">
              House CAD
            </div>
            <div>
              <img src="/assets/Featured Works/house-cad.jpeg" alt="" />
            </div>
            <div className="flex justify-between border-b pb-3 md:pb-4 lg:pb-6 xl:pb-[35px] 3xl:pb-[88px]">
              <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px]  3xl:text-[50px] flex flex-col 3xl:gap-8">
                <div>Residential</div>
              </div>
              <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px]  3xl:text-[50px]">2019</div>
            </div>
          </div>
        </div>
        {/* Luxury Gated Community and CAD section */}

        {/* Residence and Mixed Use Apartment section */}
        <div className="flex flex-col gap-[45px] pt-20 lg:flex-row lg:pl-16 3xl:gap-[120px]">
          {/* first div */}
          <div className="flex flex-col gap-20 xl:gap-28">
            <div
              className="fade-in cursor-pointer group flex flex-col gap-5 3xl:gap-20"
              onClick={() => handleClick("/projects/residence7")}
            >
              <div className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[20px] 2xl:text-[24px] font-medium   3xl:text-[72px]">
                Residence #7
              </div>
              <div>
                <img
                  src="/assets/Featured Works/Residence.png"
                  alt=""
                  className=""
                />
              </div>
              <div className="flex justify-between border-b pb-3 md:pb-4 lg:pb-6 xl:pb-[35px] 3xl:pb-[88px]">
                <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px]  3xl:text-[50px]">
                   Residential
                </div>
                <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px]  3xl:text-[50px]">
                  2020
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="border size-48 rounded-full flex justify-center items-center 3xl:size-96">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 25 25"
                  strokeWidth="0.1"
                  stroke="currentColor"
                  className="size-36 xl:size-36 3xl:size-56"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* first div */}

          {/* second div */}
          <div className="flex flex-col gap-20 lg:pt-[70px]">
            <div
              className="fade-in cursor-pointer group flex flex-col gap-5 3xl:gap-20"
              onClick={() => handleClick("/projects/mixeduse-apartment-astralis")}
            >
              <div className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[20px] 2xl:text-[24px] font-medium   3xl:text-[72px]">
                Mixed Use Apartment (Astralis)
              </div>
              <div>
                <img
                  src="/assets/Featured Works/mixed-use-apartment.png"
                  alt=""
                  className=""
                />
              </div>
              <div className="flex justify-between border-b pb-3 md:pb-4 lg:pb-6 xl:pb-[35px] 3xl:pb-[88px]">
                <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px]  3xl:text-[50px]">
                   Residential
                </div>
                <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px]  3xl:text-[50px]">
                  2023
                </div>
              </div>
            </div>
          </div>
          {/* second div */}
        </div>
        {/* Residence and Mixed Use Apartment section */}

        {/* Villa Entrance and farmhouse section */}
        <div className="flex flex-col gap-[45px] pt-20 lg:flex-row lg:pl-16 3xl:gap-[120px]">
          {/* first div */}
          <div className="flex flex-col gap-20">
            <div
              className="fade-in cursor-pointer group flex flex-col gap-5 3xl:gap-20"
              onClick={() => handleClick("/projects/villaentrance")}
            >
              <div className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[20px] 2xl:text-[24px] font-medium   3xl:text-[72px]">
                Villa Entrance
              </div>
              <div>
                <img
                  src="/assets/Featured Works/villa-entrance.jpeg"
                  alt=""
                  className=""
                />
              </div>
              <div className="flex justify-between border-b pb-3 md:pb-4 lg:pb-6 xl:pb-[35px] 3xl:pb-[88px]">
                <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px]  3xl:text-[50px] flex flex-col 3xl:gap-8">
                  
                  <div> Residential</div>
                </div>
                <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px]  3xl:text-[50px]">
                  2023
                </div>
              </div>
            </div>
            <div
              className="fade-in lg:pl-52 cursor-pointer group flex flex-col gap-5 3xl:gap-20"
              onClick={() => handleClick("/projects/forest-resort-gallery")}
            >
              <div className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[20px] 2xl:text-[24px] font-medium   3xl:text-[72px]">
                Forest Resort
              </div>
              <div>
                <img
                  src="/assets/Featured Works/forest-resort.jpeg"
                  alt=""
                  className=""
                />
              </div>
              <div className="flex justify-between border-b pb-3 md:pb-4 lg:pb-6 xl:pb-[35px] 3xl:pb-[88px]">
                <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px]  3xl:text-[50px] flex flex-col 3xl:gap-8">
                  
                  <div> Hospitality</div>
                </div>
                <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px]  3xl:text-[50px]">
                  2023
                </div>
              </div>
            </div>
          </div>
          {/* first div */}

          {/* second div */}
          <div className="flex flex-col gap-20 xl:gap-28">
            <div className="flex justify-center lg:justify-end">
              <div className="border size-48 rounded-full flex justify-center items-center 3xl:size-96">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 25 25"
                  strokeWidth="0.1"
                  stroke="currentColor"
                  className="size-32 xl:size-36 3xl:size-56"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
                  />
                </svg>
              </div>
            </div>
            <div
              className="fade-in cursor-pointer group flex flex-col gap-5 3xl:gap-20"
              onClick={() => handleClick("/projects/farmhouse")}
            >
              <div className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[20px] 2xl:text-[24px] font-medium   3xl:text-[72px]">
                Farmhouse
              </div>
              <div>
                <img
                  src="/assets/Featured Works/farmhouse.jpeg"
                  alt=""
                  className=""
                />
              </div>
              <div className="flex justify-between border-b pb-3 md:pb-4 lg:pb-6 xl:pb-[35px] 3xl:pb-[88px]">
                <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px]  3xl:text-[50px] flex flex-col 3xl:gap-8">
                  
                  <div> Residential</div>
                </div>
                <div className="text-base sm:text-lg md:text-xl lg:text-[15px] 2xl:text-[20px]  3xl:text-[50px]">
                  2016
                </div>
              </div>
            </div>
          </div>
          {/* second div */}
        </div>
        {/* Villa Entrance and farmhouse section */}
      </div>
      {/* image section */}
    </div>
  );
}
