// src/Components/Works/ScrollAbout.js
import ScrollVelocityAbout from "../../Animations/ScrollAboutAnimation";

export default function ScrollAbout() {
  return (
    <div className="h-[40vh] lg:h-[50vh] flex flex-col gap-20 bg-white justify-center items-end">
      <div className="border-t border-black mb-4 w-[80%] flex items-end">
        <div className="text-black text-2xl font-bold px-4 py-2 flex 3xl:text-[40px]">
          Explore more
        </div>
      </div>
      <div className="w-full">
        <ScrollVelocityAbout
          texts={['About - ']}
          velocity={100}
          className="text-[150px] font-bold" // large black text
        />
      </div>
    </div>
  );
}
