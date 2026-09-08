function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg noir-navbar">
      <div className="container">

        <a className="noir-navbar-logo" href="#home">
          NOIR
        </a>

        <button
          className="navbar-toggler noir-navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#noirNavbar"
          aria-controls="noirNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>

        <div
          className="collapse navbar-collapse"
          id="noirNavbar"
        >
          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <a className="nav-link" href="#home">
                HOME
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#services">
                SERVICES
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#barbers">
                BARBERS
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                CONTACT
              </a>
            </li>

          </ul>

          <a
            href="#booking"
            className="noir-navbar-book"
          >
            BOOK NOW
            <i className="bi bi-arrow-up-right" />
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;