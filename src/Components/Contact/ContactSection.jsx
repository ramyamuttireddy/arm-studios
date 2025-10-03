import React from "react";

export default function ContactSection() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat mt-40"
      style={{
        backgroundImage: "url('/assets/contact/contactus-bg-images.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 w-[90%] m-auto">
        {/* Top Border & Title */}
        <div className="pt-14 pb-14 lg:pt-[75px] lg:pb-[75px] xl:pt-[90px] xl:pb-[90px] 3xl:pt-40 3xl:pb-40">
          <div className="flex justify-end">
            <div className="border-t w-[70%] border-black">
              <div className="pt-5 text-xl md:text-2xl 2xl:text-3xl 3xl:text-6xl text-white">
                Contact us
              </div>
            </div>
          </div>

          {/* Main Contact Text */}
          <div className="flex flex-col md:gap-3 font-medium text-4xl md:text-5xl xl:text-7xl 2xl:text-8xl 3xl:text-[200px] pt-16 md:pt-20 3xl:pt-40 text-white">
            <div className="pl-10 md:pl-36 xl:pl-72 2xl:pl-[450px] 3xl:pl-[600px]">
              HELLO,
            </div>
            <div className="flex flex-col md:gap-3">
              <div>
                MY NAME IS
                <div className="flex justify-end">
                  <div className="border-b w-[60%] md:w-[50%] 3xl:w-[40%] border-white"></div>
                </div>
              </div>
              <div>
                HERE IS MY EMAIL
                <div className="flex justify-end">
                  <div className="border-b w-[40%] md:w-[30%] 3xl:w-[25%] border-white"></div>
                </div>
              </div>
              <div>
                I’M LOOKING FOR
                <div className="flex justify-end">
                  <div className="border-b w-[50%] md:w-[40%] 3xl:w-[30%] border-white"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Send Button */}
          <div className="flex justify-center mt-16 3xl:mt-32">
            <button className="flex justify-center items-center bg-[#0100FC] rounded-full w-44 h-44 md:w-52 md:h-52 2xl:w-60 2xl:h-60 3xl:w-[500px] 3xl:h-[500px] hover:bg-blue-500 transition duration-300 shadow-xl">
              <span className="text-lg md:text-2xl 2xl:text-3xl 3xl:text-6xl font-medium text-white">
                Send
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
