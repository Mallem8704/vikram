import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        align === "right" && "items-end text-right",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-3",
            isDark ? "text-gold/80" : "text-gold"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-serif text-display-sm md:text-display-md font-semibold",
          isDark ? "text-ivory" : "text-black"
        )}
      >
        {title}
      </h2>
      {align === "center" ? (
        <span className="gold-divider-center mt-3" />
      ) : (
        <span className="gold-divider mt-3" />
      )}
      {subtitle && (
        <p
          className={cn(
            "font-sans text-base md:text-lg leading-relaxed max-w-2xl mt-3",
            isDark ? "text-ivory/60" : "text-brown-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
