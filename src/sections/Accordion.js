import React from "react"

export default function Accordion() {
  return (
    <section className="accordion-section d-flex flex-column align-items-center justify-content-center container-fluid w-100">
      <div className="accordion-title-box">
        <p className="accordion-title">Your burning question, answered</p>
        <p className="accordion-paragraph">
          if you have a question that isn't answered in our FAQs then please get
          in touch and let us know.
        </p>
      </div>
      <div className="accordion mt-5" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Why Should I Care About Financial Planning?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body text-start">
              <p>
                Financial planning is essential because it helps you achieve
                your financial goals and secure your financial future
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              How Do Create a Budget?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body text-start">
              <p>
                Financial planning is essential because it helps you achieve
                your financial goals and secure your financial future
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              What Are the Different Types of Investments?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body text-start">
              <p>
                Financial planning is essential because it helps you achieve
                your financial goals and secure your financial future
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFour"
            >
              How Can I Improve My Credit Score?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body text-start">
              <p>
                Financial planning is essential because it helps you achieve
                your financial goals and secure your financial future
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFive"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFive"
            >
              What is Debt Management?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFive"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body text-start">
              <p>
                Financial planning is essential because it helps you achieve
                your financial goals and secure your financial future
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseSix"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseSix"
            >
              How can I Start Saving for Retirement?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseSix"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body text-start">
              <p>
                Financial planning is essential because it helps you achieve
                your financial goals and secure your financial future
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-accordion-box w-100 d-flex  justify-content-center align-items-center mt-5 gap-3 flex-row">
        <button type="button" className="btn btn-warning">
          See all FAQs
        </button>
        <button type="button" className="btn btn-light ">
          Get in touch
        </button>
      </div>
    </section>
  )
}
