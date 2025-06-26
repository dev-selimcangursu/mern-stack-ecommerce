import React from "react";
import "./Home.css";
import HomepageBanner from './components/HomepageBanner/HomepageBanner'
import ProductListSlider from "./components/ProductListSlider/ProductListSlider";

function Home() {
  return (
    <main className="homepage">
      <HomepageBanner/>
      <ProductListSlider/>
    </main>
  );
}

export default Home;
