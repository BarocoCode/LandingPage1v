import React from "react"

export default function Carousel() {
  return (
    <section className="carousel-container container-fluid mb-4">
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            data-bs-interval="100000000000000000000"
          >
            <img
              src="Img/carousel-img.png"
              className="d-block image-carousel-first-slide"
              alt="review"
              min-width="400px"
              min-height="300px"
            />
          </div>
          <div
            className="carousel-item"
            data-bs-interval="100000000000000000000"
          >
            <img
              src="Img/carousel-img.png"
              className="d-block image-carousel-first-slide"
              alt="review"
              min-width="400px"
              min-height="300px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="Img/carousel-img.png"
              className="d-block image-carousel-first-slide"
              alt="review"
              min-width="400px"
              min-height="300px"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  )
}
