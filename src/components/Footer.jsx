function Footer() {
  return (
    <footer className="noir-footer">
      <div className="container">

        {/* TOP */}

        <div className="noir-footer-top">

          <div className="noir-footer-brand">
            <span>NOIR</span>
            <p>
              PRECISION.
              <br />
              STYLE.
              <br />
              CONFIDENCE.
            </p>
          </div>

          <div className="noir-footer-nav">
            <span>NAVIGATE</span>

            <a href="#home">HOME</a>
            <a href="#services">SERVICES</a>
            <a href="#barbers">BARBERS</a>
            <a href="#booking">BOOKING</a>
            <a href="#contact">CONTACT</a>
          </div>

          <div className="noir-footer-contact">
            <span>TYRE / LEBANON</span>

            <p>
              Main Street
              <br />
              Tyre, South Lebanon
            </p>

            <a href="tel:+96170123456">
              +961 70 123 456
            </a>

            <a href="mailto:hello@noirbarbershop.com">
              hello@noirbarbershop.com
            </a>
          </div>

        </div>

        {/* BIG LOGO */}

        <div className="noir-footer-logo">
          NOIR
        </div>

        {/* BOTTOM */}

        <div className="noir-footer-bottom">

          <span>
            © 2026 NOIR BARBERSHOP
          </span>

          <div className="noir-footer-socials">
            <a href="#instagram">INSTAGRAM</a>
            <a href="#facebook">TIKTOK</a>
          </div>

          <a href="#home" className="noir-footer-back">
            BACK TO TOP
            <i className="bi bi-arrow-up" />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;