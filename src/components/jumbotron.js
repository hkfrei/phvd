import React from "react";
import eule from "../../static/images/eule.svg";

const styles = {
  eule: {
    width: "200px"
  },

  jumbotron: {
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `1.45rem 1.0875rem`,
    backgroundColor: "#cfb877" //"#e79f29"
  }
};
const Jumbotron = ({ title }) => (
  <div style={styles.jumbotron}>
    <h1 style={styles.title}>{title}</h1>
    <img style={styles.eule} src={eule} alt="eule" />
  </div>
);
export default Jumbotron;
