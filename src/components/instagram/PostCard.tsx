import { useMemo, useState, useRef } from "react";
import { formatDistanceToNowStrict, parseISO } from "date-fns";
import { Heart, MessageCircle, Send, ExternalLink } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { toast } from "@/components/ui/use-toast";
import type { InstagramPost } from "@/types/instagram";
import { cn } from "@/lib/utils";
import { logo2 } from "@/assets";

interface PostCardProps {
  post: InstagramPost;
  className?: string;
}

function linkifyCaption(text: string) {
  const parts: Array<{ t: string; type: "text" | "hashtag" | "mention" }> = [];
  const regex = /([#@][\p{L}\p{N}._]{2,})/giu;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    const index = match.index;
    if (index > lastIndex) {
      parts.push({ t: text.slice(lastIndex, index), type: "text" });
    }
    const token = match[0];
    if (token.startsWith("#")) {
      parts.push({ t: token, type: "hashtag" });
    } else {
      parts.push({ t: token, type: "mention" });
    }
    lastIndex = index + token.length;
  }
  if (lastIndex < text.length) {
    parts.push({ t: text.slice(lastIndex), type: "text" });
  }
  return parts;
}

export function PostCard({ post, className }: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.like_count);
  const [expanded, setExpanded] = useState(false);
  const liveRef = useRef<HTMLDivElement | null>(null);

  const timeAgo = useMemo(() => {
    return formatDistanceToNowStrict(parseISO(post.timestamp), {
      addSuffix: true,
    });
  }, [post.timestamp]);

  const captionParts = useMemo(
    () => linkifyCaption(post.caption || ""),
    [post.caption],
  );

  const displayCaption = useMemo(() => {
    const s = post.caption || "";
    if (expanded || s.length <= 140) return s;
    return s.slice(0, 140).trimEnd() + "…";
  }, [expanded, post.caption]);

  const onToggleLike = () => {
    setLiked((v) => {
      const next = !v;
      setLikeCount((c) => (next ? c + 1 : Math.max(post.like_count, c - 1)));
      if (liveRef.current) {
        liveRef.current.textContent = next ? "Liked" : "Unliked";
      }
      return next;
    });
  };

  const onShare = async () => {
    const url = post.permalink;
    const title = `${post.username} on Instagram`;
    try {
      type ShareData = { title?: string; url?: string; text?: string };
      type ShareNavigator = Navigator & {
        share?: (data?: ShareData) => Promise<void>;
        clipboard?: Clipboard;
      };
      const navShare = navigator as ShareNavigator;
      if (navShare.share) {
        await navShare.share({ title, url });
      } else if (navShare.clipboard && window.isSecureContext) {
        await navShare.clipboard.writeText(url);
        toast({
          title: "Link copied",
          description: "Permalink copied to clipboard",
        });
      } else {
        const input = document.createElement("input");
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
        toast({
          title: "Link copied",
          description: "Permalink copied to clipboard",
        });
      }
      if (liveRef.current) {
        liveRef.current.textContent = "Share complete";
      }
    } catch {
      toast({
        title: "Share failed",
        description: "Unable to share this post",
      });
      if (liveRef.current) {
        liveRef.current.textContent = "Share failed";
      }
    }
  };

  const media = (
    <div className="group relative overflow-hidden bg-navy">
      <AspectRatio ratio={1}>
        {post.media_type === "VIDEO" ? (
          <video
            className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            src={post.media_url[0]}
            controls
            playsInline
            aria-label="Video"
          />
        ) : post.media_type === "CAROUSEL" || post.media_type === "SIDECAR" ? (
          <div className="h-full w-full">
            <Carousel className="h-full w-full" opts={{ loop: true }}>
              <CarouselContent className="h-full">
                {post.media_url.map((src, i) => (
                  <CarouselItem key={i} className="h-full">
                    <img
                      src={src}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                className="left-3 z-10 bg-background/80 backdrop-blur border-0 hover:bg-accent hover:text-accent-foreground transition-colors duration-300 ease-in-out"
                aria-label="Previous image"
              />
              <CarouselNext
                className="right-3 z-10 bg-background/80 backdrop-blur border-0 hover:bg-accent hover:text-accent-foreground transition-colors duration-300 ease-in-out"
                aria-label="Next image"
              />
            </Carousel>
          </div>
        ) : (
          <img
            src={post.media_url[0]}
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        )}
      </AspectRatio>
      <a
        href={post.permalink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-background/80 px-2 py-1 text-xs text-foreground shadow-sm backdrop-blur transition-colors duration-300 ease-in-out hover:bg-background"
        aria-label="Open on Instagram"
      >
        <ExternalLink className="h-3 w-3" />
        <span>Open</span>
      </a>
    </div>
  );

  return (
    <article
      className={cn(
        "overflow-hidden rounded-2xl border bg-card shadow-soft transition-all duration-500 hover:shadow-lift hover:-translate-y-1 focus-within:ring-2 focus-within:ring-accent",
        className,
      )}
    >
      <header className="flex items-center gap-3 p-4">
        <Avatar className="h-10 w-10 bg-navy ring-2 ring-accent/40">
          <AvatarImage
            src={post.profile_picture_url || logo2}
            alt=""
            className="object-contain p-1.5"
          />
          <AvatarFallback aria-hidden>
            {post.username.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="truncate font-medium">{post.username}</span>
            {post.location?.name && (
              <span className="truncate text-xs text-muted-foreground">
                • {post.location.name}
              </span>
            )}
          </div>
          <time
            className="block text-xs text-muted-foreground"
            dateTime={post.timestamp}
          >
            {timeAgo}
          </time>
        </div>
      </header>
      <div>{media}</div>
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            aria-pressed={liked}
            aria-label={liked ? "Unlike" : "Like"}
            className={cn(
              "transition-transform duration-300 ease-in-out focus-visible:ring-2",
              liked ? "text-destructive" : "",
            )}
            onClick={onToggleLike}
          >
            <Heart className={cn("h-6 w-6", liked ? "fill-current" : "")} />
          </Button>
          {/* <div className="text-sm">{formatCount(likeCount)}</div> */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Comments"
            className="transition-transform duration-300 ease-in-out focus-visible:ring-2"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
          {/* <div className="text-sm">{formatCount(post.comment_count)}</div> */}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onShare}
            aria-label="Share post"
            className="transition-colors duration-300 ease-in-out"
          >
            <Send className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>
      <div className="px-4 pb-4">
        <p className="text-sm leading-6">
          <span className="font-semibold">{post.username}</span>{" "}
          {captionParts.length ? (
            <>
              {linkifyCaption(displayCaption).map((p, i) => {
                if (p.type === "hashtag") {
                  const tag = p.t.slice(1);
                  const href = `https://www.instagram.com/explore/tags/${encodeURIComponent(tag)}/`;
                  return (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent transition-colors duration-300 ease-in-out hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {p.t}
                    </a>
                  );
                }
                if (p.type === "mention") {
                  const user = p.t.slice(1);
                  const href = `https://www.instagram.com/${encodeURIComponent(user)}/`;
                  return (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent transition-colors duration-300 ease-in-out hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {p.t}
                    </a>
                  );
                }
                return <span key={i}>{p.t}</span>;
              })}
            </>
          ) : (
            displayCaption
          )}
        </p>
        {post.caption && post.caption.length > 140 && (
          <button
            type="button"
            className="mt-1 text-sm font-medium text-muted-foreground underline-offset-2 transition-colors duration-300 ease-in-out hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls={`caption-${post.id}`}
          >
            {expanded ? "less" : "more"}
          </button>
        )}
        <span id={`caption-${post.id}`} className="sr-only">
          {expanded ? "Caption expanded" : "Caption collapsed"}
        </span>
      </div>
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        ref={liveRef}
      />
    </article>
  );
}

export default PostCard;
