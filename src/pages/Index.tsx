import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import PracticeMarquee from "@/components/home/PracticeMarquee";
import PracticeAreas from "@/components/home/PracticeAreas";
import AboutPreview from "@/components/home/AboutPreview";
import Achievements from "@/components/home/Achievements";
import LatestArticles from "@/components/home/LatestArticles";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="O.A. Kolawole & Co. is a full-service Nigerian law firm providing trusted legal counsel in Abuja, Lagos, and Jos. Specializing in Litigation, Corporate, Energy, and Property Law."
        keywords={[
          "Nigerian Law Firm",
          "Abuja Lawyers",
          "Corporate Law",
          "Litigation",
          "Property Law",
          "Energy Law",
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "O.A. Kolawole & Co.",
          image: "https://oakolawoleandco.com/logo.png",
          description:
            "Full-service Nigerian law firm providing trusted legal counsel.",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Suite 203, Beta Foundation Plaza, Plot 359, Ebitu Ukiwe Street, Jabi",
            addressLocality: "Abuja",
            addressRegion: "FCT",
            postalCode: "900108",
            addressCountry: "NG",
          },
          telephone: "+2349022043227",
          priceRange: "$$",
        }}
      />
      <Hero />
      <PracticeMarquee />
      <PracticeAreas />
      <AboutPreview />
      <Achievements />
      <LatestArticles />
    </Layout>
  );
};

export default Index;
