import React from "react";
import { Link } from "gatsby";
import Jumbotron from "../components/jumbotron";
import Layout from "../components/layout";
import Content from "../components/content";
import SEO from "../components/seo";

const AngebotPage = () => (
  <Layout>
    <SEO title="Angebot" />
    <Jumbotron title="ANGEBOT" />
    <Content>
      <h1>Hi from the Angebot page</h1>
      <p>Welcome to the Angebot page</p>
      <Link to="/">Go back to the homepage</Link>
    </Content>
  </Layout>
);

export default AngebotPage;
