import { ReactNode } from "react";
import { motion } from "framer-motion";
import HeroBackdrop from "@/components/ui/HeroBackdrop";
import { EASE_OUT, WordReveal } from "@/components/motion/Reveal";

interface PageHeroProps {
  label: string;
  title: string;
  /** Trailing words of the title rendered in gold. */
  accent?: string;
  description?: string;
  children?: ReactNode;
}

/** Navy hero banner shared by the inner pages. */
const PageHero = ({ label, title, accent, description, children }: PageHeroProps) => (
  <section className="relative overflow-hidden bg-navy-gradient pt-36 pb-20 md:pt-44 md:pb-28">
    <HeroBackdrop />
    <div className="container-custom relative z-10">
      <div className="max-w-3xl">
        <motion.span
          className="eyebrow mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          {label}
        </motion.span>
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] mb-6">
          <WordReveal text={title} accent={accent} delay={0.1} onMount />
        </h1>
        {description && (
          <motion.p
            className="text-lg md:text-xl text-white/70 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE_OUT }}
          >
            {description}
          </motion.p>
        )}
        {children}
      </div>
    </div>
    <motion.div
      aria-hidden
      className="absolute bottom-0 left-0 right-0 h-px origin-left bg-gradient-to-r from-transparent via-accent/60 to-transparent"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1.4, delay: 0.3, ease: EASE_OUT }}
    />
  </section>
);

export default PageHero;
