import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Scale } from "lucide-react";
import HeroBackdrop from "@/components/ui/HeroBackdrop";
import CountUp from "@/components/motion/CountUp";
import { EASE_OUT, WordReveal } from "@/components/motion/Reveal";
import { optimizeImage } from "@/lib/utils";

const HERO_IMAGE =
  "https://res.cloudinary.com/dgxl5swen/image/upload/v1769734827/wole_001_bigkzz.jpg";

const stats = [
  { value: "20+", label: "Years Combined Experience" },
  { value: "3", label: "Strategic Locations" },
  { value: "9+", label: "Practice Areas" },
];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-navy-gradient overflow-hidden"
    >
      <HeroBackdrop />

      <div className="container-custom relative z-10 pt-32 pb-24 lg:pt-36">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-16 items-center">
          {/* Content */}
          <motion.div style={{ y: contentY, opacity: fade }} className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-white/80 text-sm font-medium">
                Trusted Legal Excellence Since Founding
              </span>
            </motion.div>

            <h1 className="font-playfair text-[2.6rem] leading-[1.08] sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white mb-7">
              <WordReveal
                text="Trusted Legal Counsel for a"
                accent="Changing World"
                delay={0.15}
                onMount
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE_OUT }}
              className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              We would be honored to represent you and your legal interests. Our
              experienced team provides tailored legal solutions across
              Litigation, Corporate Law, Energy, and Immigration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: EASE_OUT }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/contact" className="btn-gold h-14 px-8">
                Schedule a Consultation
                <ArrowRight size={18} />
              </Link>
              <Link to="/practice" className="btn-outline-light h-14 px-8">
                Our Practice Areas
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85, ease: EASE_OUT }}
              className="grid grid-cols-3 gap-4 sm:gap-6 mt-14 pt-8 border-t border-white/10"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <CountUp
                    value={stat.value}
                    className="block font-playfair text-3xl md:text-4xl font-semibold text-gradient-gold"
                  />
                  <p className="text-white/60 text-xs sm:text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ clipPath: "inset(100% 0% 0% 0% round 1.5rem)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0% round 1.5rem)" }}
              transition={{ duration: 1.3, delay: 0.3, ease: EASE_OUT }}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lift"
            >
              <motion.img
                src={optimizeImage(HERO_IMAGE, 900)}
                alt="The entrance to O.A. Kolawole & Co. chambers, with the scales of justice and firm logo etched on the doors"
                style={{ y: imageY }}
                initial={{ scale: 1.3 }}
                animate={{ scale: 1.15 }}
                transition={{ duration: 1.8, delay: 0.3, ease: EASE_OUT }}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
            </motion.div>

            {/* Decorative rings */}
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full border border-dashed border-accent/40 animate-spin-slow -z-10" />
            <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-3xl bg-accent/20 -z-10" />

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: EASE_OUT }}
              className="absolute -left-12 bottom-14"
            >
              <div className="animate-float flex items-center gap-4 rounded-2xl border border-white/15 bg-navy/70 p-4 pr-6 backdrop-blur-xl shadow-lift">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <MapPin size={22} />
                </span>
                <div>
                  <p className="text-white font-medium">Abuja · Lagos · Jos</p>
                  <p className="text-white/60 text-sm">Serving clients nationwide</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.3, ease: EASE_OUT }}
              className="absolute -right-6 top-12"
            >
              <div className="animate-float [animation-delay:1.5s] flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-lift">
                <Scale size={28} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        aria-hidden
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
        <div className="w-6 h-10 border border-white/25 rounded-full flex justify-center pt-2">
          <span className="w-1 h-2 bg-accent rounded-full animate-scroll-dot" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
