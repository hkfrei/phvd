import React from "react";
import SEO from "../components/seo";
import Jumbotron from "../components/jumbotron";
import Layout from "../components/layout";
import Content from "../components/content";
import Contact from "../components/contact";
import About from "../components/about";
import "../components/home.css";

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Jumbotron title="" />
      <Content>
        <div className="homeContainer">
          <div className="homeContainer__about">
            <About />
          </div>
          <div className="homeContainer__contact">
            <Contact />
          </div>
        </div>
      </Content>
    </Layout>
  </div>
);

export default IndexPage;
