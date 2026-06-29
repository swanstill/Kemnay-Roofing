"use client";

import MultiStepQuoteForm from "@/components/forms/MultiStepQuoteForm";

export default function QuoteWizardSection() {
  return (
    <section
      id="quote"
      className="relative z-10 scroll-mt-24 -mt-10 md:-mt-[60px]"
    >
      <div className="px-6 sm:px-8 lg:px-12 xl:px-16">
        <MultiStepQuoteForm />
      </div>
    </section>
  );
}
