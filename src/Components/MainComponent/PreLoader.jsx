import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import "jquery.ripples";

export default function LandingPage() {
  const navigate = useNavigate();

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
    navigate("/home");
  };

  return (
    <div
      className="full-landing-image w-full h-screen flex items-center justify-center relative cursor-pointer font-sans"
      onClick={goHome}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Overlay text */}
      <div className="relative text-slate-300 font-extrabold tracking-wide drop-shadow-2xl leading-none px-6 flex justify-center">
        <img
          src="/assets/LandingPage/arm_studio_text.png"
          alt="Landing Page Text"
          className="
            w-full h-auto
            max-w-[1693px]      /* default */
            2xl:max-w-[1693px]   /* 2xl screens */
            3xl:max-w-[3000px]   /* 3xl ultra-wide */
          "
        />
      </div>

      {/* Background */}
      <style jsx>{`
        .full-landing-image {
          background: url("https://motionarray.imgix.net/2184130-pGs6kQlCtW-high_0001.jpg?w=660&q=60&fit=max&auto=format")
            no-repeat center center;
          background-size: cover;
        }
      `}</style>
    </div>
  );
}
