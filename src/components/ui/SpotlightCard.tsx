import { HTMLAttributes, MouseEvent } from "react";
import { cn } from "@/lib/utils";

/** Card with a soft gold glow that follows the cursor. */
const SpotlightCard = ({
  className,
  onMouseMove,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
    onMouseMove?.(e);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn("spotlight relative overflow-hidden", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
