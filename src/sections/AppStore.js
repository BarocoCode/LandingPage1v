import React from "react"

export default function AppStore() {
  return (
    <section className="app-stores-section mb-5 d-flex w-100 justify-content-center align-items-center position-relative">
      <picture className="d-flex justify-content-center align-items-center container-fluid z-0 w-100">
        <img
          className="object-fit-cover app-stores image-fluid w-100"
          width="380px"
          height="210px"
          srcSet="/Img/app-section.jpg"
          alt="Cracked dark stone"
        />
      </picture>
      <div className="app-stores-text-box d-flex align-items-center justify-content-center gap-2 position-absolute z-1 flex-column">
        <p className="title-app-stores">It's easy to get started</p>
        <p className="description-app-stores">
          Get the app to explore the world of premium cars, get fast and safe
          transactions to help you find your dream rent
        </p>
        <div className="apps-btn-box d-flex align-items-center justify-content-center flex-row  gap-3 mt-2">
          <a
            href="#app-store"
            target="_blank"
            className="market-btn apple-btn"
            role="button"
            rel="noopener noreferrer"
          >
            <span className="market-button-subtitle">Download on the</span>
            <span className="market-button-title">App Store</span>
          </a>

          <a
            href="#google"
            target="_blank"
            className="market-btn google-btn"
            role="button"
            rel="noopener noreferrer"
          >
            <span className="market-button-subtitle">Download on the</span>
            <span className="market-button-title">Google Play</span>
          </a>
        </div>
      </div>
    </section>
  )
}
