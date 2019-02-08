import React from "react";
import Jumbotron from "../components/jumbotron";
import Layout from "../components/layout";
import Content from "../components/content";
import SEO from "../components/seo";
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
const LinkPage = () => (
  <Layout>
    <SEO title="Links" />
    <Jumbotron title="Links" />
    <Content>
      <Paper style={styles.linkPaper}>
        <h3>
          <a href="http://karten-werk.ch" style={styles.link}>
            KARTEN-WERK GMBH
          </a>
        </h3>
        <div>
          Wir Entwickeln komplexe -und einfachere- Web-Applikationen. Unsere
          Spezialität ist das Web-Mapping, wir bringen Ihre Geodaten ins Netz.
        </div>
      </Paper>
      <Paper style={styles.linkPaper}>
        <h3>
          <a href="https://www.chragokyberneticks.ch/" style={styles.link}>
            CHRAGOKYBERNETICKS
          </a>
        </h3>
        <div>
          Chragokyberneticks (as known as CHKY to lazy people) is a small
          graphic design bureau run by Mr. Christoph Frei. It is located in the
          heart of Berne, Switzerland.
        </div>
      </Paper>
    </Content>
  </Layout>
);

export default LinkPage;
