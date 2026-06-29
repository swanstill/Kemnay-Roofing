"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Service } from "@/lib/types";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

const placeholderGradients = [
  "from-[#0D0D0D] to-[#1A1A1A]",
  "from-[#1A1A1A] to-[#0D0D0D]",
  "from-[#111111] to-[#222222]",
  "from-[#222222] to-[#111111]",
  "from-[#0D0D0D] to-[#2A2A2A]",
  "from-[#2A2A2A] to-[#0D0D0D]",
  "from-[#1A1A1A] to-[#2A2A2A]",
  "from-[#2A2A2A] to-[#1A1A1A]",
];

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const { ref, isRevealed } = useScrollReveal({ threshold: 0.1 });
  const [imageError, setImageError] = useState(false);

  return (
    <div
      ref={ref}
      className={cn("scroll-reveal", isRevealed && "revealed")}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <Link href={`/services/${service.id}`} className="group block h-full">
        <div
          className="bg-white rounded-[16px] overflow-hidden h-full transition-all duration-300 ease-out cursor-pointer hover:-translate-y-2"
          style={{
            boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
            border: "1px solid #EEEEEE",
            transition: "all 300ms ease-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.12)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.08)";
          }}
        >
          {/* Image area — 190px, covered, top corners rounded */}
          <div className="relative h-[190px] overflow-hidden">
            {service.image && !imageError ? (
              <>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  onError={() => setImageError(true)}
                />
                {/* Gold overlay accent on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 40%, rgba(242,177,0,0.12) 100%)",
                  }}
                />
              </>
            ) : (
              <div
                className={`absolute inset-0 bg-gradient-to-br ${placeholderGradients[index % placeholderGradients.length]} flex items-center justify-center`}
              >
                {/* Decorative roof icon */}
                <div className="text-white/[0.07] group-hover:text-white/[0.15] transition-all duration-300">
                  <svg viewBox="0 0 48 48" className="w-20 h-20" fill="none">
                    <path
                      d="M24 4L2 22H8V42H40V22H46L24 4Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path d="M18 42V30H30V42" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="12" y="24" width="6" height="6" stroke="currentColor" strokeWidth="1" fill="none" />
                    <rect x="30" y="24" width="6" height="6" stroke="currentColor" strokeWidth="1" fill="none" />
                  </svg>
                </div>
              </div>
            )}
          </div>

          {/* Content — 24px padding, centered */}
          <div className="p-6 text-center">
            {/* Title — Barlow Condensed Bold, 36px, black */}
            <h3
              className="font-heading text-[36px] font-bold text-[#0D0D0D] leading-tight tracking-tight group-hover:text-[#F2B100] transition-colors duration-300"
            >
              {service.title}
            </h3>

            {/* Gold underline — 40px, animates to 70px on hover */}
            <div className="flex justify-center mt-3">
              <div
                className="h-[4px] rounded-full bg-[#F2B100] transition-all duration-300 ease-out group-hover:w-[70px]"
                style={{ width: "40px" }}
              />
            </div>

            {/* Description — Inter Regular, 16px, #555, max 2 lines */}
            <p
              className="mt-4 text-[16px] leading-relaxed line-clamp-2"
              style={{ color: "#555555", fontFamily: "Inter, sans-serif" }}
            >
              {service.shortDescription}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
