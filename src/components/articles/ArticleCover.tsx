import {
  Briefcase,
  Globe,
  Home,
  Scale,
  Shield,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import BrandVisual from "@/components/ui/BrandVisual";
import type { BlogPost } from "@/data/articles";
import { cn, optimizeImage } from "@/lib/utils";

const categoryIcons: Record<string, LucideIcon> = {
  "Corporate Law": Briefcase,
  Immigration: Globe,
  "Energy Law": Zap,
  "Property Law": Home,
  "Labour Law": Users,
  "Consumer Protection": Shield,
};

interface ArticleCoverProps {
  article: Pick<BlogPost, "title" | "image" | "category">;
  size?: "sm" | "md" | "lg";
  width?: number;
  className?: string;
}

/** The article's photo if it has one, otherwise a branded category cover. */
const ArticleCover = ({ article, size = "md", width = 800, className }: ArticleCoverProps) =>
  article.image ? (
    <img
      src={optimizeImage(article.image, width)}
      alt={article.title}
      loading="lazy"
      className={cn("object-cover", className)}
    />
  ) : (
    <BrandVisual
      icon={categoryIcons[article.category] ?? Scale}
      size={size}
      className={className}
    />
  );

export default ArticleCover;
