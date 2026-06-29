"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Shield,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

/* ───────────────────────────────────────────────
   Data
   ─────────────────────────────────────────────── */
const SERVICE_LINKS = [
  { label: "Roof Repairs", href: "/services/roof-repairs" },
  { label: "New Roofs", href: "/services/new-roofs" },
  { label: "Flat Roofs", href: "/services/flat-roofing" },
  { label: "Exterior Painting", href: "/services/exterior-painting" },
  { label: "Guttering", href: "/services/guttering" },
  { label: "Roof Maintenance", href: "/services/roof-cleaning" },
];

const COMPANY_LINKS = [
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "https://business.yell.com/websites-privacy-cookie-policy/" },
  { label: "Terms of Use", href: "https://business.yell.com/legal/terms-of-use/" },
  { label: "Trading Terms", href: "https://business.yell.com/legal/trading-terms/" },
];

/* ───────────────────────────────────────────────
   ScrollReveal hook
   ─────────────────────────────────────────────── */
function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

/* ───────────────────────────────────────────────
   Underline sub-component
   ─────────────────────────────────────────────── */
function GoldUnderline() {
  return (
    <div
      style={{
        width: "50px",
        height: "3px",
        backgroundColor: "#F2B100",
        borderRadius: "999px",
        marginTop: "10px",
      }}
    />
  );
}

/* ───────────────────────────────────────────────
   Arrow link sub-component
   ─────────────────────────────────────────────── */
function ArrowLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-2 transition-colors duration-200 hover:text-[#F2B100]"
        style={{ fontFamily: "var(--font-body)", fontSize: "17px", color: "#CFCFCF" }}
      >
        <ArrowRight
          className="w-3.5 h-3.5 transition-all duration-200 group-hover:translate-x-1"
          style={{ color: "#F2B100" }}
        />
        <span className="transition-colors duration-200">{label}</span>
      </Link>
    </li>
  );
}

/* ───────────────────────────────────────────────
   Social icon sub-component
   ─────────────────────────────────────────────── */
function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-[44px] h-[44px] rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[#F2B100] hover:scale-105"
      style={{
        border: "1px solid rgba(255,255,255,0.15)",
        color: "#CFCFCF",
      }}
    >
      <span className="transition-colors duration-200 hover:text-black">{children}</span>
    </a>
  );
}

/* ───────────────────────────────────────────────
   Main Footer
   ─────────────────────────────────────────────── */
function MainFooter() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const currentYear = new Date().getFullYear();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{
        backgroundColor: "#08090C",
        clipPath: "polygon(0 0, 100% 70px, 100% 100%, 0 100%)",
      }}
    >
      <div
        className="px-6"
        style={{ paddingTop: "120px", paddingBottom: "70px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* ═══ Column 1 — Company ═══ */}
          <div className="space-y-6">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Kemnay Roofing & Exterior Painting"
                width={220}
                height={50}
                className="h-auto w-auto"
                priority={false}
              />
            </Link>

            {/* Description */}
            <p
              className="leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "17px",
                color: "#D8D8D8",
                lineHeight: 1.8,
              }}
            >
              Professional roofing and exterior painting specialists delivering
              high-quality workmanship, honest advice, and long-lasting results
              across your local area.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              <SocialIcon href="#" label="Facebook">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="#" label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="#" label="Google">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" label="LinkedIn">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* ═══ Column 2 — Contact ═══ */}
          <div className="space-y-6">
            <div>
              <h3
                className="text-white font-heading font-bold"
                style={{ fontSize: "30px" }}
              >
                CONTACT US
              </h3>
              <GoldUnderline />
            </div>

            <div className="space-y-0">
              {/* Phone */}
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="group flex items-center gap-4 transition-all duration-200 hover:text-[#F2B100]"
                style={{ height: "60px", color: "#CFCFCF", fontFamily: "var(--font-body)", fontSize: "17px" }}
              >
                <div
                  className="w-[38px] h-[38px] rounded-full flex items-center justify-center shrink-0 transition-all duration-200 group-hover:rotate-6"
                  style={{ border: "1px solid rgba(242,177,0,0.3)", color: "#F2B100" }}
                >
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-semibold text-white group-hover:text-[#F2B100] transition-colors">
                    {COMPANY.phoneFormatted}
                  </span>
                  <span className="block text-sm" style={{ color: "#999" }}>
                    Mon – Fri: 8am – 6pm
                  </span>
                </div>
              </a>

              <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.08)" }} />

              {/* Email */}
              <a
                href={`mailto:${COMPANY.email}`}
                className="group flex items-center gap-4 transition-all duration-200 hover:text-[#F2B100]"
                style={{ height: "60px", color: "#CFCFCF", fontFamily: "var(--font-body)", fontSize: "17px" }}
              >
                <div
                  className="w-[38px] h-[38px] rounded-full flex items-center justify-center shrink-0 transition-all duration-200 group-hover:rotate-6"
                  style={{ border: "1px solid rgba(242,177,0,0.3)", color: "#F2B100" }}
                >
                  <Mail className="w-4 h-4" />
                </div>
                <span className="group-hover:text-[#F2B100] transition-colors">{COMPANY.email}</span>
              </a>

              <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.08)" }} />

              {/* Address */}
              <div
                className="group flex items-center gap-4"
                style={{ height: "60px", color: "#CFCFCF", fontFamily: "var(--font-body)", fontSize: "17px" }}
              >
                <div
                  className="w-[38px] h-[38px] rounded-full flex items-center justify-center shrink-0 transition-all duration-200 group-hover:rotate-6"
                  style={{ border: "1px solid rgba(242,177,0,0.3)", color: "#F2B100" }}
                >
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{COMPANY.address}</span>
              </div>
            </div>
          </div>

          {/* ═══ Column 3 — Services ═══ */}
          <div className="space-y-6">
            <div>
              <h3
                className="text-white font-heading font-bold"
                style={{ fontSize: "30px" }}
              >
                OUR SERVICES
              </h3>
              <GoldUnderline />
            </div>

            <ul className="space-y-4">
              {SERVICE_LINKS.map((link) => (
                <ArrowLink key={link.label} href={link.href} label={link.label} />
              ))}
            </ul>
          </div>

          {/* ═══ Column 4 — Quick Links ═══ */}
          <div className="space-y-6">
            <div>
              <h3
                className="text-white font-heading font-bold"
                style={{ fontSize: "30px" }}
              >
                QUICK LINKS
              </h3>
              <GoldUnderline />
            </div>

            <ul className="space-y-4">
              {COMPANY_LINKS.map((link) => (
                <ArrowLink key={link.label} href={link.href} label={link.label} />
              ))}
            </ul>
          </div>

          {/* ═══ Column 5 — Quote CTA ═══ */}
          <div className="space-y-6">
            <div>
              <h3
                className="text-white font-heading font-bold"
                style={{ fontSize: "30px" }}
              >
                GET A FREE QUOTE
              </h3>
              <GoldUnderline />
            </div>

            <p
              className="leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "17px",
                color: "#D8D8D8",
                lineHeight: 1.8,
              }}
            >
              Request your free, no-obligation quote today. Our team responds quickly
              and provides honest advice with no sales pressure.
            </p>

            {/* CTA Button */}
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center gap-3 bg-[#F2B100] text-black font-bold rounded-[10px] transition-all duration-300 hover:bg-[#D99800] hover:-translate-y-0.5 active:scale-[0.98]"
              style={{
                width: "250px",
                maxWidth: "100%",
                height: "58px",
                fontSize: "17px",
                boxShadow: "0 10px 25px rgba(242,177,0,0.30)",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
              }}
            >
              GET A FREE QUOTE
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>

            {/* Trust badge */}
            <div className="flex items-center gap-3 pt-1">
              <Shield className="w-4 h-4" style={{ color: "#F2B100" }} />
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  color: "#999",
                }}
              >
                No obligation &middot; 100% Free
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────
   Bottom Footer
   ─────────────────────────────────────────────── */
function BottomFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <div style={{ backgroundColor: "#08090C" }}>
      {/* Top border */}
      <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.08)" }} />

      <div
        className="px-6 flex flex-col lg:flex-row items-center justify-between gap-6"
        style={{ paddingTop: "28px", paddingBottom: "28px" }}
      >
        {/* Left — Company info */}
        <div
          className="flex items-center gap-3 text-sm text-center lg:text-left"
          style={{ color: "#999", fontFamily: "var(--font-body)", fontSize: "15px" }}
        >
          <Shield className="w-4 h-4 shrink-0" style={{ color: "#F2B100" }} />
          <span className="break-words text-balance">
            {COMPANY.shortName} &middot; {COMPANY.phoneFormatted} &middot; {COMPANY.address}
          </span>
        </div>

        {/* Legal links removed */}

        {/* Center — Design credit */}
        <p
          className="text-sm text-center"
          style={{ color: "#999", fontFamily: "var(--font-body)", fontSize: "15px" }}
        >
          Website design with <span style={{ color: "#E63946" }}>&hearts;</span> by{" "}
          <Link
            href="https://www.tradesgrow.co.uk/"
            className="hover:text-[#F2B100] transition-colors"
          >
            Trades Grow
          </Link>
        </p>

        {/* Right — Copyright */}
        <p
          className="text-sm text-center lg:text-right"
          style={{ color: "#999", fontFamily: "var(--font-body)", fontSize: "15px" }}
        >
          &copy; {currentYear} {COMPANY.shortName}. All Rights Reserved.
        </p>
      </div>

      {/* ─── Third Row — Legal & Copyright notice ─── */}
      <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.08)" }} />
      <div
        className="px-6"
        style={{ paddingTop: "24px", paddingBottom: "28px" }}
      >
        <div
          className="max-w-7xl mx-auto text-center space-y-2"
          style={{ color: "#888", fontFamily: "var(--font-body)", fontSize: "13px", lineHeight: "1.6" }}
        >
          <p>
            <Link
              href="https://business.yell.com/legal/trading-terms/"
              className="hover:text-[#F2B100] transition-colors"
            >
              KEMNAY ROOFING & EXTERIOR PAINTING LTD
            </Link>{" "}
            registered as a limited company in Scotland under company number: SC886865
          </p>
          <p>Registered Company Address: 165 Brook Street, Broughty Ferry, Dundee, Scotland, DD5 1DJ</p>
          <p>&copy; {currentYear}. The content on this website is owned by us and our licensors. Do not copy any content (including images) without our consent.</p>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────
   Main Export
   ─────────────────────────────────────────────── */
export default function Footer() {
  return (
    <footer style={{ overflowX: "hidden" }}>
      <MainFooter />
      <BottomFooter />
    </footer>
  );
}
