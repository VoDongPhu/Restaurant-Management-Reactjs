import React from "react";
import { useState } from "react";
import "./styles.css";
import SweetPagination from "sweetpagination";

function ListRestaurant() {
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
          <h1>Restaurant List View</h1>
          <div className="sub-title">
            <span>
              <a href="/">Home</a>
            </span>
            <span>/</span>
            <span>Restaurant List View</span>
          </div>
        </div>
      </div>
      <main className="Restaurant_list">
        <div className="Restaurant_list-container">
          <article className="Restaurant_list-item">
            <div className="Restaurant_list-item-container">
              <div className="Restaurant_list-item-container-left">
                <figure>
                  <a href="" className="hover_effect h_link h_blue">
                    <img
                      src="	https://pasgo.vn/Upload/anh-diem-den/hem-quan-hoang-cau-300-12961690845.jpg"
                      className="img-responsive"
                      alt="Image"
                    />
                  </a>
                </figure>
              </div>
              <div className="Restaurant_list-item-container-right">
                <div className="Restaurant_details row-flex">
                  <div className="col-md-9 col-sm-9 col-xs-12 Restaurant_desc">
                    <h3>
                      <a href=""> Hotpot story </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                    </p>
                    <div className="Restaurant_services">
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
                  <div className="col-md-3 col-sm-3 col-xs-12 Restaurant_price">
                    <div className="Restaurant_price_inner">
                    
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
          <article className="Restaurant_list-item">
            <div className="Restaurant_list-item-container">
              <div className="Restaurant_list-item-container-left">
                <figure>
                  <a href="" className="hover_effect h_link h_blue">
                    <img
                      src="	https://pasgo.vn/Upload/anh-diem-den/botanica-thai-bistro-le-van-huu-300-184496461891.jpg"
                      className="img-responsive"
                      alt="Image"
                    />
                  </a>
                </figure>
              </div>
              <div className="Restaurant_list-item-container-right">
                <div className="Restaurant_details row-flex">
                  <div className="col-md-9 col-sm-9 col-xs-12 Restaurant_desc">
                    <h3>
                      <a href=""> Hotpot story </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                    </p>
                    <div className="Restaurant_services">
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
                  <div className="col-md-3 col-sm-3 col-xs-12 Restaurant_price">
                    <div className="Restaurant_price_inner">

                      <a
                        href="Restaurant.html"
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
          <article className="Restaurant_list-item">
            <div className="Restaurant_list-item-container">
              <div className="Restaurant_list-item-container-left">
                <figure>
                  <a href="" className="hover_effect h_link h_blue">
                    <img
                      src="	https://pasgo.vn/Upload/anh-diem-den/sushi-kei-aeon-mall-long-bien-300-13213461366.jpg"
                      className="img-responsive"
                      alt="Image"
                    />
                  </a>
                </figure>
              </div>
              <div className="Restaurant_list-item-container-right">
                <div className="Restaurant_details row-flex">
                  <div className="col-md-9 col-sm-9 col-xs-12 Restaurant_desc">
                    <h3>
                      <a href=""> Hotpot story </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                    </p>
                    <div className="Restaurant_services">
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
                  <div className="col-md-3 col-sm-3 col-xs-12 Restaurant_price">
                    <div className="Restaurant_price_inner">
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
          <article className="Restaurant_list-item">
            <div className="Restaurant_list-item-container">
              <div className="Restaurant_list-item-container-left">
                <figure>
                  <a href="" className="hover_effect h_link h_blue">
                    <img
                      src="	https://pasgo.vn/Upload/anh-diem-den/nha-hang-tru-ky-hotpot-tran-nhan-tong-300-135885342872.jpg"
                      className="img-responsive"
                      alt="Image"
                    />
                  </a>
                </figure>
              </div>
              <div className="Restaurant_list-item-container-right">
                <div className="Restaurant_details row-flex">
                  <div className="col-md-9 col-sm-9 col-xs-12 Restaurant_desc">
                    <h3>
                      <a href=""> Hotpot story </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                    </p>
                    <div className="Restaurant_services">
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
                  <div className="col-md-3 col-sm-3 col-xs-12 Restaurant_price">
                    <div className="Restaurant_price_inner">

                      <a
                        href="Restaurant.html"
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
          <article className="Restaurant_list-item">
            <div className="Restaurant_list-item-container">
              <div className="Restaurant_list-item-container-left">
                <figure>
                  <a href="Restaurant.html" className="hover_effect h_link h_blue">
                    <img
                      src="	https://pasgo.vn/Upload/anh-diem-den/nha-hang-tru-ky-hotpot-tran-nhan-tong-300-135885342872.jpg"
                      className="img-responsive"
                      alt="Image"
                    />
                  </a>
                </figure>
              </div>
              <div className="Restaurant_list-item-container-right">
                <div className="Restaurant_details row-flex">
                  <div className="col-md-9 col-sm-9 col-xs-12 Restaurant_desc">
                    <h3>
                      <a href="Restaurant.html"> Hotpot story </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                    </p>
                    <div className="Restaurant_services">
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
                  <div className="col-md-3 col-sm-3 col-xs-12 Restaurant_price">
                    <div className="Restaurant_price_inner">
                      <span className="Restaurant_price_number"> €89,00 </span>
                      <small className="upper"> per night </small>
                      <a
                        href="Restaurant.html"
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

export default ListRestaurant;
