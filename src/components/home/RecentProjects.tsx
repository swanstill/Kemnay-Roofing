"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

/* ───────────────────────────────────────────────
   Placeholder fallback — minimal dark gradient
   (only shows when no real image exists)
   ─────────────────────────────────────────────── */
const GRADIENTS = [
  "linear-gradient(135deg, #0f0c29 0%, #302b63 100%)",
  "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
  "linear-gradient(135deg, #141e30 0%, #243b55 100%)",
  "linear-gradient(135deg, #1b1b3a 0%, #2d1b69 100%)",
  "linear-gradient(135deg, #0d0d0d 0%, #1a1a2e 100%)",
  "linear-gradient(135deg, #0f2027 0%, #203a43 100%)",
];

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
   Gallery Image
   ─────────────────────────────────────────────── */
function GalleryImage({
  image,
  title,
  colSpan,
  index,
}: {
  image?: string;
  title: string;
  colSpan?: string;
  index: number;
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>(index * 100);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-[14px] transition-all duration-500 ease-out ${
        colSpan || "lg:col-span-1"
      } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{
        height: "220px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.20)",
      }}
    >
      {image ? (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-[400ms] ease-out hover:scale-[1.05]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
        />
      ) : (
        <div
          className="w-full h-full"
          style={{ background: GRADIENTS[index % GRADIENTS.length] }}
        />
      )}
    </div>
  );
}

/* ───────────────────────────────────────────────
   Column‑span pattern — desktop 4‑col grid
   ─────────────────────────────────────────────── */
const SPAN_PATTERN: string[] = [
  "lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
];

/* ───────────────────────────────────────────────
   Main Section
   ─────────────────────────────────────────────── */
export default function RecentProjects() {
  return (
    <section style={{ backgroundColor: "#0D0D0D" }}>
      <div
        className="mx-auto px-6 pt-[60px] pb-[60px] md:pt-[80px] md:pb-[80px] lg:pt-[100px] lg:pb-[100px]"
        style={{ maxWidth: "1280px" }}
      >
        {/* ─── Section Label ─── */}
        <div className="flex flex-col items-center text-center mb-4">
          <span
            className="text-[#F2B100] uppercase tracking-[1px]"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            RECENT PROJECTS
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
          className="text-center text-white font-heading font-bold leading-[1.0] mx-auto"
          style={{
            fontSize: "clamp(42px, 7vw, 72px)",
            fontWeight: 700,
            marginTop: "28px",
            maxWidth: "900px",
          }}
        >
          RECENT WORK COMPLETED
        </h2>

        {/* ─── Supporting Text ─── */}
        <p
          className="text-center mx-auto mt-5"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "20px",
            color: "#C8C8C8",
            maxWidth: "700px",
            lineHeight: 1.6,
          }}
        >
          Quality workmanship delivered across residential and commercial roofing
          projects. Explore some of our latest completed work.
        </p>

        {/* ─── Image Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {PROJECTS.map((project, i) => (
            <GalleryImage
              key={project.id}
              title={project.title}
              image={project.image}
              colSpan={SPAN_PATTERN[i]}
              index={i}
            />
          ))}
        </div>

        {/* ─── CTA Button ─── */}
        <div className="flex justify-center mt-[60px]">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center gap-3 bg-[#F2B100] text-black font-bold rounded-[10px] transition-all duration-300 hover:bg-[#D99800] hover:-translate-y-0.5 active:scale-[0.98]"
            style={{
              width: "300px",
              height: "64px",
              fontSize: "18px",
              boxShadow: "0 12px 30px rgba(242,177,0,0.35)",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
            }}
          >
            VIEW MORE PROJECTS
            <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
