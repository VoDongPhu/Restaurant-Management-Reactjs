import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import List_Food from "../../components/ListFood"

function ListFood() {
  return (
    <div className="w-screen overflow-hidden relative home-component home-main">
      <Header />
      <main>
        <List_Food />
      </main>
      <Footer />
    </div>
  );
}

export default ListFood;
