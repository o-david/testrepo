import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import CountUp from "@/components/motion/CountUp";
import { EASE_OUT, Reveal, WordReveal } from "@/components/motion/Reveal";
import { optimizeImage } from "@/lib/utils";

const features = [
  "High-quality legal services tailored to unique needs",
  "Building relationships based on trust and mutual respect",
  "Innovative strategies for immediate and long-term goals",
  "Strategic locations: Abuja, Lagos, and Jos",
];

const AboutPreview = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className="section-padding bg-secondary overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative order-2 lg:order-1">
            <motion.div
              initial={{ clipPath: "inset(0% 100% 0% 0% round 1.5rem)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0% round 1.5rem)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: EASE_OUT }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lift"
            >
              <motion.img
                src={optimizeImage(
                  "https://res.cloudinary.com/dgxl5swen/image/upload/v1769734169/okiuuy_ap4qj9.png",
                  1000,
                )}
                alt="Reception at O.A. Kolawole & Co. chambers"
                style={{ y: imageY, scale: 1.18 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5, ease: EASE_OUT }}
              className="absolute -bottom-10 right-4 md:-right-8"
            >
              <div className="animate-float bg-navy-gradient text-white p-6 md:p-7 rounded-2xl shadow-lift border border-white/10">
                <CountUp
                  value="100%"
                  className="block font-playfair text-4xl md:text-5xl font-semibold text-gradient-gold mb-1"
                />
                <p className="text-white/70 text-sm">Client Commitment</p>
              </div>
            </motion.div>
            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-28 h-28 border border-dashed border-accent/50 rounded-3xl -z-10 animate-spin-slow" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="eyebrow mb-5">About Us</span>
            </Reveal>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-6 leading-tight">
              <WordReveal text="A Full-Service Nigerian" accent="Law Firm" />
            </h2>
            <Reveal delay={0.15}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                O.A. Kolawole & Co. is a full-service law firm positioned to
                render high quality legal services tailored to meet the unique
                needs of each client. With a commitment to excellence, ethics, and
                professionalism, we strive to be the trusted legal partner our
                clients deserve.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We are dedicated to building relationships based on trust and
                mutual respect, providing sound advice, effective advocacy, and
                exceptional representation.
              </p>
            </Reveal>

            <ul className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: EASE_OUT }}
                  className="flex items-start gap-3 rounded-xl bg-card/70 border border-border p-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-foreground text-sm leading-relaxed">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Reveal delay={0.3}>
              <Link to="/about" className="btn-gold h-14 px-8">
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
