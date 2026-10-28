import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ArrowRight, ArrowUpRight, Linkedin, Mail } from "lucide-react";
import SEO from "@/components/SEO";
import PageHero from "@/components/ui/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { optimizeImage } from "@/lib/utils";

const teamMembers = [
  {
    name: "Oluwole Kolawole, Esq. ACIS",
    role: "Principal Partner",
    image:
      "https://res.cloudinary.com/dgxl5swen/image/upload/v1769614564/kolawole.jpg",
    bio: "Leading the firm with decades of experience in corporate and litigation practice, Oluwole brings unmatched expertise and leadership to every case.",
    email: "oakolawole@oakolawoleandco.com",
    linkedin: "https://www.linkedin.com/in/oluwakolawole/",
  },
  {
    name: "Olugbenga Lamina, Esq.",
    role: "Partner",
    image:
      "https://res.cloudinary.com/dgxl5swen/image/upload/v1769614463/olugbenga.jpg",
    bio: "Called to the Bar in November 2016, Olugbenga holds an LLM in Energy Law from the University of Ibadan and an MBL from Technische Universität Berlin. Former counsel at M.B Ganiyu & Co and Abuja Electricity Distribution Company, he now brings his energy-sector insight to the partnership at O.A. Kolawole & Co.",
    email: "olugbenga@oakolawoleandco.com",
    linkedin: "https://www.linkedin.com/in/olugbenga-lamina/",
  },
  {
    name: "Evelyn M. Kolawole, Esq. DRS",
    role: "Partner",
    image:
      "https://res.cloudinary.com/dgxl5swen/image/upload/v1769384391/evelyn.jpg",
    bio: "Specializing in corporate and commercial law, Evelyn provides comprehensive legal support for business transactions and corporate governance.",
    email: "moteve12@oakolawoleandco.com",
    linkedin: "https://www.linkedin.com/in/evelyn-kolawole-45452414/",
  },
  {
    name: "Funmi Joseph",
    role: "Partner in Charge, Lagos Office",
    image:
      "https://res.cloudinary.com/dgxl5swen/image/upload/v1769384391/funmi.jpg",
    bio: "Leading our Lagos operations with expertise in energy law and commercial litigation, Funmi ensures our Lagos clients receive exceptional service.",
    email: "oojoseph@oakolawoleandco.com",
    linkedin: "https://www.linkedin.com/in/funmi-joseph-9a944a14/",
  },
  // {
  //   name: "Aniefiok Ekanem, Esq.",
  //   role: "Senior Associate",
  //   image: "https://img.icons8.com/?size=100&id=2906&format=png&color=000000",
  //   bio: "A dedicated legal professional with strong expertise in immigration and labour law, providing practical solutions for complex legal challenges.",
  //   email: "aniefiok@oakolawoleandco.com",
  //   linkedin: "https://www.linkedin.com/in/aniefiok-ekanem-9a944a14/",
  // },
  {
    name: "Daniel Oyetunji, Esq. ACArb",
    role: "Associate",
    image:
      "https://res.cloudinary.com/dgxl5swen/image/upload/v1769384391/daniel.jpg",
    bio: "A dedicated legal professional with strong expertise in immigration and labour law, providing practical solutions for complex legal challenges.",
    email: "danieloyetunji@oakolawoleandco.com",
    linkedin: "https://www.linkedin.com/in/daniel-oyetunji-9a944a14/",
  },
  {
    name: "Kolawole Ibrahim Amuda, Esq. LL.B (Hons) | B.L (Hons) | MICIArb | MiLA",
    role: "Associate",
    image:
      "https://res.cloudinary.com/dgxl5swen/image/upload/v1783677590/Ibrahim.jpg",
    bio: "A Member of the Chartered Institute of Arbitrators and the International Law Association, Kolawole's interest in dispute resolution draws him naturally to litigation and arbitration practice. He advises and represents clients across general litigation, corporate and commercial matters, and maritime law. His membership of the Chartered Institute of Arbitrators reflects a grounding in structured dispute resolution that complements his courtroom practice.",
    email: "danieloyetunji@oakolawoleandco.com",
    linkedin: "https://www.linkedin.com/in/daniel-oyetunji-9a944a14/",
  },
  {
    name: "Etoroabasi Umoh, Esq. AICMC",
    role: "Associate",
    image:
      "https://res.cloudinary.com/dgxl5swen/image/upload/v1769384391/etoroabasi2.jpg",
    bio: "A dedicated legal professional with strong expertise in immigration and labour law, providing practical solutions for complex legal challenges.",
    email: "etoroabasiumoh@oakolawoleandco.com",
    linkedin: "https://www.linkedin.com/in/etoroabasi-umoh-9a944a14/",
  },
  {
    name: "Favour Nwachukwu",
    role: "Human Resources",
    image:
      "https://res.cloudinary.com/dgxl5swen/image/upload/v1769614463/favour.jpg",
    bio: "Ensuring our team operates at peak performance, Favour manages our human resources and administrative functions with dedication.",
    email: "fnwachukwu@oakolawoleandco.com",
    linkedin: "https://www.linkedin.com/in/favour-nwachukwu-9a944a14/",
  },
];

type TeamMember = (typeof teamMembers)[number];

const Team = () => {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  return (
    <Layout>
      <SEO
        title="Our Team"
        description="Meet the partners and associates of O.A. Kolawole & Co., experienced Nigerian legal professionals dedicated to delivering excellence for our clients."
        canonicalUrl="/team"
      />
      <PageHero
        label="Our Team"
        title="Partners &"
        accent="Associates"
        description="Meet the experienced legal professionals dedicated to delivering excellence and achieving the best outcomes for our clients."
      />

      {/* Team Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Reveal key={member.name} delay={(index % 3) * 0.1} className="h-full">
                <article className="group h-full flex flex-col bg-card rounded-3xl overflow-hidden border border-border shadow-soft transition-all duration-500 hover:shadow-lift hover:-translate-y-2">
                  <button
                    type="button"
                    onClick={() => setSelected(member)}
                    className="relative aspect-[4/5] overflow-hidden text-left"
                    aria-label={`Read the full profile of ${member.name}`}
                  >
                    <img
                      src={optimizeImage(member.image, 700)}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="absolute left-5 bottom-5 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-navy opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      View profile
                      <ArrowUpRight size={16} />
                    </span>
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </button>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-accent font-medium text-xs uppercase tracking-[0.15em] mb-2">
                      {member.role}
                    </p>
                    <h3
                      className="font-playfair text-xl font-semibold text-primary mb-3 line-clamp-2"
                      title={member.name}
                    >
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-5">
                      {member.bio}
                    </p>
                    <div className="mt-auto flex items-center gap-2 border-t border-border pt-4">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail size={16} />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground"
                        aria-label={`LinkedIn profile of ${member.name}`}
                      >
                        <Linkedin size={16} />
                      </a>
                      <button
                        type="button"
                        onClick={() => setSelected(member)}
                        className="ml-auto text-sm font-medium text-accent hover:underline underline-offset-4"
                      >
                        Read bio
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Profile dialog */}
      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="w-[calc(100%-2rem)] max-w-3xl p-0 overflow-hidden gap-0 rounded-3xl sm:rounded-3xl">
          {selected && (
            <div className="grid sm:grid-cols-[2fr_3fr] max-h-[85vh] overflow-y-auto">
              <div className="relative aspect-[4/5] sm:aspect-auto bg-navy">
                <img
                  src={optimizeImage(selected.image, 600)}
                  alt={selected.name}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-7 sm:p-9">
                <p className="text-accent font-medium text-xs uppercase tracking-[0.15em] mb-3">
                  {selected.role}
                </p>
                <DialogTitle className="font-playfair text-2xl font-semibold text-primary leading-snug mb-4">
                  {selected.name}
                </DialogTitle>
                <span className="block h-px w-12 bg-accent mb-5" />
                <DialogDescription className="text-muted-foreground leading-relaxed text-[15px]">
                  {selected.bio}
                </DialogDescription>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={`mailto:${selected.email}`} className="btn-gold h-11 px-5 text-sm">
                    <Mail size={16} />
                    Email
                  </a>
                  <a
                    href={selected.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Join Us CTA */}
      <section className="section-padding bg-secondary">
        <Reveal className="container-custom text-center max-w-2xl">
          <span className="eyebrow mb-5">Careers</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-4">
            Join Our Team
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            We are always looking for talented legal professionals who share
            our commitment to excellence and client service. Explore
            opportunities to grow with us.
          </p>
          <Link to="/contact" className="btn-gold h-14 px-8">
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </Reveal>
      </section>
    </Layout>
  );
};

export default Team;
