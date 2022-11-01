import React from "react";
import Banner from "../../components/Banner";
import Contact_Component from "../../components/Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
function Contact() {
  return (
    <div className="w-screen overflow-hidden relative home-component home-main">
      <Header />
      <main>
          <Banner isContact = {true}  />
          <Contact_Component />
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
