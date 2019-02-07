import React from "react";
import eule from "../images/eule.svg";
import "./home.css";
const HomePage = () => (
  <div className="homepage__flex-container">
    <main className="homepage__main">
      <div className="homepage__address">
        <h3 className="homepage__address-name">PHILIPPE VAN DRIEL</h3>
        <span className="homepage__address-text">
          <a className="homepage__link" href="tel:0041797276503">
            +41 (0)79 727 65 03
          </a>
          <br />
          <a className="homepage__link" href="mailto:info@phvd.ch">
            info(at)phvd.ch
          </a>
        </span>
      </div>
    </main>
    <footer className="homepage__footer">
      <img src={eule} alt="eule" className="homepage__footer-image" />
    </footer>
  </div>
);

export default HomePage;
