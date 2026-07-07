"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  ClipboardList,
  Users,
  Award,
  Info,
  MapPin,
  CheckCircle,
  Check,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

/* ───────────────────────────────────────────────
   Pricing Data — Gutter Cleaning (by Property Type)
   ─────────────────────────────────────────────── */
const pricingRows = [
  {
    propertyType: "Bungalow",
    priceRange: "£60 – £100",
    notes: "Typically single-storey with fewer gutters. Quick and straightforward service.",
    stepLabel: "1",
  },
  {
    propertyType: "Terraced House",
    priceRange: "£70 – £130",
    notes: "Shared wall properties, standard gutter layout. Usually completed same day.",
    stepLabel: "2",
  },
  {
    propertyType: "Semi-Detached",
    priceRange: "£90 – £150",
    notes: "Two sides of gutting. May include garage or conservatory roof gutters.",
    stepLabel: "3",
  },
  {
    propertyType: "Detached House",
    priceRange: "£130 – £220",
    notes: "Full perimeter guttering. Larger properties may take half a day.",
    stepLabel: "4",
  },
  {
    propertyType: "Large / Commercial",
    priceRange: "£180 – £300+",
    notes: "Multi-storey or extensive guttering. Scaffolding may be required.",
    stepLabel: "5",
  },
];

const propertyIcons = [
  "/images/services/Bungalow.png",
  "/images/services/Terraced.png",
  "/images/services/semi-detached.png",
  "/images/services/Detached.png",
  "/images/services/Commercial-Building.png",
];

const factorsAffectingPrice = [
  "Number of gutters and downpipes",
  "Property height and accessibility",
  "Level of blockage and debris",
  "Condition of existing guttering",
  "Scaffolding or cherry picker needs",
  "Frequency of cleaning (regular customers save)",
];

const serviceArea = [
  "Aberdeen and surrounding areas",
  "All Aberdeenshire postcodes",
  "Same-day availability for emergencies",
  "Free site surveys included",
  "No hidden fees — ever",
];

const trustItems = [
  { icon: Shield, text: "Fully Insured" },
  { icon: ClipboardList, text: "Free Quotes" },
  { icon: Award, text: "Competitive Prices" },
  { icon: Users, text: "Local Family Business" },
];

/* ───────────────────────────────────────────────
   Step Icon Component
   ─────────────────────────────────────────────── */
function StepIcon({ step, isLast }: { step: string; isLast?: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold transition-all duration-300"
        style={{
          backgroundColor: "#F4B400",
          color: "#071A2E",
          fontFamily: "Poppins, sans-serif",
          boxShadow: "0 2px 8px rgba(244,180,0,0.3)",
        }}
      >
        {step}
      </div>
      {!isLast && (
        <div
          className="w-[2px] h-6 mt-1 rounded-full"
          style={{ backgroundColor: "#F4B400" }}
        />
      )}
    </div>
  );
}

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
              style={{ backgroundColor: "#F4B400", color: "#071A2E" }}
            >
              Affordable Gutter Cleaning Prices
            </span>
            <h2
              className="font-heading font-bold leading-[1.1] tracking-wide"
              style={{ color: "#071A2E", fontSize: "clamp(28px, 4.5vw, 54px)" }}
            >
              Typical Gutter Cleaning Prices
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
              Transparent pricing based on typical property types across Aberdeen
              and Aberdeenshire. Every property is unique — contact us for an
              accurate, no-obligation quote tailored to your home.
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
            {/* ─── Table Header (Desktop/Tablet) ─── */}
            <div
              className="hidden sm:grid sm:grid-cols-[60px_1fr_200px_1fr] items-center"
              style={{ backgroundColor: "#071A2E", height: "90px" }}
            >
              <div className="flex items-center justify-center">
                <span
                  className="text-[#F4B400]/60 font-bold text-[12px] uppercase tracking-wider"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Step
                </span>
              </div>
              <div className="flex items-center gap-3 px-4">
                <Image
                  src="/images/services/Bungalow.png"
                  alt="Property"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
                <span
                  className="text-white font-bold text-[15px]"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Property Type
                </span>
              </div>
              <div className="text-center">
                <span
                  className="inline-block font-bold text-[15px] px-5 py-2 rounded-full"
                  style={{ backgroundColor: "#F4B400", color: "#071A2E", fontFamily: "Poppins, sans-serif" }}
                >
                  Price Range
                </span>
              </div>
              <div className="px-6">
                <span
                  className="text-white/70 font-medium text-[14px]"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Notes
                </span>
              </div>
            </div>

            {/* ─── Pricing Rows (Desktop/Tablet) ─── */}
            <div className="hidden sm:block">
              {pricingRows.map((row, i) => {
                const isEven = i % 2 === 0;
                const isLast = i === pricingRows.length - 1;
                return (
                  <div
                    key={row.propertyType}
                    className="group grid sm:grid-cols-[60px_1fr_200px_1fr] items-center transition-all duration-300 cursor-default"
                    style={{
                      backgroundColor: isEven ? "#FFFFFF" : "#F8F9FB",
                      borderTop: "1px solid #EAEAEA",
                      minHeight: "100px",
                      borderLeft: "4px solid transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.06)";
                      e.currentTarget.style.borderLeftColor = "#F4B400";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.borderLeftColor = "transparent";
                    }}
                  >
                    {/* Step Icon */}
                    <div className="flex items-center justify-center">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold transition-all duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: "#F4B400",
                          color: "#071A2E",
                          fontFamily: "Poppins, sans-serif",
                          boxShadow: "0 2px 8px rgba(244,180,0,0.3)",
                        }}
                      >
                        {row.stepLabel}
                      </div>
                    </div>
                    {/* Property Type */}
                    <div className="flex items-center gap-4 px-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
                        style={{ backgroundColor: "rgba(244,180,0,0.1)" }}
                      >
                        {i === 0 && <Image src={propertyIcons[0]} alt="Bungalow" width={35} height={35} className="w-[35px] h-[35px] object-contain" />}
                        {i === 1 && <Image src={propertyIcons[1]} alt="Terraced House" width={35} height={35} className="w-[35px] h-[35px] object-contain" />}
                        {i === 2 && <Image src={propertyIcons[2]} alt="Semi-Detached" width={35} height={35} className="w-[35px] h-[35px] object-contain" />}
                        {i === 3 && <Image src={propertyIcons[3]} alt="Detached House" width={35} height={35} className="w-[35px] h-[35px] object-contain" />}
                        {i === 4 && <Image src={propertyIcons[4]} alt="Commercial" width={35} height={35} className="w-[35px] h-[35px] object-contain" />}
                      </div>
                      <span
                        className="font-semibold text-[16px]"
                        style={{ color: "#333", fontFamily: "Poppins, sans-serif" }}
                      >
                        {row.propertyType}
                      </span>
                    </div>
                    {/* Price Range */}
                    <div className="text-center px-4">
                      <span
                        className="inline-block font-bold text-[16px] px-5 py-2.5 rounded-full transition-transform duration-300 group-hover:scale-[1.03]"
                        style={{ backgroundColor: "#F4B400", color: "#071A2E", fontFamily: "Poppins, sans-serif" }}
                      >
                        {row.priceRange}
                      </span>
                    </div>
                    {/* Notes */}
                    <div className="px-6">
                      <span
                        className="text-[15px] leading-relaxed"
                        style={{ color: "#666", fontFamily: "Inter, sans-serif" }}
                      >
                        {row.notes}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ─── Pricing Cards (Mobile — vertical step layout) ─── */}
            <div className="sm:hidden p-5 space-y-6">
              {pricingRows.map((row, i) => {
                const isLast = i === pricingRows.length - 1;
                return (
                  <div key={row.propertyType} className="flex gap-4">
                    {/* Step indicator with connector */}
                    <div className="flex flex-col items-center">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold shrink-0"
                        style={{
                          backgroundColor: "#F4B400",
                          color: "#071A2E",
                          fontFamily: "Poppins, sans-serif",
                          boxShadow: "0 2px 8px rgba(244,180,0,0.3)",
                        }}
                      >
                        {row.stepLabel}
                      </div>
                      {!isLast && (
                        <div
                          className="w-[2px] flex-1 mt-2 rounded-full"
                          style={{ backgroundColor: "rgba(244,180,0,0.3)" }}
                        />
                      )}
                    </div>
                    {/* Card content */}
                    <div
                      className="flex-1 rounded-2xl p-5 transition-all duration-300"
                      style={{
                        backgroundColor: "#FFFFFF",
                        border: "1px solid #EAEAEA",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.04)",
                      }}
                    >
                      {/* Property name + icon row */}
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                          style={{ backgroundColor: "rgba(244,180,0,0.1)" }}
                        >
                          {i === 0 && <Image src={propertyIcons[0]} alt="Bungalow" width={22} height={22} className="w-[22px] h-[22px] object-contain" />}
                          {i === 1 && <Image src={propertyIcons[1]} alt="Terraced House" width={22} height={22} className="w-[22px] h-[22px] object-contain" />}
                          {i === 2 && <Image src={propertyIcons[2]} alt="Semi-Detached" width={22} height={22} className="w-[22px] h-[22px] object-contain" />}
                          {i === 3 && <Image src={propertyIcons[3]} alt="Detached House" width={22} height={22} className="w-[22px] h-[22px] object-contain" />}
                          {i === 4 && <Image src={propertyIcons[4]} alt="Commercial" width={22} height={22} className="w-[22px] h-[22px] object-contain" />}
                        </div>
                        <span
                          className="font-semibold text-[15px]"
                          style={{ color: "#333", fontFamily: "Poppins, sans-serif" }}
                        >
                          {row.propertyType}
                        </span>
                      </div>
                      {/* Price badge — full width centered */}
                      <div className="mb-3">
                        <span
                          className="inline-block font-bold text-[18px] px-6 py-2 rounded-full w-full text-center"
                          style={{ backgroundColor: "#F4B400", color: "#071A2E", fontFamily: "Poppins, sans-serif" }}
                        >
                          {row.priceRange}
                        </span>
                      </div>
                      {/* Notes */}
                      <p className="text-[14px] leading-relaxed" style={{ color: "#666", fontFamily: "Inter, sans-serif" }}>
                        {row.notes}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* ═══ Information Cards ═══ */}
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Card 1: Factors Affecting Price */}
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
                  style={{ backgroundColor: "rgba(244,180,0,0.1)" }}
                >
                  <Info className="w-6 h-6" style={{ color: "#F4B400" }} />
                </div>
                <h3
                  className="font-heading font-bold text-[22px] tracking-wide"
                  style={{ color: "#071A2E" }}
                >
                  Factors Affecting Price
                </h3>
              </div>
              <ul className="space-y-3">
                {factorsAffectingPrice.map((factor) => (
                  <li key={factor} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#F4B400" }} />
                    <span className="text-[15px]" style={{ color: "#555", fontFamily: "Inter, sans-serif" }}>
                      {factor}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: Service Area */}
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
                  style={{ backgroundColor: "rgba(244,180,0,0.1)" }}
                >
                  <MapPin className="w-6 h-6" style={{ color: "#F4B400" }} />
                </div>
                <h3
                  className="font-heading font-bold text-[22px] tracking-wide"
                  style={{ color: "#071A2E" }}
                >
                  Service Area
                </h3>
              </div>
              <ul className="space-y-3">
                {serviceArea.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#F4B400" }} />
                    <span className="text-[15px]" style={{ color: "#555", fontFamily: "Inter, sans-serif" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* ═══ Trust Bar ═══ */}
        <ScrollReveal delay={300}>
          <div
            className="grid grid-cols-2 lg:grid-cols-4"
            style={{
              backgroundColor: "#071A2E",
              borderRadius: "16px",
            }}
          >
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.text}
                  className="flex items-center justify-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-4 sm:py-0 sm:h-[80px]"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" style={{ color: "#F4B400" }} />
                  <span
                    className="text-white font-medium text-[12px] sm:text-[13px] lg:text-[14px]"
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
              className="inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(244,180,0,0.4)] hover:scale-105"
              style={{
                backgroundColor: "#F4B400",
                color: "#071A2E",
                height: "60px",
                padding: "0 48px",
                fontSize: "17px",
                fontFamily: "Poppins, sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#071A2E";
                e.currentTarget.style.color = "#F4B400";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#F4B400";
                e.currentTarget.style.color = "#071A2E";
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
