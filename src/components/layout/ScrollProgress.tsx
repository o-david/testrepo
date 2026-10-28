import { motion, useScroll, useSpring } from "framer-motion";

/** Gold reading-progress bar pinned to the top of the viewport. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-accent via-[hsl(42_70%_72%)] to-accent"
    />
  );
};

export default ScrollProgress;
