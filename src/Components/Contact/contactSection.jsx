import React from "react";

export default function ContactSection() {
  return (
    <section
      className="relative w-full min-h-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/img/contactus-bg-images.jpg')",
      }}
    >
      <div className="w-[90%] m-auto">
        {/* Top Border & Title */}
        <div className="pt-14 pb-14 lg:pt-[75px] lg:pb-[75px] xl:pt-[90px] xl:pb-[90px] 3xl:pt-32 3xl:pb-32">
          <div className="flex justify-end">
            <div className="border-t w-[70%] border-black">
              <div className="pt-5 text-xl md:text-2xl">Contact us</div>
            </div>
          </div>

          {/* Main Contact Text */}
          <div className="text-black flex flex-col md:gap-3 font-medium text-4xl pt-16 md:pt-20 md:text-5xl xl:text-7xl 2xl:text-8xl 3xl:text-[140px]">
            <div className="pl-10 md:pl-36 xl:pl-72 2xl:pl-[450px]">HELLO,</div>
            <div className="flex flex-col md:gap-3">
              <div>
                MY NAME IS
                <div className="flex justify-end">
                  <div className="border-b w-[60%] md:w-[50%] border-black"></div>
                </div>
              </div>
              <div>
                HERE IS MY EMAIL
                <div className="flex justify-end">
                  <div className="border-b w-[40%] md:w-[30%] border-black"></div>
                </div>
              </div>
              <div>
                I’M LOOKING FOR
                <div className="flex justify-end">
                  <div className="border-b w-[50%] md:w-[40%] border-black"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Send Button */}
          <div className="flex justify-center mt-16">
            <button className="flex justify-center items-center bg-[#0100FC] w-44 h-44 md:w-52 md:h-52 rounded-full hover:bg-blue-500 transition duration-300">
              <span className="text-lg md:text-2xl font-medium text-white">Send</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
