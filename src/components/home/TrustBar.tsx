"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { COMPANY } from "@/lib/constants";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: `${COMPANY.reviewCount}+`, label: "Happy Customers" },
  { value: COMPANY.rating, label: "Star Rating" },
  { value: "200+", label: "Projects Completed" },
];

export default function TrustBar() {
  const { ref, isRevealed } = useScrollReveal({ threshold: 0.3 });

  return (
    <section className="bg-kemnay-dark border-y border-white/5">
      <div
        ref={ref}
        className={cn(
          "px-6 sm:px-8 lg:px-12 xl:px-16 py-10",
          "scroll-reveal",
          isRevealed && "revealed"
        )}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-3xl sm:text-4xl text-kemnay-gold font-bold tracking-wide">
                {stat.value}
              </div>
              <div className="text-kemnay-white/50 text-xs sm:text-sm mt-1 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
