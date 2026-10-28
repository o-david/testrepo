import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

interface CountUpProps {
  /** A display value such as "20+", "1,000+" or "100%". */
  value: string;
  className?: string;
  duration?: number;
}

const NUMBER_PATTERN = /^([^\d]*)([\d,]+)(.*)$/;

/** Counts a stat up from zero the first time it scrolls into view. */
const CountUp = ({ value, className, duration = 2 }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const match = value.match(NUMBER_PATTERN);
  const [display, setDisplay] = useState(
    match && !reduceMotion ? `${match[1]}0${match[3]}` : value,
  );

  useEffect(() => {
    if (!inView || !match || reduceMotion) return;
    const [, prefix, digits, suffix] = match;
    const target = Number(digits.replace(/,/g, ""));
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) =>
        setDisplay(`${prefix}${Math.round(v).toLocaleString("en-US")}${suffix}`),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

export default CountUp;
