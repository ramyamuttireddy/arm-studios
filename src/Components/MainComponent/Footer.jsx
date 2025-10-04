export default function Footer() {
  return (
    <div className="footer-container 3xl:pt-[300px] 3xl:pb-[60px]">
      <div className="relative w-full py-12 md:py-16 lg:py-20 xl:py-24 bg-black text-white overflow-hidden fade-in flex justify-end">
        
        {/* Wrapper - left aligned */}
        <div className="w-[80%] xl:w-[90%] 2xl:w-[73%] flex flex-col md:flex-row gap-8 md:gap-16 3xl:gap-[100px] justify-start items-start text-left">
          
          {/* Left side - Number */}
          <div className="text-white text-4xl md:text-6xl xl:text-[64px] 2xl:text-[64px] 3xl:text-[192px] font-Cormorant italic leading-[1] fade-in">
            04
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col gap-12 w-full">
            
            {/* Heading */}
            <h2 className="pb-2 footer-heading text-3xl sm:text-5xl lg:text-6xl xl:text-[96px] 2xl:text-[96px] 3xl:text-[150px] font-sans font-medium tracking-wide fade-in leading-[1.1] border-b border-gray-600 lg:pb-[30px] 3xl:pb-[60px]">
              LET'S CREATE
            </h2>

            {/* Socials + Address + Say Hi */}
            <div className="footer-socials w-full flex flex-col md:flex-row flex-wrap gap-12 lg:gap-20 xl:gap-28 2xl:gap-32 3xl:gap-80 lg:mt-[50px] lg:mb-[80px] items-start 3xl:mt-[100px] 3xl:mb-[150px]">
              
              {/* Social */}
              <div>
                <p className="text-xs md:text-sm 2xl:text-sm 3xl:text-5xl 3xl:text-5xl font-light uppercase tracking-widest mb-3 3xl:mb-10">Socials</p>
                <div className="hover:text-gray-400 transition-colors
                      text-sm md:text-base xl:text-xl 2xl:text-2xl 3xl:text-5xl 
                      leading-tight 3xl:mb-8">
                  <p>Twitter</p>
                  <p>Instagram</p>
                  <p>Facebook</p>
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
            <div className="footer-bottom w-full flex justify-start items-start border-t border-gray-600 pt-10 pb-6 3xl:pt-[40px] 3xl:pb-[40px]">
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
