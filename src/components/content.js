import React from "react";
const styles = {
  content: {
    maxWidth: "960px",
    margin: "0 auto",
    padding: "56px 16px"
  }
};
const Content = ({ children }) => (
  <section style={styles.content}>{children}</section>
);

export default Content;
