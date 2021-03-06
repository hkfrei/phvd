import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Image from "gatsby-image";
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";
import Share from "@material-ui/icons/Share";

const styles = {
  portrait: {
    border: "3px solid #cfb27c",
    borderRadius: "100px"
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
                fixed(width: 185) {
                  width
                  height
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
          <Image
            fixed={foto.childImageSharp.fixed}
            alt="portrait"
            style={styles.portrait}
          />

          <h3>{title}</h3>
          <span>
            <Phone style={{ maxWidth: "24px", maxHeight: "24px" }} />{" "}
            <a style={styles.link} href={`tel:${phoneLink}`}>
              {phone}
            </a>
            <br />
            <Email style={{ maxWidth: "24px", maxHeight: "24px" }} />{" "}
            <a style={styles.link} href={`mailto:${mail}`}>
              {mailWritten}
            </a>
            <br />
            <Share style={{ maxWidth: "24px", maxHeight: "24px" }} />{" "}
            <a
              style={styles.link}
              href={`${linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
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
