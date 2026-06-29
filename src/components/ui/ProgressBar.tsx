"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const stepLabels = [
  "Property",
  "Services",
  "Details",
  "Contact",
  "Review",
];

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="w-full">
      {/* Step indicators */}
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }).map((_, i) => {
          const stepNum = i + 1;
          const isComplete = stepNum < currentStep;
          const isCurrent = stepNum === currentStep;

          return (
            <div key={i} className="flex items-center flex-1">
              {/* Step circle + label */}
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300",
                    isComplete
                      ? "bg-kemnay-gold text-kemnay-black"
                      : isCurrent
                      ? "bg-kemnay-gold text-kemnay-black ring-2 ring-kemnay-gold/30"
                      : "bg-gray-100 text-gray-400"
                  )}
                >
                  {isComplete ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    stepNum
                  )}
                </div>
                <span
                  className={cn(
                    "text-[10px] font-medium mt-1.5 uppercase tracking-wider hidden sm:block",
                    isComplete || isCurrent
                      ? "text-kemnay-gold"
                      : "text-gray-400"
                  )}
                >
                  {stepLabels[i] || `Step ${stepNum}`}
                </span>
              </div>

              {/* Connector line */}
              {i < totalSteps - 1 && (
                <div className="flex-1 h-0.5 mx-2 mt-[-1.5rem] sm:mt-[-2.2rem]">
                  <div
                    className={cn(
                      "h-full rounded transition-all duration-500",
                      isComplete
                        ? "bg-kemnay-gold"
                        : "bg-gray-200"
                    )}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
