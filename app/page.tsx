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

/*
  The paint code is the real British signal box frame convention. Red works a
  stop signal, yellow a distant, black the points, blue a facing point lock and
  green a release. It is the frame's own grammar and the reason five colours
  appear on a page whose fields are otherwise maroon and brass.
*/
const PAINT: Record<string, { light: string; mid: string; dark: string }> = {
  red: { light: "#e04a3d", mid: "#c02f24", dark: "#8d1e16" },
  yellow: { light: "#e8c04a", mid: "#c9992c", dark: "#8e6a15" },
  black: { light: "#3c424c", mid: "#23272f", dark: "#14171d" },
  blue: { light: "#3f7fc4", mid: "#2a5f9c", dark: "#17406e" },
  green: { light: "#3fbd77", mid: "#269257", dark: "#14663a" },
};

/*
  The catch handle. A lever is a shaft on a fulcrum with a catch handle down its
  front face, and a description plate on the frame in front of it. Pressing it
  swings the stock through its catch, which is what the object does in life.
*/
function LeverStock() {
  return (
    <svg className="stock" viewBox="11 0 36 106" aria-hidden="true">
      <path className="stockQuadrant" d="M28 92 A 54 54 0 0 1 45 52" fill="none" stroke="#252a32" strokeWidth="8" strokeLinecap="round" />
      <g className="stockSwing">
        <rect className="stockShaft" x="21" y="15" width="14" height="75" rx="7" />
        <path className="stockGrip" d="M21 24 v-6 a7 7 0 0 1 7-7 h9 a6 6 0 0 1 0 12 h-2 v8 h-14 z" />
        <rect className="stockSheen" x="24" y="19" width="4" height="63" rx="2" />
        <rect className="stockCatch" x="36" y="20" width="6" height="52" rx="3" />
        <rect className="stockTrigger" x="33" y="12" width="12" height="9" rx="3.5" />
      </g>
      <rect className="stockBlock" x="13" y="84" width="31" height="22" rx="3" />
      <circle className="stockPin" cx="28" cy="92" r="3.6" />
    </svg>
  );
}

function Lever({
  variant,
  desc,
  label,
  aside,
}: {
  variant?: "close";
  desc?: string;
  label: string;
  aside?: readonly string[];
}) {
  return (
    <a className={variant === "close" ? "lever leverClose" : "lever"} href={contact.phoneHref}>
      <span className="leverStock">
        <LeverStock />
      </span>
      <span className="leverPlate">
        <span className="leverMain">
          {desc ? <span className="leverDesc">{desc}</span> : null}
          <span className="leverNumber">{label}</span>
        </span>
        {aside ? (
          <span className="leverAside">
            {aside.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </span>
        ) : null}
      </span>
    </a>
  );
}

/*
  A Midland lower quadrant signal. The arm drops to clear, and the spectacle
  casting is rigid with the arm, so the red glass swings out of the lamp and the
  green swings into it. Only the glass standing over the lamp is lit.
*/
function Signal() {
  return (
    <div className="signalCol">
      <svg
        className="signal"
        viewBox="0 0 168 340"
        role="img"
        aria-label="A lower quadrant semaphore signal, its arm dropped to clear"
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
          <filter id="lampGlow" x="-200%" y="-200%" width="500%" height="500%">
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

        {/* the lamp itself never moves: it is bolted to the post */}
        <rect x="72" y="132" width="24" height="26" rx="3" fill="#1d2128" stroke="rgba(0,0,0,0.65)" />
        <circle cx="84" cy="145" r="6" fill="#f6e2b4" opacity="0.5" />

        <g className="signalArm">
          {/* spectacle casting, rigid with the arm, carrying both glasses */}
          <line x1="84" y1="145" x2="57" y2="138" stroke="#20242b" strokeWidth="23" strokeLinecap="round" />
          {/* the glass bodies stay dark; only the one standing over the lamp lights */}
          <circle cx="84" cy="145" r="7.5" fill="#3a1512" />
          <circle cx="57" cy="138" r="7.5" fill="#123024" />
          <circle className="signalGlassRed" cx="84" cy="145" r="7.5" fill="#ff4231" filter="url(#lampGlow)" />
          <circle className="signalGlassGreen" cx="57" cy="138" r="7.5" fill="#4fdb92" filter="url(#lampGlow)" />
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

/* The frame itself: one floor plate, five handles standing at frame pitch,
   each with its brass number plate bolted to the plate in front of it. */
function LeverFrame() {
  return (
    <div className="frameObject">
      <svg viewBox="0 0 1000 300" role="img" aria-label="A signal box lever frame with five painted levers, numbered one to five">
        <defs>
          <linearGradient id="floorPlate" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2c323b" />
            <stop offset="0.18" stopColor="#20252d" />
            <stop offset="1" stopColor="#101319" />
          </linearGradient>
          <linearGradient id="brassPlate" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#dcb268" />
            <stop offset="0.45" stopColor="#b98a3c" />
            <stop offset="1" stopColor="#77571f" />
          </linearGradient>
        </defs>

        {services.map((service, i) => {
          const x = 100 + i * 200;
          const paint = PAINT[service.colour];
          return (
            <g key={service.lever}>
              <path
                d={`M${x + 2} 216 A 78 78 0 0 1 ${x + 26} 168`}
                fill="none"
                stroke="#20242b"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <rect x={x - 9} y="48" width="18" height="170" rx="9" fill={paint.mid} />
              <rect x={x - 9} y="48" width="7" height="170" rx="3.5" fill={paint.light} opacity="0.55" />
              <rect x={x + 3} y="48" width="6" height="170" rx="3" fill={paint.dark} opacity="0.7" />
              <path d={`M${x - 9} 60 v-8 a10 10 0 0 1 10-10 h9 a8 8 0 0 1 0 16 h-3 v10 z`} fill={paint.dark} />
              <rect x={x + 9} y="60" width="8" height="118" rx="4" fill="#7b838f" />
              <rect x={x + 5} y="46" width="16" height="12" rx="4" fill="#9aa2ae" />
            </g>
          );
        })}

        <rect x="0" y="214" width="1000" height="86" fill="url(#floorPlate)" />
        <rect x="0" y="214" width="1000" height="2" fill="rgba(244,241,234,0.22)" />

        {services.map((service, i) => {
          const x = 100 + i * 200;
          return (
            <g key={`plate-${service.lever}`}>
              <rect x={x - 30} y="238" width="60" height="34" rx="3" fill="url(#brassPlate)" />
              <rect x={x - 30} y="238" width="60" height="34" rx="3" fill="none" stroke="rgba(0,0,0,0.35)" />
              <circle cx={x - 22} cy="245" r="1.6" fill="rgba(0,0,0,0.45)" />
              <circle cx={x + 22} cy="245" r="1.6" fill="rgba(0,0,0,0.45)" />
              <text
                x={x}
                y="257"
                textAnchor="middle"
                dominantBaseline="central"
                fill="#1c1408"
                fontSize="19"
                fontWeight="700"
                fontFamily="var(--font-plate)"
              >
                {service.lever}
              </text>
            </g>
          );
        })}
      </svg>
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
            <div className="boardGroup">
            <div className="board enamel">
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
              <span className="target enamel" aria-hidden="true">
                {identity.tab}
              </span>
            </div>
            </div>

            <div className="heroGrid">
              <div className="heroCol">
                <h2 className="heroHead">{hero.headline}</h2>
                <p className="heroBody">{hero.standfirst}</p>
                <div className="heroActions">
                  <Lever label={`${hero.callLabel} ${contact.phoneDisplay}`} />
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
            <LeverFrame />
            <p className="frameCaption">{frame.caption}</p>
            <ol className="frameRows">
              {services.map((service) => (
                <li className="frameRow" key={service.lever}>
                  <span className="frameNo" aria-hidden="true">
                    <span className="frameNoPaint" style={{ background: PAINT[service.colour].mid }} />
                    {service.lever}
                  </span>
                  <h3 className="frameName">{service.name}</h3>
                  <p className="frameLine">{service.line}</p>
                </li>
              ))}
            </ol>
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
              <div className="pairCell pairCellEnamel enamel">
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

        <section className="close enamel">
          <div className="grain" aria-hidden="true" />
          <div className="wrap">
            <h2 className="closeHead">{close.heading}</h2>
            <Lever
              variant="close"
              desc={close.plateDesc}
              label={contact.phoneDisplay}
              aside={[hours.summary, contact.addressLine]}
            />
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
        <Lever label={`${hero.callLabel} ${contact.phoneDisplay}`} />
      </div>
    </>
  );
}
