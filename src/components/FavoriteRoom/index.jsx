import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";
function FavoriteRoom() {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3030/favouriteRoom/getData"
      );
      if (res) {
        setArr(res?.data?.data);
      }
    } catch (error) {}
  };
  if (arr.length === 0) {
    return;
  }
  console.log(arr);
  return (
    <div className="favorite_room-container body-container">
      <div className="favorite_room_header">
        <h2 className="favorite_room_header-title">OUR FAVORITE ROOMS</h2>
      </div>
      <div className="favorite-list" style={{ display: "flex" }}>
        {arr.map((e) => {
          return (
            <div className="favorite-list-item" style={{ width: "33.33%" }}>
              <article className="favorite-room">
                <figure
                  className="favorite-fg"
                  style={{ position: "relative" }}
                >
                  <div className="favorite-price">
                    {e?.price} <span>/ night</span>
                  </div>
                  <a className="hover-effect">
                    <img
                      src={e?.image}
                      className="img-responsive"
                      alt="Image"
                    />
                  </a>
                  <figcaption className="favorite-figcaption">
                    <h4 className="favorite-figcaption-h4">
                      <a href="/ListRoom">{e?.name}</a>
                    </h4>
                    <span className="f_right">
                      <a href="/ListRoom" className="button btn_sm btn_blue">
                        VIEW DETAILS
                      </a>
                    </span>
                  </figcaption>
                </figure>
              </article>
            </div>
          );
        })}
      </div>
      <div className="mt40 a_center" style={{ marginBottom: "50px" }}>
        <a className="button btn_sm btn_yellow" href="/ListRoom">
          VIEW ROOMS LIST
        </a>
      </div>
    </div>
  );
}

export default FavoriteRoom;
