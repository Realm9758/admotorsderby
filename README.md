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

The world is the signal box, from the town the Midland Railway built. Derby made
the railway that ran to the minute through the night, and signalling is the one
trade whose whole point is that somebody is awake at three in the morning.

- The name is a vitreous enamel running-in board, with a 24/7 target disc hung
  under its right end.
- The primary action is a painted catch handle bolted to a plate, because that
  is the object a signalman actually pulls.
- The semaphore arm starts at danger and pulls off to clear. That single gesture
  is the page's authored motion, and it is disabled under reduced motion.
- The five services are a lever frame, painted to the real frame convention:
  red for a stop signal, yellow for a distant, black for points, blue for a
  facing point lock, green for a release.
- The clock is a twenty four hour ring with every hour lit, because the profile
  says open 24 hours.

No photograph of this business exists, so the night is lit rather than shot.
`public/boxlight.svg`, `boxlight-portrait.svg` and `boxlight-close.svg` build a
signal box window spilling onto ballast out of five named parts: a pool squashed
low, a contact ramp under it, a hot head where the window stands, a throw wedge
masked to die before the top, and a weak second source. Three assets rather than
one, because a landscape pool cover cropped into a phone frame falls off the
edge.

The full direction contract is an HTML comment at the top of the rendered body.

## Running it

```
npm install
npm run dev
```
