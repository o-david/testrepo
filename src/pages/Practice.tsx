import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import {
  ArrowRight,
  Briefcase,
  Zap,
  Globe,
  Shield,
  Users,
  Building2,
  FileText,
  Gavel,
  Home,
  type LucideIcon,
} from "lucide-react";
import SEO from "@/components/SEO";
import PageHero from "@/components/ui/PageHero";
import BrandVisual from "@/components/ui/BrandVisual";
import { EASE_OUT, Reveal } from "@/components/motion/Reveal";
import { cn, optimizeImage } from "@/lib/utils";

const practiceAreas: {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  image?: string;
}[] = [
  {
    id: "litigation",
    icon: Gavel,
    title: "Litigation & Arbitration",
    description:
      "Our litigation team has decades of combined courtroom experience across diverse areas including:",
    details: [
      "Land and Property Disputes",
      "Contract and Commercial Litigation",
      "Banking & Financial Services",
      "Human Rights Matters",
      "Constitutional & Electoral Law",
      "Chieftaincy Matters",
    ],
  },
  {
    id: "corporate",
    icon: Briefcase,
    title: "Corporate & Commercial",
    description: "We provide comprehensive legal support for businesses:",
    details: [
      "Company Formation & Structuring",
      "Mergers & Acquisitions",
      "Corporate Governance",
      "Commercial Contracts",
      "Regulatory Compliance",
      "Foreign Investment Advisory",
    ],
    image:
      "https://res.cloudinary.com/dgxl5swen/image/upload/v1769735099/dav_skwb0p.jpg",
  },
  {
    id: "energy",
    icon: Zap,
    title: "Energy Law",
    description: "Deep industry knowledge serving the energy sector:",
    details: [
      "Oil & Gas Transactions",
      "Power Sector Regulations",
      "Renewable Energy Projects",
      "Regulatory Compliance",
      "Project Finance",
      "Environmental Law",
    ],
  },
  {
    id: "immigration",
    icon: Globe,
    title: "Immigration",
    description: "Expert assistance for individuals and businesses:",
    details: [
      "CERPAC Applications",
      "Work Permits",
      "Business Permits",
      "Residence Permits",
      "Visa Applications",
      "Immigration Compliance",
    ],
  },
  {
    id: "consumer",
    icon: Shield,
    title: "Consumer Protection",
    description: "Protecting consumer rights and interests:",
    details: [
      "Consumer Rights Advocacy",
      "FCCPC Engagement",
      "Product Liability",
      "Alternative Dispute Resolution",
      "Class Actions",
      "Regulatory Matters",
    ],
    image:
      "https://res.cloudinary.com/dgxl5swen/image/upload/v1769733215/sign_zm6xic.jpg",
  },
  {
    id: "labour",
    icon: Users,
    title: "Labour & Employment",
    description: "Comprehensive employment law services:",
    details: [
      "Employment Contracts",
      "Workplace Policies",
      "Industrial Disputes",
      "Redundancy & Termination",
      "Pension Reform Compliance",
      "Labour Act Matters",
    ],
    image:
      "https://res.cloudinary.com/dgxl5swen/image/upload/v1769731881/labour_law.jpg",
  },
  {
    id: "insolvency",
    icon: Building2,
    title: "Insolvency Law",
    description: "Guidance through complex insolvency matters:",
    details: [
      "Corporate Restructuring",
      "Bankruptcy Proceedings",
      "Creditor Rights",
      "Debt Recovery",
      "Receivership",
      "Liquidation",
    ],
  },
  {
    id: "property",
    icon: Home,
    title: "Conveyance & Property",
    description: "Expert property and real estate services:",
    details: [
      "Property Sales & Purchases",
      "Lease Agreements",
      "Title Perfection (FCT & Lagos)",
      "Land Acquisition",
      "Development Agreements",
      "Property Due Diligence",
    ],
  },
  {
    id: "other",
    icon: FileText,
    title: "Other Practice Areas",
    description: "Additional areas of expertise:",
    details: [
      "Internet & Social Media Law",
      "Human Rights & Family Law",
      "Corporate Governance",
      "Company Secretarial Services",
      "Media, Sports & Entertainment",
      "Intellectual Property",
    ],
    image:
      "https://res.cloudinary.com/dgxl5swen/image/upload/v1769731544/shelves.jpg",
  },
];

/** Tracks which practice section is currently in the middle of the viewport. */
const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
};

const sectionIds = practiceAreas.map((area) => area.id);

const Practice = () => {
  const active = useActiveSection(sectionIds);
  const navRef = useRef<HTMLDivElement>(null);

  // Keep the active chip visible in the horizontally scrolling nav.
  useEffect(() => {
    const nav = navRef.current;
    const chip = nav?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (nav && chip) {
      nav.scrollTo({
        left: chip.offsetLeft - nav.clientWidth / 2 + chip.clientWidth / 2,
        behavior: "smooth",
      });
    }
  }, [active]);

  return (
    <Layout>
      <SEO
        title="Practice Areas"
        description="Explore the practice areas of O.A. Kolawole & Co.: litigation and arbitration, corporate and commercial, energy, immigration, labour, insolvency, property law and more."
        canonicalUrl="/practice"
      />
      <PageHero
        label="Our Expertise"
        title="Practice"
        accent="Areas"
        description="Comprehensive legal services across a wide range of practice areas, delivered with expertise and dedication to achieving the best outcomes."
      />

      {/* Sticky jump navigation */}
      <div className="sticky top-20 z-30 border-b border-border bg-background/85 backdrop-blur-xl">
        <div
          ref={navRef}
          className="container-custom flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {practiceAreas.map((area) => (
            <a
              key={area.id}
              href={`#${area.id}`}
              data-id={area.id}
              className={cn(
                "relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active === area.id ? "text-accent-foreground" : "text-muted-foreground hover:text-primary",
              )}
            >
              {active === area.id && (
                <motion.span
                  layoutId="practice-active"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{area.title}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Practice Areas List */}
      <div className="bg-background">
        {practiceAreas.map((area, index) => {
          const reversed = index % 2 === 1;
          return (
            <section
              key={area.id}
              id={area.id}
              className={cn(
                "section-padding scroll-mt-36 overflow-hidden",
                reversed ? "bg-secondary" : "bg-background",
              )}
            >
              <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  {/* Content */}
                  <div className={reversed ? "lg:order-2" : ""}>
                    <Reveal x={reversed ? 30 : -30} y={0}>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="font-playfair text-sm font-semibold text-accent tracking-widest">
                          {String(index + 1).padStart(2, "0")} / {String(practiceAreas.length).padStart(2, "0")}
                        </span>
                        <span className="h-px w-12 bg-accent/50" />
                      </div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-accent flex-shrink-0 flex items-center justify-center">
                          <area.icon className="w-7 h-7 text-accent-foreground" />
                        </div>
                        <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary leading-tight">
                          {area.title}
                        </h2>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                        {area.description}
                      </p>
                    </Reveal>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {area.details.map((detail, i) => (
                        <motion.li
                          key={detail}
                          initial={{ opacity: 0, y: 14 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease: EASE_OUT }}
                          className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-all duration-300 hover:border-accent/50 hover:shadow-soft hover:translate-x-1"
                        >
                          <span className="h-2 w-2 rotate-45 bg-accent flex-shrink-0 transition-transform duration-300 group-hover:rotate-[135deg]" />
                          <span className="text-foreground text-sm">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual */}
                  <div className={cn("relative group", reversed && "lg:order-1")}>
                    <motion.div
                      initial={{ clipPath: reversed ? "inset(0% 0% 0% 100% round 1.5rem)" : "inset(0% 100% 0% 0% round 1.5rem)" }}
                      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 1.5rem)" }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1.1, ease: EASE_OUT }}
                      className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lift"
                    >
                      {area.image ? (
                        <img
                          src={optimizeImage(area.image, 900)}
                          alt={area.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <BrandVisual icon={area.icon} size="lg" label={area.title} className="w-full h-full" />
                      )}
                    </motion.div>
                    <div
                      className={cn(
                        "absolute -bottom-6 w-28 h-28 bg-accent/20 rounded-3xl -z-10",
                        reversed ? "-left-6" : "-right-6",
                      )}
                    />
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <Reveal className="container-custom text-center max-w-2xl">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-4">
            Not sure where your matter fits?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Tell us about your situation and we will connect you with the right
            member of our team.
          </p>
          <Link to="/contact" className="btn-gold h-14 px-8">
            Speak With a Lawyer
            <ArrowRight size={18} />
          </Link>
        </Reveal>
      </section>
    </Layout>
  );
};

export default Practice;
