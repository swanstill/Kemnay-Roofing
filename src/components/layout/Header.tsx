"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/constants";
import MobileNav from "./MobileNav";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Roofing Services", href: "/services", hasDropdown: true },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          height: "96px",
          fontFamily: "var(--font-poppins)",
        }}
      >
        <div
          className={`h-full bg-[#08090C] transition-shadow duration-300 overflow-visible ${
            isScrolled ? "shadow-lg shadow-black/40" : ""
          }`}
        >
          {/* ---- Logo — positioned at extreme left, outside the max-width container ---- */}
          <div
            className="absolute left-0 top-0 flex items-center bg-[#08090C]"
            style={{
              height: "140px",
              width: "clamp(220px, 25vw, 320px)",
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 46px), calc(100% - 97px) 100%, 0 100%)",
            }}
          >
            <Link href="/" className="flex items-center pl-4 sm:pl-6 lg:pl-14">
              <Image
                src="/images/logo.png"
                alt="Kemnay Roofing & Exterior Painting"
                width={200}
                height={100}
                className="object-contain"
                style={{ width: "clamp(140px, 18vw, 200px)", height: "auto" }}
                priority
              />
            </Link>
          </div>

          <div className="h-full flex items-center px-4 sm:px-6 lg:px-14">
            {/* Spacer matching logo section so nav/CTA stay in position */}
            <div className="shrink-0" style={{ width: "clamp(220px, 25vw, 320px)" }} />

            {/* ---- RIGHT side wrapper ---- */}
            <div className="flex items-center flex-1 min-w-0 h-full">
              {/* ---- CENTER: Navigation ---- */}
              <nav className="hidden xl:flex items-center justify-center flex-1 gap-6">
                {NAV_ITEMS.map((item) => {
                  const active = isActive(item.href);
                  const isDropdown = item.hasDropdown;

                  if (isDropdown) {
                    return (
                      <div
                        key={item.label}
                        className="relative"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                      >
                        <Link
                          href={item.href}
                          className={`relative text-[15px] font-medium leading-none transition-colors duration-300 py-1 whitespace-nowrap inline-flex items-center gap-1.5 ${
                            active || dropdownOpen
                              ? "text-[#E4A000]"
                              : "text-[#A7A7A7] hover:text-white"
                          }`}
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-3 h-3 transition-transform duration-200 ${
                              dropdownOpen ? "rotate-180" : ""
                            }`}
                            strokeWidth={2.5}
                          />
                        </Link>

                        {/* Dropdown panel */}
                        {dropdownOpen && (
                          <div
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                          >
                            <div
                              className="bg-[#1A1A1A] rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10"
                              style={{ minWidth: "220px" }}
                            >
                              {SERVICES.map((service) => (
                                <Link
                                  key={service.id}
                                  href={`/services/${service.id}`}
                                  className={`block px-5 py-3 text-sm transition-colors duration-150 ${
                                    pathname === `/services/${service.id}`
                                      ? "text-[#E4A000] bg-white/[0.06]"
                                      : "text-[#A7A7A7] hover:text-white hover:bg-white/[0.04]"
                                  }`}
                                >
                                  {service.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`relative text-[15px] font-medium leading-none transition-colors duration-300 py-1 whitespace-nowrap ${
                        active
                          ? "text-[#E4A000]"
                          : "text-[#A7A7A7] hover:text-white"
                    }`}
                    >
                      <span className="flex items-center gap-1.5">
                        {item.label}
                      </span>
                      {active && (
                        <span
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#E4A000]"
                          style={{
                            height: "2px",
                            width: "18px",
                            borderRadius: "1px",
                          }}
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* ---- RIGHT: Phone + CTA ---- */}
              <div className="flex items-center justify-end flex-1 min-w-0 gap-5 lg:gap-7">
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="hidden md:flex items-center gap-2.5 transition-colors duration-300 shrink-0"
              >
                <Phone
                  className="w-[16px] h-[16px] text-[#E4A000]"
                  strokeWidth={2}
                />
                <span className="text-[15px] font-semibold text-white leading-none tracking-tight">
                  {COMPANY.phoneFormatted}
                </span>
              </a>

              <Link
                href="/#quote"
                className="hidden md:inline-flex items-center justify-center bg-gradient-to-r from-[#E4A000] to-[#F6A800] text-black font-bold text-center transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 shrink-0"
                style={{
                  padding: "15px 30px",
                  borderRadius: "6px",
                  fontSize: "14px",
                  letterSpacing: "0.04em",
                  lineHeight: 1,
                }}
              >
                GET A FREE QUOTE
              </Link>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="xl:hidden p-2 text-white hover:text-[#E4A000] transition-colors shrink-0"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
            </div>
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        navItems={NAV_ITEMS}
      />
    </>
  );
}
