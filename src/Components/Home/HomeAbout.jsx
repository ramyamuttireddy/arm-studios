function HomeAbout() {
  return (
    <div>
      <div className=" w-full xl:w-[80%] 3xl:max-w-[2840px] m-[0_auto] flex flex-col lg:flex-row  justify-center object-contain pt-20 pb-20 3xl:pt-40 3xl:pb-40 font-sans">
        
        {/* Left side -> 02 */}
        <div className="flex justify-center lg:justify-end  ">
          <div className="font-Cormorant  text-4xl font-light italic md:text-5xl  xl:text-[90px] 3xl:text-[90px]">
            02
          </div>
        </div>

        {/* Right side -> About Content */}
        <div className="px-0 sm:px-2 md:px-6 lg:px-8 xl:px-10 flex flex-col">
          
          {/* Heading */}
          <div className="border-b-2 w-full pb-2 mb-6">
            <h2 className="text-2xl font-sans sm:text-4xl md:text-5xl lg:text-5xl xl:text-[96px] 2xl:text-[110px] font-medium border-white tracking-wide fade-in 3xl:text-[220px] 3xl:leading-[1] header-title">
              ABOUT US
            </h2>
          </div>

          {/* First Paragraph */}
          <div className="font-sans pt-10 pb-10 text-[16px] font-normal md:pt-16 md:pb-14 lg:text-[25px] lg:pb-[134px] 3xl:text-[48px] 3xl:leading-[1.4]">
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
          <div className="flex flex-col gap-[30px] lg:flex-row lg:gap-[20px] 3xl:gap-[100px]">
            
            {/* Image */}
            <div className="p-[0px_15px]">
              <img
                src="/assets/HomePageImages/Flat Interiors 221.png"
                alt="ARM Studios Project"
                className="lg:max-w-[504px] lg:h-[508px] 3xl:max-w-[1000px] 3xl:h-auto"
              />
            </div>

            {/* Project box + About text */}
            <div className="pl-[38px] flex flex-col gap-[40px] lg:flex-col-reverse lg:gap-[100px]">
              
              {/* Project Box */}
              <div className=" bg-[#0100fc] p-[45px_25px] mt-[-70px] lg:ml-[-150px] lg:mr-[80px] lg:w-[700px] 3xl:w-[1400px] 3xl:p-[100px_50px] 3xl:mt-[-90px] 3xl:ml-[-200px]">
                <div className="flex justify-between font-medium border-b border-white pb-[20px]">
                  <div className="text-[16px] lg:text-[25px] 3xl:text-[72px]">Project 1</div>
                  <div className="text-[16px] lg:text-[18px] 3xl:text-[48px] text-right">
                    <div>it is a long</div>
                    <div>established fact</div>
                  </div>
                </div>

                <div className="flex justify-between font-medium border-b border-white pb-[20px] pt-[20px]">
                  <div className="text-[16px] lg:text-[25px] 3xl:text-[72px]">Project 2</div>
                  <div className="text-[16px] lg:text-[18px] 3xl:text-[48px] text-right">
                    <div>it is a long</div>
                    <div>established fact</div>
                  </div>
                </div>

                <div className="flex justify-between font-medium pt-[20px]">
                  <div className="text-[16px] lg:text-[25px] 3xl:text-[72px]">Project 3</div>
                  <div className="text-[16px] lg:text-[18px] 3xl:text-[48px] text-right">
                    <div>it is a long</div>
                    <div>established fact</div>
                  </div>
                </div>
              </div>

              {/* About Text */}
              <div className="flex flex-col gap-4 text-base font-normal pb-[30px] lg:text-[18px] lg:leading-7 about-text 3xl:text-[48px] 3xl:leading-[1.4]">
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
