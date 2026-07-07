"use client";

import Link from "next/link";
import {
  Search,
  Droplets,
  Wrench,
  ShieldCheck,
  ClipboardList,
  Info,
  MapPin,
  CheckCircle,
  Shield,
  Award,
  Users,
  Clock,
  Home,
  Building2,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

/* ───────────────────────────────────────────────
   Pricing Data — Gutter Cleaning
   ─────────────────────────────────────────────── */
const pricingRows = [
  {
    icon: Search,
    service: "Gutter Inspection",
    price: "£40 – £80",
    details: "Full gutter assessment with condition report.",
  },
  {
    icon: Droplets,
    service: "Standard Gutter Cleaning",
    price: "£60 – £120",
    details: "Clearing leaves, moss, and debris from gutters.",
  },
  {
    icon: Wrench,
    service: "Gutter & Downpipe Unblocking",
    price: "£80 – £150",
    details: "Flushing and clearing blocked downpipes.",
  },
  {
    icon: ShieldCheck,
    service: "Full Gutter Service",
    price: "£120 – £220",
    details: "Clean, inspection, minor repairs, and report.",
  },
  {
    icon: Building2,
    service: "Commercial Gutter Cleaning",
    price: "£200 – £500+",
    details: "Multi-storey and large commercial properties.",
  },
];

const pricingFactors = [
  "Number of gutters",
  "Property height",
  "Level of blockage",
  "Downpipe condition",
  "Accessibility",
  "Scaffolding requirements",
  "Frequency of cleaning",
  "Emergency call-out",
];

const trustItems = [
  { icon: Shield, text: "Fully Insured" },
  { icon: ClipboardList, text: "Free Quotations" },
  { icon: Users, text: "Local Roofing Experts" },
  { icon: Award, text: "10+ Years Experience" },
];

/* ───────────────────────────────────────────────
   Component
   ─────────────────────────────────────────────── */
export default function PricingSection() {
  return (
    <section
      className="relative"
      style={{ backgroundColor: "#F8F9FB", paddingTop: "90px", paddingBottom: "90px" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ═══ Section Header ═══ */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span
              className="inline-block text-[13px] font-semibold uppercase tracking-[0.15em] rounded-full px-5 py-2 mb-5"
              style={{ backgroundColor: "#FFC400", color: "#071B33" }}
            >
              Gutter Cleaning Price Guide
            </span>
            <h2
              className="font-heading font-bold leading-[1.1] tracking-wide"
              style={{ color: "#071B33", fontSize: "clamp(28px, 4.5vw, 54px)" }}
            >
              Gutter Cleaning Pricing Guide
            </h2>
            <p
              className="mx-auto mt-5 leading-relaxed"
              style={{
                color: "#555",
                maxWidth: "700px",
                fontSize: "17px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Transparent pricing with no hidden costs. Every property is different,
              but these typical price ranges help you understand what to expect.
            </p>
          </div>
        </ScrollReveal>

        {/* ═══ Pricing Table Card ═══ */}
        <ScrollReveal delay={100}>
          <div
            className="overflow-hidden mb-12"
            style={{
              borderRadius: "24px",
              boxShadow: "0 25px 60px rgba(0,0,0,.08)",
            }}
          >
            {/* ─── Table Header ─── */}
            <div
              className="hidden sm:grid sm:grid-cols-[1fr_200px_1fr] items-center"
              style={{ backgroundColor: "#071B33", height: "90px" }}
            >
              <div className="flex items-center gap-3 px-8">
                <Home className="w-5 h-5" style={{ color: "#FFC400" }} />
                <span className="text-white font-bold text-[15px]" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Gutter Service
                </span>
              </div>
              <div className="text-center">
                <span
                  className="inline-block font-bold text-[15px] px-5 py-2 rounded-full"
                  style={{ backgroundColor: "#FFC400", color: "#071B33", fontFamily: "Poppins, sans-serif" }}
                >
                  Typical Price
                </span>
              </div>
              <div className="px-8">
                <span className="text-white/70 font-medium text-[14px]" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Details
                </span>
              </div>
            </div>

            {/* ─── Pricing Rows (Desktop/Tablet) ─── */}
            <div className="hidden sm:block">
              {pricingRows.map((row, i) => {
                const Icon = row.icon;
                const isEven = i % 2 === 0;
                return (
                  <div
                    key={row.service}
                    className="group grid sm:grid-cols-[1fr_200px_1fr] items-center transition-all duration-300 cursor-default"
                    style={{
                      backgroundColor: isEven ? "#FFFFFF" : "#F8F9FB",
                      borderTop: "1px solid #EAEAEA",
                      minHeight: "100px",
                      borderLeft: "4px solid transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.06)";
                      e.currentTarget.style.borderLeftColor = "#FFC400";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.borderLeftColor = "transparent";
                    }}
                  >
                    <div className="flex items-center gap-4 px-8">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
                        style={{ backgroundColor: "rgba(255,196,0,0.1)" }}
                      >
                        <Icon className="w-5 h-5" style={{ color: "#FFC400" }} />
                      </div>
                      <span className="font-semibold text-[16px]" style={{ color: "#333", fontFamily: "Poppins, sans-serif" }}>
                        {row.service}
                      </span>
                    </div>
                    <div className="text-center px-4">
                      <span
                        className="inline-block font-bold text-[16px] px-5 py-2.5 rounded-full transition-transform duration-300 group-hover:scale-[1.03]"
                        style={{ backgroundColor: "#FFC400", color: "#071B33", fontFamily: "Poppins, sans-serif" }}
                      >
                        {row.price}
                      </span>
                    </div>
                    <div className="px-8">
                      <span className="text-[15px] leading-relaxed" style={{ color: "#666", fontFamily: "Inter, sans-serif" }}>
                        {row.details}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ─── Pricing Cards (Mobile) ─── */}
            <div className="sm:hidden space-y-4 p-4">
              {pricingRows.map((row) => {
                const Icon = row.icon;
                return (
                  <div
                    key={row.service}
                    className="rounded-2xl p-5 transition-all duration-300"
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #EAEAEA",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.04)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "rgba(255,196,0,0.1)" }}
                      >
                        <Icon className="w-5 h-5" style={{ color: "#FFC400" }} />
                      </div>
                      <span className="font-semibold text-[15px]" style={{ color: "#333", fontFamily: "Poppins, sans-serif" }}>
                        {row.service}
                      </span>
                    </div>
                    <div className="mb-3">
                      <span
                        className="inline-block font-bold text-[17px] px-5 py-2 rounded-full"
                        style={{ backgroundColor: "#FFC400", color: "#071B33", fontFamily: "Poppins, sans-serif" }}
                      >
                        {row.price}
                      </span>
                    </div>
                    <p className="text-[14px] leading-relaxed" style={{ color: "#666", fontFamily: "Inter, sans-serif" }}>
                      {row.details}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* ═══ Information Cards ═══ */}
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Card 1: Factors */}
            <div
              className="p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "24px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "rgba(255,196,0,0.1)" }}
                >
                  <Info className="w-6 h-6" style={{ color: "#FFC400" }} />
                </div>
                <h3
                  className="font-heading font-bold text-[22px] tracking-wide"
                  style={{ color: "#071B33" }}
                >
                  Factors That Affect Pricing
                </h3>
              </div>
              <ul className="space-y-3">
                {pricingFactors.map((factor) => (
                  <li key={factor} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#FFC400" }} />
                    <span className="text-[15px]" style={{ color: "#555", fontFamily: "Inter, sans-serif" }}>
                      {factor}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: Please Note */}
            <div
              className="p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "24px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "rgba(255,196,0,0.1)" }}
                >
                  <MapPin className="w-6 h-6" style={{ color: "#FFC400" }} />
                </div>
                <h3
                  className="font-heading font-bold text-[22px] tracking-wide"
                  style={{ color: "#071B33" }}
                >
                  Please Note
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#FFC400" }} />
                  <span className="text-[15px] leading-relaxed" style={{ color: "#555", fontFamily: "Inter, sans-serif" }}>
                    These prices are average estimates only.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#FFC400" }} />
                  <span className="text-[15px] leading-relaxed" style={{ color: "#555", fontFamily: "Inter, sans-serif" }}>
                    Every property&apos;s guttering is unique.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#FFC400" }} />
                  <span className="text-[15px] leading-relaxed" style={{ color: "#555", fontFamily: "Inter, sans-serif" }}>
                    We provide <strong className="font-semibold" style={{ color: "#333" }}>FREE inspections</strong> and no-obligation quotations.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#FFC400" }} />
                  <span className="text-[15px] leading-relaxed" style={{ color: "#555", fontFamily: "Inter, sans-serif" }}>
                    Final pricing depends on inspection and blockage level.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* ═══ Trust Bar ═══ */}
        <ScrollReveal delay={300}>
          <div
            className="grid grid-cols-2 lg:grid-cols-4"
            style={{
              backgroundColor: "#071B33",
              borderRadius: "16px",
              height: "80px",
            }}
          >
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.text}
                  className="flex items-center justify-center gap-2.5 px-4"
                >
                  <Icon className="w-5 h-5 shrink-0" style={{ color: "#FFC400" }} />
                  <span
                    className="text-white font-medium text-[14px] whitespace-nowrap"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* ═══ CTA ═══ */}
        <ScrollReveal delay={400}>
          <div className="text-center mt-12">
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,196,0,0.4)] hover:scale-105"
              style={{
                backgroundColor: "#FFC400",
                color: "#071B33",
                height: "60px",
                padding: "0 48px",
                fontSize: "17px",
                fontFamily: "Poppins, sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#071B33";
                e.currentTarget.style.color = "#FFC400";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FFC400";
                e.currentTarget.style.color = "#071B33";
              }}
            >
              Get Your Free Gutter Quote
            </Link>
            <p
              className="mt-4 text-[14px]"
              style={{ color: "#888", fontFamily: "Inter, sans-serif" }}
            >
              Most quotes delivered within 24 hours.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
