"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold text-sm tracking-wide rounded transition-all duration-300 cursor-pointer";

  const variants = {
    primary: "bg-kemnay-gold text-kemnay-black hover:bg-kemnay-gold-hover hover:scale-105 shadow-lg shadow-kemnay-gold/20",
    secondary:
      "border-2 border-kemnay-gold text-kemnay-gold bg-transparent hover:bg-kemnay-gold hover:text-kemnay-black",
  };

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, variants[variant], className)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, variants[variant], disabled && "opacity-50 cursor-not-allowed", className)}
    >
      {children}
    </button>
  );
}
