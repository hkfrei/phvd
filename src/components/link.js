import React from "react";
import Paper from "@material-ui/core/Paper";

const styles = {
  linkPaper: {
    padding: "12px",
    marginBottom: "24px"
  },
  link: {
    color: "#ff4500",
    textDecoration: "none"
  }
};

const Link = ({ title, description, url }) => (
  <Paper style={styles.linkPaper}>
    <h3>
      <a href={url} style={styles.link} target="_blank">
        {title}
      </a>
    </h3>
    <div>{description}</div>
  </Paper>
);

export default Link;
