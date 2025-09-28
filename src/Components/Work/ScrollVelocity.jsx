import { useRef, useLayoutEffect, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

// Hook to measure element width
function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) setWidth(ref.current.offsetWidth);
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

export const ScrollVelocity = ({ texts = [], velocity = 100, className = "" }) => {
  function VelocityText({ children, baseVelocity = velocity }) {
    const baseX = useMotionValue(0);
    const copyRef = useRef(null);
    const copyWidth = useElementWidth(copyRef);
    const [numCopies, setNumCopies] = useState(2);

    useLayoutEffect(() => {
      if (copyWidth > 0) {
        const screenWidth = window.innerWidth;
        setNumCopies(Math.ceil(screenWidth / copyWidth) + 2); // extra copies
      }
    }, [copyWidth]);

    useAnimationFrame((t, delta) => {
      const moveBy = (baseVelocity * delta) / 1000;
      let currentX = baseX.get() - moveBy;
      if (copyWidth > 0 && currentX <= -copyWidth) currentX += copyWidth;
      baseX.set(currentX);
    });

    const spans = [];
    for (let i = 0; i < numCopies; i++) {
      spans.push(
        <span
          key={i}
          ref={i === 0 ? copyRef : null}
          className="font-Anton flex-shrink-0 px-8 text-2xl md:text-5xl 2xl:text-[150px] italic uppercase text-transparent [-webkit-text-stroke:1px_black] 3xl:text-[200px]"
        >
          {children}
        </span>
      );
    }

    return (
      <div className="relative w-full overflow-hidden">
        <motion.div className="inline-flex whitespace-nowrap" style={{ x: baseX }}>
          {spans}
        </motion.div>
      </div>
    );
  }

  return (
    <section className="w-full overflow-hidden">
      {texts.map((text, index) => (
        <VelocityText key={index} baseVelocity={velocity}>
          {text.toUpperCase()}
        </VelocityText>
      ))}
    </section>
  );
};

export default ScrollVelocity;
