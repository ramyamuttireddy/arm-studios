import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import "jquery.ripples";

export default function LandingPage() {
  const navigate = useNavigate();
  const landingRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (landingRef.current) {
      $(landingRef.current).ripples({
        resolution: 256,
        perturbance: 0.01,
        dropRadius: 20,
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

  useEffect(() => {
    // ✅ Automatically go to home after 10 seconds
    const timer = setTimeout(() => {
      localStorage.setItem("landingSeen", "true");
      navigate("/home");
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      ref={landingRef}
      className="full-landing-image w-full h-screen relative font-sans overflow-hidden"
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
