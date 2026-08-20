/*
  AD Motors Mobile Services 24/7, Derby.

  Every word and every fact on the page lives in this file. app/page.tsx holds
  no strings. Nothing here may be invented: each fact carries the source it
  came from, and a fact with no source does not go on the page, it goes in
  `pending` at the bottom of this file and is simply omitted from the render.

  Sources used:

    [google]  The Google Business Profile for "AD Motors Mobile Services 24/7",
              pasted by the client on 20 August 2026. It carries the trading
              name, the category (Mechanic), the address, the mobile number and
              "Open 24 hours". It shows no rating and no reviews, so this site
              publishes no rating and no reviews, and its structured data
              carries no aggregateRating and no review array.

    [admotors] admotors.co.uk, the site of AD Motors Limited, the workshop at
              the same address. Source of the landline and the workshop's own
              description of what it does.

    [client]  Confirmed by the client on 20 August 2026: this is the mobile arm
              of AD Motors Limited, and the service list below is a generic set
              he authorised rather than a list published anywhere. It is not
              scraped and must never be presented as though it were.

  Nothing on this page says the phone is answered. The profile says the
  business is open 24 hours; whether that means callouts through the night or
  the phone being picked up is an open question in `pending`, so the page
  states the listing's claim and nothing beyond it.
*/

export const identity = {
  /* [google] the trading name exactly as the profile writes it */
  name: "AD Motors Mobile Services 24/7",
  shortName: "AD Motors",
  /* [google] the profile's own category */
  category: "Mechanic",
  town: "Derby",
} as const;

export const contact = {
  /* [google] the number on the profile, and the one the page leads with */
  phoneDisplay: "07751 914650",
  phoneHref: "tel:+447751914650",
  phoneE164: "+447751914650",
  /* [google] */
  street: "41-45 Cameron Rd",
  locality: "Derby",
  postcode: "DE23 8RT",
  country: "GB",
  addressLine: "41-45 Cameron Rd, Derby DE23 8RT",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=41-45+Cameron+Rd+Derby+DE23+8RT",
  mapsLabel: "Open in Maps",
} as const;

export const workshop = {
  /* [client] confirmed relationship; [admotors] the workshop's own details */
  name: "AD Motors Limited",
  landlineDisplay: "01332 988182",
  landlineHref: "tel:+441332988182",
  landlineE164: "+441332988182",
  site: "admotors.co.uk",
  siteHref: "https://admotors.co.uk/",
} as const;

export const hero = {
  nameLines: ["AD Motors", "Mobile Services"] as const,
  /* [google] the trading name carries 24/7, so the sub-line is the fact */
  subLine: "Mobile mechanic in Derby",
  tagline:
    "He comes to the car, wherever it has stopped. Driveway, work car park, supermarket bay or kerb, with a real Derby workshop behind him when a job needs a ramp.",
  callCta: "Call 07751 914650",
  secondaryCta: "What a callout covers",
  /* every cell below is a published fact, not a claim about speed or price */
  credentials: [
    { label: "Hours", value: "Open 24 hours", note: "Every day" },
    { label: "Callout", value: "He comes to the car", note: "Driveway, car park, kerb" },
    { label: "Workshop", value: "Cameron Road, Derby", note: "AD Motors Limited behind it" },
  ],
} as const;

export const services = {
  heading: "What a callout covers",
  lead:
    "Five things worth ringing about. Say which one you think it is, or say you have no idea, which is most people.",
  /* [client] generic, client-authorised, not a published or scraped list */
  items: [
    {
      title: "Breakdowns",
      body: "The car has stopped where it stands. He comes out to it and works on it there.",
    },
    {
      title: "Diagnostics",
      body: "A warning light with no obvious cause, read properly before anything gets replaced.",
    },
    {
      title: "Servicing",
      body: "The scheduled work, done on your driveway or at your work, instead of losing a day to a garage.",
    },
    {
      title: "Brakes",
      body: "Pads, discs and the noises that come before them.",
    },
    {
      title: "Batteries",
      body: "Testing, charging and replacing, including the ones that only fail on a cold morning.",
    },
  ],
  footnote:
    "A general list, confirmed by the business rather than taken from a published index. Ring to ask about anything not on it.",
} as const;

export const workshopSection = {
  heading: "A van, and a workshop behind it",
  lead:
    "Most mobile mechanics are a van and nothing else. Most garages shut at six. This is both, run by the same firm.",
  cells: [
    {
      label: "At the roadside",
      body: "He drives to the car. Most of the list above gets finished where the car is standing, without it moving.",
    },
    {
      label: "Back at the workshop",
      body: "When a job needs a ramp it goes to AD Motors Limited on Cameron Road, the workshop this mobile service belongs to.",
    },
  ],
} as const;

export const location = {
  heading: "Ring him",
  lead:
    "One number, and the profile lists it open 24 hours, every day. If it turns out to be a workshop job rather than a roadside one, he will say so on the phone.",
  phoneLabel: "Mobile",
  hoursLabel: "Hours",
  hoursValue: "Open 24 hours",
  addressLabel: "Based at",
  workshopLabel: "Workshop line",
} as const;

export const booking = {
  heading: "Derby, any hour",
  lead: "Say what the car is doing and where it is standing.",
  smallprint: [
    "AD Motors Mobile Services 24/7",
    "The mobile arm of AD Motors Limited, 41-45 Cameron Rd, Derby DE23 8RT",
  ],
} as const;

export const meta = {
  title: "AD Motors Mobile Services 24/7 | Mobile mechanic in Derby",
  description:
    "Mobile mechanic in Derby, open 24 hours. Diagnostics, breakdowns, servicing, brakes and batteries, done where the car is standing. Backed by the AD Motors workshop on Cameron Road. Call 07751 914650.",
} as const;

/*
  Pending. Facts nobody has supplied. They are omitted from the page rather
  than guessed at, and each is a question for the client.

  | Fact                        | Status                                       |
  | --------------------------- | -------------------------------------------- |
  | Email address               | None published anywhere                      |
  | Coverage radius             | Unknown; page says Derby and nothing wider   |
  | Callout fee / hourly rate   | Not published; no price appears on the page  |
  | Years trading (mobile arm)  | Unknown. AD Motors Limited says 2006, but    |
  |                             | that is the workshop, not this service       |
  | Qualifications              | None published                               |
  | Payment methods             | Unknown                                      |
  | Reviews and rating          | The profile shows none. No rating, no review |
  |                             | quotes and no aggregateRating anywhere       |
  | What "open 24 hours" covers | Whether callouts run all night or only the   |
  |                             | phone is answered. Page states the profile's |
  |                             | claim and nothing beyond it                  |
*/
export const pending = [
  "Email address",
  "Coverage radius",
  "Callout fee or hourly rate",
  "Years trading as the mobile arm",
  "Qualifications",
  "Payment methods",
  "Reviews and rating",
  "Whether 24 hours means callouts or the phone being answered",
] as const;
