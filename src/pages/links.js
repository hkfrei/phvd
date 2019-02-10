import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Jumbotron from "../components/jumbotron";
import Layout from "../components/layout";
import Content from "../components/content";
import SEO from "../components/seo";
import Link from "../components/link";

const LinkPage = data => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/data/links/.*.md$/" } }
          ) {
            edges {
              node {
                frontmatter {
                  title
                  url
                  description
                }
              }
            }
          }
        }
      `}
      render={data => {
        const links = data.allMarkdownRemark.edges;
        return (
          <Layout>
            <SEO title="Links" />
            <Jumbotron title="Links" />
            <Content>
              {links.map(link => {
                const { title, description, url } = link.node.frontmatter;
                return (
                  <Link
                    key={title}
                    title={title}
                    description={description}
                    url={url}
                  />
                );
              })}
            </Content>
          </Layout>
        );
      }}
    />
  );
};

export default LinkPage;
