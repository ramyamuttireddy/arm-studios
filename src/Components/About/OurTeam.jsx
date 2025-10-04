function OurTeam() {
  return (
    <>
      <div>
        {/* Images section */}
        <div className="flex justify-end items-end">
          <img
            src="assets/images/about-page-image.jpg"
            alt=""
            className="w-[80%] md:w-[60%] xl:w-[65%]"
          />
        </div>
        {/* Images section */}

        {/* Our Team Section */}
        <div className="pr-5 bg-black text-white lg:pr-12 2xl:pr-20 3xl:pr-36">
          {/* heading section */}
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-10 lg:gap-10 mb-8 md:mb-12 lg:mb-1 3xl:gap-[40px] 3xl:mb-[80px]">
            {/* Counter */}
            <div className="w-[30%] 2xl:w-[45%] hero-counter text-white text-2xl sm:text-4xl md:text-5xl italic xl:text-[50px] 2xl:text-[64px] fade-in text-right 3xl:text-[180px] 3xl:leading-[180px] font-Cormorant">
              02
            </div>

            {/* Heading + Content wrapper */}
            <div className="flex flex-col xl:w-[90%] 2xl:w-[80%]">
              {/* Heading */}
              <div className="border-b-2 w-full pb-2 mb-6">
                <h2 className="hero-headline leading-[0px] uppercase text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-[75px] 2xl:text-[90px] font-medium 3xl:text-[220px] 3xl:leading-[200px] flex flex-col gap-2">
                  Our Team
                </h2>
              </div>

              {/* Content aligned under heading */}
              <div className="pt-14 flex flex-col gap-9 xl:flex-row xl:gap-24 2xl:gap-32 2xl:pt-20">
                <div className="text-2xl font-medium xl:w-[40%]">
                  <p className="pr-0 xl:pr-28">
                    We are a team of like-minded people driven by passion to what we do.
                  </p>
                </div>
                <div className="text-lg font-medium xl:w-[50%]">
                  <p>
                    We are like a family with common goals, views on design and love of burgers. 
                    Every day step by step we create great design future. Our goal is create unique spaces and human experiences. Meet our main players on the design field.
                  </p>
                </div>
              </div>

              <div className="w-full pt-16 flex flex-col lg:flex-row lg:gap-8 xl:gap-[70px]">
            {/* Column 1 */}
            <div className="flex-1 flex flex-col gap-10 md:gap-16 xl:gap-[76px]">
              {/* Image 1 */}
              <div className="flex flex-col gap-4">
                <div className="text-2xl font-medium md:text-4xl lg:text-xl 2xl:text-4xl">
                  Ar. Moganti Deepak
                </div>
                <div className="bg-[#D9D9D9] w-full h-[40vh] md:h-[50vh] lg:h-[50vh] 2xl:h-[60vh] 3xl:h-[50vh]"></div>
                <div className="border-b w-full border-white flex flex-col gap-4 text-base font-medium pb-6 md:flex-row md:justify-between md:text-xl md:pb-9 lg:text-sm xl:text-base 2xl:text-2xl">
                  <div>
                    <div>M.ARCH, PGDUPDL,</div>
                    <div>BIM ARCHITECT</div>
                  </div>
                  <div>BHAGYANAGAR</div>
                </div>
              </div>

              {/* Image 2 */}
              <div className="flex flex-col gap-4">
                <div className="text-2xl font-medium md:text-4xl lg:text-xl 2xl:text-4xl">
                  Ar. Naidu Babu Rongali
                </div>
                <div className="bg-[#D9D9D9] w-full h-[40vh] md:h-[50vh] lg:h-[50vh] 2xl:h-[60vh] 3xl:h-[50vh]"></div>
                <div className="border-b w-full border-white flex flex-col gap-4 text-base font-medium pb-6 md:flex-row md:justify-between md:text-xl md:pb-9 lg:text-sm xl:text-base 2xl:text-2xl">
                  <div>
                    <div>B.ARCH,</div>
                    <div>EXECUTIVE ARCHITECT</div>
                  </div>
                  <div>VIJAYANAGARAM</div>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex-1 flex flex-col gap-10 md:gap-16 xl:gap-[120px]">
              {/* Image 3 */}
              <div className="flex flex-col gap-4">
                <div className="text-2xl font-medium md:text-4xl lg:text-xl 2xl:text-4xl">
                  Dr.Pulicherla Devakanth
                </div>
                <div className="bg-[#D9D9D9] w-full h-[40vh] md:h-[50vh] lg:h-[50vh] 2xl:h-[60vh] 3xl:h-[50vh]"></div>
                <div className="border-b w-full border-white flex flex-col gap-4 text-base font-medium pb-6 md:flex-row md:justify-between md:text-xl md:pb-9 lg:text-sm xl:text-base 2xl:text-2xl">
                  <div>
                    <div>PH.D.,NET,</div>
                    <div>RENOWNED ARTIST</div>
                  </div>
                  <div>AMARAVATHI</div>
                </div>
              </div>

              {/* Image 4 */}
              <div className="flex flex-col gap-4">
                <div className="text-2xl font-medium md:text-4xl lg:text-xl 2xl:text-4xl">
                  Artists
                </div>
                <div className="bg-[#D9D9D9] w-full h-[40vh] md:h-[50vh] lg:h-[50vh] 2xl:h-[60vh] 1xl:h-[50vh]"></div>
                <div className="border-b w-full border-white flex flex-col gap-4 text-base font-medium pb-6 md:flex-row md:justify-between md:text-xl md:pb-9 lg:text-base xl:text-base 2xl:text-2xl">
                  <div>
                    <div>Guild</div>
                  </div>
                  <div>Bharat</div>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
          {/* heading section end */}

          {/* team images section */}
          
          {/* team images section end */}
        </div>
        {/* Our Team Section end */}
      </div>
    </>
  );
}

export default OurTeam;
