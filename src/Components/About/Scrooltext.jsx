// src/Components/Works/ScrollAbout.js
import ScrollVelocityAbout from "../../Animations/ScrollAboutAnimation";

export default function ScrollText() {
  return (
    <div className="h-[50vh] flex flex-col gap-20 bg-white justify-center items-end">
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
