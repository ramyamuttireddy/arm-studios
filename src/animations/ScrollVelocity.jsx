import { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

// Hook to get the width of an element
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

export const ScrollVelocity = ({
  texts = [],
  velocity = 50, // reduced default velocity
  damping = 50,
  stiffness = 100, // lower stiffness for smoother movement
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 1] }, // lower output for slower scaling
}) => {
  function VelocityText({
    children,
    baseVelocity = velocity,
    damping,
    stiffness,
    numCopies,
    velocityMapping,
  }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);

    const smoothVelocity = useSpring(scrollVelocity, {
      damping: damping ?? 50,
      stiffness: stiffness ?? 100, // smoother
    });

    const velocityFactor = useTransform(
      smoothVelocity,
      velocityMapping?.input || [0, 1000],
      velocityMapping?.output || [0, 1],
      { clamp: true } // clamp to avoid extreme fast movement
    );

    const copyRef = useRef(null);
    const copyWidth = useElementWidth(copyRef);

    function wrap(min, max, v) {
      const range = max - min;
      const mod = (((v - min) % range) + range) % range;
      return mod + min;
    }

    const x = useTransform(baseX, (v) => {
      if (copyWidth === 0) return "0px";
      return `${wrap(-copyWidth, 0, v)}px`;
    });

    const directionFactor = useRef(1);

    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      // use velocityFactor to gently increase/decrease speed
      moveBy *= 1 + velocityFactor.get();

      baseX.set(baseX.get() + moveBy);
    });

    const spans = [];
    for (let i = 0; i < numCopies; i++) {
      spans.push(
        <span
          key={i}
          ref={i === 0 ? copyRef : null}
          className="font-Anton flex-shrink-0 px-10 py-4 text-2xl md:text-5xl xl:text-[96px] italic uppercase text-transparent [-webkit-text-stroke:1px_white] 3xl:text-[200px]"
        >
          {children}
        </span>
      );
    }

    return (
      <div className="relative overflow-hidden">
        <motion.div className="flex whitespace-nowrap" style={{ x }}>
          {spans}
        </motion.div>
      </div>
    );
  }

  return (
    <section>
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          baseVelocity={index % 2 !== 0 ? -velocity : velocity}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
        >
          {text}&nbsp;
        </VelocityText>
      ))}
    </section>
  );
};

export default ScrollVelocity;
