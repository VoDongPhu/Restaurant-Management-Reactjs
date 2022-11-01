import React from "react";
import Header from "../../components/Header";
import BookingForm from "../../components/BookingForm";
import Footer from "../../components/Footer";

function Contact() {
  return (
    <div className="w-screen overflow-hidden relative home-component home-main">
      <Header />
      <main>
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
