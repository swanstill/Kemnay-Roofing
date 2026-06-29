import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHero({ title, description, breadcrumbs = [] }: PageHeroProps) {
  return (
    <section className="relative bg-kemnay-black py-28 sm:py-36 overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(244,180,0,0.1) 35px, rgba(244,180,0,0.1) 36px)",
          }}
        />
      </div>

      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-kemnay-gold to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 mb-6">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {crumb.href ? (
                  <Link href={crumb.href} className="text-kemnay-white/50 hover:text-kemnay-gold text-sm transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-kemnay-gold text-sm">{crumb.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <ChevronRight className="w-3 h-3 text-kemnay-white/30" />
                )}
              </span>
            ))}
          </nav>
        )}

        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-kemnay-white tracking-wider">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-kemnay-white/60 max-w-2xl text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}
