import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { contact, identity, meta, workshop } from "@/content/site";
import "./globals.css";

/* The house voice across every sibling site. The width axis is what lets the
   lockup stretch to signage proportions without a second display face. */
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
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
    siteName: identity.name,
    title: meta.title,
    description: meta.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#100e0c",
};

const contract = `<!--
THESIS: A mobile mechanic's page whose whole argument is checkable, and whose only job is to make one phone call happen. It refuses the category's stock arrangement, a stock photograph of a smiling man in hi-vis beside an open bonnet under a red CALL NOW band, and it refuses the expressive alternative too: the client saw a fully built signal box world and asked for something more professional, so convention is the commitment here, executed at full fidelity.
OWN-WORLD: Graphite ground, hairline rules as the only structural device, one rationed copper accent on the call action, the sub-line, the section rules and the closing number. Wide-stretched Archivo caps against plain sentence-case body. Flat depth: no shadowed panels anywhere except the accent glow under the primary button. Copper because this is a mechanic and warm metal reads as the tooling, not as a hazard.
STORY: A driver standing beside a car that will not start reads the trading name, learns in three checkable facts that it is open 24 hours, that he comes to the car and that a real Cameron Road workshop stands behind it, scans five things a callout covers, and rings.
FIRST VIEWPORT: 92svh of graphite lit by one work light stood low and right, as a produced asset rather than a stack of CSS ramps. The trading name at left in its own three fixed lines, AD MOTORS / MOBILE SERVICES / 24/7, so the fact that sells this business is at display size and is the name rather than a second claim. Copper sub-line, tagline, filled copper call button and a ghost button to the services. A three-cell hairline fact band pinned along the foot carrying hours, callout and workshop, all three inside the viewport at 1440x900, 1280x800 and 390x844. The lamp comes up and the lockup settles under it from an already-visible default: one orchestrated entrance, nothing else on the page animates in, and nothing ever hides the number.
FORM: The category standard, the standing exit, taken by the user on 20 August 2026 after seeing and rejecting the rolled Signal Box direction. Seed key b2769508, assigned index 4, superseded by the user's instruction. Craft bar: the user's own showroomdetailing and CJValeting builds, plus mobilemechanichull for the no-photography lit hero. Accent: copper, chosen by the user.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: identity.name,
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
    <html lang="en-GB" className={archivo.variable}>
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
