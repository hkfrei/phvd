import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";
import Share from "@material-ui/icons/Share";

const styles = {
  portrait: {
    borderRadius: "5px",
    width: "100px"
  },
  link: {
    textDecoration: "none",
    color: "#ff4500",
    verticalAlign: "super"
  }
};
const Contact = () => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(fileAbsolutePath: { regex: "/data/contact/.*.md$/" }) {
          html
          frontmatter {
            title
            mail
            phone
            linkedin
            foto {
              childImageSharp {
                fluid {
                  base64
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const {
        title,
        phone,
        mail,
        linkedin,
        foto
      } = data.markdownRemark.frontmatter;
      const phoneLink = phone.replace(/\s+/g, "");
      const mailWritten = mail.replace("@", "(at)");

      return (
        <div>
          <img
            src={`${foto.childImageSharp.fluid.src}`}
            alt="portrait"
            style={styles.portrait}
          />

          <h3>{title}</h3>
          <span>
            <Phone />{" "}
            <a style={styles.link} href={`tel:${phoneLink}`}>
              {phone}
            </a>
            <br />
            <Email />{" "}
            <a style={styles.link} href={`${mail}`}>
              {mailWritten}
            </a>
            <br />
            <Share />{" "}
            <a style={styles.link} href={`${linkedin}`}>
              LinkedIn
            </a>
          </span>
          <br />
        </div>
      );
    }}
  />
);

export default Contact;
