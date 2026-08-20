import {
  booking,
  contact,
  hero,
  identity,
  location,
  services,
  workshop,
  workshopSection,
} from "@/content/site";

export default function Page() {
  return (
    <>
      <header className="topbar">
        <div className="container topbarInner">
          <a className="brandMark" href="#top">
            {identity.shortName}
          </a>
          <a className="btn btnPrimary btnSmall" href={contact.phoneHref}>
            {contact.phoneDisplay}
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="heroLight" />

          <div className="heroInner">
            <div className="container heroGrid">
              <div>
                <h1 className="heroName rise rise-1">
                  {hero.nameLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h1>

                <p className="heroSub rise rise-2">{hero.subLine}</p>
                <p className="heroTagline rise rise-2">{hero.tagline}</p>

                <div className="heroActions rise rise-3">
                  <a className="btn btnPrimary" href={contact.phoneHref}>
                    {hero.callCta}
                  </a>
                  <a className="btn btnGhost" href="#services">
                    {hero.secondaryCta}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/*
            The photographed sibling sites put the owner's own work along the
            foot of the first viewport. There is none here, so three checkable
            facts stand there instead, each repeated in full further down.
          */}
          <div className="credBand rise rise-4">
            <dl className="container credBandInner">
              {hero.credentials.map((cell) => (
                <div className="credCell" key={cell.label}>
                  <dt className="credLabel">{cell.label}</dt>
                  <dd className="credValue">{cell.value}</dd>
                  <dd className="credNote">{cell.note}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <h2 className="sectionHead">{services.heading}</h2>
            <div className="sectionBody">
              <p className="lead">{services.lead}</p>
              <div className="serviceList">
                {services.items.map((item) => (
                  <article className="serviceItem" key={item.title}>
                    <h3 className="serviceTitle">{item.title}</h3>
                    <p className="serviceBody">{item.body}</p>
                  </article>
                ))}
              </div>
              <p className="footnote">{services.footnote}</p>
            </div>
          </div>
        </section>

        <section className="section" id="workshop">
          <div className="container">
            <h2 className="sectionHead">{workshopSection.heading}</h2>
            <div className="sectionBody">
              <p className="lead">{workshopSection.lead}</p>
              <dl className="splitGrid">
                {workshopSection.cells.map((cell) => (
                  <div className="splitCell" key={cell.label}>
                    <dt className="splitLabel">{cell.label}</dt>
                    <dd className="splitBody">{cell.body}</dd>
                  </div>
                ))}
              </dl>
              <p className="footnote">
                {workshop.name}, {contact.addressLine}.{" "}
                <a className="textLink" href={workshop.siteHref} rel="noopener">
                  {workshop.site}
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <h2 className="sectionHead">{location.heading}</h2>
            <div className="sectionBody">
              <p className="lead">{location.lead}</p>
              <dl className="locationGrid">
                <div className="locationCell">
                  <dt>{location.phoneLabel}</dt>
                  <dd>
                    <a className="locationStrong" href={contact.phoneHref}>
                      {contact.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div className="locationCell">
                  <dt>{location.hoursLabel}</dt>
                  <dd>
                    <span className="locationStrong">{location.hoursValue}</span>
                  </dd>
                </div>
                <div className="locationCell">
                  <dt>{location.addressLabel}</dt>
                  <dd>
                    {contact.addressLine}
                    <span className="locationNote">
                      <a
                        className="textLink"
                        href={contact.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {contact.mapsLabel}
                      </a>
                    </span>
                  </dd>
                </div>
                <div className="locationCell">
                  <dt>{location.workshopLabel}</dt>
                  <dd>
                    <a className="locationStrong" href={workshop.landlineHref}>
                      {workshop.landlineDisplay}
                    </a>
                    <span className="locationNote">{workshop.name}</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="booking">
          <div className="bookingLight" />
          <div className="container">
            <h2 className="sectionHead">{booking.heading}</h2>
            <p className="bookingLead">{booking.lead}</p>
            <a className="bookingPhone" href={contact.phoneHref}>
              {contact.phoneDisplay}
            </a>
            <p className="bookingHours">{location.hoursValue}</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          {booking.smallprint.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </footer>
    </>
  );
}
