const barbers = [
  {
    id: "01",
    name: "MOHAMMAD",
    role: "MASTER BARBER",
    experience: "8 YEARS",
    specialty: "CLASSIC & MODERN CUTS",
    image:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SEFJUkNVVHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "02",
    name: "JAD",
    role: "SENIOR BARBER",
    experience: "6 YEARS",
    specialty: "FADES & BEARD DESIGN",
    image:
      "https://images.unsplash.com/photo-1635273051937-a0ddef9573b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJBUkJFUiUyMEhBSVJDVVR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "03",
    name: "AMIR",
    role: "BARBER",
    experience: "5 YEARS",
    specialty: "MODERN STYLING",
    image:
      "https://images.unsplash.com/photo-1598524374912-6b0b0bab43dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEJBUkJFUiUyMEhBSVJDVVR8ZW58MHx8MHx8fDA%3D",
  },
];

function Barbers() {
  return (
    <section id="barbers" className="noir-barbers">
      <div className="container">

        <div className="noir-barbers-header">
          <div>
            <p className="noir-barbers-eyebrow">
              THE ARTISANS
            </p>

            <h2 className="noir-barbers-title">
              MEET
              <br />
              <span>THE BARBERS.</span>
            </h2>
          </div>

          <p className="noir-barbers-intro">
            Behind every great cut is a barber who
            understands that precision is not a technique.
            It's a standard.
          </p>
        </div>

        <div className="noir-barbers-grid">

          {barbers.map((barber, index) => (
            <article
              className={`noir-barber-card barber-card-${index + 1}`}
              key={barber.id}
            >

              <div className="noir-barber-image-wrapper">

                <img
                  src={barber.image}
                  alt={`${barber.name} - ${barber.specialty}`}
                  className="noir-barber-image"
                  loading="lazy"
                />

                <div className="noir-barber-image-overlay" />

                <span className="noir-barber-number">
                  {barber.id}
                </span>

                <a
                  href="#booking"
                  className="noir-barber-book"
                  onClick={() => {
                    sessionStorage.setItem(
                      "selectedBarber",
                      barber.name
                    );
                  }}
                >
                  BOOK WITH {barber.name.split(" ")[0]}
                  <i className="bi bi-arrow-up-right" />
                </a>

              </div>

              <div className="noir-barber-info">

                <div>
                  <h3>{barber.name}</h3>
                  <p>{barber.specialty}</p>
                </div>

                <div className="noir-barber-meta">
                  <span>{barber.role}</span>
                  <span>{barber.experience}</span>
                </div>

              </div>

            </article>
          ))}

        </div>

        <div className="noir-barbers-bottom">
          <span>
            PRECISION IS THE DIFFERENCE.
          </span>

          <a href="#booking">
            CHOOSE YOUR BARBER
            <i className="bi bi-arrow-right" />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Barbers;