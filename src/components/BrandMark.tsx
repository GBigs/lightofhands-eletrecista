import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses: Record<NonNullable<BrandMarkProps["size"]>, string> = {
  sm: "h-10 w-10 text-sm",
  md: "h-12 w-12 text-base",
  lg: "h-16 w-16 text-xl",
};

const BrandMark = ({ className, size = "md" }: BrandMarkProps) => {
  return (
    <div
      className={cn(
        "rounded-full border border-primary/50 bg-secondary text-primary font-black uppercase flex items-center justify-center shadow-md",
        sizeClasses[size],
        className,
      )}
      aria-hidden="true"
    >
      LH
    </div>
  );
};

export default BrandMark;
