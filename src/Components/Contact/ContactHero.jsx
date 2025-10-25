import React from "react";

export default function ContactHero() {
  return (
    <div>
      <div className="bg-black text-white h-screen w-full mx-auto mb-20">
        <div className="w-[90%] xl:w-[85%] m-auto">
          {/* hero Section */}
          <div className="pt-60 pb-20 2xl:pt-50 2xl:mb-20 3xl:pt-[600px] 3xl:pb-72 ">
            {/* say hii div */}
            <div className="flex flex-col justify-center items-center gap-6 md:gap-3 lg:justify-start lg:items-start">
              {/* say hii and cricle div */}
              <div className="flex flex-col gap-6 md:flex-row md:justify-end md:items-end lg:gap-36 2xl:gap-52 1xl:gap-64">
                {/* say hii text div */}
                <div className="text-4xl font-medium md:text-6xl lg:text-[60px] xl:text-[70px] 2xl:text-[96px] 1xl:text-9xl 3xl:text-[200px]">
                  <div className="flex justify-end pr-4 ">
                    <div>SAY HI TO</div>
                  </div>
                  <div className="pt-3">ARM STUDIOS—</div>
                </div>
                {/* say hii text div */}
                {/* blue circle div */}
                <div className="flex justify-center">
                  <div className="bg-[#0100FC] size-44 lg:size-56 xl:size-50 2xl:size-[250px] 1xl:size-[500px]  3xl:size-[500px] rounded-full text-center flex justify-center items-center shadow-2xl">
                    <div className="text-xl font-medium xl:text-2xl 1xl:text-4xl 3xl:text-6xl">
                      Contact us
                    </div>
                  </div>
                </div>
                {/* blue circle div */}
              </div>
              <div className="font-medium text-2xl md:text-6xl lg:text-[60px] xl:text-[70px] 2xl:text-[96px] 1xl:text-9xl 3xl:text-[200px]">
                info@armstudios.design
              </div>
              {/* say hii and cricle div */}
            </div>
            {/* say hii div */}
            {/* email information div */}
            <div className="pt-20 lg:pt-28 2xl:pr-28 1xl:pr-16 1xl:pt-36 pb-40">
              <div className="md:w-[70%] m-[0px_0px_0px_auto] xl:w-[60%] 2xl:w-[60%]  2xl:m-[0px_0px_0px_auto] 1xl:w-[45%] 1xl:m-[0px_auto] 3xl:w-[40%] ">
                <div className="">
                  <div className="flex justify-between">
                    <div
                      className="text-base font-medium flex flex-col gap-6
                                                          md:text-md xl:gap-10 2xl:text-xl 3xl:text-4xl 3xl:gap-[74px]"
                    >
                      <div>General</div>
                      <div>Projects</div>
                      <div>Press</div>
                      <div>Resumes</div>
                      <div>Phone</div>
                    </div>
                    <div className="text-lg font-medium flex flex-col gap-5 md:text-2xl xl:gap-9 2xl:text-2xl 3xl:text-5xl 3xl:gap-16">
                      <a
                        href="mailto:info@armstudios.design"
                        className="hover:underline hover:text-gray-300 transition"
                      >
                        info@armstudios.design
                      </a>
                      <a
                        href="mailto:inquiry@armstudios.design"
                        className="hover:underline hover:text-gray-300 transition"
                      >
                        inquiry@armstudios.design
                      </a>
                      <a
                        href="mailto:press@armstudios.design"
                        className="hover:underline hover:text-gray-300 transition"
                      >
                        press@armstudios.design
                      </a>
                      <a
                        href="mailto:resumes@armstudio.design"
                        className="hover:underline hover:text-gray-300 transition"
                      >
                        resumes@armstudio.design
                      </a>
                      <a
                        href="tel:+919160933336"
                        className="hover:underline hover:text-gray-300 transition"
                      >
                        +91 9160 933 336
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* email information div */}
          </div>
          {/* hero Section */}
        </div>
      </div>
    </div>
  );
}
