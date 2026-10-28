import { Link } from "react-router-dom";
import { Scale, Briefcase, Zap, Globe, ArrowRight, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/motion/Reveal";

const practices = [
  {
    icon: Scale,
    title: "Litigation & Arbitration",
    description:
      "Decades of combined courtroom experience in Land, Contract, Banking, Human Rights, and Constitutional Law.",
    link: "/practice#litigation",
  },
  {
    icon: Briefcase,
    title: "Corporate & Commercial",
    description:
      "Comprehensive support for foreign and local clients across corporate and financial transactions.",
    link: "/practice#corporate",
  },
  {
    icon: Zap,
    title: "Energy Law",
    description:
      "Deep industry knowledge serving governments, regulators, project developers, and financial institutions.",
    link: "/practice#energy",
  },
  {
    icon: Globe,
    title: "Immigration",
    description:
      "Expert assistance with CERPAC applications, work permits, and business permits for foreign investors.",
    link: "/practice#immigration",
  },
];

const PracticeAreas = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeader
          label="What We Do"
          title="Our Core Practice Areas"
          description="We provide comprehensive legal services tailored to meet the unique needs of each client, combining expertise with innovative strategies."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {practices.map((practice, index) => (
            <Reveal key={practice.title} delay={index * 0.1} className="h-full">
              <Link to={practice.link} className="block group h-full">
                <SpotlightCard className="h-full p-8 bg-card rounded-2xl border border-border shadow-soft transition-all duration-500 group-hover:shadow-lift group-hover:border-accent/40 group-hover:-translate-y-2">
                  <div className="relative flex items-start justify-between mb-10">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center transition-all duration-500 group-hover:bg-accent group-hover:rotate-[-6deg]">
                      <practice.icon className="w-7 h-7 text-accent transition-colors duration-500 group-hover:text-accent-foreground" />
                    </div>
                    <span className="font-playfair text-4xl font-semibold text-border transition-colors duration-500 group-hover:text-accent/30">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="relative font-playfair text-xl font-semibold text-primary mb-3">
                    {practice.title}
                  </h3>
                  <p className="relative text-muted-foreground text-sm leading-relaxed mb-6">
                    {practice.description}
                  </p>
                  <span className="relative inline-flex items-center gap-1.5 text-accent text-sm font-medium">
                    Learn More
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                  <span className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
                </SpotlightCard>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3} className="text-center mt-14">
          <Link
            to="/practice"
            className="group inline-flex items-center gap-2 text-primary font-medium border-b border-accent pb-1 hover:text-accent transition-colors"
          >
            View All Practice Areas
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default PracticeAreas;
