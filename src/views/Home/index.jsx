import React from "react";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import Hero from "../../components/Hero";
import FlashSale from "../../components/FlashSale";
import Slider from "../../components/slider"
// import Fly from "../../components/Fly";
import FavoriteFood from "../../components/FavoriteFood";
import Banner from "../../components/Banner";
import ButtonCard from "../../components/ButtonCard";
import Ourtable from "../../components/Ourtable";
import ImageGallery from "../../components/ImageGallery";
import AwesomeServices from "../../components/AwesomeServices";
import ButtonScrollTop from "../../components/ButtonScrollTop";

export default function Home() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
    <div className="w-screen overflow-hidden relative home-component home-main">
      <Header />
      <main>
        <Banner />
        <Slider />
        <Hero />
        <Ourtable />
        <AwesomeServices />
        <ImageGallery />
        <ButtonScrollTop />
        <FlashSale />
        <FavoriteFood />
        {/* <Fly /> */}
        <ButtonCard />
      </main>
      <Footer />
    </div>
  );
}
