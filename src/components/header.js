import { Link } from "gatsby";
import React from "react";
import phvd from "../images/phvd.svg";
import "./header.css";

const Header = ({ siteTitle }) => (
  <header>
    <div className="header">
      <Link className="headerLink" to="/">
        Start
      </Link>
      <Link className="headerLink" to="/about">
        Über mich
      </Link>
      <Link className="headerLink" to="/angebot">
        Angebot
      </Link>
      <Link className="headerLink lastHeaderLink" to="/links">
        Links
      </Link>
      <img src={phvd} alt="phvd" className="headerImage" />
    </div>
  </header>
);

export default Header;
