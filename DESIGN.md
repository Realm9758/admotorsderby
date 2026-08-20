---
name: AD Motors Mobile Services 24/7
description: A Derby signal box rendered as a page: night iron, Midland maroon enamel, brass plates, and one lever you pull to ring.
colors:
  iron: "#0e1014"
  iron-panel: "#14171d"
  iron-raised: "#1a1e25"
  iron-deep: "#090a0d"
  maroon: "#7d1f28"
  maroon-deep: "#5e161d"
  maroon-light: "#97303a"
  maroon-edge: "#b0464f"
  enamel: "#f4f1ea"
  enamel-mid: "#cdc7bb"
  enamel-dim: "#a49d90"
  brass: "#b98a3c"
  brass-light: "#dcb268"
  brass-deep: "#77571f"
  brass-plate-face: "#c19a57"
  engraved: "#1c1408"
  lamp-red: "#d8382c"
  lamp-red-bright: "#ff6151"
  lamp-green: "#29a765"
  lamp-green-bright: "#4fdb92"
  hairline: "rgba(244, 241, 234, 0.13)"
  hairline-strong: "rgba(244, 241, 234, 0.24)"
  brass-rule: "rgba(185, 138, 60, 0.42)"
  paint-stop-red: "#c02f24"
  paint-distant-yellow: "#c9992c"
  paint-points-black: "#23272f"
  paint-fpl-blue: "#2a5f9c"
  paint-release-green: "#269257"
typography:
  board:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.4rem, 9.4vw, 4.9rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "clamp(0.02em, 0.5vw, 0.07em)"
    fontVariation: "'wdth' 108"
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 5.4vw, 3.4rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 96"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.7rem, 4vw, 2.55rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.022em"
    fontVariation: "'wdth' 98"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.08rem, 2.4vw, 1.22rem)"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "0.01em"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.2vw, 1.075rem)"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "normal"
  standfirst:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.02rem, 0.98rem + 0.3vw, 1.19rem)"
    fontWeight: 400
    lineHeight: 1.58
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "0.2em"
  measure:
    fontFamily: "Martian Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "clamp(1.85rem, 6vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.01em"
    fontFeature: "tabular-nums"
rounded:
  plate: "3px"
  board: "5px"
  lever: "4px"
  bolt: "50%"
spacing:
  gutter: "clamp(1.25rem, 4vw, 2.75rem)"
  container: "1200px"
  measure: "66ch"
  section: "clamp(4.5rem, 10vh, 8rem)"
  cell: "clamp(1.5rem, 3.4vw, 2.25rem)"
  row: "clamp(1rem, 2.4vw, 1.35rem)"
components:
  lever-primary:
    backgroundColor: "{colors.brass-plate-face}"
    textColor: "{colors.engraved}"
    rounded: "{rounded.plate}"
    padding: "0.5rem 1.3rem 0.6rem 1.5rem"
    height: "66px"
  lever-primary-hover:
    backgroundColor: "{colors.brass-light}"
    textColor: "{colors.engraved}"
  lever-close:
    backgroundColor: "{colors.brass-plate-face}"
    textColor: "{colors.engraved}"
    rounded: "{rounded.plate}"
    padding: "clamp(0.9rem, 2vw, 1.4rem) clamp(1.2rem, 3vw, 2.2rem) clamp(1rem, 2.2vw, 1.5rem) clamp(1.6rem, 3.4vw, 2.6rem)"
    height: "clamp(104px, 14vw, 160px)"
    width: "100%"
  lever-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.enamel-mid}"
    rounded: "{rounded.plate}"
    padding: "0 1.05rem"
    height: "50px"
  lever-ghost-hover:
    backgroundColor: "rgba(185, 138, 60, 0.08)"
    textColor: "{colors.enamel}"
  shelf-call:
    backgroundColor: "rgba(185, 138, 60, 0.14)"
    textColor: "{colors.enamel}"
    rounded: "{rounded.plate}"
    padding: "0.5rem 0.95rem"
    height: "44px"
  shelf-call-hover:
    backgroundColor: "rgba(185, 138, 60, 0.26)"
    textColor: "{colors.enamel}"
  board:
    backgroundColor: "{colors.maroon}"
    textColor: "{colors.enamel}"
    rounded: "{rounded.board}"
    padding: "clamp(1rem, 2.9vw, 1.65rem) clamp(1.4rem, 4.4vw, 3rem)"
    width: "100%"
  target-disc:
    backgroundColor: "{colors.maroon}"
    textColor: "{colors.enamel}"
    rounded: "{rounded.bolt}"
    size: "clamp(84px, 8vw, 104px)"
  pair-cell:
    backgroundColor: "{colors.iron-raised}"
    textColor: "{colors.enamel-mid}"
    rounded: "{rounded.plate}"
    padding: "{spacing.cell}"
  pair-cell-enamel:
    backgroundColor: "{colors.maroon}"
    textColor: "{colors.enamel}"
    rounded: "{rounded.plate}"
    padding: "{spacing.cell}"
  frame-number-plate:
    backgroundColor: "{colors.brass-plate-face}"
    textColor: "{colors.engraved}"
    typography: "{typography.measure}"
    rounded: "{rounded.plate}"
    width: "60px"
    height: "34px"
---

# Design System: AD Motors Mobile Services 24/7

## Overview

**Creative North Star: "The Signal Box at Three in the Morning"**

Derby is the Midland Railway's works town, and signalling is the one trade whose entire point is that somebody is awake at three in the morning. That is the business, so the page is built out of the object rather than decorated with a reference to it: a vitreous enamel running-in board, a target disc hung off its end, a painted lever the visitor pulls, a lower quadrant semaphore that comes off danger, brass description plates bolted through, and a twenty-four hour clock face with every hour lit.

The system is material before it is graphic. Four materials carry everything and each one is allowed in exactly one place: enamel for maroon fields, iron for the ground, brass for plates and rules, lamp glass for state. Nothing is an accent colour; a maroon region is a piece of enamel signage, and a brass edge is a plate. The ground is a night, and because no photograph of this business exists and none may be invented, the night is drawn rather than shot: three hand-authored SVG light assets place a signal box window spilling onto ballast, re-authored per orientation instead of cover-cropped.

Density is signage density. Type sits at board proportions and stretches on Archivo's width axis rather than reaching for a second display face; measurements sit in Martian Mono and nowhere else. Depth is real casting depth, never a card stack. The confirmed anti-reference is the category's stock arrangement: a photograph of a smiling man in hi-vis beside an open bonnet under a red CALL NOW band, three icon cards and a tick list.

**Key Characteristics:**
- Night iron ground with a single warm light source, drawn not photographed
- Midland maroon enamel carrying whole regions, rendered as fired glass with specular sweep, speckle and chipped bolt holes
- Brass for every description plate and rule, engraved dark, never a text colour on maroon
- Two lamp glasses only, red for the visitor's state and green for what happens when they ring
- Archivo on its width axis for signage; Martian Mono confined to measurements
- One authored motion in the whole page: the arm pulling off danger

## Colors

A night ground under one warm window, with maroon enamel doing the sign-work, brass doing the plate-work, and exactly two glasses for state.

### Primary
- **Midland Maroon** (`{colors.maroon}`): The enamel field. It carries whole regions and never an accent: the running-in board, the target disc, the workshop cell, the closing plate. Its lighter and deeper siblings exist only to build the vertical gradient of a fired field, and `maroon-edge` is a keyline on the close, not a text colour.
- **Enamel White** (`{colors.enamel}`): Every letter on maroon, the keyline set in from the board's edge, and the page's default text on iron. Warm, because vitreous white always is. `enamel-mid` is the standfirst and body-on-iron register, `enamel-dim` is captions, notes and instrument labels.

### Secondary
- **Brass** (`{colors.brass}`): Plate edges, rules, tick marks, hour marks on the ring, and the hairline that separates a note from body copy. `brass-plate-face` is the lit face of an actual description plate and `engraved` is what is cut into it. Brass is never a text colour on maroon, where it falls under contrast.

### Tertiary
- **Lamp Red** (`{colors.lamp-red}`): The state the visitor is in. The signal at danger, the painted stock of the call lever, the spectacle glass standing over the lamp before the pull.
- **Lamp Green** (`{colors.lamp-green}`): What happens when they ring. The block needles, the lit hour on the ring, the caption that reads clear. `lamp-green-bright` is the glass with the lamp behind it.

### Neutral
- **Iron** (`{colors.iron}`): The page ground and the browser's own theme colour. `iron-deep` is the scrollbar track and the foot of the call bar, `iron-panel` and `iron-raised` build the roadside cell and the lever's cast block.
- **Hairlines** (`{colors.hairline}` / `{colors.hairline-strong}`): Every division on iron. `brass-rule` is the one warm division, reserved for a note pulled aside from the run of copy.

### The frame paint code (authorised exception)
Five further hues exist, and only on the stocks of the lever frame and the paint spot on each row's number plate: **stop red**, **distant yellow**, **points black**, **facing point lock blue**, **release green**. This is the real British signal box frame convention and the frame's own grammar, authorised by the client on 20 August 2026 when asked directly. It is a client decision, not a design assumption, and it does not open the palette anywhere else.

### Named Rules
**The Whole Region Rule.** Maroon is a piece of enamel, not an accent. If a maroon area is smaller than a sign, it is wrong; tint it iron or leave it alone.

**The Two Glasses Rule.** Colour that reports state has exactly two values: red for the visitor's situation, green for the outcome of ringing. Nothing else on the page may signal by hue.

**The Brass Never Reads Rule.** Brass is a material edge, a rule, a plate face. It never sets running text on maroon, where it fails contrast. Letters on a brass plate are engraved dark (`{colors.engraved}`).

**The Five Colour Exception.** The frame paint code appears on the lever stocks and their matching row spots only. Extending it to any other surface breaks a client authorisation, not a preference.

## Typography

**Display Font:** Archivo (variable, `wdth` axis, with Helvetica Neue and Arial as fallback)
**Body Font:** Archivo
**Label/Mono Font:** Martian Mono (with ui-monospace and SF Mono as fallback)

**Character:** One grotesque, stretched and squeezed on its width axis so a heading can reach enamel-board proportions without a second display face, set against a mono that only ever reports a measurement. Signage voice and instrument voice, nothing between them.

### Hierarchy
- **Board** (700, `{typography.board.fontSize}`, line-height 0.94, tracked out, uppercase, `wdth` 108): The running-in board's top line, the largest signage on the page. Board type is uppercase and stretched wide; its second line drops to 600 with tracking up to 0.34em.
- **Display** (700, `{typography.display.fontSize}`, `wdth` 96): The hero headline, capped at 16ch so it breaks like a headline and not a paragraph. The closing lever's number runs at `clamp(1.85rem, 7.4vw, 4.6rem)` and is the largest type on the page.
- **Headline** (700, `{typography.headline.fontSize}`, `wdth` 98): Section headings, held inside the 66ch measure.
- **Title** (700, `{typography.title.fontSize}`): Service names in the frame rows and the value line of a block indication.
- **Body** (400, `{typography.body.fontSize}`, line-height 1.62): Running copy on iron. Standfirsts sit at `{typography.standfirst.fontSize}` in `enamel-mid`, capped at 46ch in the hero and 54ch elsewhere; frame lines cap at 58ch, notes at 62ch, captions at 64ch.
- **Label** (700, `{typography.label.fontSize}`, 0.2em, uppercase): Instrument labels on the block shelf, brass cell labels, engraved plate descriptions. Always Archivo, never the mono.
- **Measure** (700, mono, tabular figures): The live time in the ring hub, the ring's hour numerals at 12px, and the frame's number plates at 0.8rem and 19px in the drawing.

### Named Rules
**The Instrument Voice Rule.** Martian Mono appears only where the page is reporting a measurement: the hour ring numerals, the live Derby time, and the frame's number plates. Never body copy, never a label, never a heading.

**The One Axis Rule.** Reach for Archivo's `wdth` axis before reaching for a second family. Board lettering stretches (108-112), display headings compress (96-98), and no other display face enters the system.

**The Tabular Number Rule.** Any figure the visitor may read as a quantity, a time or a phone number is set with `font-variant-numeric: tabular-nums` so it does not shimmer when it updates.

## Layout

A single 1200px container (`{spacing.container}`) with a fluid gutter (`{spacing.gutter}`), used by every band including the full-bleed enamel ones; the enamel runs edge to edge while its content stays on the container. Sections are separated by a hairline and padded with `{spacing.section}` on the block axis. Prose is held to a 66ch measure by default and tighter per role.

Grids are named after their objects rather than being a general column system. The hero splits into copy plus a 168px signal column at 940px. The block shelf becomes three equal cells at 720px, borders turning from bottom rules into left rules. The frame rows run number, name, line as a 60px plus 1fr stack, promoting the line into a third column at 820px. The workshop pair goes two-up at 820px. The clock band puts a 320px ring beside its copy at 860px. The footer goes two-up at 720px.

Phone behaviour is a re-author, not a squeeze: the hero light swaps to a portrait asset below 760px, the target disc drops from an absolutely positioned hang to an inline right-aligned disc at 62px, the semaphore column is absent below 940px, and a fixed call bar occupies the bottom of the viewport with safe-area padding until 720px, with the footer carrying 6.5rem of bottom padding so nothing hides under it. The lever frame drawing keeps a 560px minimum and scrolls horizontally inside its own container rather than shrinking below legibility.

**The Thumb Reach Rule.** Every way to ring is at least 44px tall (`shelfCall`, `pairLink`, footer links) and the primary lever is 66px, 54px in the call bar. On a 390px viewport a phone number is visible without scrolling and a second one is under the thumb.

## Elevation & Depth

This system is cast, not stacked. Depth comes from how a real object sits on a wall or a frame: a bright inset top edge where light catches the lip, a dark inset bottom edge where it does not, and one long soft drop that puts the object away from the ground. There are no hard offset shadows and no floating card layer; the two backdrop-blurred surfaces (the block shelf header, the mobile call bar) are glass over iron, not elevation.

Material comes before shadow. Every maroon field is a fired enamel surface: a specular sweep as its first background layer, a repeating speckle tile from `public/enamel.svg` composited through `.enamel::after` at soft-light and 0.55 opacity, and chipped edges drawn behind the bolt heads at the board's ends. A turbulence grain overlay at 0.26 and overlay blend sits behind the lit bands so the drawn light does not band.

### Shadow Vocabulary
- **Enamel sign** (`box-shadow: 0 1px 0 rgba(255,255,255,0.16) inset, 0 -1px 0 rgba(0,0,0,0.4) inset, 0 26px 60px -32px rgba(0,0,0,0.95), 0 3px 10px -4px rgba(0,0,0,0.6)`): The running-in board and any full enamel field.
- **Brass plate** (`box-shadow: 0 1px 0 rgba(255,255,255,0.55) inset, 0 0 0 1px rgba(0,0,0,0.4), 0 16px 30px -18px rgba(0,0,0,0.95), 0 5px 12px -7px rgba(0,0,0,0.7)`): Any bolted description plate. On hover the drop deepens and the face brightens 7%.
- **Hung disc** (`box-shadow: 0 0 0 3px var(--enamel) inset, 0 0 0 5px var(--maroon) inset, 0 14px 26px -14px rgba(0,0,0,0.9)`): The target disc, whose inset rings are its enamel border rather than a shadow.
- **Painted stock** (`filter: drop-shadow(0 10px 14px rgba(0,0,0,0.55))`): The lever handle, shadowed as a drawing so the shadow follows its silhouette.
- **Lit glass** (`box-shadow: 0 0 9px rgba(79,219,146,0.75)` / SVG `feGaussianBlur` glow): A lamp with something behind it. Glow is only ever emitted by lamp glass and block needles.

### Named Rules
**The Cast Edge Rule.** Depth is built from a 1px light inset at the top, a dark inset at the bottom, and one long soft drop. No hard offset shadow, and no shadow whose blur is smaller than its offset.

**The Glow Is A Lamp Rule.** A glow means something is lit. It belongs to lamp glass, block needles and the active hour on the ring. Nothing else glows, including on hover.

## Shapes

Cast and rolled iron has a small radius, never a soft one. The scale tops out at 5px: plates and cells at 3px (`{rounded.plate}`), the running-in board at 5px (`{rounded.board}`), the lever stock at 4px (`{rounded.lever}`). Full circles are reserved for objects that are round in life: bolt heads, rivets, block needles, the paint spot, the target disc.

Enclosure is by keyline and by rule. The running-in board's white keyline is a 2px inset border set in `clamp(6px, 1.2vw, 11px)` from the edge, and the closing plate repeats it at `clamp(10px, 1.8vw, 20px)`; those two are the same object at two scales. Everywhere else, division is a single hairline rather than a box, and cells on iron carry a 1px hairline border with no fill beyond a faint vertical tint.

Two motifs recur and both are hardware. Bolts: 13px brass domes with a radial highlight at 33%/27%, sitting at the board's ends over a chipped clip-path of enamel loss. Rivets: 7px versions of the same, at both ends of every description plate, because a plate is bolted to the frame and not printed on it.

**The Bolted-On Rule.** Anything that reads as a plate carries its fixings. A brass surface without rivets is a swatch, not a plate.

## Components

### Buttons
The primary action is not a button: it is the lever a signalman actually pulls.

- **Shape:** Barely-radiused plate corners (3px), with a drawn stock overlapping the plate's left edge by 6px so the two read as one assembly.
- **Primary (the lever):** A red painted stock on a fulcrum with a catch handle down its front face, joined to a brass description plate whose face runs `#dcbd82` to `#a58240` with a specular sweep and a fine engraving grain; text engraved in `{colors.engraved}`, 66px tall, rivets at both ends.
- **Hover / Focus:** The stock rotates -6deg through its catch about a 39%/101% origin over 160ms; the plate brightens 7% and its drop deepens. Active goes to -13deg with a 1px downward nudge. Focus is a 2px `brass-light` outline offset 3px, system-wide.
- **Close variant:** The same object at board scale, full container width, plate 104-160px tall, the number at `clamp(1.85rem, 7.4vw, 4.6rem)` as the largest type on the page, with hours and address stacked right-aligned in the plate above 700px.
- **Call bar variant:** The same object at 54px, stock at 23px, fixed to the bottom of the viewport below 720px.
- **Ghost:** A 50px hairline-bordered plate outline in `enamel-mid`; on hover the border warms to `brass-rule` and the fill lifts to an 8% brass wash. The only secondary action shape.
- **Shelf call:** A brass-tinted 44px plate in the sticky header carrying the number in tabular figures, with the hours line appearing beside it above 720px.

### Cards / Containers
- **Corner Style:** 3px.
- **Background:** Iron cells are a vertical `iron-raised` to `iron` wash at 72% over the ground; the enamel cell is a maroon field with the same specular and speckle treatment as the board.
- **Shadow Strategy:** None. Iron cells sit flat and are defined by their hairline border; only enamel and brass objects cast.
- **Border:** 1px hairline on iron cells, `rgba(176,70,79,0.5)` on the enamel cell.
- **Internal Padding:** `{spacing.cell}`, with an internal foot separated by a hairline (`rgba(244,241,234,0.28)` when on enamel).

### Bolted-on labels
Every label that names an object is a brass plate bolted to it, never a line of small caps floating above the copy: 27px tall, 3px corners, the same specular-and-brushed brass face as the description plates, engraved in `engraved` at 0.66rem / 0.17em. This is the form the cell labels in the roadside pair take, and it is the only sanctioned way to label a region. A small caps line set loose above body copy reads as an eyebrow and is not part of this system.

### Navigation
A sticky block shelf, the strip of instruments above a signalman's frame: 58px minimum height, iron at 86% with a 12px blur and 120% saturation behind it, a hairline underneath. The mark is uppercase Archivo at `wdth` 112 with 0.14em tracking, its sub-line in `enamel-dim`. There is no menu; the only navigation on the page is the ghost lever's jump to the frame.

### The Lever Frame
The service list is one object, not five cards: a continuous floor plate with five stocks standing at 200px frame pitch, each in its own paint-code colour built from a mid body, a 55% light highlight strip and a 70% dark shade strip, with a catch handle and trigger in steel. Each stock has a brass number plate bolted to the floor plate in front of it, engraved in the mono. The descriptions read as rows underneath, keyed to the plates by number, each row carrying a 60px brass plate with a spot of that lever's own paint. Rows warm to a 5% brass wash on hover.

### The Hour Ring
A 320px twenty-four hour clock face: two brass circles at 0.28 and 0.16 alpha, 24 hour marks stepped by weight (2px brass at 55%, 3px enamel at 62% on the six-hour majors, 5px `lamp-green-bright` with a 7px glow on the live hour), mono numerals at 00/06/12/18, and a hub carrying the Derby time in mono, a tracked label, and a green state line beside a block needle. It is the only client component on the page and it updates every 30 seconds.

### The Signal
A lower quadrant Midland semaphore, 168x340, shown from 940px. The lamp is bolted to the post and never moves; the spectacle casting is rigid with the arm, so when the arm drops the red glass swings out of the lamp and the green swings in. The arm pulls off over 780ms with an overshoot, delayed 1.1s, and the glasses cross-fade at 1.86s. This is the page's one authored motion.

### Named Rules
**The One Motion Rule.** The page has a single authored gesture, the arm coming off danger. Everything else moves only as a 160ms response to the pointer. Nothing animates in a way that delays the phone number.

**The Object Not Card Rule.** A repeating set belongs to one drawn object with rows keyed to it, not to a grid of boxes. If a set of items would become cards, find the instrument they sit on.

**The Reduced Motion Floor.** Under `prefers-reduced-motion` all animation and transition collapse to 0.001ms, the lever's swing and nudge are cancelled outright, and smooth scrolling is off. Every state must remain legible with no motion at all.

## Do's and Don'ts

### Do:
- **Do** render enamel as a material: a specular sweep as the first background layer of every maroon field, the `/enamel.svg` speckle through `.enamel::after` at soft-light 0.55, and chipped edges where it is bolted.
- **Do** give maroon whole regions to carry, and let iron and hairlines do the structure between them.
- **Do** engrave dark on brass (`{colors.engraved}`) and bolt every plate with rivets at both ends.
- **Do** confine Martian Mono to measurements: hour numerals, the live time, and the frame's number plates.
- **Do** reach for Archivo's `wdth` axis for signage proportions instead of adding a display face.
- **Do** draw light rather than source photography: the three `boxlight` assets are re-authored per orientation, and a portrait frame gets the portrait asset, never a cover-crop of the landscape one.
- **Do** keep every call target at 44px or more and one phone number reachable without scrolling at 390px.
- **Do** cancel the lever swing and every transition under `prefers-reduced-motion`.

### Don't:
- **Don't** use maroon as an accent: a tint, a bar, a small highlight, or a badge. It is signage or it is absent.
- **Don't** set text in brass on maroon; it fails contrast, and the plate face is the only place brass carries letters.
- **Don't** introduce a hue outside iron, enamel, maroon, brass and the two lamp glasses. The five frame-paint colours are a client authorisation bounded to the lever stocks and their row spots.
- **Don't** glow anything that is not lamp glass or a block needle.
- **Don't** exceed a 5px corner radius on a rectangular surface; only genuinely round hardware gets a circle.
- **Don't** publish a rating, a review, a testimonial or an `aggregateRating`: no source exists and none may be invented. The same discipline governs photography of this business.
- **Don't** turn a repeating set into a card grid where a drawn object and keyed rows will carry it.
- **Don't** add a second authored animation, or any motion that stands between the visitor and the number.
