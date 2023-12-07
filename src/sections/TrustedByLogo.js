import React from "react"

export default function TrustedByLogo() {
  return (
    <section className="logo-trusted-container w-100">
      <div className="d-flex justify-content-center mt-4 align-items-center w-100">
        <div className="logo-trusted-box d-flex flex-sm-row flex-column justify-content-center align-items-center w-100">
          <p className="trusted-title">Trusted By :</p>
          <ul className="list-logo-trusted d-flex align-items-center justify-content-center flex-row list-unstyled">
            <div className="trusted-logo-item d-flex  flex-sm-row flex-column">
              <li>Intercom</li>
              <li>Snowflake</li>
            </div>
            <div className="trusted-logo-item d-flex  flex-sm-row flex-column">
              <li>Figure</li>
              <li>Space x</li>
            </div>
            <div className="trusted-logo-item d-flex flex-sm-row flex-column">
              <li>Databricks</li>
              <li>Outreach</li>
            </div>
            <div className="trusted-logo-item d-flex  flex-sm-row flex-column">
              <li>Vuori</li>
              <li>JRE</li>
            </div>
          </ul>
        </div>
      </div>
    </section>
  )
}
