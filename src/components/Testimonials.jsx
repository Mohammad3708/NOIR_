import { useEffect, useState } from "react";

const testimonials = [
  {
    id: "01",
    quote:
      "The attention to detail is unmatched. Every visit feels like a premium experience from start to finish.",
    name: "AHMAD",
    role: "REGULAR CLIENT",
  },
  {
    id: "02",
    quote:
      "Finally found a barber who understands exactly what I want. The cut, the atmosphere, everything is on another level.",
    name: "SAMIR",
    role: "CLIENT SINCE 2024",
  },
  {
    id: "03",
    quote:
      "NOIR isn't just a barbershop. It's the kind of place you look forward to coming back to.",
    name: "KASIM",
    role: "REGULAR CLIENT",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);

  const nextTestimonial = () => {
    setActive((current) => (current + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setActive(
      (current) =>
        (current - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[active];

  return (
    <section className="noir-testimonials">
      <div className="container">
        {/* TOP */}
        <div className="noir-testimonials-top">
          <p>THE NOIR STANDARD</p>

          <span>
            WHAT OUR
            <br />
            CLIENTS SAY.
          </span>
        </div>

        {/* MAIN */}
        <div className="noir-testimonial-main">
          <div className="noir-testimonial-mark">“</div>

          <div className="noir-testimonial-content">
            <div className="noir-testimonial-index">
              <span>0{active + 1}</span>
              <span>/ 03</span>
            </div>

            <blockquote key={testimonial.id}>
              {testimonial.quote}
            </blockquote>

            <div className="noir-testimonial-author">
              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </div>

          {/* CONTROLS */}
          <div className="noir-testimonial-controls">
            <button
              type="button"
              onClick={previousTestimonial}
              aria-label="Previous testimonial"
            >
              <i className="bi bi-arrow-left" />
            </button>

            <button
              type="button"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <i className="bi bi-arrow-right" />
            </button>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="noir-testimonials-bottom">
          <span>PRECISION / EXPERIENCE / CONSISTENCY</span>

          <div className="noir-testimonial-progress">
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={index === active ? "active" : ""}
                onClick={() => setActive(index)}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>

          <a href="#booking">
            BOOK YOUR EXPERIENCE
            <i className="bi bi-arrow-up-right" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;