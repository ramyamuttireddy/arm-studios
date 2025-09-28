import ScrollVelocity from "../../animations/ScrollVelocity";

export default function ScroolText() {
  return (
    <div className="bg-black py-20">
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
