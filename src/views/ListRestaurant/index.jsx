import React from 'react'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RestaurantList from "../../components/ListRestaurant"
function ListRestaurant() {
  return (
    <div className="w-screen overflow-hidden relative home-component home-main">
      <Header />
      <main>
        <RestaurantList />
      </main>
      <Footer />
    </div>
  );
}

export default ListRestaurant;