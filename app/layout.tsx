import type { Metadata, Viewport } from "next";
import { Archivo, Martian_Mono } from "next/font/google";
import { contact, identity, meta, workshop } from "@/content/site";
import "./globals.css";

/* The signage voice. Archivo's width axis is what lets a heading stretch to
   enamel-board proportions without a second display face. */
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
});

/* The instrument voice. Used only where the page is reporting a measurement:
   lever numbers, hours on the ring, plate labels. Never as body copy. */
const martian = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const SITE_URL = "https://admotorsderby.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: identity.legalName,
    title: meta.title,
    description: meta.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0e1014",
};

const contract = `<!--
THESIS: A mobile mechanic's page whose one idea is that the line is never closed. It refuses the category's stock arrangement, a photograph of a smiling man in hi-vis beside an open bonnet under a red CALL NOW band, and builds the page instead out of the object Derby gave the world: the signal box, where somebody has always been awake at three in the morning.
OWN-WORLD: Night iron ground lit by one signal box window. Midland maroon enamel carrying whole regions, never an accent: the running-in board, the target disc, the workshop block. Brass for plates and rules. Two lamp glasses only, signal red for the state the visitor is in and lamp green for what happens when they ring. Archivo stretched to board proportions against Martian Mono used only for measurements.
STORY: A driver standing beside a car that will not start reads the board, sees a signal pull off to clear, learns in three readings that it is open 24 hours, that he comes to the car and that a real Cameron Road workshop stands behind it, scans five levers for the job he thinks he has, and rings.
FIRST VIEWPORT: A full-bleed enamel running-in board across the container with a 24/7 target disc hung under its right end, the headline and standfirst beneath at left, the red catch handle carrying the number as the primary action, a semaphore arm at right that starts at danger and pulls off to clear, and a three-cell block shelf pinned along the foot. A sticky handle holds the number under the thumb on phones.
FORM: Signal Box, candidate 4 of 7 on the grounded list, assigned by the roll and taken by the user over three challengers and the standing canon on 20 August 2026. Seed key b2769508.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: identity.legalName,
  url: SITE_URL,
  description:
    "Mobile mechanic in Derby, open 24 hours. Diagnostics, breakdowns, servicing, brakes and batteries, done where the car is standing.",
  telephone: contact.phoneE164,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.street,
    addressLocality: contact.locality,
    postalCode: contact.postcode,
    addressCountry: contact.country,
  },
  areaServed: { "@type": "City", name: "Derby" },
  // Transcribed from the Google Business Profile's own "Open 24 hours", which
  // carries no per-day variation. Nothing is inferred beyond that label.
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  parentOrganization: {
    "@type": "AutoRepair",
    name: workshop.name,
    url: workshop.siteHref,
    telephone: "+441332988182",
  },
  // Deliberately carries no `aggregateRating` and no `review`. The profile
  // shows no rating and no reviews, so there is nothing to publish, and the
  // reviews that exist online belong to the car sales side of AD Motors
  // Limited rather than to this service.
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${archivo.variable} ${martian.variable}`}>
      <body>
        <span hidden dangerouslySetInnerHTML={{ __html: contract }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
