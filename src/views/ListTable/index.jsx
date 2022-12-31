import React from 'react'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RestaurantList from "../../components/ListTable"
function ListTable() {
  return (
    <div className="w-screen overflow-hidden relative home-component home-main">
    
      <main>
        <RestaurantList />
      </main>
      <Footer />
    </div>
  );
}

export default ListTable;