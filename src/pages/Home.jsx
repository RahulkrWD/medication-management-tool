import React from "react";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header";
import HomeMain from "../components/home/HomeMain";

function Home() {
  return (
    <Layout>
      <Header />
      <HomeMain />
    </Layout>
  );
}

export default Home;
