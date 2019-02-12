import { Link } from "gatsby";
import React from "react";
import Jumbotron from "../components/jumbotron";
import phvd from "../images/phvd.svg";
import "./header.css";

const Header = ({ title }) => (
  <header>
    <div className="header">
      <Link
        className="headerLink"
        to="/"
        activeStyle={{ color: "white", fontWeight: "bold" }}
      >
        Home
      </Link>
      <Link
        className="headerLink"
        to="/angebot"
        activeStyle={{ color: "white", fontWeight: "bold" }}
      >
        Angebot
      </Link>
      <Link
        className="headerLink lastHeaderLink"
        to="/links"
        activeStyle={{ color: "white", fontWeight: "bold" }}
      >
        Links
      </Link>
      <Link to="/">
        <img src={phvd} alt="phvd" className="headerImage" />
      </Link>
    </div>
    <Jumbotron title={title} />
  </header>
);

export default Header;
