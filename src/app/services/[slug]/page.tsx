import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, Shield, Phone } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import QuoteWizardSection from "@/components/home/QuoteWizardSection";
import { SERVICES, COMPANY } from "@/lib/constants";
import { SERVICE_DETAILS } from "@/lib/service-content";

/* ───────────────────────────────────────────────
   Generate static params for all services
   ─────────────────────────────────────────────── */
export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.id,
  }));
}

/* ───────────────────────────────────────────────
   Generate metadata per service
   ─────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

/* ───────────────────────────────────────────────
   Service Detail Page
   ─────────────────────────────────────────────── */
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  const detail = SERVICE_DETAILS[slug];

  if (!service || !detail) {
    notFound();
  }

  return (
    <>
      {/* ─── Hero ─── */}
      <PageHero
        title={service.title.toUpperCase()}
        description={detail.heroSubtitle}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* ─── Main Content ─── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Content */}
            <div>
              <span className="text-[#F2B100] text-sm font-semibold uppercase tracking-[0.15em]">
                {COMPANY.shortName}
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#0D0D0D] leading-[1.05] mt-4 tracking-wide">
                {service.title.toUpperCase()}
              </h2>
              <p className="mt-6 text-[#4B4B4B] text-lg leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  href="/#quote"
                  className="inline-flex items-center gap-2 bg-[#F2B100] text-black font-semibold px-6 py-3.5 rounded-[10px] hover:bg-[#D99800] transition-all text-sm"
                >
                  GET A FREE QUOTE
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 border-2 border-[#F2B100] text-[#F2B100] font-semibold px-6 py-3.5 rounded-[10px] hover:bg-[#F2B100] hover:text-black transition-all text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {COMPANY.phoneFormatted}
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-80 sm:h-96 rounded-[18px] overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F2B100]" />
            </div>
          </div>

          {/* ─── Features ─── */}
          <div className="space-y-16">
            {detail.features.map((feature, i) => (
              <div
                key={feature.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#0D0D0D] tracking-wide">
                    {feature.title}
                  </h3>
                  <div
                    className="w-[50px] h-[3px] bg-[#F2B100] rounded-full mt-4"
                  />
                  <p className="mt-6 text-[#4B4B4B] leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <div className="w-[20px] h-[20px] rounded-full bg-[#F2B100]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#F2B100]" strokeWidth={3} />
                        </div>
                        <span className="text-[#555]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative h-64 sm:h-80 rounded-[16px] overflow-hidden bg-[#F8F8F8] ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Image
                    src={service.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ─── Services Offered ─── */}
          <div className="mt-20 p-10 sm:p-12 bg-[#F8F8F8] rounded-[20px]">
            <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#0D0D0D] tracking-wide text-center">
              WHAT WE OFFER
            </h3>
            <div className="w-[50px] h-[3px] bg-[#F2B100] rounded-full mx-auto mt-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
              {detail.servicesOffered.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white rounded-[12px] px-5 py-4 shadow-sm"
                >
                  <div className="w-[8px] h-[8px] rounded-full bg-[#F2B100] shrink-0" />
                  <span className="text-[#333] font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ─── CTA ─── */}
          <div className="mt-20 text-center">
            <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#0D0D0D] tracking-wide">
              READY TO GET STARTED?
            </h3>
            <p className="mt-4 text-[#4B4B4B] max-w-xl mx-auto">
              Contact us today for a free, no-obligation quote. We&apos;re here to help with all your roofing needs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Link
                href="/#quote"
                className="inline-flex items-center gap-2 bg-[#F2B100] text-black font-semibold px-8 py-4 rounded-[10px] hover:bg-[#D99800] transition-all text-sm"
              >
                <Shield className="w-5 h-5" />
                GET A FREE QUOTE
              </Link>
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 border-2 border-[#F2B100] text-[#F2B100] font-semibold px-8 py-4 rounded-[10px] hover:bg-[#F2B100] hover:text-black transition-all text-sm"
              >
                <Phone className="w-4 h-4" />
                Call {COMPANY.phoneFormatted}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Quote Form ─── */}
      <div className="mb-20">
        <QuoteWizardSection />
      </div>
    </>
  );
}
