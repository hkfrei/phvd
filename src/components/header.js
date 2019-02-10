import { Link } from "gatsby";
import React from "react";
import phvd from "../images/phvd.svg";
import "./header.css";

const Header = ({ siteTitle }) => (
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
      <img src={phvd} alt="phvd" className="headerImage" />
    </div>
  </header>
);

export default Header;
