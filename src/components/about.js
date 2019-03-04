import React from "react";
import { graphql, StaticQuery } from "gatsby";

const styles = {
  ausbildungList: {
    fontSize: "18px"
  }
};
const About = () => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(fileAbsolutePath: { regex: "/data/work/.*.md$/" }) {
          html
          frontmatter {
            title
          }
        }
      }
    `}
    render={data => {
      return (
        <div>
          <h2 className="homeContainer__about-title">
            {data.markdownRemark.frontmatter.title}
          </h2>
          <div
            style={styles.ausbildungList}
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
        </div>
      );
    }}
  />
);

export default About;
