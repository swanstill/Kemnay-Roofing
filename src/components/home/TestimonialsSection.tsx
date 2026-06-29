"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Star, Shield } from "lucide-react";
import { REVIEWS, COMPANY } from "@/lib/constants";

/* ───────────────────────────────────────────────
   Deterministic avatar helpers
   ─────────────────────────────────────────────── */
const AVATAR_COLORS = [
  ["#F2B100", "#FEF3C7"],
  ["#1877F2", "#DBEAFE"],
  ["#10B981", "#D1FAE5"],
  ["#8B5CF6", "#EDE9FE"],
  ["#F43F5E", "#FFE4E6"],
  ["#06B6D4", "#CFFAFE"],
];

function hashName(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
  return Math.abs(h);
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function getAvatarColors(name: string) {
  return AVATAR_COLORS[hashName(name) % AVATAR_COLORS.length];
}

/* ───────────────────────────────────────────────
   Review Card Component
   ─────────────────────────────────────────────── */
function ReviewCard({
  name,
  date,
  rating,
  text,
  isVisible,
}: {
  name: string;
  date: string;
  rating: number;
  text: string;
  isVisible: boolean;
}) {
  const [fg, bg] = getAvatarColors(name);
  const initials = getInitials(name);

  return (
    <div
      className={`bg-white rounded-[18px] border border-[#EEEEEE] p-8 min-h-[420px] flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(0,0,0,0.15)] hover:scale-[1.02] ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4"
      }`}
      style={{ boxShadow: "0 12px 35px rgba(0,0,0,0.08)" }}
    >
      {/* ── Customer Header ── */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div
            className="w-[70px] h-[70px] rounded-full flex items-center justify-center text-xl font-bold shrink-0"
            style={{ backgroundColor: bg, color: fg }}
          >
            {initials}
          </div>
          <div>
            <h3
              className="font-heading font-bold text-[36px] leading-none text-[#0D0D0D]"
              style={{ lineHeight: 1 }}
            >
              {name}
            </h3>
            <p
              className="text-[#555555] mt-1"
              style={{ fontFamily: "var(--font-body)", fontSize: "16px" }}
            >
              {date}
            </p>
          </div>
        </div>

        {/* Facebook badge */}
        <div
          className="w-[36px] h-[36px] rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: "#1877F2" }}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* ── Recommendation Badge ── */}
      <div className="flex items-center gap-2 mb-5">
        <span>⭐</span>
        <span
          className="text-[#555555]"
          style={{ fontFamily: "var(--font-body)", fontSize: "15px" }}
        >
          recommends <strong className="text-[#0D0D0D]">Kemnay Roofing</strong>
        </span>
      </div>

      {/* ── Divider ── */}
      <div className="w-full h-[1px] bg-[#EEEEEE] mb-6" />

      {/* ── Gold Quotation Mark ── */}
      <div className="text-[#F2B100] text-[40px] leading-none font-heading font-bold mb-2">
        &ldquo;
      </div>

      {/* ── Review Text ── */}
      <p
        className="text-[#555555] flex-1 leading-relaxed"
        style={{ fontFamily: "var(--font-body)", fontSize: "18px", lineHeight: 1.65 }}
      >
        {text}
      </p>

      {/* ── Star Rating ── */}
      <div className="flex items-center gap-1.5 mt-6 pt-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-6 h-6 ${
              i < rating ? "text-[#F2B100] fill-[#F2B100]" : "text-[#EEEEEE]"
            }`}
            strokeWidth={0.5}
          />
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────
   Main Section
   ─────────────────────────────────────────────── */
export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  /* Responsive items-per-page */
  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      if (w < 768) setItemsPerPage(1);
      else if (w < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const totalPages = Math.ceil(REVIEWS.length / itemsPerPage);
  const canGoPrev = currentPage > 0;
  const canGoNext = currentPage < totalPages - 1;

  const goPrev = () => setCurrentPage((p) => Math.max(0, p - 1));
  const goNext = () => setCurrentPage((p) => Math.min(totalPages - 1, p + 1));

  const visibleReviews = REVIEWS.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section
      className="bg-white"
      style={{
        paddingTop: "70px",
        paddingBottom: "70px",
      }}
    >
      <div
        className="mx-auto max-w-[1280px] px-6"
        ref={containerRef}
      >
        {/* ─── Section Label ─── */}
        <div className="flex items-center justify-center gap-5 mb-6">
          <div className="w-[60px] h-[2px] bg-[#F2B100]" />
          <span
            className="text-[#F2B100] uppercase tracking-[1px]"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "18px",
              fontWeight: 500,
            }}
          >
            CUSTOMER REVIEWS
          </span>
          <div className="w-[60px] h-[2px] bg-[#F2B100]" />
        </div>

        {/* ─── Main Heading ─── */}
        <h2
          className="text-center text-[#0D0D0D] font-heading font-bold leading-[1.0] mx-auto max-w-4xl"
          style={{
            fontSize: "clamp(42px, 7vw, 72px)",
            fontWeight: 700,
          }}
        >
          SEE WHAT OUR CUSTOMERS SAY
        </h2>

        {/* ─── Facebook Rating Summary ─── */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-8 mb-12">
          <div className="flex items-center gap-4">
            {/* Facebook icon */}
            <div
              className="w-[60px] h-[60px] rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: "#1877F2" }}
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <div
                className="text-[#F2B100] font-bold leading-none"
                style={{ fontSize: "28px" }}
              >
                96% Recommended
              </div>
              <div
                className="text-[#555555] mt-1"
                style={{ fontFamily: "var(--font-body)", fontSize: "18px" }}
              >
                Based on 21 Facebook Reviews
              </div>
            </div>
          </div>
        </div>

        {/* ─── Review Carousel ─── */}
        <div className="relative">
          {/* Left Arrow — hidden on mobile */}
          <button
            onClick={goPrev}
            disabled={!canGoPrev}
            className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[28px] z-10 w-[56px] h-[56px] rounded-full items-center justify-center transition-all duration-200 ${
              canGoPrev
                ? "bg-[#1A1A1A] cursor-pointer hover:bg-[#F2B100] hover:scale-105"
                : "bg-[#1A1A1A]/40 cursor-not-allowed"
            }`}
            style={{ boxShadow: "0 10px 25px rgba(0,0,0,0.25)" }}
            aria-label="Previous reviews"
          >
            <ChevronLeft
              className={`w-6 h-6 transition-colors ${
                canGoPrev ? "text-[#F2B100] group-hover:text-black" : "text-white/30"
              }`}
              style={canGoPrev ? {} : { color: "rgba(255,255,255,0.3)" }}
            />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {visibleReviews.map((review, i) => (
              <ReviewCard
                key={review.name + review.date}
                name={review.name}
                date={review.date}
                rating={review.rating}
                text={review.text}
                isVisible={true}
              />
            ))}
          </div>

          {/* Pagination Dots — visible on mobile */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-6 md:hidden">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === currentPage
                      ? "bg-[#F2B100] w-6"
                      : "bg-[#D1D5DB]"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
          )}

          {/* Right Arrow — hidden on mobile */}
          <button
            onClick={goNext}
            disabled={!canGoNext}
            className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-[28px] z-10 w-[56px] h-[56px] rounded-full items-center justify-center transition-all duration-200 ${
              canGoNext
                ? "bg-[#1A1A1A] cursor-pointer hover:bg-[#F2B100] hover:scale-105"
                : "bg-[#1A1A1A]/40 cursor-not-allowed"
            }`}
            style={{ boxShadow: "0 10px 25px rgba(0,0,0,0.25)" }}
            aria-label="Next reviews"
          >
            <ChevronRight
              className={`w-6 h-6 transition-colors ${
                canGoNext ? "text-[#F2B100]" : "text-white/30"
              }`}
            />
          </button>
        </div>

        {/* ─── CTA Button ─── */}
        <div className="flex flex-col items-center gap-4 mt-[60px]">
          <Link
            href="/#quote"
            className="inline-flex items-center justify-center gap-3 bg-[#F2B100] text-black font-bold rounded-[10px] transition-all duration-300 hover:bg-[#D99800] hover:-translate-y-0.5 active:scale-[0.98] w-full max-w-[380px]"
            style={{
              height: "64px",
              fontSize: "18px",
              boxShadow: "0 12px 30px rgba(242,177,0,0.35)",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
            }}
          >
            <Shield className="w-5 h-5 text-black" strokeWidth={2.5} />
            GET A FREE QUOTE
          </Link>
          <span
            className="text-[#555555]"
            style={{ fontFamily: "var(--font-body)", fontSize: "16px" }}
          >
            No obligation. Fast response.
          </span>
        </div>
      </div>
    </section>
  );
}
