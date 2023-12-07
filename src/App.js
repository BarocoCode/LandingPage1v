import "./App.css"
import React from "react"
import Header from "./sections/Header"
import StatisticsCompany from "./sections/StatisticsCompany"
import CardsDescription from "./sections/CardsDescription"
import Carousel from "./sections/Carousel"
import TrustedByLogo from "./sections/TrustedByLogo"
import Accordion from "./sections/Accordion"
import AppStore from "./sections/AppStore"
import Footer from "./sections/Footer"
import "./styles/MediaQueries.css"
function App() {
  return (
    <>
      <Header />
      <main className="d-flex flex-column justify-content-center align-items-center text-center mb-5">
        <StatisticsCompany />
        <CardsDescription />
        <Carousel />
        <TrustedByLogo />
        <Accordion />
        <AppStore />
      </main>
      <Footer />
    </>
  )
}

export default App
