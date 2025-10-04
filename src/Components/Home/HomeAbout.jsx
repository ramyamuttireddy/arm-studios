function HomeAbout() {
  return (
    <div>
      <div className="py-32  w-full flex flex-col p-10  md:flex-row gap-4 md:gap-10 lg:gap-10   mb-8 md:mb-12 lg:mb-1 3xl:gap-[40px] 3xl:mb-[80px]">
        {/* Left side -> 02 */}
        <div className="w-full lg:w-[30%] 2xl:w-[45%] hero-counter text-white text-2xl sm:text-4xl md:text-5xl italic xl:text-[50px] 2xl:text-[64px]
            fade-in text-right 3xl:text-[180px] 3xl:leading-[180px] font-Cormorant">
          <div className="">
            02
          </div>
        </div>

        {/* Right side -> About Content */}
        <div className="px-0   flex flex-col  w-full xl:w-[100%] 2xl:w-[100%]">
          {/* Heading */}
          <div className="border-b-2 w-full pb-2 mb-6">
            <h2 className=" hero-headline leading-tight uppercase text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-[75px] 2xl:text-[90px] font-medium
            3xl:text-[220px] 3xl:leading-[200px] flex flex-col gap-2">
              ABOUT US
            </h2>
          </div>

          {/* First Paragraph */}
          <div className="font-sans pt-10 pb-10 text-[16px] font-normal md:pt-16 md:pb-14 lg:text-[20px] xl:text-[18px] lg:pb-[134px] 3xl:text-[48px] 3xl:leading-[1.4]">
            <p className="pb-4">
              Founded in 2022, ARM STUDIOS offers 15+ years of experience to the
              Deccan Plateaus Community. Recognized for our commitment and
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

          {/* Image + Project Box + About Text */}
          <div className="flex flex-col justify-start gap-[20px] lg:flex-row lg:items-start lg:gap-[20px] 3xl:gap-[100px]">
            {/* Image */}
            <div className="p-[0px_15px]">
              <img
                src="/assets/HomePageImages/Flat Interiors 221.png"
                alt="ARM Studios Project"
                className="lg:max-w-[504px] lg:h-[508px] 3xl:max-w-[1000px] 3xl:h-auto"
              />
            </div>

            {/* Project box + About text */}
            <div className="pl-[10px] flex flex-col justify-start gap-[20px] lg:justify-start lg:gap-[40px]">
              {/* About Text */}
              <div className="flex flex-col justify-start gap-4 text-left font-normal pb-[30px] lg:text-[15px] lg:leading-7 about-text 3xl:text-[48px] 3xl:leading-[1.4]">
                <p>
                  ARM STUDIOS LLP. is a high-energy, Bharatiya design firm
                  offering architecture, interior design, planning, and
                  sustainability services to a diverse group of clients.
                </p>
                <p>
                  ARM Studios brings quality assurance to bear on every project
                  we undertake. Your needs drive our vision to design and build
                  excellent spaces for your organization.
                </p>
                <p>
                  ARM Studios balances a project’s function, identity, and
                  aesthetics throughout the project in order to provide maximum
                  efficiency to clients. Mindful space planning and attention to
                  the finest detail allows us to provide an optimized schedule
                  while reducing construction costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
