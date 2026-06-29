"use client";

import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({ title, subtitle, light = false, className }: SectionHeadingProps) {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={cn(
        "scroll-reveal",
        isRevealed && "revealed",
        className
      )}
    >
      <h2
        className={cn(
          "font-heading text-4xl sm:text-5xl md:text-6xl tracking-wide text-kemnay-black font-bold",
          light && "text-kemnay-white"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg max-w-2xl leading-relaxed",
            light ? "text-kemnay-white/60" : "text-kemnay-medium"
          )}
        >
          {subtitle}
        </p>
      )}
      <div className="mt-4 w-16 h-1 bg-kemnay-gold rounded-full" />
    </div>
  );
}
