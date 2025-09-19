export default function Footer() {
  return (
    <footer className="flex flex-col px-4 lg:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-16 xl:gap-20 justify-end items-end mb-8 md:mb-12 lg:mb-16">
        {/* Number */}
        <div className="text-gray-800 text-3xl sm:text-4xl md:text-5xl xl:text-[50px] font-serif italic fade-in text-right">
          04
        </div>

        {/* Heading */}
        <div className="border-b-2 border-white w-full md:w-[85%] lg:w-[82%] xl:w-[70%] p-2 flex justify-start">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-[100px] 2xl:text-[120px] font-medium pb-2 tracking-wide fade-in">
            LET’S CREATE
          </h2>
        </div>
      </div>
    </footer>
  );
}
