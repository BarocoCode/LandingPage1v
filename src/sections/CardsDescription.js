import React from "react"

export default function CardsDescription() {
  return (
    <section className="description-container d-flex justify-content-center align-items-center flex-column text-center">
      <div className="description-box-title mb-2 flex-column d-flex justify-content-center align-items-center">
        <h3 className="description-title-cards">Designed to help you save</h3>
        <p className="description-cards">
          Businesses have saved $600M and 8.5M hours with an average savings of
          3.5% per customer with Dalton.
        </p>
      </div>
      <div className="description-box d-flex flex-column flex-lg-row mt-4 mb-5">
        <picture>
          <img
            className="cardsImg img-fluid  rounded"
            srcSet="/Img/cardDescription.png"
            alt="cards"
            min-width="180px"
            min-height="120px"
          ></img>
        </picture>
        <div className="description-card-box d-flex flex-column">
          <span className="description-badge">1</span>
          <h3 className="description-title-cards mt-2">
            Control your spend on a single platform
          </h3>
          <p className="description-cards mt-2">
            Seamlessly integrate Dalton with your accounting systems and
            consolidate your finance stack. For better your future.
          </p>
          <button type="button" className="btn btn-warning btn-cards">
            See details
            <i class="bi bi-arrow-right-short ms-2"></i>
          </button>
        </div>
      </div>

      <div className="description-box d-flex flex-column flex-lg-row mt-4 mb-5">
        <picture>
          <img
            className="cardsImg img-fluid  rounded"
            srcSet="/Img/cardDescription.png"
            alt="cards"
            min-width="180px"
            min-height="120px"
          ></img>
        </picture>
        <div className="description-card-box d-flex flex-column">
          <span className="description-badge">2</span>
          <h3 className="description-title-cards mt-2">
            You don't need credit history to earn our trust.
          </h3>
          <p className="description-cards mt-2">
            If you have a credit history - that's great, but even if you don't,
            we can use the money you make and the bills you already pay to help
            you qualify.
          </p>
          <button type="button" className="btn btn-warning btn-cards">
            See details
            <i class="bi bi-arrow-right-short ms-2"></i>
          </button>
        </div>
      </div>
    </section>
  )
}
