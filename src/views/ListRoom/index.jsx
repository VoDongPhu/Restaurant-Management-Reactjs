import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RoomList from "../../components/ListRoom"

function ListRoom() {
  return (
    <div className="w-screen overflow-hidden relative home-component home-main">
      <Header />
      <main>
        <RoomList />
      </main>
      <Footer />
    </div>
  );
}

export default ListRoom;
