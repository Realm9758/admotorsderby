import HourRing from "./HourRing";
import {
  blocks,
  box,
  clock,
  clockPoints,
  close,
  contact,
  footer,
  frame,
  hero,
  hours,
  identity,
  services,
  workshop,
} from "@/content/site";

const LEVER_PAINT: Record<string, string> = {
  red: "linear-gradient(180deg, #e04a3d 0%, #c02f24 46%, #8d1e16 100%)",
  yellow: "linear-gradient(180deg, #e8c04a 0%, #c9992c 46%, #8e6a15 100%)",
  black: "linear-gradient(180deg, #3c424c 0%, #23272f 46%, #14171d 100%)",
  blue: "linear-gradient(180deg, #3f7fc4 0%, #2a5f9c 46%, #17406e 100%)",
  green: "linear-gradient(180deg, #3fbd77 0%, #269257 46%, #14663a 100%)",
};

function Lever({ reverse = false, large = false }: { reverse?: boolean; large?: boolean }) {
  const className = ["lever", reverse ? "leverReverse" : "", large ? "leverLarge" : ""]
    .filter(Boolean)
    .join(" ");
  return (
    <a className={className} href={contact.phoneHref}>
      <span className="leverHandle" aria-hidden="true" />
      <span className="leverPlate">
        <span className="leverLabel">{hero.callSub}</span>
        <span className="leverNumber">
          {hero.callLabel} {contact.phoneDisplay}
        </span>
      </span>
    </a>
  );
}

function Signal() {
  return (
    <div className="signalCol">
      <svg
        className="signal"
        viewBox="0 0 168 340"
        role="img"
        aria-label="A lower quadrant semaphore signal, pulled off to clear"
      >
        <defs>
          <linearGradient id="postPaint" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#343a44" />
            <stop offset="0.38" stopColor="#242932" />
            <stop offset="1" stopColor="#12151a" />
          </linearGradient>
          <linearGradient id="armPaint" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e2513f" />
            <stop offset="0.5" stopColor="#c62f22" />
            <stop offset="1" stopColor="#8f1d14" />
          </linearGradient>
          <filter id="lampGlow" x="-180%" y="-180%" width="460%" height="460%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect x="60" y="314" width="48" height="10" rx="2" fill="#1b1f26" />
        <rect x="68" y="300" width="32" height="16" rx="2" fill="#181c22" />
        <rect x="77" y="46" width="14" height="256" fill="url(#postPaint)" />
        <path d="M84 26 L93 48 L75 48 Z" fill="#2a2f38" />
        <circle cx="84" cy="24" r="5" fill="#2a2f38" />

        <rect x="70" y="126" width="28" height="32" rx="3" fill="#1d2128" stroke="rgba(0,0,0,0.65)" />
        <rect x="70" y="126" width="28" height="6" rx="2" fill="#2b313a" />
        <circle className="signalGlassRed" cx="84" cy="144" r="7.5" fill="#ff4231" filter="url(#lampGlow)" />
        <circle className="signalGlassGreen" cx="84" cy="144" r="7.5" fill="#4fdb92" filter="url(#lampGlow)" />

        <g className="signalArm">
          <rect x="6" y="99" width="72" height="18" rx="3" fill="url(#armPaint)" />
          <rect x="19" y="99" width="9" height="18" fill="#f4f1ea" />
          <rect x="6" y="99" width="72" height="3" fill="rgba(255,255,255,0.18)" />
        </g>
        <circle cx="79" cy="108" r="4.5" fill="#0f1216" stroke="#3a414c" />
      </svg>
      <p className="signalCaption">
        Aspect
        <span className="signalCaptionState">{hero.aspectClear}</span>
      </p>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <header className="shelf">
        <div className="wrap shelfInner">
          <p className="shelfMark">
            {identity.boardTop}
            <span className="shelfMarkSub">{identity.tab}</span>
          </p>
          <a className="shelfCall" href={contact.phoneHref}>
            <span className="shelfCallHint">{hours.summary}</span>
            {contact.phoneDisplay}
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="heroLight" aria-hidden="true" />
          <div className="grain" aria-hidden="true" />
          <div className="wrap">
            <div className="board">
              <span className="boardBolt boardBoltLeft" aria-hidden="true" />
              <span className="boardBolt boardBoltRight" aria-hidden="true" />
              <h1 className="boardText">
                <span className="boardTop">{identity.boardTop}</span>
                <span className="boardBottom">
                  {identity.boardBottom} · {identity.town}
                </span>
                <span className="visuallyHidden"> {identity.tab}</span>
              </h1>
            </div>
            <div className="targetWrap">
              <span className="target" aria-hidden="true">
                {identity.tab}
              </span>
            </div>

            <div className="heroGrid">
              <div className="heroCol">
                <h2 className="heroHead">{hero.headline}</h2>
                <p className="heroBody">{hero.standfirst}</p>
                <div className="heroActions">
                  <Lever />
                  <a className="leverGhost" href="#frame">
                    {hero.servicesLabel}
                  </a>
                </div>
              </div>
              <Signal />
            </div>

            <div className="blockShelf">
              {blocks.map((cell) => (
                <div className="blockCell" key={cell.label}>
                  <p className="blockLabel">
                    <span className="blockNeedle" aria-hidden="true" />
                    {cell.label}
                  </p>
                  <p className="blockValue">{cell.value}</p>
                  <p className="blockNote">{cell.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="frame">
          <div className="wrap">
            <div className="sectionHead">
              <h2 className="h2">{frame.heading}</h2>
              <p className="standfirst">{frame.standfirst}</p>
            </div>
            <div className="frame">
              {services.map((service) => (
                <div className="frameRow" key={service.lever}>
                  <div>
                    <div
                      className="frameLever"
                      style={{ ["--leverColour" as string]: LEVER_PAINT[service.colour] }}
                      aria-hidden="true"
                    />
                    <p className="frameNumber">{service.lever}</p>
                  </div>
                  <div>
                    <h3 className="frameName">{service.name}</h3>
                    <p className="frameLine">{service.line}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="frameNote">{frame.note}</p>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="sectionHead">
              <h2 className="h2">{box.heading}</h2>
              <p className="standfirst">{box.standfirst}</p>
            </div>
            <div className="pair">
              <div className="pairCell">
                <p className="pairLabel">{box.cells[0].label}</p>
                <p className="pairBody">{box.cells[0].body}</p>
                <div className="pairFoot">
                  <p className="pairFootLine">{hours.summary}</p>
                  <a className="pairLink" href={contact.phoneHref}>
                    {contact.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="pairCell pairCellEnamel">
                <p className="pairLabel">{box.cells[1].label}</p>
                <p className="pairBody">{box.cells[1].body}</p>
                <div className="pairFoot">
                  <p className="pairFootLine">{workshop.name}</p>
                  <p className="pairFootLine">{contact.addressLine}</p>
                  <a className="pairLink" href={workshop.siteHref} rel="noopener">
                    {workshop.site}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section sectionLit">
          <div className="sectionLight" aria-hidden="true" />
          <div className="grain" aria-hidden="true" />
          <div className="wrap">
            <div className="sectionHead">
              <h2 className="h2">{clock.heading}</h2>
              <p className="standfirst">{clock.standfirst}</p>
            </div>
            <div className="clockGrid">
              <HourRing nowLabel={clock.nowLabel} lit={clock.lit} />
              <div className="clockCopy">
                <ul className="clockList">
                  {clockPoints.map((point) => (
                    <li className="clockItem" key={point}>
                      <span className="clockTick" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="close">
          <div className="grain" aria-hidden="true" />
          <div className="wrap">
            <h2 className="closeHead">{close.heading}</h2>
            <p className="closeBody">{close.standfirst}</p>
            <div className="closeActions">
              <Lever reverse large />
            </div>
            <p className="closeFoot">
              {hours.summary} · {contact.addressLine}
            </p>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap footGrid">
          <div>
            <p className="footName">{footer.legal}</p>
            <p>{footer.workshopLine}</p>
          </div>
          <div className="footRight">
            <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
            <p>{hours.summary}</p>
          </div>
        </div>
      </footer>

      <div className="callBar">
        <Lever />
      </div>
    </>
  );
}
