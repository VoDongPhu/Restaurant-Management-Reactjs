import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";
function Ourtable() {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3030/tableType/getData"
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
        <h2 className="favorite_room_header-title">OUR TABLE</h2>
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
                    {e?.price} <span>/ cọc</span>
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
                      <a href="">{e?.name}</a>
                    </h4>
                    <span className="f_right">
                      <a href="/Booking" className="button btn_sm btn_blue">
                        Book Now
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
        <a className="button btn_sm btn_yellow" href="/ListTable">
          VIEW LIST TABLES
        </a>
      </div>
    </div>
  );
}

export default Ourtable;
