# AD Motors Mobile Services 24/7

A one page site for a mobile mechanic in Derby, built for a Google Business
Profile that had no website of its own.

Next.js App Router, React, TypeScript. No CSS framework: the whole system is
`app/globals.css`. Deployed on Vercel.

## The rule this site is built on

Every word and every fact lives in `content/site.ts`. `app/page.tsx` contains no
strings. Nothing on the page may be invented, and each fact in that file carries
the source it came from:

| Tag | Source |
| --- | --- |
| `[google]` | The Google Business Profile for "AD Motors Mobile Services 24/7", supplied 20 August 2026. Name, category, address, mobile number, "Open 24 hours". It shows no rating and no reviews. |
| `[admotors]` | admotors.co.uk, the site of AD Motors Limited, the workshop at the same address. Landline and workshop description. |
| `[client]` | Confirmed by the client on 20 August 2026: this is the mobile arm of AD Motors Limited, and the five service names are a generic set he authorised rather than a published list. |

The structured data carries no `aggregateRating` and no `review` array, because
the profile shows neither, and because republishing directory reviews as a
business's own first-party markup breaches Google's local business review
policy. The reviews that exist online belong to the car sales side of AD Motors
Limited and are not this service's to quote.

## Still missing

These were never supplied. They are omitted from the page rather than guessed
at, and each is a question for the client.

| Fact | Status |
| --- | --- |
| Email address | None published anywhere |
| Coverage radius | Unknown. The page says Derby and claims nothing wider |
| Callout fee or hourly rate | Not published. No price appears on the page |
| Years trading as the mobile arm | Unknown. AD Motors Limited says 2006, but that is the workshop |
| Qualifications | None published |
| Payment methods | Unknown |
| Reviews and rating | The profile shows none |
| What "open 24 hours" covers | Whether callouts run all night, or only the phone is answered |

## The design

The house dark-professional canon, the same system the sibling trade sites run:
graphite ground, hairline rules as the only structural device, one rationed
chromatic accent, wide-stretched Archivo caps against plain sentence-case body,
flat depth. The accent is the whole of the divergence between the siblings, and
this one is copper: a mechanic's warm metal rather than a signal colour.

No photograph of this business exists and stock imagery was refused, so the
first viewport is lit rather than shot. `public/worklamp.svg` is a produced
asset built in five named parts, a pool of light lying on the ground, the
contact shadow under it, the hot head where the fitting sits, the throw running
up and across, and a weaker second source falling from the far side, with grain
baked in. `worklamp-portrait.svg` re-authors it in a phone's own aspect rather
than nudging the wide one with background-position, and `worklamp-close.svg`
centres it behind the closing number.

There is no review section, because the profile publishes no rating and no
reviews. There is no price, no coverage radius and no credential list, for the
same reason. What stands in their place along the foot of the first viewport is
three facts that can be checked: the hours, the callout, and the workshop.

An earlier build of this site used a Midland Railway signal box as its visual
world. The client saw it and asked for something more professional, so the
world was replaced rather than polished. The record of that decision is in
`.impeccable/direction-roll.md`.

The full direction contract is an HTML comment at the top of the rendered body.

## Running it

```
npm install
npm run dev
```
