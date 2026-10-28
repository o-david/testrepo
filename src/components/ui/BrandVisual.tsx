import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface BrandVisualProps {
  icon: LucideIcon;
  /** Optional caption shown along the bottom edge. */
  label?: string;
  /** "sm" drops the decorative rings for thumbnail-sized uses. */
  size?: "sm" | "md" | "lg";
  className?: string;
}

const iconSizes = {
  sm: { box: "w-10 h-10 rounded-lg", icon: "w-5 h-5" },
  md: { box: "w-16 h-16 rounded-2xl", icon: "w-8 h-8" },
  lg: { box: "w-24 h-24 rounded-3xl", icon: "w-12 h-12" },
};

/**
 * Navy and gold illustrated panel used where the firm has no photograph,
 * in place of generic stock imagery.
 */
const BrandVisual = ({ icon: Icon, label, size = "md", className }: BrandVisualProps) => {
  const sizes = iconSizes[size];

  return (
    <div
      className={cn("relative isolate overflow-hidden bg-navy-gradient", className)}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <div className="absolute inset-0 bg-grid-gold opacity-[0.07] mask-radial" />
      <div className="absolute -right-[20%] -top-[30%] w-[70%] aspect-square rounded-full bg-accent/25 blur-3xl animate-pulse-glow" />
      <div className="absolute -left-[25%] -bottom-[40%] w-[70%] aspect-square rounded-full bg-[hsl(var(--navy-blue)/0.45)] blur-3xl" />

      <Icon
        className="absolute -right-[6%] -bottom-[12%] w-[55%] h-auto aspect-square text-white/[0.04]"
        strokeWidth={1}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          {size !== "sm" && (
            <>
              <span className="absolute w-[220%] aspect-square rounded-full border border-dashed border-accent/25 animate-spin-slow" />
              <span className="absolute w-[340%] aspect-square rounded-full border border-accent/10" />
            </>
          )}
          <span
            className={cn(
              "relative flex items-center justify-center border border-accent/40 bg-accent/15 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
              sizes.box,
            )}
          >
            <Icon className={cn("text-accent", sizes.icon)} strokeWidth={1.5} />
          </span>
        </div>
      </div>

      {label && size !== "sm" && (
        <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 px-6 py-5">
          <span className="h-px w-6 bg-accent" />
          <span className="text-xs uppercase tracking-[0.2em] text-white/70">{label}</span>
        </div>
      )}
    </div>
  );
};

export default BrandVisual;
