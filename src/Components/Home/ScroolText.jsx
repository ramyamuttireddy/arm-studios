import ScrollVelocity from "../../Animations/ScrollVelocity";

export default function ScroolText() {
  return (
    <div className="bg-black py-40 2xl:py-40 flex gap-30">
      <ScrollVelocity
        texts={[
          "DISTRIBUTION & INDUSTRIAL    ATHLETIC & RECREATIONAL",
          "INTERIORS    SENIOR LIVING    CIVIC & CULTURAL",
          "CORPORATE    RELIGIOUS    EDUCATION    HEALTHCARE",
          "HUMAN CENTRIC    ARTWORK    DIORAMA",
        ]}
        velocity={100}
      />
    </div>
  );
}
