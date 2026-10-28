import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Scale } from "lucide-react";
import Layout from "@/components/layout/Layout";
import HeroBackdrop from "@/components/ui/HeroBackdrop";
import { EASE_OUT } from "@/components/motion/Reveal";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-gradient px-4 pt-24 pb-16">
        <HeroBackdrop />
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT }}
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-accent/40 bg-accent/15"
          >
            <Scale className="h-10 w-10 text-accent" strokeWidth={1.5} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
            className="font-playfair text-8xl md:text-9xl font-semibold text-gradient-gold mb-4"
          >
            404
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: EASE_OUT }}
            className="mb-10 text-xl text-white/70"
          >
            This page could not be found.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE_OUT }}
          >
            <Link to="/" className="btn-gold h-14 px-8">
              <ArrowLeft size={18} />
              Return to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
