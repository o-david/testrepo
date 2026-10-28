import { ScrapedInstagramPost, InstagramPost } from "../src/types/instagram.ts";
export function transformInstagramPost(
  post: ScrapedInstagramPost,
): InstagramPost {
  return {
    id: post.id,

    username: post.ownerUsername || "oakolawoleandco",

    // The scraped CDN avatar URL expires; PostCard falls back to the firm logo.
    profile_picture_url: "",

    media_type: post.type.toUpperCase() as
      | "IMAGE"
      | "VIDEO"
      | "CAROUSEL"
      | "SIDECAR",

    media_url: post.images.length
      ? [...(post.images || [])]
      : post.videoUrl
        ? [post.videoUrl]
        : [post.displayUrl],

    caption: post.caption ?? "",

    timestamp: post.timestamp,

    like_count: post.likesCount ?? 0,

    comment_count: post.commentsCount ?? 0,

    location: {
      id: "213385402",
      name: "Abuja, Nigeria",
    },

    permalink: post.url,
  };
}

export function transformInstagramFeed(
  posts: ScrapedInstagramPost[],
): InstagramPost[] {
  return posts.map(transformInstagramPost);
}
