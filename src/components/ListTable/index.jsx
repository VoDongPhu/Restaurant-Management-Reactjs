import React from "react";
import { useState } from "react";
import "./styles.css";
import SweetPagination from "sweetpagination";

function ListTable() {
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
          <h1>List Table </h1>
          <div className="sub-title">
            <span>
              <a href="/">Home</a>
            </span>
            <span>/</span>
            <span>List Table</span>
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
                      src="	https://images.pexels.com/photos/6479583/pexels-photo-6479583.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                      <a href=""> VIP 1 </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                    </p>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-12 Restaurant_price">
                    <div className="Restaurant_price_inner">
                      <a href="/booking" className="button  btn_blue btn_full upper">
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
                      src="https://images.pexels.com/photos/5727942/pexels-photo-5727942.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                      <a href=""> VIP 2 </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                    </p>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-12 Restaurant_price">
                    <div className="Restaurant_price_inner">
                      <a href="/booking" className="button  btn_blue btn_full upper">
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
                      src="	https://images.pexels.com/photos/4915622/pexels-photo-4915622.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                      <a href=""> VIP 3 </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                    </p>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-12 Restaurant_price">
                    <div className="Restaurant_price_inner">
                      <a href="/booking" className="button  btn_blue btn_full upper">
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
                      src="https://images.pexels.com/photos/4997894/pexels-photo-4997894.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                      <a href=""> VIP 4 </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                    </p>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-12 Restaurant_price">
                    <div className="Restaurant_price_inner">
                      <a href="/booking" className="button  btn_blue btn_full upper">
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

export default ListTable;
