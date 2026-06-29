"use client";

import { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Check,
  Clock,
  Shield,
  PoundSterling,
  FileText,
} from "lucide-react";
import ProgressBar from "@/components/ui/ProgressBar";
import {
  SERVICES,
  PROPERTY_TYPES,
  URGENCY_OPTIONS,
  PROPERTY_SIZES,
} from "@/lib/constants";
import type { QuoteFormData } from "@/lib/types";

const TOTAL_STEPS = 5;

const benefits = [
  {
    icon: Clock,
    title: "Takes less than 60 seconds",
    description: "Quick and easy process",
  },
  {
    icon: Shield,
    title: "No sales pressure",
    description: "Just honest advice",
  },
  {
    icon: PoundSterling,
    title: "100% free",
    description: "No hidden costs",
  },
  {
    icon: FileText,
    title: "Tailored quote",
    description: "Specific to your needs",
  },
];

const initialFormData: QuoteFormData = {
  propertyType: "",
  services: [],
  urgency: "",
  propertySize: "",
  description: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  postcode: "",
};

export default function QuoteWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof QuoteFormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.propertyType !== "";
      case 2:
        return formData.services.length > 0;
      case 3:
        return formData.urgency !== "" && formData.propertySize !== "";
      case 4:
        return (
          formData.firstName !== "" &&
          formData.lastName !== "" &&
          formData.email !== "" &&
          formData.phone !== ""
        );
      case 5:
        return true;
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    const subject = encodeURIComponent("Quote Request - Kemnay Roofing");
    const body = encodeURIComponent(
      `Quote Request\n\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPostcode: ${formData.postcode}\n\nProperty Type: ${formData.propertyType}\nServices: ${formData.services.join(", ")}\nUrgency: ${formData.urgency}\nProperty Size: ${formData.propertySize}\nDescription: ${formData.description}`
    );
    window.open(`mailto:info@kemnayroofingaberdeen.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-kemnay-gold/20 flex items-center justify-center">
          <Check className="w-10 h-10 text-kemnay-gold" />
        </div>
        <h3 className="font-heading text-3xl tracking-wide text-kemnay-white mb-3 font-bold">
          THANK YOU!
        </h3>
        <p className="text-kemnay-white/60 max-w-md mx-auto">
          Your quote request has been submitted. We&apos;ll get back to you within
          24 hours with a tailored quote.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      {/* Left side: Benefits */}
      <div className="lg:col-span-2 space-y-6">
        <h3 className="font-heading text-3xl tracking-wide text-kemnay-white font-bold">
          GET YOUR FREE QUOTE
        </h3>
        <p className="text-kemnay-white/60 text-sm leading-relaxed">
          Fill in our quick form and we&apos;ll get back to you with a tailored
          quote. No obligation, no pressure.
        </p>
        <div className="space-y-4 mt-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-kemnay-gold/10 flex items-center justify-center shrink-0">
                <benefit.icon className="w-5 h-5 text-kemnay-gold" />
              </div>
              <div>
                <p className="text-kemnay-white text-sm font-semibold">
                  {benefit.title}
                </p>
                <p className="text-kemnay-white/40 text-xs">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side: Form */}
      <div className="lg:col-span-3">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
          <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />

          <div className="mt-8 min-h-[260px]">
            {/* Step 1: Property Type */}
            {currentStep === 1 && (
              <div className="animate-fade-in-up">
                <h4 className="font-heading text-xl tracking-wide text-kemnay-black font-semibold mb-1">
                  What type of property do you have?
                </h4>
                <p className="text-kemnay-medium text-sm mb-6">
                  Select the option that best describes your property.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {PROPERTY_TYPES.map((type) => (
                    <button
                      key={type}
                      onClick={() => updateField("propertyType", type)}
                      className={`p-4 rounded-xl border text-sm font-semibold transition-all ${
                        formData.propertyType === type
                          ? "border-kemnay-gold bg-kemnay-gold/10 text-kemnay-gold"
                          : "border-gray-200 text-kemnay-medium hover:border-kemnay-gold hover:text-kemnay-black"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Services */}
            {currentStep === 2 && (
              <div className="animate-fade-in-up">
                <h4 className="font-heading text-xl tracking-wide text-kemnay-black font-semibold mb-1">
                  What services do you need?
                </h4>
                <p className="text-kemnay-medium text-sm mb-6">
                  Select all that apply.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {SERVICES.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => toggleService(service.title)}
                      className={`p-4 rounded-xl border text-sm font-semibold transition-all text-left ${
                        formData.services.includes(service.title)
                          ? "border-kemnay-gold bg-kemnay-gold/10 text-kemnay-gold"
                          : "border-gray-200 text-kemnay-medium hover:border-kemnay-gold hover:text-kemnay-black"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 ${
                            formData.services.includes(service.title)
                              ? "border-kemnay-gold bg-kemnay-gold"
                              : "border-gray-300"
                          }`}
                        >
                          {formData.services.includes(service.title) && (
                            <Check className="w-3 h-3 text-white" />
                          )}
                        </div>
                        {service.title}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Details (Urgency + Size + Description) */}
            {currentStep === 3 && (
              <div className="animate-fade-in-up space-y-6">
                <div>
                  <h4 className="font-heading text-xl tracking-wide text-kemnay-black font-semibold mb-1">
                    Tell us about your project
                  </h4>
                  <p className="text-kemnay-medium text-sm mb-4">
                    Help us understand the scope and urgency.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label className="text-kemnay-black text-xs font-semibold mb-1.5 block">
                        How urgent is this?
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {URGENCY_OPTIONS.map((option) => (
                          <button
                            key={option}
                            onClick={() => updateField("urgency", option)}
                            className={`p-3 rounded-xl border text-sm font-medium transition-all text-left ${
                              formData.urgency === option
                                ? "border-kemnay-gold bg-kemnay-gold/10 text-kemnay-gold"
                                : "border-gray-200 text-kemnay-medium hover:border-kemnay-gold hover:text-kemnay-black"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-kemnay-black text-xs font-semibold mb-1.5 block">
                        Property size
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {PROPERTY_SIZES.map((size) => (
                          <button
                            key={size}
                            onClick={() => updateField("propertySize", size)}
                            className={`p-3 rounded-xl border text-sm font-medium transition-all text-left ${
                              formData.propertySize === size
                                ? "border-kemnay-gold bg-kemnay-gold/10 text-kemnay-gold"
                                : "border-gray-200 text-kemnay-medium hover:border-kemnay-gold hover:text-kemnay-black"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-kemnay-black text-xs font-semibold mb-1.5 block">
                        Description (optional)
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => updateField("description", e.target.value)}
                        placeholder="e.g. Leaking roof in the loft, need exterior painting for the full property..."
                        className="w-full h-24 border border-gray-200 rounded-xl px-4 py-3 text-sm text-kemnay-black placeholder-gray-400 focus:outline-none focus:border-kemnay-gold focus:ring-1 focus:ring-kemnay-gold/30 transition-all resize-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Contact Info */}
            {currentStep === 4 && (
              <div className="animate-fade-in-up space-y-4">
                <h4 className="font-heading text-xl tracking-wide text-kemnay-black font-semibold mb-1">
                  Your contact details
                </h4>
                <p className="text-kemnay-medium text-sm mb-4">
                  So we can get back to you with your quote.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-kemnay-black text-xs font-semibold mb-1.5 block">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => updateField("firstName", e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-kemnay-black placeholder-gray-400 focus:outline-none focus:border-kemnay-gold focus:ring-1 focus:ring-kemnay-gold/30 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="text-kemnay-black text-xs font-semibold mb-1.5 block">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => updateField("lastName", e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-kemnay-black placeholder-gray-400 focus:outline-none focus:border-kemnay-gold focus:ring-1 focus:ring-kemnay-gold/30 transition-all"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-kemnay-black text-xs font-semibold mb-1.5 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-kemnay-black placeholder-gray-400 focus:outline-none focus:border-kemnay-gold focus:ring-1 focus:ring-kemnay-gold/30 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="text-kemnay-black text-xs font-semibold mb-1.5 block">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-kemnay-black placeholder-gray-400 focus:outline-none focus:border-kemnay-gold focus:ring-1 focus:ring-kemnay-gold/30 transition-all"
                    placeholder="07XXX XXXXXX"
                  />
                </div>
                <div>
                  <label className="text-kemnay-black text-xs font-semibold mb-1.5 block">
                    Postcode
                  </label>
                  <input
                    type="text"
                    value={formData.postcode}
                    onChange={(e) => updateField("postcode", e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-kemnay-black placeholder-gray-400 focus:outline-none focus:border-kemnay-gold focus:ring-1 focus:ring-kemnay-gold/30 transition-all"
                    placeholder="AB51 5LU"
                  />
                </div>
              </div>
            )}

            {/* Step 5: Review & Submit */}
            {currentStep === 5 && (
              <div className="animate-fade-in-up">
                <h4 className="font-heading text-xl tracking-wide text-kemnay-black font-semibold mb-4">
                  Review your details
                </h4>
                <div className="space-y-3 bg-kemnay-light rounded-xl p-5">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-kemnay-medium text-sm">Property</span>
                    <span className="text-kemnay-black text-sm font-semibold">{formData.propertyType}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-kemnay-medium text-sm">Services</span>
                    <span className="text-kemnay-black text-sm font-semibold text-right">
                      {formData.services.join(", ")}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-kemnay-medium text-sm">Urgency</span>
                    <span className="text-kemnay-black text-sm font-semibold">{formData.urgency}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-kemnay-medium text-sm">Size</span>
                    <span className="text-kemnay-black text-sm font-semibold">{formData.propertySize}</span>
                  </div>
                  {formData.description && (
                    <div className="py-2 border-b border-gray-200">
                      <span className="text-kemnay-medium text-sm block mb-1">Description</span>
                      <span className="text-kemnay-black text-sm">{formData.description}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-kemnay-medium text-sm">Name</span>
                    <span className="text-kemnay-black text-sm font-semibold">
                      {formData.firstName} {formData.lastName}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-kemnay-medium text-sm">Email</span>
                    <span className="text-kemnay-black text-sm font-semibold">{formData.email}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-kemnay-medium text-sm">Phone</span>
                    <span className="text-kemnay-black text-sm font-semibold">{formData.phone}</span>
                  </div>
                  {formData.postcode && (
                    <div className="flex justify-between py-2">
                      <span className="text-kemnay-medium text-sm">Postcode</span>
                      <span className="text-kemnay-black text-sm font-semibold">{formData.postcode}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
            <button
              onClick={() => setCurrentStep((s) => s - 1)}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                currentStep === 1
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-kemnay-medium hover:text-kemnay-black hover:bg-gray-100"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>

            {currentStep < TOTAL_STEPS ? (
              <button
                onClick={() => setCurrentStep((s) => s + 1)}
                disabled={!canProceed()}
                className={`flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg transition-all ${
                  canProceed()
                    ? "bg-kemnay-gold text-kemnay-black hover:bg-kemnay-gold-hover"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
              >
                Next Step
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-kemnay-gold text-kemnay-black rounded-lg hover:bg-kemnay-gold-hover transition-all"
              >
                Submit Quote Request
                <Check className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
