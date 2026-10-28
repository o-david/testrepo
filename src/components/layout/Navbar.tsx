import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { logo } from "@/assets";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Practice Areas", path: "/practice" },
  { name: "Our Team", path: "/team" },
  { name: "Blog", path: "/blog" },
  { name: "CSR", path: "/csr" },
  { name: "Contact", path: "/contact" },
];

const isActivePath = (pathname: string, path: string) =>
  path === "/" ? pathname === "/" : pathname.startsWith(path);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const solid = isScrolled || isMobileMenuOpen;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          solid
            ? "bg-navy/85 backdrop-blur-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] border-b border-white/10"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <nav className="container-custom">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-500",
              isScrolled ? "h-20" : "h-20 lg:h-24",
            )}
          >
            {/* Logo */}
            <Link
              to="/"
              className="relative z-10 flex items-center"
              aria-label="O.A. Kolawole & Co. home"
            >
              <img
                src={logo}
                className={cn(
                  "w-auto object-contain transition-all duration-500",
                  isScrolled ? "h-10" : "h-12",
                )}
                alt="O.A. Kolawole & Co."
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur-md">
              {navLinks.map((link) => {
                const active = isActivePath(location.pathname, link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "relative rounded-full px-3 xl:px-4 py-2 text-sm font-medium transition-colors duration-300",
                      active
                        ? "text-accent-foreground"
                        : "text-white/80 hover:text-white",
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-accent"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className="relative">{link.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden xl:block">
              <Link to="/contact" className="btn-gold h-11 px-6 text-sm">
                Free Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-10 lg:hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isMobileMenuOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu (outside the header: its backdrop-filter would trap a fixed child) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-x-0 top-20 bottom-0 z-40 bg-navy-gradient overflow-y-auto"
          >
            <div className="absolute inset-0 bg-grid-gold opacity-[0.05] mask-radial pointer-events-none" />
            <div className="container-custom relative py-8 flex flex-col min-h-full">
              <div className="space-y-1">
                {navLinks.map((link, index) => {
                  const active = isActivePath(location.pathname, link.path);
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                    >
                      <Link
                        to={link.path}
                        className={cn(
                          "group flex items-center justify-between border-b border-white/10 py-4 font-playfair text-2xl",
                          active ? "text-accent" : "text-white",
                        )}
                      >
                        {link.name}
                        <ArrowRight
                          size={20}
                          className="text-accent opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + navLinks.length * 0.05,
                  duration: 0.4,
                }}
                className="mt-auto pt-10 space-y-4"
              >
                <Link to="/contact" className="btn-gold w-full">
                  Free Consultation
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="tel:09022043227"
                  className="flex items-center justify-center gap-2 text-white/70 text-sm"
                >
                  <Phone size={16} className="text-accent" />
                  090 2204 3227
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
