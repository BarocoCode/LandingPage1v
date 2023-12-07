import React from "react"

export default function StatisticsCompany() {
  return (
    <section className="details-company w-100 d-flex flex-column flex-lg-row">
      <div className="details-company-box mt-4 mb-4 d-flex flex-column justify-content-center align-items-center">
        <h3 className="details-title">
          20K<span className="percentage">+</span>
        </h3>
        <p className="details-title-description px-2">
          In 38 countries, we work as one global team to help clients.
        </p>
      </div>
      <div className="details-company-box mt-4 mb-4 d-flex flex-column justify-content-center align-items-center flex-column w-100">
        <h3 className="details-title">
          98<span className="percentage">%</span>
        </h3>
        <p className="details-title-description px-2">
          We have worked with 89% of the Global 500 companies.
        </p>
      </div>
      <div className="details-company-box mt-4 mb-4 d-flex flex-column justify-content-center align-items-center flex-column  w-100">
        <h3 className="details-title">
          85<span className="percentage">%</span>
        </h3>
        <p className="details-title-description px-2">
          We started with a ebellious mindset and set ourselves the challange.
        </p>
      </div>
    </section>
  )
}
