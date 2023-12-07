import React from "react"

export default function Header() {
  return (
    <header className="container-fluid position-relative d-flex flex-column mx-0 px-0">
      {/* NavBar */}
      <section>
        <picture>
          <source
            className="large-screen object-fit-cover img-fluid z-0 position-absolute"
            media="(min-width:900px)"
            srcSet="./Img/heroImg.jpg"
            alt="Cracked dark stone"
          />
          <img
            className="mobile-screen object-fit-cover img-fluid z-0 position-absolute"
            srcSet="./Img/mobileHeroImg.jpg"
            alt="Natural dark Stone"
          />
        </picture>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#dalto">
              dalto.
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <i className="bi bi-list"></i>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav d-flex align-items-center justify-content-center">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#Home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Features">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Disabled">
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      {/* END of NavBar */}

      <section className="hero-title-container d-flex justify-content-center flex-column align-items-center position-relative text-center z-1">
        <div className="title-box d-flex justify-content-center flex-column align-items-center w-70">
          <p className="text-header px-2">Announcing Our Beta Product</p>
          <h1 className="hero-title">
            A better way to manage your finance future with Dalto
          </h1>
          <p className="description-title-hero mt-3">
            Earn 5%* or more yield on your idle cash, and simplify your finances
            in one united platform
          </p>
        </div>
        <div className="button-hero-box d-flex justify-content-center align-items-center flex-column flex-lg-row w-100 gap-2">
          <button type="button" className="btn btn-warning  mb-2">
            Get Started.
          </button>
          <button type="button" className="btn btn-light  mb-2">
            Try Demo.
          </button>
        </div>
        <div className="iconsHero mt-4 flex-row pb-3 justify-content-between">
          <span className="icons-hero-text">
            <i className="bi bi-hand-thumbs-up-fill ps-3 pe-3 pb-2 me-2"></i>
            #1 Most Downloaded App
          </span>

          <span className="icons-hero-text">
            <i class="bi bi-app-indicator ps-3 pe-3 pb-2 me-2"></i>App Store
            Rating 4.9/5.0
          </span>
        </div>
      </section>
    </header>
  )
}
