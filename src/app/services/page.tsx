import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ServicesSection from "@/components/home/ServicesSection";
import QuoteWizardSection from "@/components/home/QuoteWizardSection";
import { SERVICES, COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services",
  description: `Professional roofing and exterior painting services in Aberdeen. ${SERVICES.map((s) => s.title).join(", ")}. Get a free quote today.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="OUR SERVICES"
        description="Comprehensive roofing and exterior painting solutions for residential and commercial properties across Aberdeen and surrounding areas."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      {/* Services Grid */}
      <section className="py-20 sm:py-28 bg-kemnay-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-kemnay-gold/10 flex items-center justify-center">
                      <div className="w-6 h-6 bg-kemnay-gold/40 rounded" />
                    </div>
                    <span className="text-kemnay-gold text-sm font-semibold tracking-wider">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="font-heading text-4xl sm:text-5xl tracking-wider text-kemnay-black mb-4">
                    {service.title.toUpperCase()}
                  </h2>
                  <p className="text-kemnay-gray leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 bg-kemnay-gold text-kemnay-black px-6 py-3 font-semibold text-sm rounded hover:bg-kemnay-gold-hover transition-all"
                  >
                    Learn More
                  </Link>
                  <a
                    href="#quote"
                    className="inline-flex items-center gap-2 border-2 border-kemnay-gold text-kemnay-gold px-6 py-3 font-semibold text-sm rounded hover:bg-kemnay-gold hover:text-kemnay-black transition-all"
                  >
                    Get A Free Quote
                  </a>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="relative h-72 sm:h-96 rounded-lg overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-kemnay-gold" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <div className="mb-20">
        <QuoteWizardSection />
      </div>

      {/* CTA Banner */}
      <section className="py-16 mb-20 bg-kemnay-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl tracking-wider text-kemnay-white">
            READY TO GET STARTED?
          </h2>
          <p className="mt-4 text-kemnay-white/60 max-w-xl mx-auto">
            Contact us today for a free, no-obligation quote. We&apos;re here to help with any roofing or exterior painting project.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 bg-kemnay-gold text-kemnay-black px-8 py-3.5 font-semibold text-sm rounded hover:bg-kemnay-gold-hover transition-all"
            >
              Get A Free Quote
            </a>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 border-2 border-kemnay-gold text-kemnay-gold px-8 py-3.5 font-semibold text-sm rounded hover:bg-kemnay-gold hover:text-kemnay-black transition-all"
            >
              Call {COMPANY.phoneFormatted}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
