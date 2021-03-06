import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Content from "./content";
import Header from "./header";
import Jumbotron from "../components/jumbotron";
import "./layout.css";

const styles = {
  link: {
    textDecoration: "none",
    color: "#ff4500"
  },
  footer: {
    borderTop: "1px solid rgb(207, 184, 119)",
    padding: "8px 0"
  }
};
const Layout = ({ children, title }) => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(fileAbsolutePath: { regex: "/data/contact/.*.md$/" }) {
          html
          frontmatter {
            mail
            phone
            linkedin
          }
        }
      }
    `}
    render={data => {
      const { phone, mail } = data.markdownRemark.frontmatter;
      const phoneLink = phone.replace(/\s+/g, "");
      const mailWritten = mail.replace("@", "(at)");
      return (
        <div>
          <Header />
          <main className="main">
            <Jumbotron title={title} />
            <Content>
              {children}
              <footer style={styles.footer}>
                © {new Date().getFullYear()}, Philippe van Driel{" | "}
                <a style={styles.link} href={`tel:${phoneLink}`}>
                  {phone}
                </a>
                {" | "}
                <a style={styles.link} href={`mailto:${mail}`}>
                  {mailWritten}
                </a>
              </footer>
            </Content>
          </main>
        </div>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
