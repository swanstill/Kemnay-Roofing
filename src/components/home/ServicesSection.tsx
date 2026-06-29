"use client";

import Link from "next/link";
import { Shield } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import ServiceCard from "@/components/ui/ServiceCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ServicesSection() {
  return (
    <section className="bg-[#FFFFFF]">
      {/* Section Padding: Desktop 90px top/bottom, Mobile 60px top/bottom, L/R 24px */}
      <div
        className="px-6"
        style={{ paddingTop: "60px", paddingBottom: "60px" }}
      >
        {/* @media (min-width: 1024px) overrides for desktop padding */}
        <div className="lg:pt-[90px] lg:pb-[90px]">
          {/* ===== SECTION HEADER ===== */}

          {/* Small Gold Label */}
          <ScrollReveal>
            <div className="text-center">
              <span
                className="text-[#F2B100] uppercase font-medium tracking-[1px]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "18px",
                }}
              >
                OUR SERVICES
              </span>
            </div>
          </ScrollReveal>

          {/* Gold divider (60px wide, 4px height, rounded-full) */}
          <ScrollReveal delay={80}>
            <div className="flex justify-center mt-3">
              <div
                className="bg-[#F2B100] rounded-full"
                style={{ width: "60px", height: "4px" }}
              />
            </div>
          </ScrollReveal>

          {/* Main Heading — Barlow Condensed ExtraBold, 72px → 56px → 42px */}
          <ScrollReveal delay={120}>
            <h2
              className="font-heading font-extrabold text-center leading-[1.0] text-[#0D0D0D] mt-6 tracking-tight"
              style={{
                fontSize: "clamp(42px, 5.5vw, 72px)",
              }}
            >
              ROOFING &amp; EXTERIOR
              <br />
              PAINTING SERVICES
            </h2>
          </ScrollReveal>

          {/* Description — Inter Regular, 20px, #4B4B4B, max-width 700px */}
          <ScrollReveal delay={160}>
            <p
              className="text-center mx-auto mt-5"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "20px",
                color: "#4B4B4B",
                maxWidth: "700px",
                lineHeight: "1.6",
              }}
            >
              Professional roofing, maintenance and exterior painting services
              built to protect, improve and enhance your property with
              long-lasting workmanship.
            </p>
          </ScrollReveal>

          {/* ===== SERVICES GRID ===== */}
          <div
            className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{ gap: "24px" }}
          >
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* ===== CTA BUTTON ===== */}
          <ScrollReveal delay={200}>
            <div className="flex justify-center" style={{ marginTop: "60px" }}>
              <Link
                href="/#quote"
                className="inline-flex items-center justify-center gap-3 bg-[#F2B100] text-[#0D0D0D] font-bold rounded-[10px] transition-all duration-300 ease-out hover:bg-[#D99800] hover:-translate-y-0.5 w-full sm:w-auto"
                style={{
                  maxWidth: "380px",
                  height: "64px",
                  padding: "0 32px",
                  fontSize: "18px",
                  fontFamily: "Inter, sans-serif",
                  boxShadow: "0 12px 25px rgba(242,177,0,0.35)",
                }}
              >
                <Shield className="w-5 h-5" />
                GET A FREE QUOTE
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
