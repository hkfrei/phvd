import React from "react";
import HomePage from "../components/home";
import Header from "../components/header";
import SEO from "../components/seo";

const IndexPage = () => (
  <div>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <HomePage />
  </div>
);

export default IndexPage;
