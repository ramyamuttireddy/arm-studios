export default function Footer() {
  return (
    <div className="footer-container 3xl:pt-[300px] 3xl:pb-[60px]">
      <div className="relative w-full py-12 md:py-16 lg:py-20 xl:py-24 bg-black text-white overflow-hidden fade-in">
        {/* Header */}
        <div className="flex justify-center items-center md:flex-row gap-4 md:gap-10 lg:gap-16 xl:gap-20 xl:justify-end xl:items-end mb-8 md:mb-12 lg:mb-16">
          {/* Number */}
          <div className="footer-number text-white text-2xl sm:text-4xl md:text-5xl font-serif italic xl:text-[50px] 2xl:text-[96px] fade-in text-right 3xl:text-[192px] 3xl:w-[20%] 3xl:leading-[1]">
            04
          </div>

          {/* Heading */}
          <div className="footer-heading border-b-[1px] w-full md:w-[85%] lg:w-[82%] xl:w-[70%] p-2 flex justify-start lg:mr-10 3xl:w-[75%]">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[100px] 2xl:text-[110px] font-medium border-white pb-2 tracking-wide fade-in 3xl:text-[220px] 3xl:leading-[1.1]">
              LET'S CREATE
            </h2>
          </div>
        </div>

        {/* Social icons Container */}
        <div className="footer-socials w-full md:w-[85%] lg:w-[82%] xl:w-[90%] 2xl:w-[80%] p-2 flex justify-center lg:justify-end xl:justify-end 2xl:justify-end 3xl:w-[90%] 3xl:gap-[60px] 3xl:justify-center 3xl:items-start 3xl:mb-[40px]">
          <div className="flex justify-center md:justify-end font-sans flex-col md:flex-row gap-8 lg:gap-16 xl:gap-24 2xl:gap-40 3xl:gap-[60px]">
            {/* Social */}
            <div className="text-center md:text-left">
              <p className="font-medium text-lg sm:text-xl xl:text-2xl 2xl:text-[24px] mb-2 3xl:text-[48px] 3xl:leading-[1.5]">
                Socials
              </p>
              <div className="text-base sm:text-lg xl:text-xl 2xl:text-[20px] text-gray-300 flex flex-col gap-1 3xl:text-[48px] 3xl:leading-[1.5]">
                <p>Twitter</p>
                <p>Instagram</p>
                <p>Facebook</p>
              </div>
            </div>

            {/* Address */}
            <div className="text-center md:text-left">
              <p className="font-medium text-lg sm:text-xl xl:text-2xl 2xl:text-[24px] mb-2 3xl:text-[48px] 3xl:leading-[1.5]">
                Address
              </p>
              <p className="text-base sm:text-lg xl:text-xl 2xl:text-[20px] text-gray-300 leading-relaxed 3xl:text-[48px] 3xl:leading-[1.5]">
                Manikonda <br /> Bhagyanagar <br /> Bharat
              </p>
            </div>

            {/* Say Hi */}
            <div className="text-center md:text-left">
              <p className="font-medium text-lg sm:text-xl xl:text-2xl 2xl:text-[24px] mb-2 3xl:text-[48px] 3xl:leading-[1.5]">
                Say Hi
              </p>
              <p className="text-base sm:text-lg xl:text-xl 2xl:text-[20px] text-gray-300 3xl:text-[48px] 3xl:leading-[1.5]">
                info@armstudios.design
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="footer-bottom flex justify-end items-end mt-20 xl:ml-40 3xl:w-full 3xl:pt-[40px] 3xl:pb-[40px] 3xl:flex 3xl:justify-center 3xl:items-center 3xl:flex-col">
          <div className="w-[80%] 3xl:text-[36px] 3xl:leading-[1.5] 3xl:text-center border-t-[1px]">
            <div className="text-lg pt-10 pb-20">@armstudios.design</div>
          </div>
        </div>
      </div>
    </div>
  );
}
