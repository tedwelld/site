import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "primeicons/primeicons.css";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { site } from "@/content/site";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const title = `${site.name} | Community Development & Animal Welfare in Zimbabwe`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Tikobane Trust",
    "Dete Zimbabwe",
    "Hwange",
    "community development Zimbabwe",
    "animal welfare Zimbabwe",
    "human wildlife conflict Zimbabwe",
    "youth development Zimbabwe",
    "conservation communities Zimbabwe",
    "NGO Matabeleland North",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: site.url,
    title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "Nonprofit",
};

export const viewport: Viewport = {
  themeColor: "#1b4332",
  colorScheme: "light",
};

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
  description: site.description,
  foundingDate: String(site.founded),
  identifier: `Reg No. ${site.registrationNumber}`,
  email: site.contact.email,
  telephone: site.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.contact.addressLines[0],
    addressLocality: "Dete",
    addressRegion: "Matabeleland North",
    addressCountry: "ZW",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.where.latitude,
    longitude: site.where.longitude,
  },
  areaServed: "Dete, Hwange District, Matabeleland North, Zimbabwe",
  knowsAbout: [
    "Animal welfare",
    "Sustainable community development",
    "Youth development",
    "Skills training",
    "Human-wildlife coexistence",
  ],
  sameAs: site.socials.map((s) => s.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZW" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-dvh flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-99 focus:rounded-full focus:bg-forest-700 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-sand-50"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        {/* Spacer so the fixed bottom bar never covers the end of the footer. */}
        <div aria-hidden="true" className="h-16 lg:hidden" />
        <MobileBottomNav />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
        />
      </body>
    </html>
  );
}
