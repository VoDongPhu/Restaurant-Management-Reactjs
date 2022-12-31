import React from "react";
import Payment_Component from "../../components/Payment";
import Footer from "../../components/Footer";

function Payment() {
  return (
    <div className="w-screen overflow-hidden relative home-component home-main">
      
      <main>
          
          <Payment_Component />
      </main>
      <Footer />
    </div>
  );
}

export default Payment;
