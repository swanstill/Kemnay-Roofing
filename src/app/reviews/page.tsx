import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ReviewsSection from "@/components/home/TestimonialsSection";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Reviews",
  description: `See what our customers say about ${COMPANY.name}. ${COMPANY.rating} star rating with ${COMPANY.reviewCount}+ reviews on Google.`,
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        title="CUSTOMER REVIEWS"
        description="See what our customers have to say about our roofing and painting services."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Reviews" },
        ]}
      />

      <ReviewsSection />

      {/* CTA */}
      <section className="py-16 bg-kemnay-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl tracking-wider text-kemnay-white">
            JOIN OUR SATISFIED CUSTOMERS
          </h2>
          <p className="mt-4 text-kemnay-white/60 max-w-xl mx-auto">
            Ready to experience our 5-star service? Get in touch for your free quote today.
          </p>
          <a
            href="#quote"
            className="inline-flex items-center gap-2 bg-kemnay-gold text-kemnay-black px-8 py-3.5 font-semibold text-sm rounded hover:bg-kemnay-gold-hover transition-all mt-8"
          >
            Get A Free Quote
          </a>
        </div>
      </section>
    </>
  );
}
