import React from "react";

const reasons = [
  {
    number: "01",
    title: "Precision",
    text: "Every cut is carefully crafted around your features, style, and personality.",
  },
  {
    number: "02",
    title: "Experience",
    text: "From the moment you walk in, every detail is designed around your comfort.",
  },
  {
    number: "03",
    title: "Consistency",
    text: "The same attention to detail, every visit. No shortcuts. No compromises.",
  },
];

function WhyNoir() {
  return (
    <section className="why-noir" id="about">

      <div className="container">

        <div className="row align-items-center g-5">

          {/* IMAGE */}

          <div className="col-lg-6">

            <div className="why-image-wrapper">

              <img
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=90"
                alt="Professional barber"
                className="why-image"
              />

              <div className="image-label">
                <span>EST.</span>
                <strong>2026</strong>
              </div>

            </div>

          </div>

          {/* CONTENT */}

          <div className="col-lg-6">

            <div className="why-content">

              <p className="section-label">
                THE NOIR STANDARD
              </p>

              <h2>
                MORE THAN
                <br />
                A HAIRCUT.
              </h2>

              <p className="why-description">
                At NOIR, grooming is not a routine. It's a ritual.
                We combine traditional barbering techniques with
                modern precision to create a style that is uniquely yours.
              </p>

              <div className="reasons">

                {reasons.map((reason) => (

                  <div className="reason" key={reason.number}>

                    <span className="reason-number">
                      {reason.number}
                    </span>

                    <div>
                      <h3>{reason.title}</h3>

                      <p>{reason.text}</p>
                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyNoir;