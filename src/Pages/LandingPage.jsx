import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import "jquery.ripples";

export default function LandingPage() {
  const navigate = useNavigate();
  const landingRef = useRef(null);

  useEffect(() => {
    if (landingRef.current) {
      $(landingRef.current).ripples({
        resolution: 256,   // exact value you wanted
        perturbance: 0.01, // exact value you wanted
        dropRadius: 20,    // optional: makes ripple more visible
      });
    }

    return () => {
      try {
        $(landingRef.current).ripples("destroy");
      } catch (e) {
        console.log(e);
      }
    };
  }, []);

  const goHome = () => {
    localStorage.setItem("landingSeen", "true");
    navigate("/home");
  };

  return (
    <div
      ref={landingRef}
      className="full-landing-image w-full h-screen relative cursor-pointer font-sans overflow-hidden"
      onClick={goHome}
    >
      {/* Background image applied via CSS */}
      <div className="absolute inset-0"></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Overlay text */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <img
          src="/assets/LandingPage/arm_studio_text.png"
          alt="Landing Page Text"
          className="w-full h-auto max-w-[1693px] 2xl:max-w-[1693px] 3xl:max-w-[3000px]"
        />
      </div>

      <style jsx>{`
        .full-landing-image {
          background: url('https://motionarray.imgix.net/2184130-pGs6kQlCtW-high_0001.jpg?w=660&q=60&fit=max&auto=format')
            no-repeat center center;
          background-size: cover;
        }
      `}</style>
    </div>
  );
}
