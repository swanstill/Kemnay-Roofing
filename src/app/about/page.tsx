import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { COMPANY } from "@/lib/constants";
import { Award, Clock, MapPin, Shield, Users, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${COMPANY.name}. Professional roofing and exterior painting contractors serving Aberdeen and surrounding areas. Fully insured, 5-star rated.`,
};

const stats = [
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: CheckCircle, value: "1000+", label: "Projects Completed" },
  { icon: Award, value: "5.0", label: "Google Rating" },
  { icon: Users, value: "63+", label: "5-Star Reviews" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="ABOUT US"
        description="Your trusted local roofing and exterior painting specialists in Aberdeen."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* Story Section */}
      <section className="py-20 sm:py-28 bg-kemnay-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="font-heading text-4xl sm:text-5xl tracking-wider text-kemnay-black mb-6">
                  PROTECTING WHAT MATTERS MOST
                </h2>
                <div className="space-y-4 text-kemnay-gray leading-relaxed">
                  <p>
                    {COMPANY.name} is a family-run business based in Kemnay, Aberdeenshire.
                    We specialise in all aspects of roofing and exterior painting, providing
                    a reliable and professional service to homeowners and businesses across
                    the region.
                  </p>
                  <p>
                    With years of hands-on experience, our skilled team has built a reputation
                    for quality workmanship, attention to detail, and exceptional customer
                    service. We take pride in every project we undertake, no matter how big
                    or small.
                  </p>
                  <p>
                    Our mission is simple: to protect what matters most — your home. We use
                    only premium materials from trusted suppliers and back every project with
                    our comprehensive workmanship guarantee.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-kemnay-dark rounded-lg p-10">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <stat.icon className="w-8 h-8 text-kemnay-gold mx-auto mb-3" />
                      <div className="font-heading text-4xl text-kemnay-white tracking-wider">
                        {stat.value}
                      </div>
                      <div className="text-kemnay-white/60 text-sm mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 sm:py-28 bg-kemnay-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-4xl sm:text-5xl tracking-wider text-kemnay-black text-center mb-12">
              OUR VALUES
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "TRUST & TRANSPARENCY",
                description:
                  "We believe in honest, upfront pricing with no hidden fees. Every quote is detailed and transparent, so you know exactly what you're paying for.",
              },
              {
                icon: Award,
                title: "EXCELLENCE IN CRAFT",
                description:
                  "We never cut corners. Every project is completed to the highest standard using premium materials, ensuring results that stand the test of time.",
              },
              {
                icon: MapPin,
                title: "LOCAL COMMUNITY",
                description:
                  "As a local Aberdeenshire business, our reputation matters. We treat every customer as a neighbour because, in many cases, they are.",
              },
            ].map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100}>
                <div className="bg-kemnay-white rounded-lg p-8 text-center h-full border border-kemnay-gray/10">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-kemnay-gold/10 flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-kemnay-gold" />
                  </div>
                  <h3 className="font-heading text-xl tracking-wider text-kemnay-black mb-3">
                    {value.title}
                  </h3>
                  <p className="text-kemnay-gray text-sm leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* CTA Banner */}
      <section className="py-16 bg-kemnay-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl tracking-wider text-kemnay-black">
            LET&apos;S WORK TOGETHER
          </h2>
          <p className="mt-4 text-kemnay-black/70 max-w-xl mx-auto">
            Get in touch today to discuss your project. We offer free surveys and quotes with no obligation.
          </p>
          <a
            href="#quote"
            className="inline-flex items-center gap-2 bg-kemnay-black text-kemnay-white px-8 py-3.5 font-semibold text-sm rounded hover:bg-kemnay-dark transition-all mt-8"
          >
            Get A Free Quote
          </a>
        </div>
      </section>
    </>
  );
}
