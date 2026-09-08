import { useEffect, useState } from "react";
const services = [
  {
    id: "classic",
    title: "Classic Haircut",
    price: 25,
    duration: "45 MIN",
  },
  {
    id: "beard",
    title: "Beard Sculpt",
    price: 18,
    duration: "30 MIN",
  },
  {
    id: "hair-beard",
    title: "Hair & Beard",
    price: 38,
    duration: "60 MIN",
  },
  {
    id: "royal",
    title: "The Royal Package",
    price: 55,
    duration: "90 MIN",
  },
];
const barbers = [
  {
    id: "alexander",
    name: "Alexander Cole",
    role: "MASTER BARBER",
  },
  {
    id: "daniel",
    name: "Daniel Brooks",
    role: "SENIOR BARBER",
  },
  {
    id: "marcus",
    name: "Marcus Reed",
    role: "BARBER",
  },
];
const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
];
function Booking() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [details, setDetails] = useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
  });
  // Check if the user came from "BOOK WITH BARBER"
  useEffect(() => {
    const barberFromStorage =
      sessionStorage.getItem("selectedBarber");
    if (barberFromStorage) {
      const barber = barbers.find(
        (item) => item.name === barberFromStorage
      );
      if (barber) {
        setSelectedBarber(barber);
      }
      sessionStorage.removeItem("selectedBarber");
    }
  }, []);
  const updateDetails = (field, value) => {
    setDetails((current) => ({
      ...current,
      [field]: value,
    }));
  };
  const canContinue = () => {
    if (step === 1) {
      return selectedService;
    }
    if (step === 2) {
      return selectedBarber;
    }
    if (step === 3) {
      return selectedDate && selectedTime;
    }
    if (step === 4) {
      return (
        details.name.trim() &&
        details.phone.trim() &&
        details.email.trim()
      );
    }
    return true;
  };
  const nextStep = () => {
    if (canContinue() && step < 5) {
      setStep((current) => current + 1);
    }
  };
  const previousStep = () => {
    if (step > 1) {
      setStep((current) => current - 1);
    }
  };
  const resetBooking = () => {
    setStep(1);
    setSelectedService(null);
    setSelectedBarber(null);
    setSelectedDate("");
    setSelectedTime("");
    setDetails({
      name: "",
      phone: "",
      email: "",
      notes: "",
    });
  };
  return (
    <section id="booking" className="noir-booking">
      <div className="container">
        {/* HEADER */}
        <div className="noir-booking-header">
          <div>
            <p className="noir-booking-eyebrow">
              RESERVE YOUR CHAIR
            </p>
            <h2 className="noir-booking-title">
              BOOK
              <br />
              <span>YOUR EXPERIENCE.</span>
            </h2>
          </div>
          <div className="noir-booking-header-info">
            <span>01 — 05</span>
            <p>
              Choose your service, barber, preferred time, and
              complete your details.
            </p>
          </div>
        </div>
        {/* PROGRESS */}
        <div className="noir-booking-progress">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className={`noir-booking-progress-item ${
                step >= item ? "active" : ""
              }`}
            >
              <span>0{item}</span>
              <div className="noir-booking-progress-line" />
            </div>
          ))}
        </div>
        {/* CONTENT */}
        <div className="noir-booking-content">
          {/* STEP 1 — SERVICE */}
          {step === 1 && (
            <div className="noir-booking-step">
              <div className="noir-booking-step-heading">
                <span>01</span>
                <div>
                  <p>SELECT A SERVICE</p>
                  <h3>What are we creating?</h3>
                </div>
              </div>
              <div className="noir-booking-options">
                {services.map((service) => (
                  <button
                    type="button"
                    key={service.id}
                    className={`noir-booking-option ${
                      selectedService?.id === service.id
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => setSelectedService(service)}
                  >
                    <div>
                      <span>{service.duration}</span>
                      <h4>{service.title}</h4>
                    </div>
                    <strong>${service.price}</strong>
                    <i className="bi bi-arrow-up-right" />
                  </button>
                ))}
              </div>
            </div>
          )}
          {/* STEP 2 — BARBER */}
          {step === 2 && (
            <div className="noir-booking-step">
              <div className="noir-booking-step-heading">
                <span>02</span>
                <div>
                  <p>SELECT YOUR BARBER</p>
                  <h3>Who will craft your look?</h3>
                </div>
              </div>
              <div className="noir-booking-options">
                {barbers.map((barber) => (
                  <button
                    type="button"
                    key={barber.id}
                    className={`noir-booking-option ${
                      selectedBarber?.id === barber.id
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => setSelectedBarber(barber)}
                  >
                    <div>
                      <span>{barber.role}</span>
                      <h4>{barber.name}</h4>
                    </div>
                    <i className="bi bi-arrow-up-right" />
                  </button>
                ))}
              </div>
            </div>
          )}
          {/* STEP 3 — DATE & TIME */}
          {step === 3 && (
            <div className="noir-booking-step">
              <div className="noir-booking-step-heading">
                <span>03</span>
                <div>
                  <p>DATE & TIME</p>
                  <h3>When should we expect you?</h3>
                </div>
              </div>
              <div className="noir-booking-date-time">
                <div className="noir-booking-date">
                  <label htmlFor="booking-date">
                    SELECT DATE
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    value={selectedDate}
                    min={new Date()
                      .toISOString()
                      .split("T")[0]}
                    onChange={(event) =>
                      setSelectedDate(event.target.value)
                    }
                  />
                </div>
                <div className="noir-booking-times">
                  <label>SELECT TIME</label>
                  <div className="noir-booking-time-grid">
                    {timeSlots.map((time) => (
                      <button
                        type="button"
                        key={time}
                        className={
                          selectedTime === time
                            ? "selected"
                            : ""
                        }
                        onClick={() =>
                          setSelectedTime(time)
                        }
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* STEP 4 — DETAILS */}
          {step === 4 && (
            <div className="noir-booking-step">
              <div className="noir-booking-step-heading">
                <span>04</span>
                <div>
                  <p>YOUR DETAILS</p>
                  <h3>Tell us who we're expecting.</h3>
                </div>
              </div>
              <div className="noir-booking-form">
                <div className="noir-booking-field">
                  <label htmlFor="booking-name">
                    FULL NAME
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    placeholder="Your name"
                    value={details.name}
                    onChange={(event) =>
                      updateDetails(
                        "name",
                        event.target.value
                      )
                    }
                  />
                </div>
                <div className="noir-booking-field">
                  <label htmlFor="booking-phone">
                    PHONE
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    placeholder="+961 XX XXX XXX"
                    value={details.phone}
                    onChange={(event) =>
                      updateDetails(
                        "phone",
                        event.target.value
                      )
                    }
                  />
                </div>
                <div className="noir-booking-field">
                  <label htmlFor="booking-email">
                    EMAIL
                  </label>
                  <input
                    id="booking-email"
                    type="email"
                    placeholder="you@example.com"
                    value={details.email}
                    onChange={(event) =>
                      updateDetails(
                        "email",
                        event.target.value
                      )
                    }
                  />
                </div>
                <div className="noir-booking-field full">
                  <label htmlFor="booking-notes">
                    NOTES / REQUESTS
                  </label>
                  <textarea
                    id="booking-notes"
                    rows="4"
                    placeholder="Anything we should know?"
                    value={details.notes}
                    onChange={(event) =>
                      updateDetails(
                        "notes",
                        event.target.value
                      )
                    }
                  />
                </div>
              </div>
            </div>
          )}
          {/* STEP 5 — CONFIRMATION */}
          {step === 5 && (
            <div className="noir-booking-confirmation">
              <div className="noir-booking-confirmation-number">
                05
              </div>
              <p>CONFIRM YOUR APPOINTMENT</p>
              <h3>
                SEE YOU
                <br />
                <span>AT NOIR.</span>
              </h3>
              <div className="noir-booking-summary">
                <div>
                  <span>SERVICE</span>
                  <strong>
                    {selectedService?.title}
                  </strong>
                </div>
                <div>
                  <span>BARBER</span>
                  <strong>
                    {selectedBarber?.name}
                  </strong>
                </div>
                <div>
                  <span>DATE</span>
                  <strong>{selectedDate}</strong>
                </div>
                <div>
                  <span>TIME</span>
                  <strong>{selectedTime}</strong>
                </div>
                <div>
                  <span>TOTAL</span>
                  <strong>
                    ${selectedService?.price}
                  </strong>
                </div>
              </div>
              <button
                type="button"
                className="noir-booking-confirm-button"
                onClick={resetBooking}
              >
                CONFIRM APPOINTMENT
                <i className="bi bi-arrow-up-right" />
              </button>
            </div>
          )}
        </div>
        {/* NAVIGATION */}
        {step < 5 && (
          <div className="noir-booking-navigation">
            <button
              type="button"
              className="noir-booking-back"
              onClick={previousStep}
              disabled={step === 1}
            >
              <i className="bi bi-arrow-left" />
              BACK
            </button>
            <span>
              STEP 0{step} / 05
            </span>
            <button
              type="button"
              className="noir-booking-continue"
              onClick={nextStep}
              disabled={!canContinue()}
            >
              {step === 4
                ? "REVIEW APPOINTMENT"
                : "CONTINUE"}
              <i className="bi bi-arrow-right" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
export default Booking;