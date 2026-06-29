"use client";

import Link from "next/link";
import { Award, Clock, MapPin, Shield, ChevronRight } from "lucide-react";
import { WHY_CHOOSE_US, COMPANY } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  Clock,
  MapPin,
  Shield,
};

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-kemnay-white">
      <div className="px-6 sm:px-8 lg:px-12 xl:px-16">
        <SectionHeading
          title="WHY CHOOSE US"
          subtitle="We take pride in delivering exceptional results for every project, big or small."
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Award;
            return (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="bg-white rounded-xl card-shadow p-8 text-center hover:card-shadow-hover transition-all duration-300 group h-full">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-xl bg-kemnay-gold/10 flex items-center justify-center group-hover:bg-kemnay-gold/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-kemnay-gold" />
                  </div>
                  <h3 className="font-heading text-2xl tracking-wide text-kemnay-black font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-kemnay-medium text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA */}
        <ScrollReveal delay={300}>
          <div className="text-center mt-12">
            <Link
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 bg-kemnay-gold text-kemnay-black px-8 py-4 font-semibold text-sm rounded-lg hover:bg-kemnay-gold-hover transition-all"
            >
              Call Us: {COMPANY.phoneFormatted}
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
