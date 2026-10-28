import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Share2,
  Linkedin,
  Link2,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { articles } from "@/data/articles";
import SEO from "@/components/SEO";
import HeroBackdrop from "@/components/ui/HeroBackdrop";
import ArticleCover from "@/components/articles/ArticleCover";
import { EASE_OUT, Reveal, WordReveal } from "@/components/motion/Reveal";
import { toast } from "@/hooks/use-toast";

const ArticleDetails = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = useMemo(() => articles.find((a) => a.slug === slug), [slug]);

  const relatedArticles = useMemo(() => {
    if (!article) return [];
    // Same category first, then fill up with other recent articles.
    const related = articles.filter(
      (a) => a.category === article.category && a.id !== article.id,
    );
    const others = articles.filter(
      (a) => a.id !== article.id && !related.includes(a),
    );
    return [...related, ...others].slice(0, 3);
  }, [article]);

  if (!article) {
    return (
      <Layout>
        <div className="min-h-[70vh] flex flex-col items-center justify-center bg-background px-4 pt-32 pb-20 text-center">
          <h2 className="font-playfair text-3xl font-semibold text-primary mb-4">
            Article Not Found
          </h2>
          <p className="text-muted-foreground mb-8">
            The article you are looking for does not exist or has been moved.
          </p>
          <Link to="/blog" className="btn-gold">
            Back to Articles
          </Link>
        </div>
      </Layout>
    );
  }

  const shareUrl = window.location.href;

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: article.title, url: shareUrl });
        return;
      }
      await navigator.clipboard.writeText(shareUrl);
      toast({ title: "Link copied", description: "Article link copied to clipboard." });
    } catch (error) {
      if ((error as Error).name !== "AbortError") {
        toast({ title: "Share failed", description: "Unable to share this article." });
      }
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast({ title: "Link copied", description: "Article link copied to clipboard." });
    } catch {
      toast({ title: "Copy failed", description: "Unable to copy the link." });
    }
  };

  return (
    <Layout>
      <SEO
        title={article.title}
        description={article.excerpt}
        canonicalUrl={`/blog/${article.slug}`}
        ogType="article"
        keywords={article.tags}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: article.title,
          image: article.image ?? "https://oakolawoleandco.com/og-image.png",
          author: {
            "@type": "Person",
            name: article.author,
          },
          publisher: {
            "@type": "Organization",
            name: "O.A. Kolawole & Co.",
            logo: {
              "@type": "ImageObject",
              url: "https://oakolawoleandco.com/logo.png",
            },
          },
          datePublished: article.date,
          description: article.excerpt,
        }}
      />
      {/* Article Header */}
      <section className="relative overflow-hidden pt-36 pb-40 md:pb-48 bg-navy-gradient">
        <HeroBackdrop />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: EASE_OUT }}
            >
              <Link
                to="/blog"
                className="group inline-flex items-center gap-2 text-accent hover:text-white transition-colors mb-8 text-sm font-medium"
              >
                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                Back to Articles
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
              className="flex flex-wrap gap-2 mb-6"
            >
              <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                {article.category}
              </span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white/10 text-white/70 px-3 py-1 rounded-full text-xs font-medium"
                >
                  #{tag}
                </span>
              ))}
            </motion.div>

            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8 leading-tight">
              <WordReveal text={article.title} delay={0.15} onMount />
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: EASE_OUT }}
              className="flex flex-wrap items-center gap-6 text-white/60 text-sm"
            >
              <span className="flex items-center gap-2">
                <User size={16} className="text-accent" />
                {article.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-accent" />
                {article.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-accent" />
                {article.readTime}
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20 md:pb-28 bg-background">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: EASE_OUT }}
              className="-mt-28 md:-mt-36 mb-14 rounded-3xl overflow-hidden shadow-lift relative z-10"
            >
              <ArticleCover
                article={article}
                size="lg"
                width={1400}
                className="w-full h-[280px] md:h-[440px]"
              />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <motion.article
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="prose prose-lg max-w-none prose-headings:font-playfair prose-headings:text-primary prose-p:text-muted-foreground prose-a:text-accent prose-li:text-muted-foreground prose-li:marker:text-accent prose-strong:text-primary"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Social Share */}
                <div className="mt-12 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
                  <span className="text-primary font-medium font-playfair text-lg">
                    Share this article
                  </span>
                  <div className="flex gap-3">
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on LinkedIn"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5"
                    >
                      <Linkedin size={18} />
                    </a>
                    <button
                      type="button"
                      onClick={copyLink}
                      aria-label="Copy link"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5"
                    >
                      <Link2 size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={handleShare}
                      aria-label="Share"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5"
                    >
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-4">
                <div className="space-y-8 lg:sticky lg:top-28">
                  {/* Related Articles */}
                  <Reveal className="bg-card p-6 rounded-2xl border border-border shadow-soft">
                    <h3 className="font-playfair text-xl font-semibold text-primary mb-6">
                      Related Articles
                    </h3>
                    <div className="space-y-5">
                      {relatedArticles.map((related) => (
                        <Link
                          key={related.id}
                          to={`/blog/${related.slug}`}
                          className="flex gap-4 group"
                        >
                          <ArticleCover
                            article={related}
                            size="sm"
                            width={200}
                            className="w-20 h-20 rounded-xl flex-shrink-0 overflow-hidden"
                          />
                          <div>
                            <span className="text-xs text-accent font-medium mb-1 block">
                              {related.category}
                            </span>
                            <h4 className="font-medium text-primary text-sm leading-snug group-hover:text-accent transition-colors line-clamp-3">
                              {related.title}
                            </h4>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </Reveal>

                  {/* Newsletter Box */}
                  <Reveal delay={0.1} className="relative overflow-hidden bg-navy-gradient p-6 rounded-2xl text-white">
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/20 blur-2xl" />
                    <h3 className="relative font-playfair text-xl font-semibold mb-3">
                      Subscribe
                    </h3>
                    <p className="relative text-white/70 text-sm mb-4">
                      Get the latest legal insights delivered directly to your
                      inbox.
                    </p>
                    <input
                      type="email"
                      placeholder="Your email address"
                      aria-label="Email address"
                      className="relative w-full h-11 px-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-accent mb-3 text-sm"
                    />
                    <button className="btn-gold w-full h-11 text-sm">Subscribe</button>
                  </Reveal>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArticleDetails;
