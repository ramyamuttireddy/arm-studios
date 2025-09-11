import { useEffect } from "react";
import $ from "jquery";
import "jquery.ripples";


export default function LandingPage() {
  useEffect(() => {
    $(".full-landing-image").ripples({
      resolution: 256,
      perturbance: 0.01,
    });

    return () => {
      try {
        $(".full-landing-image").ripples("destroy");
      } catch (e) {
        console.log(e);
      }
    };
  }, []);

  const goHome = () => {
    window.location.href = "/homepage";
  };

  return (
    <div
      className="full-landing-image w-full h-screen flex items-center justify-center relative cursor-pointer"
      onClick={goHome}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Overlay text */}
      <h1
        className="
    relative
    text-left 
    text-slate-300
    font-extrabold 
    tracking-wide 
    drop-shadow-2xl 
    leading-none
    px-6
    text-[40px]        /* phones */
    sm:text-[60px]     /* small tablets */
    md:text-[100px]    /* tablets */
    lg:text-[150px]    /* laptops */
    xl:text-[300px]    /* desktops */
  "
      >
        <div>ARM</div>
        <div>STUDIOS</div>
      </h1>

      {/* Background image */}
      <style jsx>{`
        .full-landing-image {
          background: url("https://www.shutterstock.com/image-illustration/twinkling-glitter-falling-on-flat-600nw-674580574.jpg")
            no-repeat center center;
          background-size: cover;
        }
      `}</style>
    </div>
  );
}
