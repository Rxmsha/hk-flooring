import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hkflooring.ca"), // Update with actual domain
  title: {
    default: "HK Flooring | Edmonton's #1 Flooring Experts | 18+ Years Experience",
    template: "%s | HK Flooring Edmonton",
  },
  description:
    "Edmonton's most trusted flooring contractor since 2006. Professional vinyl, laminate & hardwood installation. Free estimates, clean work, honest pricing. Call 780-655-5230.",
  keywords: [
    "flooring Edmonton",
    "Edmonton flooring contractor",
    "vinyl flooring Edmonton",
    "laminate flooring Edmonton",
    "hardwood flooring Edmonton",
    "flooring installation Edmonton",
    "floor installer Edmonton",
    "flooring company Edmonton",
    "best flooring Edmonton",
    "flooring Sherwood Park",
    "flooring St Albert",
    "flooring Spruce Grove",
    "HK Flooring",
    "residential flooring Edmonton",
    "commercial flooring Edmonton",
  ],
  authors: [{ name: "HK Flooring Ltd" }],
  creator: "HK Flooring Ltd",
  publisher: "HK Flooring Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://hkflooring.ca",
    siteName: "HK Flooring",
    title: "HK Flooring | Edmonton's #1 Flooring Experts | 18+ Years Experience",
    description:
      "Edmonton's most trusted flooring contractor since 2006. Professional vinyl, laminate & hardwood installation. Free estimates. Call 780-655-5230.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HK Flooring - Professional Flooring Installation Edmonton",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HK Flooring | Edmonton's #1 Flooring Experts",
    description:
      "18+ years of professional flooring installation in Edmonton. Vinyl, laminate, hardwood. Free estimates. Call 780-655-5230.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://hkflooring.ca",
  },
  category: "Home Improvement",
};

// JSON-LD Structured Data for Local Business (helps Google understand the business)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://hkflooring.ca",
  name: "HK Flooring Ltd",
  image: "https://hkflooring.ca/images/og-image.jpg",
  description:
    "Edmonton's most trusted flooring contractor since 2006. Professional vinyl, laminate & hardwood installation.",
  url: "https://hkflooring.ca",
  telephone: "+1-780-655-5230",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8207 149A Ave NW",
    addressLocality: "Edmonton",
    addressRegion: "AB",
    postalCode: "T5E 2M9",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.5461,
    longitude: -113.4937,
  },
  areaServed: [
    { "@type": "City", name: "Edmonton" },
    { "@type": "City", name: "Sherwood Park" },
    { "@type": "City", name: "St. Albert" },
    { "@type": "City", name: "Spruce Grove" },
    { "@type": "City", name: "Stony Plain" },
    { "@type": "City", name: "Leduc" },
    { "@type": "City", name: "Red Deer" },
    { "@type": "City", name: "Westlock" },
    { "@type": "City", name: "Athabasca" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/hk_flooring.ltd/",
    "https://www.facebook.com/p/HK-Flooring-LTD-100063537341975/",
  ],
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Flooring Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vinyl Flooring Installation",
          description: "Professional vinyl flooring installation for homes and businesses in Edmonton",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Laminate Flooring Installation",
          description: "Expert laminate flooring installation services in Edmonton",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hardwood Flooring Installation",
          description: "Premium hardwood flooring installation and refinishing in Edmonton",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="geo.region" content="CA-AB" />
        <meta name="geo.placename" content="Edmonton" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
