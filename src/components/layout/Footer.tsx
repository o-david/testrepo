import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight, ArrowUp } from "lucide-react";
import { logo } from "@/assets";
import HeroBackdrop from "@/components/ui/HeroBackdrop";
import { Reveal, WordReveal } from "@/components/motion/Reveal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Practice Areas", path: "/practice" },
    { name: "Our Team", path: "/team" },
    { name: "Articles", path: "/blog" },
    { name: "CSR", path: "/csr" },
    { name: "Contact", path: "/contact" },
  ];

  const practiceAreas = [
    { name: "Litigation & Arbitration", path: "/practice#litigation" },
    { name: "Corporate & Commercial", path: "/practice#corporate" },
    { name: "Energy Law", path: "/practice#energy" },
    { name: "Immigration", path: "/practice#immigration" },
    { name: "Labour & Employment", path: "/practice#labour" },
    { name: "Property Law", path: "/practice#property" },
  ];

  return (
    <footer className="relative bg-navy-gradient text-white/90 overflow-hidden">
      {/* CTA Section */}
      <div className="relative border-b border-white/10">
        <HeroBackdrop />
        <div className="container-custom relative py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <Reveal>
              <span className="eyebrow mb-6">Get in Touch</span>
            </Reveal>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-6xl font-semibold mb-6 leading-tight text-white">
              <WordReveal text="Let's Discuss Your" accent="Legal Needs" />
            </h2>
            <Reveal delay={0.2}>
              <p className="text-white/70 text-lg mb-10">
                We would be honored to represent you and your legal interests.
                Schedule a consultation with our experienced team today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-gold h-14 px-8">
                  Schedule a Consultation
                  <ArrowRight size={18} />
                </Link>
                <a href="tel:09022043227" className="btn-outline-light h-14 px-8">
                  <Phone size={18} />
                  090 2204 3227
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom relative py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src={logo}
                className="w-48 h-auto"
                alt="O.A. Kolawole & Co."
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A full-service Nigerian law firm providing trusted legal counsel
              with offices in Abuja, Lagos, and Jos.
            </p>
            <div className="space-y-3">
              <a
                href="tel:09022043227"
                className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors"
              >
                <Phone size={16} />
                <span className="text-sm">090 2204 3227</span>
              </a>
              <a
                href="mailto:info@oakolawoleandco.com"
                className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors"
              >
                <Mail size={16} />
                <span className="text-sm">info@oakolawoleandco.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-6 text-white">
              Practice Areas
            </h4>
            <ul className="space-y-3">
              {practiceAreas.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-6 text-white">
              Our Offices
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm font-medium">
                    Abuja (Head Office)
                  </p>
                  <p className="text-white/50 text-sm">
                    Suite 19, Jinifa Plaza, CBD
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm font-medium">Lagos</p>
                  <p className="text-white/50 text-sm">
                    Block 113, Lekki-Epe Expressway
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm font-medium">Jos</p>
                  <p className="text-white/50 text-sm">
                    No. 3, Constitutional Hill Road
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} O.A. Kolawole & Co. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground"
              aria-label="Back to top"
            >
              <ArrowUp size={16} className="transition-transform group-hover:-translate-y-0.5" />
            </button>
            <Link
              to="/privacy"
              className="text-white/50 hover:text-accent text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-white/50 hover:text-accent text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
