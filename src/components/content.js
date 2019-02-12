import React from "react";
const styles = {
  content: {
    maxWidth: "960px",
    margin: "0 auto",
    padding: "0 16px 28px 16px"
  }
};
const Content = ({ children }) => (
  <section style={styles.content}>{children}</section>
);

export default Content;
