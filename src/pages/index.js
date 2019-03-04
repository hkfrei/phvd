import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Content from "../components/content";
import Contact from "../components/contact";
import About from "../components/about";
import "../components/home.css";

const IndexPage = () => (
  <div>
    <Layout title="">
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Content>
        <div className="homeContainer">
          <div className="homeContainer__contact">
            <Contact />
          </div>
          <div className="homeContainer__about">
            <About />
          </div>
        </div>
      </Content>
    </Layout>
  </div>
);

export default IndexPage;
