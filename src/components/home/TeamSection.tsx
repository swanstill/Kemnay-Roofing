"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Shield } from "lucide-react";

/* ───────────────────────────────────────────────
   ScrollReveal hook
   ─────────────────────────────────────────────── */
function useScrollReveal<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return { ref, visible };
}

/* ───────────────────────────────────────────────
   Placeholder gradients for team photography
   ─────────────────────────────────────────────── */

const IMAGE_GRADIENTS = [
  "linear-gradient(135deg, #1a1a2e 0%, #2d2369 100%)",
  "linear-gradient(135deg, #0f2027 0%, #203a43 100%)",
];

/* ───────────────────────────────────────────────
   Features data
   ─────────────────────────────────────────────── */
const FEATURES = [
  "Friendly Local Team",
  "Honest Advice",
  "Quality Workmanship",
  "Free No-Obligation Quotes",
];

/* ───────────────────────────────────────────────
   Feature Row
   ─────────────────────────────────────────────── */
function FeatureRow({ text, delay }: { text: string; delay: number }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>(delay);

  return (
    <div
      ref={ref}
      className={`flex items-center gap-4 transition-all duration-500 ease-out ${
        visible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-6"
      } group cursor-default`}
      style={{ height: "56px" }}
    >
      {/* Gold circle with white checkmark */}
      <div className="w-[22px] h-[22px] rounded-full flex items-center justify-center shrink-0 bg-[#F2B100] transition-all duration-300 group-hover:bg-[#D99800]">
        <Check className="w-3 h-3 text-white" strokeWidth={3} />
      </div>

      {/* Feature text — gold on hover, slight left movement */}
      <span
        className="text-[#555555] transition-all duration-300 group-hover:text-[#F2B100] group-hover:-translate-x-0.5"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "17px",
          fontWeight: 500,
        }}
      >
        {text}
      </span>
    </div>
  );
}

/* ───────────────────────────────────────────────
   Left Image Gallery
   ─────────────────────────────────────────────── */
function ImageGallery() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>(80);
  const [img1Error, setImg1Error] = useState(false);
  const [img2Error, setImg2Error] = useState(false);

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-[18px] transition-all duration-600 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Image 1 — Roofer action shot (landscape) */}
      <div
        className="relative overflow-hidden rounded-[18px] w-full"
        style={{
          border: "6px solid #FFFFFF",
          boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
          aspectRatio: "16 / 10",
        }}
      >
        {!img1Error ? (
          <Image
            src="/images/team/roofer-action.jpg"
            alt="Roofer working on a flat roof — Kemnay Roofing & Exterior Painting"
            fill
            className="object-cover transition-all duration-300 ease-out hover:scale-[1.03] hover:brightness-[1.03]"
            sizes="(max-width: 1024px) 100vw, 48vw"
            onError={() => setImg1Error(true)}
          />
        ) : (
          <div
            className="w-full h-full transition-transform duration-300 ease-out hover:scale-[1.03]"
            style={{ background: IMAGE_GRADIENTS[0] }}
          />
        )}
      </div>

      {/* Image 2 — Company branded van */}
      <div
        className="relative overflow-hidden rounded-[18px] w-full"
        style={{
          border: "6px solid #FFFFFF",
          boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
          aspectRatio: "16 / 9",
        }}
      >
        {!img2Error ? (
          <Image
            src="/images/team/company-van.jpg"
            alt="Kemnay Roofing branded work van outside a completed home"
            fill
            className="object-cover transition-all duration-300 ease-out hover:scale-[1.03] hover:brightness-[1.03]"
            sizes="(max-width: 1024px) 100vw, 48vw"
            onError={() => setImg2Error(true)}
          />
        ) : (
          <div
            className="w-full h-full transition-transform duration-300 ease-out hover:scale-[1.03]"
            style={{ background: IMAGE_GRADIENTS[1] }}
          />
        )}
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────
   Right Content Card
   ─────────────────────────────────────────────── */
function ContentCard() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>(150);

  return (
    <div
      ref={ref}
      className={`w-full bg-white rounded-[20px] p-8 md:p-12 transition-all duration-600 ease-out h-full ${
        visible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-12"
      }`}
      style={{
        boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
      }}
    >
      {/* ─── Section Label ─── */}
      <div className="flex flex-col items-start">
        <span
          className="text-[#F2B100] uppercase tracking-[1px]"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "18px",
            fontWeight: 600,
          }}
        >
          OUR TEAM
        </span>
        <div
          className="mt-3"
          style={{
            width: "60px",
            height: "3px",
            backgroundColor: "#F2B100",
            borderRadius: "999px",
          }}
        />
      </div>

      {/* ─── Main Heading ─── */}
      <h2
        className="text-[#0D0D0D] font-heading font-bold leading-[1.0] mt-6"
        style={{
          fontSize: "clamp(42px, 6vw, 72px)",
          fontWeight: 800,
        }}
      >
        MEET THE TEAM
      </h2>

      {/* ─── Paragraph 1 ─── */}
      <p
        className="mt-6 leading-relaxed text-[#555555]"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "18px",
          lineHeight: 1.8,
          maxWidth: "95%",
        }}
      >
        Kemnay Roofing &amp; Exterior Painting Ltd is a trusted, family-run
        business serving Aberdeen and the surrounding areas. With over 20 years
        of hands-on experience, we take pride in delivering exceptional roofing
        and exterior painting services that stand the test of time.
      </p>

      {/* ─── Paragraph 2 ─── */}
      <p
        className="mt-5 leading-relaxed text-[#555555]"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "18px",
          lineHeight: 1.8,
          maxWidth: "95%",
        }}
      >
        Every project, big or small, receives the same attention to detail and
        commitment to quality. We believe in honest communication, fair pricing,
        and work we can stand behind — because our reputation matters.
      </p>

      {/* ─── Feature List ─── */}
      <div className="mt-8 space-y-0">
        {FEATURES.map((feature, i) => (
          <div key={feature}>
            <FeatureRow text={feature} delay={300 + i * 80} />
            {i < FEATURES.length - 1 && (
              <div
                className="w-full"
                style={{ height: "1px", backgroundColor: "#EEEEEE" }}
              />
            )}
          </div>
        ))}
      </div>

      {/* ─── CTA Button ─── */}
      <div className="mt-10">
        <Link
          href="/#quote"
          className="inline-flex items-center justify-center gap-3 bg-[#F2B100] text-black font-bold rounded-[10px] transition-all duration-300 hover:bg-[#D99800] hover:-translate-y-0.5 active:scale-[0.98]"
          style={{
            width: "340px",
            maxWidth: "100%",
            height: "64px",
            fontSize: "18px",
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            boxShadow: "0 10px 25px rgba(242,177,0,0.30)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 15px 35px rgba(242,177,0,0.40)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(242,177,0,0.30)";
          }}
        >
          <Shield className="w-5 h-5 text-black" strokeWidth={2.5} />
          GET A FREE QUOTE
        </Link>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────
   Main Section
   ─────────────────────────────────────────────── */
export default function TeamSection() {
  return (
    <section style={{ backgroundColor: "#F8F8F8" }}>
      {/* Section Padding: Desktop 100px, Tablet 80px, Mobile 60px */}
      <div className="pt-[60px] pb-[60px] md:pt-[80px] md:pb-[80px] lg:pt-[100px] lg:pb-[100px]">
        {/* Full width with 24px side padding */}
        <div className="px-6">
          {/* Two-column grid layout: equal height columns */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2"
            style={{ gap: "32px" }}
          >
            {/* Left Column — Image Gallery */}
            <ImageGallery />

            {/* Right Column — Content Card */}
            <ContentCard />
          </div>
        </div>
      </div>
    </section>
  );
}
