import "./main.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="relative w-full py-12 md:py-16 lg:py-20 xl:py-24 bg-black text-white overflow-hidden fade-in">
        {/* Header */}
        <div className="flex justify-center items-center md:flex-row gap-4 md:gap-10 lg:gap-16 xl:gap-20 xl:justify-end xl:items-end mb-8 md:mb-12 lg:mb-16">
          {/* Number */}
          <div className="footer-number text-white text-2xl sm:text-4xl md:text-5xl font-serif italic xl:text-[50px] 2xl:text-[96px] fade-in text-right">
            04
          </div>

          {/* Heading */}
          <div className="footer-heading border-b-[1px] w-full md:w-[85%] lg:w-[82%] xl:w-[70%] p-2 flex justify-start lg:mr-10">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[100px] 2xl:text-[110px] font-medium border-white pb-2 tracking-wide fade-in">
              LET'S CREATE
            </h2>
          </div>
        </div>

        {/* Social icons Container */}
        <div className="footer-socials w-full md:w-[85%] lg:w-[82%] xl:w-[90%] 2xl:w-[80%] p-2 flex justify-center lg:justify-end xl:justify-end 2xl:justify-end">
          <div className="flex justify-center md:justify-end font-sans flex-col md:flex-row gap-8 lg:gap-16 xl:gap-24 2xl:gap-40">
            {/* Social */}
            <div className="text-center md:text-left">
              <p className="font-medium text-lg sm:text-xl xl:text-2xl 2xl:text-[24px] mb-2">
                Socials
              </p>
              <div className="text-base sm:text-lg xl:text-xl 2xl:text-[20px] text-gray-300 flex flex-col gap-1">
                <p>Twitter</p>
                <p>Instagram</p>
                <p>Facebook</p>
              </div>
            </div>

            {/* Address */}
            <div className="text-center md:text-left">
              <p className="font-medium text-lg sm:text-xl xl:text-2xl 2xl:text-[24px] mb-2">
                Address
              </p>
              <p className="text-base sm:text-lg xl:text-xl 2xl:text-[20px] text-gray-300 leading-relaxed">
                Manikonda <br /> Bhagyanagar <br /> Bharat
              </p>
            </div>

            {/* Say Hi */}
            <div className="text-center md:text-left">
              <p className="font-medium text-lg sm:text-xl xl:text-2xl 2xl:text-[24px] mb-2">
                Say Hi
              </p>
              <p className="text-base sm:text-lg xl:text-xl 2xl:text-[20px] text-gray-300">
                info@armstudios.design
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="footer-bottom flex justify-end items-end mt-20 xl:ml-40">
          <div className="w-[80%] border-t-[1px] ">
            <div className="text-lg pt-10 pb-20">@armstudios.design</div>
          </div>
        </div>
      </div>
    </div>
  );
}
