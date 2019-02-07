import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Content from "../components/content";
import Jumbotron from "../components/jumbotron";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Jumbotron title="ÜBER MICH" />
    <Content>
      <h1>Hi from the About page</h1>
      <p>Welcome to the About Page</p>
      <Link to="/">Go back to the homepage</Link>
    </Content>
  </Layout>
);

export default AboutPage;
