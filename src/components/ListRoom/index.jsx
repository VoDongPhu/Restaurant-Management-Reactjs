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
          <h1>List Food</h1>
          <div className="sub-title">
            <span>
              <a href="/">Home</a>
            </span>
            <span>/</span>
            <span>List Food</span>
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
                      src="https://dvpmarket.com/resources/uploads/images/2019/01/Mieng-ga-hap-la-chanh-vang-ruom.jpg"
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
                      <a href="room.html"> Gà hấp lá chanh </a>
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
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
                      <span className="room_price_number"> 180.000 </span>
                      <small className="upper"> 1 phần </small>
                      <a
                        href="room.html"
                        className="button  btn_blue btn_full upper"
                      >
                        Order
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
                      src="https://monngonmoingay.com/wp-content/uploads/2020/03/sup-nam-hai-san-chua-cay-500.jpg"
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
                      <a href=""> Súp hải sản </a>
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
                      <span className="room_price_number"> 150.000 </span>
                      <small className="upper"> 1 Phần </small>
                      <a
                        href=""
                        className="button  btn_blue btn_full upper"
                      >
                       Order 
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
                      src="	https://hd1.hotdeal.vn/images/uploads/2016/Thang%2010/31/302725/302725-nh-hq-rokoko-body-%20%288%29.jpg"
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
                      <a href="room.html"> Ba chỉ bò mỹ ướp tiêu đen </a>
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
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
                      <span className="room_price_number"> 200.000 </span>
                      <small className="upper"> 1 phần </small>
                      <a
                        href="room.html"
                        className="button  btn_blue btn_full upper"
                      >
                       Order
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
                      src="	https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/04/cach-nau-lau-de.jpg"
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
                      <a href="room.html"> Lẫu dê </a>
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
                      <span className="room_price_number"> 280.000 </span>
                      <small className="upper"> 1 phần </small>
                      <a
                        href=""
                        className="button  btn_blue btn_full upper"
                      >
                        Order
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
                      src="	https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/12/hau-nuong-pho-mai.jpg"
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
                      <a href="room.html"> Hàu nướng phô mai</a>
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
                      <span className="room_price_number"> 100.000 </span>
                      <small className="upper"> per night </small>
                      <a
                        href="room.html"
                        className="button  btn_blue btn_full upper"
                      >
                        Order
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
