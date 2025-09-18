import React from "react";
import Header from "../Components/Header";

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <section
        id="about"
        className="h-screen flex items-center justify-center"
      >
        <h2 className="text-6xl font-bold">About Page</h2>
      </section>
    </div>
  );
}
