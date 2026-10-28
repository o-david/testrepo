import { Trophy, Users, Building, Award } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import SpotlightCard from "@/components/ui/SpotlightCard";
import HeroBackdrop from "@/components/ui/HeroBackdrop";
import { Reveal } from "@/components/motion/Reveal";

const achievements = [
  {
    icon: Trophy,
    title: "FRM Communications",
    description:
      "Successfully represented FRM Communications Limited against Keystone Bank in a complex financial dispute.",
  },
  {
    icon: Building,
    title: "Mainstream Energy",
    description:
      "Ongoing representation of Mainstream Energy Solutions before the National Industrial Court of Nigeria.",
  },
  {
    icon: Award,
    title: "Mars Exploration",
    description:
      "Representing Mars Exploration & Production Limited in matters before the Industrial Arbitration Panel.",
  },
  {
    icon: Users,
    title: "Client Success",
    description:
      "Consistent track record of achieving favorable outcomes for clients across various legal matters.",
  },
];

const Achievements = () => {
  return (
    <section className="relative section-padding bg-navy-gradient overflow-hidden">
      <HeroBackdrop />
      <div className="container-custom relative">
        <SectionHeader
          light
          label="Our Track Record"
          title="Notable Achievements"
          description="Our firm has successfully represented clients in landmark cases across Nigeria, establishing a reputation for excellence in legal practice."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Reveal key={achievement.title} delay={index * 0.12} className="h-full">
              <SpotlightCard className="group h-full p-7 bg-white/[0.04] backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-500 hover:border-accent/40 hover:-translate-y-2">
                <div className="relative w-14 h-14 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-accent group-hover:scale-110">
                  <achievement.icon className="w-6 h-6 text-accent transition-colors duration-500 group-hover:text-accent-foreground" />
                </div>
                <h3 className="relative font-playfair text-xl font-semibold text-white mb-3">
                  {achievement.title}
                </h3>
                <p className="relative text-white/60 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
