import React from "react";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
// import Hero from "../../components/Hero";
import FlashSale from "../../components/FlashSale";
// import Slider from "../../components/Slider";
import Fly from "../../components/Fly";
import FavoritePlace from "../../components/FavoritePlace";
import Banner from "../../components/Banner";
import ButtonCard from "../../components/ButtonCard";
import FavoriteRoom from "../../components/FavoriteRoom";
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
        {/* <Slider /> */}
        <FavoriteRoom />
        {/* <Hero /> */}
        <AwesomeServices />
        <ImageGallery />
        <ButtonScrollTop />
        <FlashSale />
        <FavoritePlace />
        {/* <Fly /> */}
        <ButtonCard />
      </main>
      <Footer />
    </div>
  );
}
