import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // <-- import
import $ from "jquery";
import "jquery.ripples";

export default function LandingPage() {
  const navigate = useNavigate(); // <-- hook

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
    navigate("/homepage"); // <-- use React Router navigation
  };

  return (
    <div
      className="full-landing-image w-full h-screen flex items-center justify-center relative cursor-pointer font-sans"
      onClick={goHome}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Overlay text */}
      <h1 className="relative text-left text-slate-300 font-extrabold tracking-wide drop-shadow-2xl leading-none px-6 text-[40px] sm:text-[60px] md:text-[100px] lg:text-[150px] xl:text-[250px]">
        <div>ARM</div>
        <div>STUDIOS</div>
      </h1>

      {/* Background */}
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
