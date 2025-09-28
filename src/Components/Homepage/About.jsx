function About() {
  return (
    <>
      <div className="  py-12 md:py-16 lg:py-20 xl:py-24 3xl:pt-[200px] 3xl:pb-[200px] bg-black text-white overflow-hidden fade-in flex flex-col justify-center mx-auto sm:w-[100%] h-[80%] lg:w-[100%] 2xl:w-[80%]">
        <div className="px-4 sm:px-1 md:px-8 lg:px-10 xl:px-12">
          <div className="flex gap-[20px] md:gap-[50px] 3xl:gap-[100px]">
            <div className="pt-4 text-4xl font-light italic md:text-5xl md:pt-10 2xl:text-[90px] text-center 3xl:text-[90px]">
              02
            </div>
           {/* Heading */}
          <div className="border-b-2 w-full  p-2 flex justify-start">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[100px] 2xl:text-[110px] font-medium border-white pb-2 tracking-wide fade-in 3xl:text-[220px] 3xl:leading-[1] header-title">
              ABOUT US
            </h2>
          </div>
          </div>

          <div className="abou-text pt-10 pl-[38px] pb-10 text-[16px] font-normal md:pl-[100px] md:pt-16 md:pb-14 lg:pb-34 lg:text-[30px] lg:pb-[134px] 3xl:text-[48px] 3xl:leading-[1.4]">
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

          <div className="flex flex-col gap-[30px] lg:flex-row lg:gap-[20px] 3xl:gap-[100px]">
            <div className="p-[0px_15px]">
              <img
                src="/assets/img/Flat Interiors 221.png"
                alt=""
                className="lg:max-w-[504px] lg:h-[508px] 3xl:max-w-[1000px] 3xl:h-auto"
              />
            </div>
            <div className="pl-[38px] flex flex-col gap-[40px] lg:flex-col-reverse lg:gap-[100px]">
              <div className="project-box bg-[#0100fc] p-[45px_25px] mt-[-70px] lg:ml-[-150px] lg:mr-[80px] lg:w-[700px] 3xl:w-[1400px] 3xl:p-[100px_50px] 3xl:mt-[-90px] 3xl:ml-[-200px]">
                <div className="flex justify-between font-medium border-b border-white pb-[20px]">
                  <div className="text-[16px] lg:text-[36px] 3xl:text-[72px]">Project 3</div>
                  <div className="text-[16px] lg:text-[20px] 3xl:text-[48px]">
                    <div>it is a long</div>
                    <div>established fact</div>
                  </div>
                </div>

                <div className="flex justify-between font-medium border-b border-white pb-[20px] pt-[20px]">
                  <div className="text-[16px] lg:text-[36px] 3xl:text-[72px]">Project 3</div>
                  <div className="text-[16px] lg:text-[20px] 3xl:text-[48px]">
                    <div>it is a long</div>
                    <div>established fact</div>
                  </div>
                </div>

                <div className="flex justify-between font-medium pt-[20px]">
                  <div className="text-[16px] lg:text-[36px] 3xl:text-[72px]">Project 3</div>
                  <div className="text-[16px] lg:text-[20px] 3xl:text-[48px]">
                    <div>it is a long</div>
                    <div>established fact</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-base font-normal pb-[30px] lg:text-[20px] lg:leading-7 about-text 3xl:text-[48px] 3xl:leading-[1.4]">
                <p>
                  ARM STUDIOS LLP. is a high-energy, Bharatiya design firm
                  offering architecture, interior design, planning, and
                  sustainability services to a diverse group of clients. Since
                  our firm has developed expertise in commercial, educational,
                  corporate, healthcare, and civic projects - each with a
                  philosophy of sustainability woven into them
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
    </>
  );
}

export default About;
