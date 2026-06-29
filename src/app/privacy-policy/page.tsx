import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${COMPANY.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="PRIVACY POLICY"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <section className="py-20 sm:py-28 bg-kemnay-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <h2 className="font-heading text-3xl tracking-wider text-kemnay-black">
            PRIVACY POLICY
          </h2>
          <p className="text-sm text-kemnay-gray">Last updated: January 2025</p>

          <div className="space-y-8 text-kemnay-gray leading-relaxed">
            <div>
              <h3 className="font-heading text-xl tracking-wider text-kemnay-black mb-3">
                1. INFORMATION WE COLLECT
              </h3>
              <p>
                We may collect personal information when you contact us, request a quote,
                or use our services. This may include your name, email address, phone
                number, postal address, and details about your property and project
                requirements.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl tracking-wider text-kemnay-black mb-3">
                2. HOW WE USE YOUR INFORMATION
              </h3>
              <p>We use your personal information to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Respond to your enquiries and provide quotes</li>
                <li>Carry out agreed works and services</li>
                <li>Communicate with you about your project</li>
                <li>Meet our legal and regulatory obligations</li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-xl tracking-wider text-kemnay-black mb-3">
                3. DATA STORAGE & SECURITY
              </h3>
              <p>
                We take appropriate measures to protect your personal information from
                unauthorised access, alteration, or disclosure. Your data is stored securely
                and is only accessed by authorised members of our team.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl tracking-wider text-kemnay-black mb-3">
                4. SHARING YOUR INFORMATION
              </h3>
              <p>
                We do not sell, rent, or share your personal information with third parties
                for marketing purposes. We may share your information with trusted
                subcontractors solely for the purpose of carrying out agreed works.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl tracking-wider text-kemnay-black mb-3">
                5. YOUR RIGHTS
              </h3>
              <p>
                Under the UK GDPR, you have the right to access, correct, or delete your
                personal information. You may also object to or restrict the processing of
                your data. To exercise any of these rights, please contact us using the
                details below.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl tracking-wider text-kemnay-black mb-3">
                6. COOKIES
              </h3>
              <p>
                Our website may use cookies to enhance your browsing experience. You can
                choose to disable cookies through your browser settings.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl tracking-wider text-kemnay-black mb-3">
                7. CONTACT US
              </h3>
              <p>
                If you have any questions about this privacy policy or wish to exercise your
                rights, please contact us at:
              </p>
              <div className="mt-3 text-kemnay-black font-medium">
                <p>{COMPANY.name}</p>
                <p>{COMPANY.address}</p>
                <p>
                  Email:{" "}
                  <a href={`mailto:${COMPANY.email}`} className="text-kemnay-gold hover:underline">
                    {COMPANY.email}
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="text-kemnay-gold hover:underline">
                    {COMPANY.phoneFormatted}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
