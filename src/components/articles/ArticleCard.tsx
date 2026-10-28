import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/data/articles";
import ArticleCover from "@/components/articles/ArticleCover";
import { EASE_OUT } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  article: BlogPost;
  index: number;
  className?: string;
}

const ArticleCard = ({ article, index, className }: ArticleCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: EASE_OUT }}
      className={cn("group h-full", className)}
    >
      <Link
        to={`/blog/${article.slug}`}
        className="flex h-full flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-soft transition-all duration-500 hover:shadow-lift hover:-translate-y-2 hover:border-accent/40"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <ArticleCover
            article={article}
            className="w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
            {article.category}
          </span>
          <span className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy opacity-0 scale-75 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
            <ArrowUpRight size={18} />
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-4 text-muted-foreground text-xs mb-3">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} className="text-accent" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-accent" />
              {article.readTime}
            </span>
          </div>
          <h3 className="font-playfair text-xl font-semibold text-primary mb-3 line-clamp-2 transition-colors group-hover:text-accent">
            {article.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
            {article.excerpt}
          </p>
          <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <User size={14} />
              {article.author}
            </span>
            <span className="text-accent text-sm font-medium">Read article</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default ArticleCard;
