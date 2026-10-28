import { motion } from "framer-motion";

/** Animated gold grid and drifting light used behind navy hero sections. */
const HeroBackdrop = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-grid-gold opacity-[0.06] mask-radial" />
    <motion.div
      className="absolute -top-40 -right-32 h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[110px]"
      animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.12, 1] }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute -bottom-56 -left-40 h-[36rem] w-[36rem] rounded-full bg-[hsl(var(--navy-blue)/0.5)] blur-[120px]"
      animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

export default HeroBackdrop;
