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
              carries no aggregateRating.

    [admotors] admotors.co.uk, the site of AD Motors Limited, the workshop at
              the same address. Source of the landline and the workshop's own
              description of what it does.

    [client]  Confirmed by the client on 20 August 2026: this is the mobile arm
              of AD Motors Limited, and the service list below is a generic set
              he authorised rather than a list published anywhere. It is not
              scraped and must never be presented as though it were.

  The lever colours in `services` are the real British signal box frame
  convention (red stop, yellow distant, black points, blue facing point lock,
  green release). They are visual grammar, not a claim about the business, and
  the client authorised them explicitly on 20 August 2026 when asked whether to
  keep the five colours or fall back to the page's maroon and brass.
*/

export const identity = {
  /* [google] the trading name exactly as the profile writes it */
  legalName: "AD Motors Mobile Services 24/7",
  boardTop: "AD Motors",
  boardBottom: "Mobile Services",
  tab: "24/7",
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
} as const;

export const workshop = {
  /* [client] confirmed relationship; [admotors] the workshop's own details */
  name: "AD Motors Limited",
  landlineDisplay: "01332 988182",
  landlineHref: "tel:+441332988182",
  site: "admotors.co.uk",
  siteHref: "https://admotors.co.uk/",
} as const;

export const hours = {
  /* [google] "Open 24 hours", with no per-day variation stated */
  summary: "Open 24 hours",
  detail: "Every day, all year",
  /* every hour of the clock face is lit; this is the profile's own claim */
  allHours: true,
} as const;

export const hero = {
  /* the promise, in the world's own words: a blocked line clears when he answers */
  headline: "The line is never closed.",
  standfirst:
    "A mobile mechanic in Derby, listed open 24 hours, with a real workshop behind him. He comes to the car, wherever it has stopped.",
  callLabel: "Call",
  servicesLabel: "What he covers",
  aspectDanger: "Line blocked",
  aspectClear: "Line clear",
} as const;

export const frame = {
  heading: "The frame",
  standfirst:
    "Five things a callout covers. Ring the number and say which one you think it is, or say you have no idea, which is most people.",
  /* [client] generic, client-authorised, not a published or scraped list */
  note: "A general list, confirmed by the business. Ring to ask about anything not on it.",
  /* The paint code is the real one used in British signal box frames, which is
     why five colours appear on a page whose fields are otherwise maroon and
     brass. It is the frame's own grammar, not a claim about the business. */
  caption: "Painted to the frame code: red stops, yellow warns, black moves the road, blue locks it, green releases.",
} as const;

export const services = [
  {
    lever: "1",
    colour: "red",
    /* red: a stop signal, the lever you pull when the road ahead is blocked */
    name: "Breakdowns",
    line: "The car has stopped where it stands. He comes out to it and works on it there.",
  },
  {
    lever: "2",
    colour: "yellow",
    /* yellow: the distant signal, the warning that something is ahead */
    name: "Diagnostics",
    line: "A warning light with no obvious cause. Read the fault properly before anything gets replaced.",
  },
  {
    lever: "3",
    colour: "black",
    /* black: points, the routine setting of the road */
    name: "Servicing",
    line: "The scheduled work, done on your driveway or at your work, instead of losing a day to a garage.",
  },
  {
    lever: "4",
    colour: "blue",
    /* blue: the facing point lock, the thing that stops a road moving under you */
    name: "Brakes",
    line: "Pads, discs and the noises that come before them.",
  },
  {
    lever: "5",
    colour: "green",
    /* green: the release lever, what gives permission to proceed */
    name: "Batteries",
    line: "Testing, charging and replacing, including the ones that only fail on a cold morning.",
  },
] as const;

export const box = {
  heading: "Roadside, and the box behind it",
  standfirst:
    "Most mobile mechanics are a van and nothing else. Most garages shut at six. This is both, run by the same firm.",
  cells: [
    {
      label: "At the roadside",
      /* [google] the profile's own category and the "mobile services" name */
      body: "He drives to the car. Driveway, work car park, supermarket bay, kerb. Most of the list above gets finished where the car is standing.",
    },
    {
      label: "Back at the workshop",
      /* [client] + [admotors] */
      body: "When a job needs a ramp, it goes to AD Motors Limited on Cameron Road, the workshop this mobile service belongs to.",
    },
  ],
} as const;

export const clock = {
  heading: "Open 24 hours",
  /* [google] verbatim claim; the ring below lights all 24 hours because of it */
  standfirst:
    "The profile carries no closing time and no out of hours arrangement. It says open 24 hours, every day, and that is the whole point of the business.",
  nowLabel: "Derby, now",
  lit: "Open",
} as const;

export const where = {
  heading: "Where he works from",
  /* [google] address; no coverage radius has been supplied, so none is claimed */
  standfirst: "Based on Cameron Road, out across Derby.",
  plate: "Derby",
} as const;

export const close = {
  heading: "Pull the lever.",
  /* the description engraved on the plate, in the frame's own register */
  plateDesc: "Mobile mechanic · Derby",
  foot: "Open 24 hours · 41-45 Cameron Rd, Derby DE23 8RT",
} as const;

/* The three readings along the foot of the hero, in the block shelf. Every
   one of them is a fact from [google] or the [client]-confirmed relationship,
   and nothing here is a claim about speed, price or coverage radius. */
export const blocks = [
  { label: "Hours", value: "Open 24 hours", note: "Every day, all year" },
  { label: "Callout", value: "He comes to the car", note: "Driveway, car park, kerb" },
  { label: "Behind it", value: "Cameron Road, Derby", note: "The AD Motors workshop" },
] as const;

/* Three plain lines under the clock. Each restates a published fact rather
   than adding a new one. */
export const clockPoints = [
  "The number on this page is the number the profile lists, and it is the same number at four in the morning as it is at two in the afternoon.",
  "A car that will not start on a work car park is a worse problem at seven in the evening than at ten in the morning, which is the hour most garages have already shut.",
  "Ring and say what the car is doing. If it is a job for the workshop rather than the roadside, he will say so.",
] as const;

export const meta = {
  title: "AD Motors Mobile Services 24/7 | Mobile mechanic in Derby",
  description:
    "Mobile mechanic in Derby, open 24 hours. Diagnostics, breakdowns, servicing, brakes and batteries, done where the car is standing. Backed by the AD Motors workshop on Cameron Road. Call 07751 914650.",
} as const;

export const footer = {
  /* the full trading name goes here even though the board is shortened */
  legal: "AD Motors Mobile Services 24/7",
  workshopLine: "The mobile arm of AD Motors Limited, 41-45 Cameron Rd, Derby DE23 8RT",
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
