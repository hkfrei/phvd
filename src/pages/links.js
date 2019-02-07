import React from "react";
import { Link } from "gatsby";
import Jumbotron from "../components/jumbotron";
import Layout from "../components/layout";
import Content from "../components/content";
import SEO from "../components/seo";

const LinkPage = () => (
  <Layout>
    <SEO title="Links" />
    <Jumbotron title="Links" />
    <Content>
      <h1>Hi from the Link Page</h1>
      <p>Welcome to the Link Page</p>
      <Link to="/">Go back to the homepage</Link>
    </Content>
  </Layout>
);

export default LinkPage;
