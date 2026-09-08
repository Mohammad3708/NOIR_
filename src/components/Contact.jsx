const contactInfo = [
  {
    label: "CALL US",
    value: "+961 70 123 456",
    href: "tel:+96170123456",
  },
  {
    label: "EMAIL",
    value: "hello@noirbarbershop.com",
    href: "mailto:hello@noirbarbershop.com",
  },
];

const openingHours = [
  ["MON — THU", "09:00 — 20:00"],
  ["FRIDAY", "14:00 — 20:00"],
  ["SATURDAY", "09:00 — 21:00"],
  ["SUNDAY", "CLOSED"],
];

function Contact() {
  return (
    <section id="contact" className="noir-contact">
      <div className="container">

        {/* HEADER */}

        <div className="noir-contact-header">
          <div>
            <p className="noir-contact-eyebrow">
              FIND YOUR WAY TO NOIR
            </p>

            <h2 className="noir-contact-title">
              COME
              <br />
              <span>SEE US.</span>
            </h2>
          </div>

          <p className="noir-contact-intro">
            Step inside, take a seat, and experience premium
            grooming in the heart of Tyre, Lebanon.
          </p>
        </div>

        {/* MAIN GRID */}

        <div className="noir-contact-grid">

          {/* LOCATION */}

          <div className="noir-contact-location">

            <div className="noir-contact-map">
              <div className="noir-contact-map-grid" />

              <div className="noir-contact-map-pin">
                <span>
                  <i className="bi bi-geo-alt-fill" />
                </span>

                <div>
                  <strong>NOIR</strong>
                  <small>TYRE, LEBANON</small>
                </div>
              </div>

              <div className="noir-contact-map-label">
                33.2733° N / 35.1939° E
              </div>

              <div className="noir-contact-map-corner top-left" />
              <div className="noir-contact-map-corner top-right" />
              <div className="noir-contact-map-corner bottom-left" />
              <div className="noir-contact-map-corner bottom-right" />
            </div>

            <div className="noir-contact-address">
              <div>
                <span>LOCATION</span>

                <strong>
                  Main Street
                  <br />
                  Tyre, South Lebanon
                </strong>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=33.2733,35.1939"
                target="_blank"
                rel="noreferrer"
              >
                GET DIRECTIONS
                <i className="bi bi-arrow-up-right" />
              </a>
            </div>
          </div>

          {/* INFORMATION */}

          <div className="noir-contact-info">

            {/* CONTACT */}

            <div className="noir-contact-block">
              <span className="noir-contact-block-label">
                CONTACT
              </span>

              <div className="noir-contact-links">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                  >
                    <span>{item.label}</span>

                    <strong>{item.value}</strong>

                    <i className="bi bi-arrow-up-right" />
                  </a>
                ))}
              </div>
            </div>

            {/* HOURS */}

            <div className="noir-contact-block">
              <span className="noir-contact-block-label">
                OPENING HOURS
              </span>

              <div className="noir-contact-hours">
                {openingHours.map(([day, hours]) => (
                  <div key={day}>
                    <span>{day}</span>
                    <strong>{hours}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* SOCIAL */}

            <div className="noir-contact-block noir-contact-social">
              <span className="noir-contact-block-label">
                FOLLOW NOIR
              </span>

              <div>
                <a href="#instagram">INSTAGRAM</a>
                <a href="#facebook">TIKTOK</a>
              </div>
            </div>

          </div>
        </div>

        {/* CTA */}

        <div className="noir-contact-cta">
          <div>
            <span>READY WHEN YOU ARE.</span>

            <h3>
              RESERVE
              <br />
              <em>YOUR CHAIR.</em>
            </h3>
          </div>

          <a href="#booking">
            BOOK AN APPOINTMENT
            <i className="bi bi-arrow-up-right" />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;