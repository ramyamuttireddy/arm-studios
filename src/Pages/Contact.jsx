import React from "react";
import Header from "../Components/Header";

export default function Contact() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <section
        id="contacts"
        className="h-screen flex items-center justify-center"
      >
        <h2 className="text-6xl font-bold">Contact Page</h2>
      </section>
    </div>
  );
}
