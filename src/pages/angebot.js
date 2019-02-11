import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Jumbotron from "../components/jumbotron";
import Layout from "../components/layout";
import Content from "../components/content";
import SEO from "../components/seo";
import Angebot from "../components/angebot";
import Divider from "@material-ui/core/Divider";

const styles = {
  angebotHeader: {
    fontSize: "30px",
    padding: "20px 0 0 0"
  }
};
const AngebotPage = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/data/angebote/.*.md$/" } }
        ) {
          edges {
            node {
              html
              frontmatter {
                type
                title
              }
            }
          }
        }
      }
    `}
    render={data => {
      const angebote = data.allMarkdownRemark.edges;
      const gruppenAngebote = angebote.filter(
        angebot => angebot.node.frontmatter.type === "gruppen"
      );
      const einzelAngebote = angebote.filter(
        angebot => angebot.node.frontmatter.type === "einzeln"
      );
      return (
        <Layout>
          <SEO title="Angebot" />
          <Jumbotron title="ANGEBOT" />
          <Content>
            <h2 style={styles.angebotHeader}>Angebote für Einzelpersonen:</h2>
            <h4>Ansatz: 100.- / h</h4>
            {einzelAngebote.map(angebot => {
              const { html, frontmatter } = angebot.node;
              return (
                <Angebot
                  title={frontmatter.title}
                  html={html}
                  key={frontmatter.title}
                />
              );
            })}

            <Divider />
            <h2 style={styles.angebotHeader}>Angebote für Firmen/Gruppen:</h2>
            <h4>Ansatz: 200.- / h</h4>
            {gruppenAngebote.map(angebot => {
              const { html, frontmatter } = angebot.node;
              return (
                <Angebot
                  title={frontmatter.title}
                  html={html}
                  key={frontmatter.title}
                />
              );
            })}
          </Content>
        </Layout>
      );
    }}
  />
);

export default AngebotPage;
