import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
import swal from "sweetalert";
import axios from "axios";
import SweetPagination from "sweetpagination";
import { Navigate } from "react-router-dom";
import { useInsertionEffect } from "react";

function ListRoom() {
  const items = [1, 2, 3, 4, 5, 6, 7];
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
  const [stateOrder1, setStateOrder1]= useState(false)
  const [stateOrder2, setStateOrder2]= useState(false)
  const [stateOrder3, setStateOrder3]= useState(false)
  const [stateOrder4, setStateOrder4]= useState(false)
  const [stateOrder5, setStateOrder5]= useState(false)
  const [stateOrder6, setStateOrder6]= useState(false)
  const [stateOrder7, setStateOrder7]= useState(false)
 const handleOrder1 = () => {
  setStateOrder1(!stateOrder1)
 }
 const handleOrder2 = () => {
  setStateOrder2(!stateOrder2)
 }
 const handleOrder3 = () => {
  setStateOrder3(!stateOrder3)
 }
 const handleOrder4 = () => {
  setStateOrder4(!stateOrder4)
 }
 const handleOrder5 = () => {
  setStateOrder5(!stateOrder5)
 }
 const handleOrder6 = () => {
  setStateOrder6(!stateOrder6)
 }
 const handleOrder7 = () => {
  setStateOrder7(!stateOrder7)
 }


  const handleBook = () => {
    swal("Booking Succefull!", "Please Pay!");
  };
  return (
    <div>
      <div className="header-booking-form">
        <img
          src="https://vietnamtravel.com/images/2020/10/vietnamese-cuisine3.jpg"
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
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam.
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
                            <span className="room_price_number">
                              {" "}
                              180.000
                            </span>
                            {/* <small className="upper"> 1 phần </small>  */}
                           
                              <button
                                onClick={handleOrder1}
                                className="button order  btn_blue btn_full upper"
                              > {stateOrder1 === false ?  "Order" : "Đã Đặt"}
                              </button>
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
                            <a href="room.html"> Súp hải sản </a>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam.
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
                            <span className="room_price_number">
                              {" "}
                              150.000
                            </span>
                            {/* <small className="upper"> 1 phần </small>  */}
                           
                              <button
                                onClick={handleOrder2}
                                className="button order  btn_blue btn_full upper"
                              > {stateOrder2 === false ?  "Order" : "Đã Đặt"}
                              </button>
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
                            src="https://hd1.hotdeal.vn/images/uploads/2016/Thang%2010/31/302725/302725-nh-hq-rokoko-body-%20%288%29.jpg"
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
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam.
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
                            <span className="room_price_number">
                              {" "}
                              200.000
                            </span>
                            {/* <small className="upper"> 1 phần </small>  */}
                           
                              <button
                                onClick={handleOrder3}
                                className="button order  btn_blue btn_full upper"
                              > {stateOrder3 === false ?  "Order" : "Đã Đặt"}
                              </button>
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
                            src="https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/04/cach-nau-lau-de.jpg"
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
                            <a href="room.html"> Lẩu dê </a>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam.
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
                            <span className="room_price_number">
                              {" "}
                              200.000
                            </span>
                            {/* <small className="upper"> 1 phần </small>  */}
                           
                              <button
                                onClick={handleOrder4}
                                className="button order  btn_blue btn_full upper"
                              > {stateOrder4 === false ?  "Order" : "Đã Đặt"}
                              </button>
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
                            src="https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/12/hau-nuong-pho-mai.jpg"
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
                            <a href="room.html"> Hàu nướng phô mai </a>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam.
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
                            <span className="room_price_number">
                              {" "}
                              60.000
                            </span>
                            {/* <small className="upper"> 1 phần </small>  */}
                           
                              <button
                                onClick={handleOrder5}
                                className="button order  btn_blue btn_full upper"
                              > {stateOrder5 === false ?  "Order" : "Đã Đặt"}
                              </button>
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
                            src="https://kenh14cdn.com/2018/2/28/paella-2-1519781063278875283659.jpeg"
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
                            <a href="room.html"> Cơm chiên tây ban nha </a>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam.
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
                            <span className="room_price_number">
                              {" "}
                              260.000
                            </span>
                            {/* <small className="upper"> 1 phần </small>  */}
                           
                              <button
                                onClick={handleOrder6}
                                className="button order  btn_blue btn_full upper"
                              > {stateOrder6 === false ?  "Order" : "Đã Đặt"}
                              </button>
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
                            src="https://cdn.daynauan.info.vn/wp-content/uploads/2015/11/thit-xong-khoi-cuon-ga.jpg"
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
                            <a href="room.html"> Ba chỉ cuộn xông khói lườn gà </a>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam.
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
                            <span className="room_price_number">
                              {" "}
                              120.000
                            </span>
                            {/* <small className="upper"> 1 phần </small>  */}
                           
                              <button
                                onClick={handleOrder7}
                                className="button order  btn_blue btn_full upper"
                              > {stateOrder7 === false ?  "Order" : "Đã Đặt"}
                              </button>
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
              <button onClick={handleBook} className="button  book">
                BOOK
              </button>
              {/* <SweetPagination
                currentPageData={setCurrentPageData}
                dataPerPage={1}
                getData={items}
                navigation={true}
              /> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ListRoom;
