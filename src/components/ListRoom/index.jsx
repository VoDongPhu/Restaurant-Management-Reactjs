import React from "react";
import { useState } from "react";
import "./styles.css";
import SweetPagination from "sweetpagination";

function ListRoom() {
  const items = [1, 2, 3, 4, 5, 6, 7];
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
 

  return (
    <div>
      <div className="header-booking-form">
        <img
          src="	https://preview.eagle-themes.com/html/zante/images/slider/slider-1.jpg"
          alt=""
        />
        <div className="content">
          <h1>Rooms List View</h1>
          <div className="sub-title">
            <span>
              <a href="/">Home</a>
            </span>
            <span>/</span>
            <span>Rooms List View</span>
          </div>
        </div>
      </div>
      <main className="rooms_list">
        <div className="rooms_list-container">
          <article className="rooms_list-item">
            <div className="rooms_list-item-container">
              <div className="rooms_list-item-container-left">
                <figure>
                  <a href="" className="hover_effect h_link h_blue">
                    <img
                      src="	https://preview.eagle-themes.com/html/zante/images/rooms/single.jpg"
                      className="img-responsive"
                      alt="Image"
                    />
                  </a>
                </figure>
              </div>
              <div className="rooms_list-item-container-right">
                <div className="room_details row-flex">
                  <div className="col-md-9 col-sm-9 col-xs-12 room_desc">
                    <h3>
                      <a href="room.html"> Single Room </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                    </p>
                    <div className="room_services">
                      <i
                        className="fa fa-coffee"
                        data-toggle="popover"
                        data-placement="top"
                        data-trigger="hover"
                        data-content="Breakfast Included"
                        data-original-title="Breakfast"
                      ></i>
                      <i
                        className="fa fa-cutlery"
                        data-toggle="popover"
                        data-placement="top"
                        data-trigger="hover"
                        data-content="Restaurant"
                        data-original-title="Zante Restaurant"
                      ></i>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-12 room_price">
                    <div className="room_price_inner">
                      <span className="room_price_number"> €89,00 </span>
                      <small className="upper"> per night </small>
                      <a
                        href="room.html"
                        className="button  btn_blue btn_full upper"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="rooms_list-item">
            <div className="rooms_list-item-container">
              <div className="rooms_list-item-container-left">
                <figure>
                  <a href="" className="hover_effect h_link h_blue">
                    <img
                      src="https://preview.eagle-themes.com/html/zante/images/rooms/double-room.jpg"
                      className="img-responsive"
                      alt="Image"
                    />
                  </a>
                </figure>
              </div>
              <div className="rooms_list-item-container-right">
                <div className="room_details row-flex">
                  <div className="col-md-9 col-sm-9 col-xs-12 room_desc">
                    <h3>
                      <a href=""> Double Room </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                    </p>
                    <div className="room_services">
                      <i
                        className="fa fa-coffee"
                        data-toggle="popover"
                        data-placement="top"
                        data-trigger="hover"
                        data-content="Breakfast Included"
                        data-original-title="Breakfast"
                      ></i>
                      <i
                        className="fa fa-cutlery"
                        data-toggle="popover"
                        data-placement="top"
                        data-trigger="hover"
                        data-content="Restaurant"
                        data-original-title="Zante Restaurant"
                      ></i>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-12 room_price">
                    <div className="room_price_inner">
                      <span className="room_price_number"> €129,00 </span>
                      <small className="upper"> per night </small>
                      <a
                        href=""
                        className="button  btn_blue btn_full upper"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="rooms_list-item">
            <div className="rooms_list-item-container">
              <div className="rooms_list-item-container-left">
                <figure>
                  <a href="room.html" className="hover_effect h_link h_blue">
                    <img
                      src="	https://preview.eagle-themes.com/html/zante/images/rooms/deluxe-room.jpg"
                      className="img-responsive"
                      alt="Image"
                    />
                  </a>
                </figure>
              </div>
              <div className="rooms_list-item-container-right">
                <div className="room_details row-flex">
                  <div className="col-md-9 col-sm-9 col-xs-12 room_desc">
                    <h3>
                      <a href="room.html"> Deluxe Room </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                    </p>
                    <div className="room_services">
                      <i
                        className="fa fa-coffee"
                        data-toggle="popover"
                        data-placement="top"
                        data-trigger="hover"
                        data-content="Breakfast Included"
                        data-original-title="Breakfast"
                      ></i>
                      <i
                        className="fa fa-cutlery"
                        data-toggle="popover"
                        data-placement="top"
                        data-trigger="hover"
                        data-content="Restaurant"
                        data-original-title="Zante Restaurant"
                      ></i>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-12 room_price">
                    <div className="room_price_inner">
                      <span className="room_price_number"> €149,00 </span>
                      <small className="upper"> per night </small>
                      <a
                        href="room.html"
                        className="button  btn_blue btn_full upper"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="rooms_list-item">
            <div className="rooms_list-item-container">
              <div className="rooms_list-item-container-left">
                <figure>
                  <a href="room.html" className="hover_effect h_link h_blue">
                    <img
                      src="	https://preview.eagle-themes.com/html/zante/images/rooms/single.jpg"
                      className="img-responsive"
                      alt="Image"
                    />
                  </a>
                </figure>
              </div>
              <div className="rooms_list-item-container-right">
                <div className="room_details row-flex">
                  <div className="col-md-9 col-sm-9 col-xs-12 room_desc">
                    <h3>
                      <a href="room.html"> Single Room </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                    </p>
                    <div className="room_services">
                      <i
                        className="fa fa-coffee"
                        data-toggle="popover"
                        data-placement="top"
                        data-trigger="hover"
                        data-content="Breakfast Included"
                        data-original-title="Breakfast"
                      ></i>
                      <i
                        className="fa fa-cutlery"
                        data-toggle="popover"
                        data-placement="top"
                        data-trigger="hover"
                        data-content="Restaurant"
                        data-original-title="Zante Restaurant"
                      ></i>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-12 room_price">
                    <div className="room_price_inner">
                      <span className="room_price_number"> €89,00 </span>
                      <small className="upper"> per night </small>
                      <a
                        href="room.html"
                        className="button  btn_blue btn_full upper"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="rooms_list-item">
            <div className="rooms_list-item-container">
              <div className="rooms_list-item-container-left">
                <figure>
                  <a href="room.html" className="hover_effect h_link h_blue">
                    <img
                      src="	https://preview.eagle-themes.com/html/zante/images/rooms/single.jpg"
                      className="img-responsive"
                      alt="Image"
                    />
                  </a>
                </figure>
              </div>
              <div className="rooms_list-item-container-right">
                <div className="room_details row-flex">
                  <div className="col-md-9 col-sm-9 col-xs-12 room_desc">
                    <h3>
                      <a href="room.html"> Single Room </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                    </p>
                    <div className="room_services">
                      <i
                        className="fa fa-coffee"
                        data-toggle="popover"
                        data-placement="top"
                        data-trigger="hover"
                        data-content="Breakfast Included"
                        data-original-title="Breakfast"
                      ></i>
                      <i
                        className="fa fa-cutlery"
                        data-toggle="popover"
                        data-placement="top"
                        data-trigger="hover"
                        data-content="Restaurant"
                        data-original-title="Zante Restaurant"
                      ></i>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-12 room_price">
                    <div className="room_price_inner">
                      <span className="room_price_number"> €89,00 </span>
                      <small className="upper"> per night </small>
                      <a
                        href="room.html"
                        className="button  btn_blue btn_full upper"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="center">
          <div className="center">
            <div>
              {/* {currentPageData.map((item) => (
                <div>
                  <h3>{item}</h3>
                </div>
              ))} */}

              <SweetPagination
                currentPageData={setCurrentPageData}
                dataPerPage={1}
                getData={items}
                navigation={true}
              />
            </div>
           
          </div>
        </div>
      </main>
    </div>
  );
}

export default ListRoom;
