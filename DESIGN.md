---
name: AD Motors Mobile Services 24/7
description: Graphite ground, hairline rules, one rationed copper accent, and a work light that stands in for a photograph nobody took.
colors:
  graphite-ground: "#100e0c"
  copper: "#c1703a"
  copper-bright: "#e08b4f"
  copper-deep: "#8f4f24"
  copper-ink: "#190f05"
  workshop-white: "#f4f2ef"
  steel-mid: "#c4bdb4"
  steel-dim: "#9a9188"
  hairline: "rgba(244, 242, 239, 0.12)"
  hairline-strong: "rgba(244, 242, 239, 0.22)"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.95rem, 6.6vw, 4.9rem)"
    fontWeight: 650
    lineHeight: 0.96
    letterSpacing: "-0.012em"
    fontVariation: "'wdth' 128"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.2rem)"
    fontWeight: 650
    lineHeight: 1.1
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 120"
  number:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 7vw, 3.6rem)"
    fontWeight: 650
    lineHeight: 1.1
    letterSpacing: "-0.01em"
    fontFeature: "tabular-nums"
    fontVariation: "'wdth' 122"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 650
    lineHeight: 1.1
    letterSpacing: "0.02em"
    fontVariation: "'wdth' 112"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.02rem, 1.6vw, 1.16rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "0.16em"
  buttonLabel:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 650
    lineHeight: 1.1
    letterSpacing: "0.04em"
    fontVariation: "'wdth' 108"
rounded:
  focus: "2px"
  button: "3px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 2.5rem)"
  block: "3rem"
  grid-gap: "clamp(1.5rem, 3vw, 2.5rem)"
  section-pad: "clamp(4.5rem, 10vh, 7.5rem)"
  container: "1180px"
  measure: "68ch"
components:
  button-primary:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.copper-ink}"
    typography: "{typography.buttonLabel}"
    rounded: "{rounded.button}"
    padding: "0.95rem 1.6rem"
  button-primary-hover:
    backgroundColor: "{colors.copper-bright}"
    textColor: "{colors.copper-ink}"
  button-primary-active:
    backgroundColor: "{colors.copper-deep}"
    textColor: "{colors.workshop-white}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.workshop-white}"
    typography: "{typography.buttonLabel}"
    rounded: "{rounded.button}"
    padding: "0.95rem 1.6rem"
  button-ghost-hover:
    textColor: "{colors.copper}"
  button-small:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.copper-ink}"
    rounded: "{rounded.button}"
    padding: "0.68rem 1.05rem"
    size: "0.85rem"
  fact-cell:
    backgroundColor: "rgba(13, 11, 9, 0.72)"
    textColor: "{colors.workshop-white}"
    padding: "1.1rem 0 1.25rem"
  service-row:
    backgroundColor: "transparent"
    textColor: "{colors.steel-mid}"
    padding: "1.35rem 0"
  text-link:
    backgroundColor: "transparent"
    textColor: "{colors.copper}"
    padding: "0.78rem 0"
---

# Design System: AD Motors Mobile Services 24/7

## Overview

**Creative North Star: "The Work Light on the Driveway"**

This is the seventh build in a family that runs one system and diverges only on the accent: Showroom champagne gold, CJ claret, M&A signal amber, A V Spode cobalt, Ronniegears Trent green, Hull On-Air Red, and here copper. The system was derived from the Mobile Mechanic (Hull) build with the accent swapped, so the graphite ground, the hairline rule as the only structural device, the wide-stretched Archivo caps against sentence-case body, and the flat depth are inherited canon rather than local invention. Copper is the choice that makes it this business: a mechanic's warm metal reads as the tooling, not as a hazard lamp.

It supersedes a fully built Midland Railway signal box world. That direction won the roll (seed key `b2769508`, index 4), was built at full fidelity, reviewed, and shipped; the client saw it live and asked for "something more professional", which is the standing canon exit taken in plain words. The world was replaced wholesale, not polished, and the earlier DESIGN.md was deleted with it. Nothing of the signal box survives in this system, and nothing of it should be reintroduced as a quirk. Convention is the commitment here, executed at full fidelity.

The one thing this build could not inherit is imagery. No photograph of this business exists and none may be invented, so the first viewport is lit rather than shot: a work light stood low and to the right on a night driveway, produced as an SVG asset in five named parts rather than assembled from CSS gradient ramps. That decision propagates through the whole page: no cards, no photographic panels, no tonal surfaces. The page is a dark ground, some hairlines, a lamp, and a phone number.

**Key Characteristics:**
- Graphite ground (`#100e0c`) with no lighter panel surfaces anywhere; the only lighter areas are lamp light in an image asset.
- The 1px hairline at 12% white is the only structural device: sections, bands, split cells, service rows and the fact grid are all divided by it.
- One rationed copper accent, carried by the call actions, the hero sub-line, the section rules, the text links, the closing number and every browser surface.
- Archivo's width axis (100%–128%) does the display work; there is no second face.
- Flat by default: exactly one shadow exists in the build, the copper glow under the primary button.
- One orchestrated entrance on the first viewport, and it never fades text in.

## Colors

A near-black warm graphite carrying a three-step neutral text ramp and a single copper accent used at roughly a tenth of any viewport.

### Primary
- **Copper** (`#c1703a`): the accent, and the only chromatic colour on the page. It fills the primary call button, sets the hero sub-line, draws the 2.75rem × 2px rule under every section heading, colours text links and their underlines, and sets the closing phone number at display size. It also owns the browser surfaces: selection background, caret, focus ring, and link underline.
- **Copper Bright** (`#e08b4f`): hover only, on the primary button and the closing number, plus the source colour of the button's glow.
- **Copper Deep** (`#8f4f24`): pressed state of the primary button.
- **Copper Ink** (`#190f05`): the near-black used as text *on* copper (button label, selected text). Never a background.

### Neutral
- **Graphite Ground** (`#100e0c`): the page background, the topbar's 84% translucent ground, and the browser `theme-color`.
- **Workshop White** (`#f4f2ef`): headings, the trading-name lockup, fact values, and the source of both hairline tints.
- **Steel Mid** (`#c4bdb4`): body copy, leads, taglines, service descriptions, split-cell bodies.
- **Steel Dim** (`#9a9188`): labels, notes, footnotes, footer smallprint.
- **Hairline** (`rgba(244,242,239,0.12)`): every structural rule on the page.
- **Hairline Strong** (`rgba(244,242,239,0.22)`): the ghost button's border, and nothing else.

### Named Rules
**The Rationed Copper Rule.** Copper carries call actions, the hero sub-line, section rules, text links, the closing number, and the browser surfaces. It does not carry region or field labels: that was tried and removed in finish review. Labels are Steel Dim.

**The One Ground Rule.** There is exactly one background colour. `--graphite-panel` and `--graphite-raised` are declared but consumed nowhere, because the build has no panels; do not reach for them to make a card.

**The Night Legibility Rule.** Every text colour actually used clears WCAG AA on the graphite ground at its shipped size, because the reader is outdoors on a phone in bad light. A new tint must be tested at the size it will ship at, not at 16px.

## Typography

**Display Font:** Archivo Variable, width axis loaded (`Helvetica Neue`, Arial fallback)
**Body Font:** Archivo Variable, same family at normal width
**Label/Mono Font:** none. Numbers use `font-variant-numeric: tabular-nums` in the same face.

**Character:** One face doing two jobs. Headings are uppercase, weight 650, and stretched on the width axis toward signage proportions; body is plain sentence case at normal width. The contrast is width and case, never a second family.

### Hierarchy
- **Display** (650, `clamp(1.95rem, 6.6vw, 4.9rem)`, 0.96 line-height, width 128%): the trading name only. It is set in three fixed lines ("AD Motors" / "Mobile Services" / "24/7"), each `white-space: nowrap`, so the lockup never breaks in a place the name does not.
- **Number** (650, `clamp(2rem, 7vw, 3.6rem)`, width 122%, tabular): the closing phone number, in copper. The only display-scale element outside the hero.
- **Headline** (650, `clamp(1.5rem, 3vw, 2.2rem)`, 1.1, uppercase, width 120%): section headings, each followed by a copper rule.
- **Title** (650, `1.05rem`, uppercase, width 112%): service names in the left column of the service list.
- **Body** (400, `clamp(1.02rem, 1.6vw, 1.16rem)`, 1.6, sentence case): leads and paragraphs, capped at 68ch (`--measure`), 46ch for the hero tagline, 42ch in split cells, 44ch under the closing heading.
- **Label** (650, `0.7rem`, `0.16em` tracking, uppercase, Steel Dim): fact-band labels, split-cell labels, contact field terms. `0.72rem` in the split grid.
- **Button label** (650, `0.95rem`, `0.04em` tracking, uppercase, width 108%).

### Named Rules
**The Width-Axis Rule.** Display emphasis comes from Archivo's `wdth` axis, not a second typeface. The lockup steps down 128% → 110% → 100% as the viewport narrows (720px, 420px); nothing else on the page changes width at breakpoints.

**The Tabular Number Rule.** Every phone number and every published figure is `tabular-nums`. A number is a fact on this page, so it is set like one.

**The No Second Face Rule.** There is exactly one family in the build. No serif, no mono, no display face for the number.

## Layout

A single 1180px centred column (`--container`) with a fluid gutter (`clamp(1.25rem, 4vw, 2.5rem)`), stacked as full-width sections separated by a top hairline and `clamp(4.5rem, 10vh, 7.5rem)` of vertical padding. Inside a section the pattern is fixed: heading, copper rule, `--block` (3rem, 2.25rem under 720px) of space, then the body.

The first viewport is 92svh (86svh under 720px), a flex column with the lockup centred and the three-cell fact band pinned along the foot. Below it, three grids and nothing else: the service list is a two-column row grid (`minmax(0,14rem)` name against a fluid description), the workshop block is a two-cell split pair divided by a vertical hairline, and contact is a four-cell asymmetric grid (`1fr / 0.85fr / 1.35fr / 1fr`) sized to its content rather than evenly.

Responsive behaviour is three breakpoints. At 1080px the contact grid folds 4 → 2. At 720px everything becomes single column, vertical hairlines become horizontal ones, and the hero swaps to the portrait lamp asset. At 420px the hero buttons go full width. There are no other breakpoints.

### Named Rules
**The Hairline-Only Rule.** Structure is drawn with 1px hairlines, never with boxes, fills, or radii on a container. When a hairline-divided grid collapses to one column, the divider moves from `border-left` to `border-top`; it never disappears.

**The Thumb Reach Rule.** The primary call action is reachable without scrolling at 390px, and every interactive target clears 44px, including text links, which carry `padding-block: 0.78rem` with matching negative margin so the target grows without moving the type.

## Elevation & Depth

Flat. There are no shadowed panels, no raised surfaces, no tonal layering, and no borders drawn to imply a card. Depth on this page is light: the lamp asset behind the hero and behind the closing number is the only thing that makes the ground feel like a place.

Two blur effects exist and both are functional rather than decorative: the sticky topbar's `blur(10px)` over an 84% ground, and the fact band's `blur(2px)` over a 72% ground. The fact band's near-opaque ground is required, not stylistic: it sits directly over the low end of the lamp's throw, and left translucent one cell would read on lit ground and its neighbour on near-black.

### Shadow Vocabulary
- **Accent glow** (`box-shadow: 0 12px 30px -14px rgba(224, 139, 79, 0.55)`): the only shadow in the build. It sits under the filled copper call button, reading as the button's own light rather than as a drop shadow. Never applied to anything else.

### Named Rules
**The One Shadow Rule.** The accent glow under the primary button is the entire shadow vocabulary. A new surface gets a hairline or nothing.

## Shapes

Effectively square. The only radii in use are 3px on buttons and 2px on the focus ring: small enough to read as a manufactured edge rather than as a rounded UI. `--r-frame` (4px) and `--r-card` (5px) are declared and unused, because no frames or cards exist.

Everything else is rectangular and edge-aligned: the fact band, the split pair, the service rows and the contact grid are all plain rectangles separated by hairlines with no enclosure of their own. The single decorative mark is the section rule, a 2.75rem × 2px copper bar under every heading, centred under the closing heading and left-aligned everywhere else.

The identity mark is the same geometry: a 64px rounded-square graphite tile (10px radius) with an inset 2px copper keyline and the letters A and D drawn as outlined paths with their counters cut, because an SVG favicon gets no webfont and live `<text>` would ship in whatever sans the platform has.

## Components

### Buttons
- **Shape:** near-square (3px radius), uppercase label, `0.95rem 1.6rem` padding, `0.85rem` type and `0.68rem 1.05rem` padding in the small topbar variant.
- **Primary:** filled copper with copper-ink text and the accent glow. Hover brightens to `#e08b4f` and lifts 1px; pressed drops to `#8f4f24` with workshop-white text and sinks 1px.
- **Ghost:** transparent with a hairline-strong border and workshop-white text. Hover turns border and text copper and lifts 1px; pressed adds a 16% copper wash.
- **Focus:** the global 2px copper ring at 3px offset. There is no per-component focus style.
- **Reduced motion:** all button transitions and transforms are switched off.

### Fact Band (signature)
The three-cell hairline band pinned to the foot of the first viewport, where the photographed sibling sites put a full-bleed photo of the owner's work. Each cell is a definition-list group: a Steel Dim tracked label, a workshop-white value at `clamp(0.98rem, 1.7vw, 1.2rem)` in tabular figures, and a Steel Dim note. Cells are separated by a vertical hairline, and it becomes a single column with horizontal hairlines under 720px. It carries a 72% graphite ground with a 2px blur so every cell reads at the same contrast over the lamp's throw.

### Service List
Five stacked rows, not a grid of equal cards: a fixed-max name column (14rem) against a fluid description, baseline-aligned, `1.35rem` of vertical padding, each closed with a bottom hairline. The first row drops its top padding so the list aligns with the lead above it. Under 720px it stacks to name-over-description.

### Split Pair (signature)
Two cells for one fact with two halves (the van and the workshop behind it), divided by a single vertical hairline with a hairline above, and no border around either. Cells are label-over-body, body capped at 42ch. Under 720px the divider becomes a top hairline on the second cell.

### Contact Grid
A four-cell asymmetric definition grid (phone, hours, address, workshop landline). Terms are labels; phone numbers and hours are set as `.locationStrong` at `clamp(1.05rem, 1.8vw, 1.2rem)`, tabular, undecorated, turning copper on hover, with padding-block giving them a 44px target. Secondary links (Open in Maps, the workshop site) are copper text links with a 42%-opacity copper underline that goes solid on hover.

### The Lit Hero (signature)
The page's only image, and it is produced rather than photographed. Three assets, all `cover`, all sitting at `z-index: -1` in an isolated stacking context:
- `worklamp.svg` (1600×1000, positioned 70% 42%): the landscape hero light.
- `worklamp-portrait.svg` (800×1400, centred): the phone re-author, swapped in at 720px. It carries its own geometry because `background-position` has roughly eight pixels of vertical travel at a phone's aspect, so the asset places the light, not the CSS.
- `worklamp-close.svg` (1600×700, centred): the same lamp turned down, behind the closing number.

Each asset is built from the same five named parts, in order: **pool** (the squashed ellipse of light lying on the ground), **contact** (the ground darkening under and behind it), **head** (the small hot core at the near edge, where the fitting sits), **throw** (the wedge running up and across, masked so it dies before the top edge), and **house** (a weaker domestic wash from high on the far side, so the scene has more than one source). Grain is baked into the asset.

### Named Rules
**The Produced Light Rule.** No photograph of this business exists and none may be invented; no stock photography of other people's workshops is admissible. Where a photograph would go, light goes, and it is authored as an asset in the five named parts. A single radial gradient is a smudge, not a lamp.

**The Own-Aspect Rule.** A new viewport aspect gets its own lamp asset, authored in that aspect. It never gets the wide asset nudged with `background-position`.

## Do's and Don'ts

### Do:
- **Do** keep copper on the call actions, the hero sub-line, the section rules, the text links, the closing number and the browser surfaces, and nowhere else.
- **Do** draw every division with the 1px hairline at 12% white, and move it from `border-left` to `border-top` when a grid collapses.
- **Do** get display emphasis from Archivo's width axis (100%–128%) and case, never from a second typeface.
- **Do** set every phone number and published figure in `tabular-nums`.
- **Do** give any new interactive element a 44px target using padding-block with matching negative margin, so the target grows without moving the type.
- **Do** author a new lamp aspect as its own asset in the five named parts (pool, contact, head, throw, house).
- **Do** keep the primary call action reachable without scrolling at 390px.

### Don't:
- **Don't** animate opacity from zero on anything. `@keyframes rise` settles from `translateY(12px)` at delays 0/50/100/140ms and deliberately does not touch opacity, because PRODUCT.md principle 5 forbids motion that delays the phone number. The sibling sites fade their content in; this one may not, and that difference is a rule.
- **Don't** add a second animated moment. The lamp comes up (`lampUp`, 1400ms) and the lockup settles under it; nothing else on the page animates in.
- **Don't** add a shadow. The accent glow under the primary button is the whole vocabulary.
- **Don't** build a card, a panel, or a bordered container. `--graphite-panel`, `--graphite-raised`, `--r-frame` and `--r-card` are declared and deliberately unused.
- **Don't** put copper on a region or field label; that was tried and removed in finish review.
- **Don't** introduce a rating, a star row, a review, a testimonial, a price, a coverage radius or a credential. None is published, so no surface for one exists, and the structured data carries no `aggregateRating` and no `review` array.
- **Don't** reintroduce anything from the superseded Midland Railway signal box world, and don't smuggle a quirk into canon. Canon is the client's recorded brand commitment.
- **Don't** set live `<text>` in an SVG icon; draw letters as outlined paths with the counters cut, because a favicon gets no webfont.
