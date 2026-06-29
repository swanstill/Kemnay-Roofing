import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { COMPANY } from "@/lib/constants";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${COMPANY.name}. Call ${COMPANY.phoneFormatted}, email ${COMPANY.email}, or visit us at ${COMPANY.address}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="CONTACT US"
        description="We'd love to hear from you. Get in touch for a free quote or to discuss your project."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="py-20 sm:py-28 bg-kemnay-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <ScrollReveal>
                <h2 className="font-heading text-3xl tracking-wider text-kemnay-black mb-6">
                  GET IN TOUCH
                </h2>
                <p className="text-kemnay-gray leading-relaxed mb-8">
                  Whether you have a question, need a quote, or want to discuss a project,
                  we&apos;re here to help. Reach out using any of the methods below.
                </p>
              </ScrollReveal>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: COMPANY.phoneFormatted,
                    href: `tel:${COMPANY.phone.replace(/\s/g, "")}`,
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: COMPANY.email,
                    href: `mailto:${COMPANY.email}`,
                  },
                  {
                    icon: MapPin,
                    label: "Address",
                    value: COMPANY.address,
                    href: COMPANY.googleReviewUrl,
                  },
                ].map((item, index) => (
                  <ScrollReveal key={item.label} delay={index * 100}>
                    <a
                      href={item.href}
                      className="flex items-start gap-4 p-4 rounded-lg bg-kemnay-light hover:bg-kemnay-dark hover:text-kemnay-white group transition-all"
                    >
                      <div className="w-12 h-12 rounded-lg bg-kemnay-gold/10 flex items-center justify-center shrink-0 group-hover:bg-kemnay-gold/20 transition-colors">
                        <item.icon className="w-5 h-5 text-kemnay-gold" />
                      </div>
                      <div>
                        <p className="text-kemnay-gray text-xs uppercase tracking-wider group-hover:text-kemnay-white/50">
                          {item.label}
                        </p>
                        <p className="text-kemnay-black font-medium text-sm mt-1 group-hover:text-kemnay-white">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  </ScrollReveal>
                ))}

              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={100}>
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-kemnay-dark relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2126.5!2d-2.784!3d57.224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x61dfc4a9bc20f53d%3A0xc752ccd610ae6d07!2sKemnay%20Roofing!5e0!3m2!1sen!2suk!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(0.6) contrast(1.2)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kemnay Roofing location"
        />
      </section>
    </>
  );
}
