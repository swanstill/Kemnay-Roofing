"use client";

import Link from "next/link";
import { Phone, X, ChevronRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems?: NavItem[];
}

export default function MobileNav({ isOpen, onClose, navItems }: MobileNavProps) {
  const items = navItems || [];

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 xl:hidden transition-all duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={cn(
          "absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-[#1A1A1A] shadow-2xl transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <span className="font-heading text-xl text-[#E8AA16] tracking-wide">
              KEMNAY ROOFING
            </span>
            <button
              onClick={onClose}
              className="p-2 text-white/60 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-4">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between px-6 py-3.5 text-white/80 hover:text-[#E8AA16] hover:bg-white/5 transition-colors group"
              >
                <span className="text-sm font-medium">{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="p-6 border-t border-white/10 space-y-4">
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-white hover:text-[#E8AA16] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#E8AA16]" />
              <span className="text-sm font-semibold">{COMPANY.phoneFormatted}</span>
            </a>
            <Link
              href="/#quote"
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full bg-[#E8AA16] text-black py-3 font-semibold text-sm rounded-lg hover:bg-[#D19600] transition-all"
            >
              Get A Free Quote
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
