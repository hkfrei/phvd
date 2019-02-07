import React from "react";
import SEO from "../components/seo";
import Jumbotron from "../components/jumbotron";
import Layout from "../components/layout";
import Content from "../components/content";

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Jumbotron title="" />
      <Content>
        <h1>Hi from the Home Page</h1>
        <p>Welcome to the Home Page</p>
      </Content>
    </Layout>
  </div>
);

export default IndexPage;
