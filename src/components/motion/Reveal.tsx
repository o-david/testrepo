import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  x?: number;
  y?: number;
  duration?: number;
}

/** Fades and slides its children in the first time they scroll into view. */
export const Reveal = ({
  children,
  className,
  delay = 0,
  x = 0,
  y = 28,
  duration = 0.8,
}: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, x, y }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration, delay, ease: EASE_OUT }}
  >
    {children}
  </motion.div>
);

interface WordRevealProps {
  text: string;
  /** Trailing words rendered in the gold gradient. */
  accent?: string;
  className?: string;
  delay?: number;
  /** Animate on mount (heroes) instead of when scrolled into view. */
  onMount?: boolean;
}

/** Headline text that rises into place word by word. */
export const WordReveal = ({
  text,
  accent,
  className,
  delay = 0,
  onMount = false,
}: WordRevealProps) => {
  const words = [
    ...text.split(" ").map((word) => ({ word, accent: false })),
    ...(accent ? accent.split(" ").map((word) => ({ word, accent: true })) : []),
  ];
  const trigger = onMount
    ? { animate: { y: "0%" } }
    : { whileInView: { y: "0%" }, viewport: { once: true, margin: "-40px" } };

  return (
    <span className={cn("block", className)}>
      <span className="sr-only">{accent ? `${text} ${accent}` : text}</span>
      {words.map(({ word, accent: isAccent }, i) => (
        <span key={i} aria-hidden>
          <span className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
            <motion.span
              className={cn("inline-block", isAccent && "text-gradient-gold")}
              initial={{ y: "110%" }}
              {...trigger}
              transition={{ duration: 0.85, delay: delay + i * 0.06, ease: EASE_OUT }}
            >
              {word}
            </motion.span>
          </span>{" "}
        </span>
      ))}
    </span>
  );
};

/** Thin gold rule that draws itself from left to right. */
export const GoldRule = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.span
    aria-hidden
    className={cn("block h-px origin-left bg-gradient-to-r from-accent via-accent/60 to-transparent", className)}
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, delay, ease: EASE_OUT }}
  />
);
