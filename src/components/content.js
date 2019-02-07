import React from "react";
const styles = {
  content: {
    maxWidth: "960px",
    margin: "0 auto",
    padding: "28px 8px"
  }
};
const Content = ({ children }) => (
  <section style={styles.content}>{children}</section>
);

export default Content;
