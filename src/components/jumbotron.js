import React from "react";
import eule from "../images/eule.svg";

const styles = {
  eule: {
    width: "200px"
  },

  jumbotron: {
    alignItems: "center",
    backgroundColor: "#cfb877", //"#e79f29"
    color: "white",
    display: "flex",
    justifyContent: "center",
    marginBottom: "52px",
    padding: `1.45rem 1.0875rem`
  }
};
const Jumbotron = ({ title }) => (
  <div style={styles.jumbotron}>
    <h1 style={styles.title}>{title}</h1>
    <img style={styles.eule} src={eule} alt="eule" />
  </div>
);
export default Jumbotron;
