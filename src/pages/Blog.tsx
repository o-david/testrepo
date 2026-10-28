import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { useEffect, useMemo, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import PageHero from "@/components/ui/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { getArticles } from "@/lib/articles";
import { getInstagramPosts } from "@/lib/instagram";
import type { BlogPost } from "@/data/articles";
import type { InstagramPost } from "@/types/instagram";
import ArticleCard from "@/components/articles/ArticleCard";
import PostCard from "@/components/instagram/PostCard";

const PAGE_SIZE = 6;

const Blog = () => {
  const [active, setActive] = useState<"articles" | "instagram">("articles");

  // Articles state
  const [articles, setArticles] = useState<BlogPost[]>([]);
  const [aPage, setAPage] = useState(1);
  const [aTotal, setATotal] = useState(0);
  const [aLoading, setALoading] = useState(true);
  const [aFetchingMore, setAFetchingMore] = useState(false);
  const [aError, setAError] = useState<string | null>(null);
  const [aHasMore, setAHasMore] = useState(true);
  const aSentinelRef = useRef<HTMLDivElement | null>(null);

  // Instagram state
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [iPage, setIPage] = useState(1);
  const [iTotal, setITotal] = useState(0);
  const [iLoading, setILoading] = useState(true);
  const [iFetchingMore, setIFetchingMore] = useState(false);
  const [iError, setIError] = useState<string | null>(null);
  const [iHasMore, setIHasMore] = useState(true);
  const iSentinelRef = useRef<HTMLDivElement | null>(null);

  // Live region
  const liveRef = useRef<HTMLDivElement | null>(null);

  const announce = (msg: string) => {
    if (liveRef.current) liveRef.current.textContent = msg;
  };

  const loadArticles = async (page: number, initial = false) => {
    if (initial) setALoading(true);
    else setAFetchingMore(true);
    setAError(null);
    try {
      const res = await getArticles({ page, pageSize: PAGE_SIZE });
      setATotal(res.total);
      setArticles((prev) => (page === 1 ? res.items : [...prev, ...res.items]));
      setAHasMore(page * PAGE_SIZE < res.total);
      announce(`Loaded ${res.items.length} articles`);
    } catch {
      setAError("Failed to load articles. Please try again.");
    } finally {
      setALoading(false);
      setAFetchingMore(false);
    }
  };

  const loadInstagram = async (page: number, initial = false) => {
    if (initial) setILoading(true);
    else setIFetchingMore(true);
    setIError(null);
    try {
      const res = await getInstagramPosts({ page, pageSize: PAGE_SIZE });
      setITotal(res.total);
      setPosts((prev) => (page === 1 ? res.items : [...prev, ...res.items]));
      setIHasMore(page * PAGE_SIZE < res.total);
      announce(`Loaded ${res.items.length} posts`);
    } catch {
      setIError("Failed to load Instagram posts. Please try again.");
    } finally {
      setILoading(false);
      setIFetchingMore(false);
    }
  };

  useEffect(() => {
    loadArticles(1, true);
    loadInstagram(1, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Observe sentinel for active tab only
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const el =
      active === "articles" ? aSentinelRef.current : iSentinelRef.current;
    if (!el) return;
    const cb: IntersectionObserverCallback = (entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting) return;
      if (active === "articles" && aHasMore && !aFetchingMore) {
        const next = aPage + 1;
        setAPage(next);
        loadArticles(next);
      } else if (active === "instagram" && iHasMore && !iFetchingMore) {
        const next = iPage + 1;
        setIPage(next);
        loadInstagram(next);
      }
    };
    observer = new IntersectionObserver(cb, { rootMargin: "200px" });
    observer.observe(el);
    return () => observer?.disconnect();
  }, [active, aPage, iPage, aHasMore, iHasMore, aFetchingMore, iFetchingMore]);

  const aCount = useMemo(
    () => `${articles.length}${aTotal ? ` of ${aTotal}` : ""}`,
    [articles.length, aTotal],
  );
  const iCount = useMemo(
    () => `${posts.length}${iTotal ? ` of ${iTotal}` : ""}`,
    [posts.length, iTotal],
  );
  return (
    <Layout>
      <SEO
        title="Legal Insights & Articles"
        description="Stay informed with the latest legal insights, industry updates, and expert commentary from O.A. Kolawole & Co. on Nigerian law and business."
        canonicalUrl="/blog"
      />
      <PageHero
        label="Insights & Updates"
        title="Legal"
        accent="Insights"
        description="Stay informed with our latest legal insights, industry updates, and expert commentary on matters that affect you and your business."
      />
      <div className="sticky top-20 z-30 border-b border-border bg-background/85 backdrop-blur-xl">
        <div className="container-custom flex items-center justify-between gap-4 py-3">
          <p className="text-sm text-muted-foreground" aria-live="polite">
            {active === "articles" ? `${aCount} articles` : `${iCount} posts`}
          </p>
          <Tabs
            value={active}
            onValueChange={(v) => setActive(v as "articles" | "instagram")}
          >
            <TabsList className="h-11 rounded-full bg-secondary p-1">
              <TabsTrigger
                value="articles"
                className="rounded-full px-5 h-9 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-sm transition-all duration-300 ease-in-out"
              >
                Articles
              </TabsTrigger>
              <TabsTrigger
                value="instagram"
                className="rounded-full px-5 h-9 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-sm transition-all duration-300 ease-in-out"
              >
                Instagram
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      <section className="container-custom py-12 md:py-16">
        <Tabs
          value={active}
          onValueChange={(v) => setActive(v as "articles" | "instagram")}
        >
          <TabsContent value="articles" className="focus:outline-none">
            {aLoading ? (
              <div
                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
                role="status"
                aria-label="Loading articles"
              >
                {Array.from({ length: PAGE_SIZE }).map((_, i) => (
                  <div key={i} className="rounded-2xl border p-4">
                    <Skeleton className="aspect-[16/10] w-full rounded-lg" />
                    <div className="mt-4 space-y-2">
                      <Skeleton className="h-3 w-24" />
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                  </div>
                ))}
              </div>
            ) : aError ? (
              <div className="mx-auto max-w-md rounded-xl border p-6 text-center">
                <p className="mb-4 text-muted-foreground">{aError}</p>
                <Button
                  onClick={() => {
                    setAPage(1);
                    loadArticles(1, true);
                  }}
                >
                  Retry
                </Button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {articles.map((a, i) => (
                    <ArticleCard key={a.id} article={a} index={i} />
                  ))}
                </div>
                <div ref={aSentinelRef} className="h-px w-full" />
                {aHasMore && (
                  <div className="mt-10 flex justify-center">
                    <Button
                      variant="outline"
                      className="rounded-full px-8 h-12 hover:border-accent hover:text-accent"
                      onClick={() => {
                        const next = aPage + 1;
                        setAPage(next);
                        loadArticles(next);
                      }}
                      disabled={aFetchingMore}
                    >
                      {aFetchingMore ? "Loading…" : "Load more"}
                    </Button>
                  </div>
                )}
              </>
            )}
          </TabsContent>
          <TabsContent value="instagram" className="focus:outline-none">
            {iLoading ? (
              <div
                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
                role="status"
                aria-label="Loading Instagram posts"
              >
                {Array.from({ length: PAGE_SIZE }).map((_, i) => (
                  <div key={i} className="rounded-2xl border p-4">
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div className="flex-1">
                        <Skeleton className="mb-2 h-4 w-32" />
                        <Skeleton className="h-3 w-24" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Skeleton className="aspect-square w-full rounded-lg" />
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <Skeleton className="h-4 w-10" />
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <Skeleton className="h-4 w-10" />
                    </div>
                    <Skeleton className="mt-3 h-4 w-3/4" />
                    <Skeleton className="mt-2 h-4 w-1/2" />
                  </div>
                ))}
              </div>
            ) : iError ? (
              <div className="mx-auto max-w-md rounded-xl border p-6 text-center">
                <p className="mb-4 text-muted-foreground">{iError}</p>
                <Button
                  onClick={() => {
                    setIPage(1);
                    loadInstagram(1, true);
                  }}
                >
                  Retry
                </Button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {posts.map((p, i) => (
                    <Reveal key={p.id} delay={(i % 3) * 0.1}>
                      <PostCard post={p} />
                    </Reveal>
                  ))}
                </div>
                <div ref={iSentinelRef} className="h-px w-full" />
                {iHasMore && (
                  <div className="mt-10 flex justify-center">
                    <Button
                      variant="outline"
                      className="rounded-full px-8 h-12 hover:border-accent hover:text-accent"
                      onClick={() => {
                        const next = iPage + 1;
                        setIPage(next);
                        loadInstagram(next);
                      }}
                      disabled={iFetchingMore}
                    >
                      {iFetchingMore ? "Loading…" : "Load more"}
                    </Button>
                  </div>
                )}
              </>
            )}
          </TabsContent>
        </Tabs>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-secondary">
        <Reveal className="container-custom text-center max-w-2xl">
          <span className="eyebrow mb-5">Newsletter</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-4">
            Stay Informed
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Subscribe to our newsletter for the latest legal insights,
            industry updates, and firm news delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto rounded-full sm:bg-card sm:border sm:border-border sm:p-1.5 sm:shadow-soft">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              className="flex-1 h-12 px-5 rounded-full border border-border sm:border-0 bg-card sm:bg-transparent focus:outline-none focus:ring-2 focus:ring-accent sm:focus:ring-0"
            />
            <button className="btn-gold h-12">Subscribe</button>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
};

export default Blog;
