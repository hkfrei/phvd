import React from "react";
import portrait from "../images/portrait.jpeg";
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";
import Share from "@material-ui/icons/Share";

const styles = {
  portrait: {
    borderRadius: "5px",
    width: "100px"
  },
  link: {
    textDecoration: "none",
    color: "#ff4500",
    verticalAlign: "super"
  }
};
const Contact = () => (
  <div>
    <img src={portrait} alt="portrait" style={styles.portrait} />

    <h3>PHILIPPE VAN DRIEL</h3>
    <span>
      <Phone />{" "}
      <a style={styles.link} href="tel:0041797276503">
        +41 (0)79 727 65 03
      </a>
      <br />
      <Email />{" "}
      <a style={styles.link} href="mailto:info@phvd.ch">
        info(at)phvd.ch
      </a>
      <br />
      <Share />{" "}
      <a style={styles.link} href="https://ch.linkedin.com">
        LinkedIn
      </a>
    </span>
    <br />
  </div>
);

export default Contact;
