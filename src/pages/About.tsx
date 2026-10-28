import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import SectionHeader from "@/components/ui/SectionHeader";
import PageHero from "@/components/ui/PageHero";
import BrandVisual from "@/components/ui/BrandVisual";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { EASE_OUT, Reveal, WordReveal } from "@/components/motion/Reveal";
import { optimizeImage } from "@/lib/utils";
import { MapPin, Target, Eye, Heart, Scale, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Scale,
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our legal practice.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our dealings.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Our clients' interests are at the heart of everything we do.",
  },
  {
    icon: Heart,
    title: "Commitment",
    description:
      "We are committed to achieving the best outcomes for our clients.",
  },
];

const offices: {
  city: string;
  type: string;
  address: string;
  image?: string;
}[] = [
  {
    city: "Abuja",
    type: "Head Office",
    address:
      "Suite 19, Jinifa Plaza, Plot 1014, Samuel Ademulegun Avenue, Central Business District",
    image:
      "https://res.cloudinary.com/dgxl5swen/image/upload/v1769734685/wole002_di5afl.jpg",
  },
  {
    city: "Lagos",
    type: "Branch Office",
    address:
      "Plot 6, Block 113, Adebisi Ogunniyi Crescent, off Agungi-Ajiran Road, Lekki-Epe Expressway",
    image:
      "https://res.cloudinary.com/dgxl5swen/image/upload/v1769734827/wole_001_bigkzz.jpg",
  },
  {
    city: "Jos",
    type: "Branch Office",
    address: "No. 3, Constitutional Hill Road, Jos, Plateau State",
  },
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="Learn about O.A. Kolawole & Co., a leading Nigerian law firm committed to excellence, integrity, and client success. Discover our history and core values."
        canonicalUrl="/about"
      />
      <PageHero
        label="About Us"
        title="A Legacy of Legal"
        accent="Excellence"
        description="O.A. Kolawole & Co. is a full-service Nigerian law firm committed to excellence, ethics, and professionalism in every aspect of our practice."
      />

      {/* Our Story */}
      <section className="section-padding bg-background overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <Reveal>
                <span className="eyebrow mb-5">Our Story</span>
              </Reveal>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-6 leading-tight">
                <WordReveal text="Building Trust Through" accent="Excellence" />
              </h2>
              <Reveal delay={0.15} className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  O.A. Kolawole & Co. is a full-service law firm positioned to
                  render high quality legal services tailored to meet the unique
                  needs of each client. We combine legal expertise with a deep
                  understanding of our clients' industries to provide practical,
                  effective solutions.
                </p>
                <p>
                  Our legal team consists of experienced professionals with
                  decades of combined experience across diverse practice areas.
                  The team includes lawyers who have worked at prestigious
                  firms, bringing invaluable experience in complex litigation,
                  advisory, and transactional work.
                </p>
                <p>
                  We believe in building relationships based on trust and mutual
                  respect. We understand that each client has unique needs, and
                  we are committed to developing innovative strategies to help
                  achieve both immediate and long-term goals.
                </p>
              </Reveal>
            </div>
            <div className="relative">
              <motion.div
                initial={{ clipPath: "inset(0% 0% 100% 0% round 1.5rem)" }}
                whileInView={{ clipPath: "inset(0% 0% 0% 0% round 1.5rem)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: EASE_OUT }}
                className="aspect-square rounded-3xl overflow-hidden shadow-lift"
              >
                <motion.img
                  src={optimizeImage(
                    "https://res.cloudinary.com/dgxl5swen/image/upload/v1769614564/kolawole.jpg",
                    900,
                  )}
                  alt="Oluwole Kolawole, Principal Partner of O.A. Kolawole & Co."
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease: EASE_OUT }}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-accent/20 rounded-3xl -z-10" />
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border border-dashed border-accent/40 -z-10 animate-spin-slow" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "To provide high-quality legal services tailored to meet the unique needs of each client, while maintaining the highest standards of ethics and professionalism. We are committed to being the trusted legal partner our clients deserve.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                text: "To be recognized as a leading Nigerian law firm known for excellence, integrity, and innovative legal solutions. We aspire to set the standard for legal practice in Nigeria, delivering value that exceeds our clients' expectations.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.15} className="h-full">
                <SpotlightCard className="group h-full p-8 lg:p-12 bg-card rounded-3xl border border-border shadow-soft transition-all duration-500 hover:shadow-lift hover:-translate-y-1">
                  <item.icon
                    className="absolute -right-6 -top-6 w-40 h-40 text-accent/[0.06] transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110"
                    strokeWidth={1}
                  />
                  <div className="relative w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-8">
                    <item.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h3 className="relative font-playfair text-2xl md:text-3xl font-semibold text-primary mb-4">
                    {item.title}
                  </h3>
                  <p className="relative text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            label="Our Values"
            title="What Drives Us"
            description="Our core values guide every decision we make and every action we take in service of our clients."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.1} className="h-full">
                <div className="group h-full text-center p-8 rounded-3xl border border-transparent transition-all duration-500 hover:border-border hover:bg-card hover:shadow-soft">
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <span className="absolute inset-0 rounded-full border border-dashed border-accent/40 transition-transform duration-[1.5s] group-hover:rotate-180" />
                    <span className="absolute inset-2 rounded-full bg-accent/10 flex items-center justify-center transition-colors duration-500 group-hover:bg-accent">
                      <value.icon className="w-7 h-7 text-accent transition-colors duration-500 group-hover:text-accent-foreground" />
                    </span>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeader
            label="Our Locations"
            title="Strategic Presence Across Nigeria"
            description="With offices in Abuja, Lagos, and Jos, we are strategically positioned to serve clients across Nigeria."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Reveal key={office.city} delay={index * 0.15} className="h-full">
                <div className="group h-full bg-card rounded-3xl overflow-hidden border border-border shadow-soft transition-all duration-500 hover:shadow-lift hover:-translate-y-2">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    {office.image ? (
                      <img
                        src={optimizeImage(office.image, 700)}
                        alt={`${office.city} office`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <BrandVisual icon={MapPin} label={`${office.city} office`} className="w-full h-full" />
                    )}
                    <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-navy">
                      {office.type}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="font-playfair text-2xl font-semibold text-primary mb-3 flex items-center gap-2">
                      {office.city}
                      <span className="h-px flex-1 bg-border" />
                    </h3>
                    <p className="flex gap-2 text-muted-foreground text-sm leading-relaxed">
                      <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      {office.address}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
