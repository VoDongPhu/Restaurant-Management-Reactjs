import React from "react";
import Banner from "../../components/Banner";
import Aboutus_Component from "../../components/AboutUs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
function Aboutus() {
  return (
    <div className="w-screen overflow-hidden relative home-component home-main">
      <Header />
      <main>
      <Banner isContact = {true}  />
      <Aboutus_Component />
      </main>
      <Footer />
    </div>
  );
}

export default Aboutus;
