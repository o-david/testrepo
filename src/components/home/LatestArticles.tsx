import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ArticleCard from "@/components/articles/ArticleCard";
import { Reveal } from "@/components/motion/Reveal";
import { articles } from "@/data/articles";

const LatestArticles = () => {
  const latestArticles = articles.slice(0, 3);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeader
          label="Insights & Updates"
          title="Latest from Our Blog"
          description="Stay informed with our latest legal insights, industry updates, and expert commentary on matters that affect you and your business."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>

        <Reveal delay={0.3} className="text-center mt-14">
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 text-primary font-medium border-b border-accent pb-1 hover:text-accent transition-colors"
          >
            View All Articles
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default LatestArticles;
