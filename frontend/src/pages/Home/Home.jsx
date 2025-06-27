import React from "react";
import "./Home.css";
import HomepageBanner from './components/HomepageBanner/HomepageBanner'
import ProductListSlider from "./components/ProductListSlider/ProductListSlider";
import BestSellerSlider from "./components/BestSellerSlider/BestSellerSlider";
import HomeVideoArea from "./components/HomeVideoArea/HomeVideoArea";
import ApplicationScreen from "./components/ApplicationScreen/ApplicationScreen";
import PointOfSale from "./components/PointOfSale/PointOfSale";
import MediaScreen from "./components/MediaScreen/MediaScreen";
import Webform from "./components/Webform/Webform";
import BlogArea from "./components/BlogArea/BlogArea";
import HomeInfo from "./components/HomeInfo/HomeInfo";
import Footer from "../../components/Footer/Footer";
function Home() {
  return (
    <main className="homepage">
      <HomepageBanner/>
      <ProductListSlider/>
      <BestSellerSlider/>
      <HomeVideoArea/>
      <ApplicationScreen/>
      <Webform/>
      <PointOfSale/>
      <MediaScreen/>
      <BlogArea/>
      <HomeInfo/>
      <Footer/>
    </main>
  );
}

export default Home;
