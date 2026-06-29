"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Check,
  Clock,
  Shield,
  Lock,
  MoreHorizontal,
  Wrench,
  PaintBucket,
  Droplets,
  RefreshCw,
  Building2,
  Building as Chimney,
  AlertCircle,
  Calendar,
  Sun,
  ChevronRight,
} from "lucide-react";

const TOTAL_STEPS = 6;

const propertyTypes = [
  { id: "detached", label: "Detached", image: "/images/property-types/Detached.png" },
  { id: "semi-detached", label: "Semi Detached", image: "/images/property-types/semi-detached.png" },
  { id: "terraced", label: "Terraced", image: "/images/property-types/Terraced.png" },
  { id: "bungalow", label: "Bungalow", image: "/images/property-types/Bungalow.png" },
  { id: "commercial", label: "Commercial Building", image: "/images/property-types/Commercial Building.png" },
  { id: "other", label: "Other", icon: MoreHorizontal },
];

const serviceTypes = [
  { id: "roof-repair", label: "Roof Repair", icon: Wrench },
  { id: "roof-replacement", label: "Roof Replacement", icon: RefreshCw },
  { id: "new-roof", label: "New Roof Installation", icon: Building2 },
  { id: "exterior-painting", label: "Exterior Painting", icon: PaintBucket },
  { id: "guttering", label: "Guttering", icon: Droplets },
  { id: "chimney", label: "Chimney Work", icon: Chimney },
];

const timelineOptions = [
  { id: "emergency", label: "Emergency", desc: "Within 24 hours", icon: AlertCircle },
  { id: "urgent", label: "Urgent", desc: "Within a week", icon: Clock },
  { id: "standard", label: "Standard", desc: "Within a month", icon: Calendar },
  { id: "planning", label: "Planning", desc: "Just exploring options", icon: Sun },
];

const leftBenefits = [
  "Takes less than 60 seconds",
  "No sales pressure",
  "100% free",
  "Tailored to your property",
];

export default function MultiStepQuoteForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedTimeline, setSelectedTimeline] = useState<string | null>(null);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [postcode, setPostcode] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentStep]);

  const handleCardSelect = (setter: (v: any) => void, value: string, nextStep: number) => {
    if (isAnimating) return;
    setter(value);
    setTimeout(() => setCurrentStep(nextStep), 200);
  };

  const handleTextNext = () => {
    if (isAnimating) return;
    setCurrentStep((s) => Math.min(s + 1, TOTAL_STEPS));
  };

  const canProceedTextStep = () => {
    switch (currentStep) {
      case 4: return fullName.trim().length > 0 && phone.trim().length >= 7;
      case 5: return postcode.trim().length >= 3;
      default: return true;
    }
  };

  const renderCards = (
    options: { id: string; label: string; icon?: React.ComponentType<{ className?: string }>; image?: string; desc?: string }[],
    selected: string | null,
    onSelect: (id: string) => void
  ) => (
    <div className="grid grid-cols-6 gap-3">
      {options.map((opt) => {
        const isSelected = selected === opt.id;
        const Icon = opt.icon;
        return (
          <button
            key={opt.id}
            onClick={() => onSelect(opt.id)}
            className={`flex flex-col items-center justify-center gap-2 transition-all duration-200 ${
              isSelected
                ? "border-[#F2B100] bg-[#F2B100]/[0.08] shadow-[0_0_20px_rgba(242,177,0,0.12)]"
                : "border-white/[0.08] bg-white/[0.03] hover:border-[#F2B100]/40 hover:bg-white/[0.06] hover:scale-[1.02]"
            }`}
            style={{
              height: "120px",
              borderRadius: "12px",
              borderWidth: "1px",
              borderStyle: "solid",
            }}
          >
            {opt.image ? (
              <div className={`w-[70px] h-[70px] flex items-center justify-center transition-opacity duration-200 ${isSelected ? "" : "opacity-40"}`}>
                <Image
                  src={opt.image}
                  alt={opt.label}
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>
            ) : Icon ? (
              <Icon
                className={`w-7 h-7 transition-colors duration-200 ${
                  isSelected ? "text-[#e6a100]" : "text-white/35"
                }`}
              />
            ) : null}
            <span
              className={`text-[13px] font-medium leading-tight text-center transition-colors duration-200 ${
                isSelected ? "text-[#F2B100]" : "text-white/55"
              }`}
            >
              {opt.label}
            </span>
            {opt.desc && (
              <span className="text-[10px] text-white/30 leading-tight">{opt.desc}</span>
            )}
          </button>
        );
      })}
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="text-center mb-7">
              <h3 className="text-white text-[clamp(20px,2vw,26px)] font-bold font-heading tracking-wide">
                What type of property do you have?
              </h3>
            </div>
            {renderCards(propertyTypes, selectedProperty, (id) =>
              handleCardSelect(setSelectedProperty, id, 2)
            )}
          </>
        );

      case 2:
        return (
          <>
            <div className="text-center mb-7">
              <h3 className="text-white text-[clamp(20px,2vw,26px)] font-bold font-heading tracking-wide">
                What service do you need?
              </h3>
            </div>
            {renderCards(serviceTypes, selectedService, (id) =>
              handleCardSelect(setSelectedService, id, 3)
            )}
          </>
        );

      case 3:
        return (
          <>
            <div className="text-center mb-7">
              <h3 className="text-white text-[clamp(20px,2vw,26px)] font-bold font-heading tracking-wide">
                How soon do you need it done?
              </h3>
            </div>
            {renderCards(timelineOptions, selectedTimeline, (id) =>
              handleCardSelect(setSelectedTimeline, id, 4)
            )}
          </>
        );

      case 4:
        return (
          <>
            <div className="text-center mb-7">
              <h3 className="text-white text-[clamp(20px,2vw,26px)] font-bold font-heading tracking-wide">
                What&apos;s your name and number?
              </h3>
            </div>
            <div className="space-y-4 max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-white/5 border border-white/[0.12] text-white text-sm rounded-xl px-5 py-4 outline-none focus:border-[#F2B100] focus:bg-white/[0.08] transition-all placeholder:text-white/25"
              />
              <input
                type="tel"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-white/5 border border-white/[0.12] text-white text-sm rounded-xl px-5 py-4 outline-none focus:border-[#F2B100] focus:bg-white/[0.08] transition-all placeholder:text-white/25"
              />
            </div>
          </>
        );

      case 5:
        return (
          <>
            <div className="text-center mb-7">
              <h3 className="text-white text-[clamp(20px,2vw,26px)] font-bold font-heading tracking-wide">
                What&apos;s your postcode?
              </h3>
            </div>
            <div className="max-w-sm mx-auto">
              <input
                type="text"
                placeholder="e.g. AB51 5LU"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                className="w-full bg-white/5 border border-white/[0.12] text-white text-sm rounded-xl px-5 py-4 outline-none focus:border-[#F2B100] focus:bg-white/[0.08] transition-all placeholder:text-white/25"
              />
            </div>
          </>
        );

      case 6:
        return (
          <>
            <div className="text-center mb-7">
              <h3 className="text-white text-[clamp(20px,2vw,26px)] font-bold font-heading tracking-wide">
                Review your quote request
              </h3>
              <p className="text-white/40 text-sm mt-2">
                We&apos;ll get back to you within 24 hours
              </p>
            </div>
            <div className="max-w-lg mx-auto space-y-3">
              {[
                { label: "Property", value: selectedProperty && propertyTypes.find(p => p.id === selectedProperty)?.label },
                { label: "Service", value: selectedService && serviceTypes.find(s => s.id === selectedService)?.label },
                { label: "Timeline", value: selectedTimeline && timelineOptions.find(t => t.id === selectedTimeline)?.label },
                { label: "Name", value: fullName },
                { label: "Phone", value: phone },
                { label: "Postcode", value: postcode },
              ].filter(i => i.value).map((item) => (
                <div key={item.label} className="flex items-center justify-between bg-white/[0.04] rounded-xl px-5 py-3 border border-white/[0.06]">
                  <span className="text-white/40 text-sm">{item.label}</span>
                  <span className="text-white text-sm font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-[#111111] shadow-2xl shadow-black/40 overflow-hidden" style={{ borderRadius: "16px" }}>
      {/* Gold accent line at top */}
      <div className="h-[3px] bg-gradient-to-r from-[#F2B100] via-[#FFD700] to-[#F2B100]" />

      <div className="p-8 sm:p-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* ============ LEFT SIDE - 30% ============ */}
          <div className="lg:w-[30%] space-y-5">
            <div>
              <span className="inline-block text-[#F2B100] text-[11px] font-semibold uppercase tracking-[0.15em]">
                No obligation. Just a no-nonsense quote
              </span>
            </div>

            <h2 className="font-heading text-[clamp(28px,3.5vw,40px)] font-bold leading-[1.05]">
              <span className="text-white">GET YOUR FREE</span>
              <br />
              <span className="text-[#F2B100]">NO-OBLIGATION</span>
              <br />
              <span className="text-white">QUOTE</span>
            </h2>

            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              Answer a few quick questions and we&apos;ll provide a tailored quote.
            </p>

            <ul className="space-y-3 pt-1">
              {leftBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="w-[22px] h-[22px] rounded-full bg-[#F2B100]/15 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#F2B100]" strokeWidth={3} />
                  </div>
                  <span className="text-white/65 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ============ RIGHT SIDE - 70% ============ */}
          <div className="lg:w-[70%]" ref={contentRef}>
            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[#F2B100] text-xs font-bold uppercase tracking-[0.1em]">
                  Step {currentStep} of {TOTAL_STEPS}
                </span>
              </div>

              <div className="flex items-center">
                {Array.from({ length: TOTAL_STEPS }).map((_, i) => {
                  const num = i + 1;
                  const isActive = num === currentStep;
                  const isComplete = num < currentStep;
                  return (
                    <div key={i} className="flex items-center flex-1">
                      <div
                        className={`relative w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-400 ${
                          isActive
                            ? "bg-[#F2B100] text-black scale-110 shadow-[0_0_12px_rgba(242,177,0,0.4)]"
                            : isComplete
                            ? "bg-[#F2B100] text-black"
                            : "bg-[#2A2A2A] text-white/25"
                        }`}
                      >
                        {isComplete ? (
                          <Check className="w-3.5 h-3.5" strokeWidth={3} />
                        ) : (
                          <span className={isActive ? "animate-pulse-once" : ""}>
                            {num}
                          </span>
                        )}
                      </div>
                      {i < TOTAL_STEPS - 1 && (
                        <div
                          className={`flex-1 h-[2px] mx-1 transition-all duration-500 ${
                            isComplete
                              ? "bg-[#F2B100]"
                              : isActive
                              ? "bg-gradient-to-r from-[#F2B100] to-[#333]"
                              : "bg-[#333]"
                          }`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Question + Content Area */}
            <div
              className="transition-all duration-400"
              style={{
                opacity: isAnimating ? 0.6 : 1,
                transform: isAnimating ? "translateY(4px)" : "translateY(0)",
              }}
            >
              {renderStepContent()}
            </div>

            {/* Next / Submit button (only for text-input steps) */}
            {currentStep >= 4 && (
              <button
                disabled={!canProceedTextStep()}
                onClick={currentStep === TOTAL_STEPS ? () => {} : handleTextNext}
                className={`w-full flex items-center justify-between mt-7 font-bold text-[15px] rounded-xl transition-all duration-200 ${
                  canProceedTextStep()
                    ? "bg-[#F2B100] text-black hover:bg-[#D99B00] active:scale-[0.98] shadow-lg shadow-[#F2B100]/20"
                    : "bg-[#333] text-white/25 cursor-not-allowed"
                }`}
                style={{ height: "56px", padding: "0 24px" }}
              >
                <span>{currentStep === TOTAL_STEPS ? "Submit Quote Request" : "Continue"}</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            {/* Trust/Security Row */}
            <div className="flex items-center justify-center flex-wrap gap-x-6 gap-y-2 mt-5">
              <div className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-[#F2B100]" />
                <span className="text-white/40 text-[11px] whitespace-nowrap">
                  Your details are 100% secure
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#F2B100]" />
                <span className="text-white/40 text-[11px] whitespace-nowrap">
                  Takes 30 seconds
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#F2B100]" />
                <span className="text-white/40 text-[11px] whitespace-nowrap">
                  No obligation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
