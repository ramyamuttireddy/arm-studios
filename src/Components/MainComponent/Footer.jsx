export default function Footer() {
  return (
    <div className="footer-container 3xl:pt-[300px] 3xl:pb-[60px]">
      <div className="relative w-full px-8 md:py-16 lg:py-20 xl:py-24 bg-black text-white overflow-hidden flex justify-end lg:fade-in">
        
        {/* Wrapper - left aligned */}
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-10 lg:gap-10 mb-8 md:mb-12 lg:mb-1 3xl:gap-[40px] 3xl:mb-[80px]">
          
          {/* Left side - Number */}
          <div className="w-full lg:w-[30%] 2xl:w-[45%] hero-counter text-white text-2xl sm:text-4xl md:text-5xl italic xl:text-[50px] 2xl:text-[64px]
            text-left md:text-right 3xl:text-[180px] 3xl:leading-[180px] font-Cormorant lg:fade-in">
            04
          </div>

          {/* Right side - Content */}
          <div className="px-0 flex flex-col w-full xl:w-[100%] 2xl:w-[100%]">
            
            {/* Heading */}
            <h2 className="hero-headline leading-tight uppercase text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-[75px] 2xl:text-[90px] font-medium
            3xl:text-[220px] 3xl:leading-[200px] flex flex-col gap-2 border-b pb-2 lg:fade-in">
              LET'S CREATE
            </h2>

            {/* Socials + Address + Say Hi */}
            <div className="footer-socials w-full flex flex-col md:flex-row flex-wrap gap-12 lg:gap-20 xl:gap-28 2xl:gap-32 3xl:gap-80 mt-[50px] mb-[80px] lg:mt-[50px] lg:mb-[80px] items-start 3xl:mt-[100px] 3xl:mb-[150px] lg:fade-in">
              
              {/* Social */}
              <div>
                <p className="text-xs md:text-sm 2xl:text-sm 3xl:text-5xl font-light uppercase tracking-widest mb-3 3xl:mb-10">Socials</p>
                <div className="hover:text-gray-400 transition-colors
                      text-sm md:text-base xl:text-xl 2xl:text-2xl 3xl:text-5xl 
                      leading-tight 3xl:mb-8">
                  <p>Twitter</p>
                  <p>Instagram</p>
                  <p>LinkedIn</p>
                </div>
              </div>

              {/* Address */}
              <div>
                <p className="text-xs md:text-sm xl:text-sm 2xl:text-sm 3xl:text-5xl font-light uppercase tracking-widest mb-3 3xl:mb-10">Address</p>
                <div className="hover:text-gray-400 transition-colors
                      text-sm md:text-base xl:text-xl 2xl:text-2xl 3xl:text-5xl 
                      leading-tight 3xl:mb-8">
                  <p>Manikonda</p>
                  <p>Bhagyanagar</p>
                  <p>Bharat</p>
                </div>
              </div>

              {/* Say Hi */}
              <div>
                <p className="text-xs md:text-sm xl:text-sm 2xl:text-sm 3xl:text-5xl font-light uppercase tracking-widest mb-3 3xl:mb-10">Say Hi</p>
                <div className="hover:text-gray-400 transition-colors
                      text-sm md:text-base xl:text-xl 2xl:text-2xl 3xl:text-5xl 
                      leading-tight 3xl:mb-8">
                  <p>info@armstudios.design</p>
                </div>
              </div>
            </div>

            {/* Bottom Line */}
            <div className="footer-bottom w-full flex justify-start items-start border-t border-gray-600 pt-10 pb-6 3xl:pt-[40px] 3xl:pb-[40px] lg:fade-in">
              <div className="text-lg xl:text-md 2xl:text-[15px] 3xl:text-[40px] text-gray-400 font-medium">
                @armstudios.design
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
