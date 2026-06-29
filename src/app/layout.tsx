import type { Metadata } from "next";
import { Barlow_Condensed, Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kemnay Roofing & Exterior Painting | Professional Roofers Aberdeen",
    template: "%s | Kemnay Roofing & Exterior Painting",
  },
  description:
    "Professional roofing and exterior painting services in Aberdeen and surrounding areas. Fully insured, 5-star rated. Roof repairs, new roofs, flat roofing, guttering, exterior painting & chimney work. Get a free quote today.",
  keywords: [
    "roofing aberdeen",
    "roof repairs aberdeen",
    "exterior painting aberdeen",
    "roofing contractors aberdeen",
    "flat roofing aberdeen",
    "guttering aberdeen",
    "chimney repairs aberdeen",
    "new roofs aberdeen",
    "kemnay roofing",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Kemnay Roofing & Exterior Painting",
    title: "Kemnay Roofing & Exterior Painting | Professional Roofers Aberdeen",
    description:
      "Professional roofing and exterior painting services in Aberdeen. Fully insured, 5-star rated. Get a free quote today.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RoofingContractor",
              name: "Kemnay Roofing & Exterior Painting Ltd",
              image: "/images/og-image.jpg",
              telephone: "+441467840181",
              email: "info@kemnayroofingaberdeen.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "7 Greatstone Wood",
                addressLocality: "Kemnay",
                postalCode: "AB51 5LU",
                addressCountry: "GB",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 57.2241721,
                longitude: -2.7839835,
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "63",
                bestRating: "5",
              },
              priceRange: "$$",
              areaServed: [
                "Aberdeen",
                "Kemnay",
                "Inverurie",
                "Alford",
                "Westhill",
                "West Aberdeenshire",
              ],
              services: [
                "Roof Repairs",
                "New Roofs",
                "Flat Roofing",
                "Guttering",
                "Exterior Painting",
                "Chimney Work",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
