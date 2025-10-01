import ScrollVelocity from "./ScrollVelocity";

export default function About() {
  return (
    <div className=" h-[60vh] flex flex-col gap-20 bg-white justify-center items-end">
      <div className="border-t border-black mb-4 w-[80%] flex items-end">
        <div className="text-black text-2xl font-bold px-4 py-2  flex">
          Explore more
        </div>
      </div>
      <div>
        <ScrollVelocity
          texts={['About - ']}
          velocity={100}
          className=" text-[150px] font-bold" // big black text
        />
      </div>
    </div>
  );
}
