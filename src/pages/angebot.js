import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Layout from "../components/layout";
import Content from "../components/content";
import SEO from "../components/seo";
import Angebot from "../components/angebot";
import Divider from "@material-ui/core/Divider";

const styles = {
  angebotHeader: {
    fontSize: "1.5em"
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
        <Layout title="ANGEBOT">
          <SEO title="Angebot" />
          <Content>
            <h2 style={styles.angebotHeader}>Angebote für Einzelpersonen:</h2>
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
            <h2 style={{ ...styles.angebotHeader, marginTop: "50px" }}>
              Angebote für Firmen/Gruppen:
            </h2>
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
