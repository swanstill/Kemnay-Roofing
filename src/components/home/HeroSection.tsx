"use client";

import Link from "next/link";
import Image from "next/image";
import { Shield, Award, FileText, Star, ChevronRight } from "lucide-react";

const trustFeatures = [
  { icon: Shield, label: "Fully Insured" },
  { icon: Award, label: "Workmanship Guarantee" },
  { icon: FileText, label: "Free Surveys" },
];

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden" style={{ paddingTop: "96px" }}>
      {/* ---- Background image - hidden on very small screens, covers right half ---- */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none z-[1]">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 140% 100% at 30% 50%, white 20%, transparent 65%)",
          }}
        />
      </div>

      {/* Right side image - hidden on mobile */}
      <div className="hidden sm:block absolute top-0 right-0 w-1/2 h-full z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero-bg.webp"
            alt="Premium luxury home with slate roof"
            fill
            className="object-cover object-center"
            priority
            sizes="50vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, white 0%, rgba(255,255,255,0.85) 15%, rgba(255,255,255,0.3) 35%, transparent 55%)",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div
        className="relative z-[2] px-6 flex items-center"
        style={{ minHeight: "clamp(600px, 90vh, 760px)" }}
      >
        <div className="w-full lg:w-1/2 pt-24 sm:pt-28 pb-12 sm:pb-16">
          {/* Eyebrow */}
          <div className="mb-4 sm:mb-5 animate-fade-in-up">
            <span className="text-[#F2B100] uppercase font-semibold tracking-[0.08em] text-[13px] sm:text-sm">
              Roofing &amp; Exterior Painting Specialists in Aberdeen
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="font-heading font-bold text-[#0D0D0D] leading-[0.92] tracking-tight animate-fade-in-up"
            style={{ fontSize: "clamp(40px, 6.5vw, 84px)" }}
          >
            ROOFING SOLUTIONS
            <br />
            <span className="gold-gradient-text">BUILT TO LAST</span>
          </h1>

          <p
            className="mt-5 sm:mt-6 text-[#4B4B4B] text-[17px] sm:text-[20px] leading-relaxed max-w-lg animate-fade-in-up"
            style={{ animationDelay: "100ms", fontFamily: "Inter, sans-serif" }}
          >
            From roof repairs to complete roof replacements, we provide premium
            roofing and exterior painting services you can rely on.
          </p>

          {/* Trust Features Row */}
          <div
            className="flex flex-wrap items-center mt-6 sm:mt-8 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            {trustFeatures.map((feature, i) => (
              <div key={feature.label} className="flex items-center">
                <div className="flex items-center gap-2 px-3 sm:px-5 first:pl-0 last:pr-0">
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#F2B100] shrink-0" strokeWidth={2} />
                  <span className="text-[#0D0D0D] text-[13px] sm:text-[15px] font-medium whitespace-nowrap">
                    {feature.label}
                  </span>
                </div>
                {i < trustFeatures.length - 1 && (
                  <div className="w-px h-4 sm:h-5 bg-gray-300 shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* CTA Row */}
          <div
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-8 sm:mt-10 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center gap-2 bg-[#F2B100] text-black font-bold text-[15px] sm:text-[16px] hover:bg-[#D99B00] transition-all hover:shadow-xl hover:shadow-[#F2B100]/25 active:scale-[0.98] w-full sm:w-auto px-6 sm:px-9 py-4 sm:py-5"
              style={{
                borderRadius: "10px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              GET A FREE QUOTE
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>

            {/* Facebook Recommendation Card */}
            <div className="flex items-center gap-3 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] px-4 sm:px-5 py-3 sm:py-4 border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow shrink-0">
              <svg className="w-7 h-7 sm:w-9 sm:h-9 shrink-0" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
              </svg>
              <div>
                <span className="text-[#0D0D0D] font-bold text-xs sm:text-sm">96% Recommended</span>
                <span className="block text-gray-400 text-[11px] sm:text-xs mt-0.5">Based on 23 Reviews</span>
              </div>
            </div>
          </div>

          {/* Review Summary */}
          <div
            className="flex flex-wrap items-center gap-2 sm:gap-3 mt-6 sm:mt-8 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-[16px] sm:w-[18px] h-[16px] sm:h-[18px] text-[#F2B100] fill-[#F2B100]" />
              ))}
            </div>
            <span className="text-[#4B4B4B] text-[13px] sm:text-[15px] font-medium">
              50+ Verified 5-Star Reviews
            </span>
            <span className="text-gray-400 text-[12px] hidden sm:inline">
              Across Facebook, Google &amp; Yell
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
