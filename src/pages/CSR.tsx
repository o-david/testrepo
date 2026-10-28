import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import PageHero from "@/components/ui/PageHero";
import BrandVisual from "@/components/ui/BrandVisual";
import SpotlightCard from "@/components/ui/SpotlightCard";
import HeroBackdrop from "@/components/ui/HeroBackdrop";
import CountUp from "@/components/motion/CountUp";
import { Reveal, WordReveal } from "@/components/motion/Reveal";
import {
  ArrowRight,
  Heart,
  GraduationCap,
  Users,
  HandHeart,
  Scale,
} from "lucide-react";
import SEO from "@/components/SEO";

const initiatives = [
  {
    icon: GraduationCap,
    title: "Legal Education Outreach",
    description:
      "We conduct free legal awareness programs in schools and communities, educating citizens about their rights and the legal system.",
  },
  {
    icon: Scale,
    title: "Pro Bono Legal Services",
    description:
      "Our team provides free legal representation to individuals who cannot afford legal services, ensuring access to justice for all.",
  },
  {
    icon: Users,
    title: "Community Development",
    description:
      "We actively participate in community development initiatives, supporting local projects that improve the quality of life.",
  },
  {
    icon: HandHeart,
    title: "Youth Mentorship",
    description:
      "Through our mentorship program, we guide aspiring legal professionals and students pursuing careers in law.",
  },
];

const impactStats = [
  { number: "500+", label: "Pro Bono Hours" },
  { number: "20+", label: "Schools Reached" },
  { number: "1,000+", label: "Lives Impacted" },
  { number: "15+", label: "Community Projects" },
];

const CSR = () => {
  return (
    <Layout>
      <SEO
        title="Corporate Social Responsibility"
        description="How O.A. Kolawole & Co. gives back: legal education outreach, pro bono services, community development and youth mentorship across Nigeria."
        canonicalUrl="/csr"
      />
      <PageHero
        label="Giving Back"
        title="Corporate Social"
        accent="Responsibility"
        description="At O.A. Kolawole & Co., we believe in giving back to our communities and making a positive impact beyond the courtroom."
      />

      {/* Our Commitment */}
      <section className="section-padding bg-background overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <Reveal>
                <span className="eyebrow mb-5">Our Commitment</span>
              </Reveal>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-6 leading-tight">
                <WordReveal text="Making a Difference in Our" accent="Communities" />
              </h2>
              <Reveal delay={0.15} className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We recognize that our responsibility extends beyond providing
                  legal services. As a leading Nigerian law firm, we are
                  committed to contributing positively to the society in which
                  we operate.
                </p>
                <p>
                  Our corporate social responsibility initiatives focus on
                  education, access to justice, community development, and
                  environmental sustainability. We believe that by investing in
                  these areas, we can help build a better Nigeria.
                </p>
                <p>
                  Through strategic partnerships with non-profit organizations,
                  educational institutions, and community groups, we work to
                  create lasting positive change in the lives of those we serve.
                </p>
              </Reveal>
            </div>
            <Reveal x={30} y={0} className="relative">
              <BrandVisual
                icon={HandHeart}
                size="lg"
                label="Access to justice for all"
                className="aspect-[4/3] rounded-3xl shadow-lift"
              />
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-accent/20 rounded-3xl -z-10" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeader
            label="Our Initiatives"
            title="Areas of Impact"
            description="We focus our CSR efforts on initiatives that create meaningful and lasting impact in our communities."
          />
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {initiatives.map((initiative, index) => (
              <Reveal key={initiative.title} delay={index * 0.1} className="h-full">
                <SpotlightCard className="group h-full p-8 lg:p-10 bg-card rounded-3xl border border-border shadow-soft transition-all duration-500 hover:shadow-lift hover:-translate-y-2 hover:border-accent/40">
                  <initiative.icon
                    className="absolute -right-8 -bottom-8 w-44 h-44 text-accent/[0.06] transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-110"
                    strokeWidth={1}
                  />
                  <div className="relative flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center transition-all duration-500 group-hover:bg-accent group-hover:rotate-[-6deg]">
                      <initiative.icon className="w-7 h-7 text-accent transition-colors duration-500 group-hover:text-accent-foreground" />
                    </div>
                    <span className="font-playfair text-4xl font-semibold text-border transition-colors duration-500 group-hover:text-accent/30">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="relative font-playfair text-2xl font-semibold text-primary mb-3">
                    {initiative.title}
                  </h3>
                  <p className="relative text-muted-foreground leading-relaxed">
                    {initiative.description}
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="relative section-padding bg-navy-gradient overflow-hidden">
        <HeroBackdrop />
        <div className="container-custom relative">
          <SectionHeader
            light
            title="Our Impact"
            description="Through our CSR initiatives, we have touched the lives of many individuals and communities across Nigeria."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10">
            {impactStats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.1} className="bg-navy/60 backdrop-blur-sm">
                <div className="text-center px-4 py-10 md:py-12">
                  <CountUp
                    value={stat.number}
                    className="block font-playfair text-4xl md:text-6xl font-semibold text-gradient-gold mb-3"
                  />
                  <p className="text-white/70 text-sm md:text-base">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="section-padding bg-background">
        <Reveal className="container-custom text-center max-w-2xl">
          <div className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-accent/20 animate-ping [animation-duration:2.5s]" />
            <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-accent">
              <Heart className="w-9 h-9 text-accent-foreground" />
            </span>
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-4">
            Get Involved
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            We welcome partnerships with organizations and individuals who
            share our commitment to making a positive impact in our
            communities.
          </p>
          <Link to="/contact" className="btn-gold h-14 px-8">
            Partner With Us
            <ArrowRight size={18} />
          </Link>
        </Reveal>
      </section>
    </Layout>
  );
};

export default CSR;
