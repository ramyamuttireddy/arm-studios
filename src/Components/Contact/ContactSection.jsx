import React, { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Optional: disable captcha and use table format
    formData.append("_captcha", "false");
    formData.append("_template", "table");
    formData.append("_subject", "📧 New Contact Form Submission");

    try {
      const response = await fetch(
        "https://formsubmit.co/muttireddyramya9@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
      } else {
        alert("⚠️ Failed to send. Please try again later.");
      }
    } catch (error) {
      console.error("Form submit error:", error);
      alert("⚠️ Something went wrong. Check your internet connection.");
    }
  };

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat mt-60 xl:mt-60 2xl:mt-60"
      style={{ backgroundImage: "url('/assets/contact/contactus-bg-images.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 w-[90%] m-auto py-32">
        <div className="flex justify-end mb-12">
          <div className="border-t w-[70%] border-black">
            <div className="pt-5 text-xl md:text-2xl 2xl:text-3xl 3xl:text-6xl text-white">
              Contact us
            </div>
          </div>
        </div>

        <div className="flex flex-col md:gap-3 font-medium text-md md:text-5xl xl:text-7xl 2xl:text-8xl 3xl:text-[200px] text-white">
          <div className="pl-10 md:pl-36 xl:pl-72 2xl:pl-[450px] 3xl:pl-[600px]">HELLO,</div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col md:gap-6 mt-10">
              <div className="flex flex-wrap gap-6 md:gap-10 items-end">
                <label className="whitespace-nowrap">MY NAME IS</label>
                <input
                  type="text"
                  name="name"
                  className="bg-transparent border-b border-white w-[60%] md:w-[50%] 3xl:w-[40%] text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                  required
                />
              </div>

              <div className="flex flex-wrap gap-6 md:gap-10 items-end">
                <label className="whitespace-nowrap">HERE IS MY EMAIL</label>
                <input
                  type="email"
                  name="email"
                  className="bg-transparent border-b border-white w-[60%] md:w-[40%] 3xl:w-[30%] text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                  required
                />
              </div>

              <div className="flex flex-wrap gap-6 md:gap-10 items-end">
                <label className="whitespace-nowrap">I’M LOOKING FOR</label>
                <input
                  type="text"
                  name="lookingFor"
                  className="bg-transparent border-b border-white w-[60%] md:w-[50%] 3xl:w-[30%] text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                  required
                />
              </div>

              <div className="flex justify-center mt-20">
                <button
                  type="submit"
                  className="flex justify-center items-center bg-[#0100FC] rounded-full w-44 h-44 md:w-52 md:h-52 2xl:w-60 2xl:h-60 3xl:w-[500px] 3xl:h-[500px] hover:bg-blue-500 transition duration-300 shadow-xl"
                >
                  <span className="text-lg md:text-2xl 2xl:text-3xl 3xl:text-6xl font-medium text-white">
                    Send
                  </span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center mt-20">
              <h2 className="text-3xl font-bold text-white">🎉 Thank you!</h2>
              <p className="mt-2 text-white">Your message has been sent. We will contact you soon.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 bg-[#0100FC] text-white px-6 py-2 rounded hover:bg-blue-500 transition"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
