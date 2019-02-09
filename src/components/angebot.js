import React from "react";
import Paper from "@material-ui/core/Paper";

const styles = {
  angebotPaper: {
    padding: "12px",
    marginBottom: "24px"
  },
  angebotList: {
    fontSize: "18px"
  }
};
const Angebot = ({ title, html }) => (
  <Paper elevation={1} style={styles.angebotPaper}>
    <h3>{title}</h3>
    <div
      style={styles.angebotList}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </Paper>
);

export default Angebot;
