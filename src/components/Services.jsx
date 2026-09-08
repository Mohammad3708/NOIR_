import { useEffect, useRef } from "react";

const services = [
  {
    number: "01",
    title: "Classic Haircut",
    description:
      "A timeless cut tailored to your features, style, and preference.",
    price: "$25",
    duration: "45 MIN",
  },
  {
    number: "02",
    title: "Beard Sculpt",
    description:
      "Precision beard shaping designed to define your look.",
    price: "$18",
    duration: "30 MIN",
  },
  {
    number: "03",
    title: "Hair & Beard",
    description:
      "The complete grooming experience combining haircut and beard design.",
    price: "$38",
    duration: "60 MIN",
  },
  {
    number: "04",
    title: "The Royal Package",
    description:
      "Our signature grooming experience for those who expect more.",
    price: "$55",
    duration: "90 MIN",
  },
];

function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const cards =
      section.querySelectorAll(".noir-service-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("service-visible");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      className="noir-services"
      ref={sectionRef}
    >
      <div className="container">

        <div className="noir-services-header">

          <div>
            <p className="noir-eyebrow">
              THE NOIR EXPERIENCE
            </p>

            <h2 className="noir-services-title">
              CRAFTED
              <br />
              <span>WITH PRECISION.</span>
            </h2>
          </div>

          <p className="noir-services-intro">
            Every service at NOIR is built around precision,
            consistency, and an uncompromising attention to detail.
          </p>

        </div>

        <div className="noir-services-list">

          {services.map((service) => (
            <div
              className="noir-service-card"
              key={service.number}
            >

              <div className="noir-service-number">
                {service.number}
              </div>

              <div className="noir-service-main">

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

              </div>

              <div className="noir-service-meta">

                <span>
                  {service.duration}
                </span>

                <strong>
                  {service.price}
                </strong>

              </div>

              <div className="noir-service-arrow">
                <i className="bi bi-arrow-up-right" />
              </div>

            </div>
          ))}

        </div>

        <div className="noir-services-bottom">
          <span>
            PRECISION / EXPERIENCE / CONSISTENCY
          </span>

          <a href="#booking">
            BOOK YOUR CHAIR
            <i className="bi bi-arrow-right" />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;