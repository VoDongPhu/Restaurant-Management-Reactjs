import React from "react";
import "./styles.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
export default function Fly() {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

  const arr_Fly = [
    {
      id: 1,
      img: "https://storage.googleapis.com/tripi-flights/agenticons/vjc2021.png",
      title: "Vietjet Air",
    },
    {
      id: 2,
      img: "https://storage.googleapis.com/tripi-flights/agenticons/vjc2021.png",
      title: "Vietjet Air",
    },
    {
      id: 3,
      img: "https://storage.googleapis.com/tripi-flights/agenticons/vjc2021.png",
      title: "Vietjet Air",
    },
    {
      id: 4,
      img: "https://storage.googleapis.com/tripi-flights/agenticons/vjc2021.png",
      title: "Vietjet Air",
    },
    {
      id: 5,
      img: "https://storage.googleapis.com/tripi-flights/agenticons/vjc2021.png",
      title: "Vietjet Air",
    },
    {
      id: 6,
      img: "https://storage.googleapis.com/tripi-flights/agenticons/vjc2021.png",
      title: "Vietjet Air",
    },
  ];
  return (
    <div className="home-main fly-component">
      <div className="home-main fly-container">
        <div className="home-main fly-container-main">
          {/* first */}
          <div className="home-main fly-header">
            <div className="home-main fly-header-left">
              <div
                className="home-main fly-header-left-up"
                style={{ display: "flex" }}
              >
                <span className="home-main fly-haeder-left-content">
                  Flight
                </span>
                
              </div>
              <p className="home-main flys-span">
                best flights
              </p>
            </div>
            <a className="home-main fly-header-btn">
              <button className="home-main fly-header-btn-content">
                <span className="home-main fly-header-label">
                  <div className="home-main fly-header-label-content">
                    <div className="home-main fly-header-kpn">
                      {" "}
                      Khám phá ngay
                    </div>
                  </div>
                </span>
              </button>
            </a>
          </div>
          <div className="home-main fly-slider">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {arr_Fly.map((e, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="">
                      <div className="home-main fly-slider">
                        <div className="home-main fly-slider-main">
                          <img
                            src="https://storage.googleapis.com/tripi-flights/agenticons/vjc2021.png"
                            alt=""
                            style={{
                              width: "24px",
                              height: "auto",
                              marginRight: "8px",
                              display: "block",
                            }}
                          />
                          <h6 className="home-main fly-title">Vietjet Air</h6>
                        </div>
                        <div className="home-main fly-slider-content">
                          <div className="home-main fly-slider-content-title">
                            <h6 className="home-main fly-slider-tsn">
                              Tân Sơn Nhất
                            </h6>
                            <h6 className="home-main fly-slider-tsn-icon">
                              <svg width="24" height="24" fill="none">
                                <path
                                  d="M17.5 10.5L20 13M4 13h16"
                                  stroke="#1A202C"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </h6>
                            <h6 className="home-main fly-slider-nb">Nội Bài</h6>
                          </div>
                          <h6 className="home-main fly-slider-kh">
                            <svg
                              width="20"
                              height="20"
                              fill="none"
                              className="svgFillAll"
                              style={{ marginRight: '4px', fill: 'rgb(74, 85, 104)'}}
                            >
                              <path
                                d="M11.648 5.269a.5.5 0 00.485-.129l2.152-2.152a1.667 1.667 0 012.357 2.357L14.49 7.497a.5.5 0 00-.129.485l1.615 5.922a.5.5 0 01-.128.485l-1.094 1.094a.5.5 0 01-.79-.11l-2.303-4.145a.5.5 0 00-.79-.11l-1.743 1.741a.5.5 0 00-.146.354v1.942a.5.5 0 01-.147.354l-1.049 1.05a.5.5 0 01-.828-.196l-.843-2.531a.5.5 0 00-.317-.316l-2.53-.844a.5.5 0 01-.196-.828l1.05-1.05a.5.5 0 01.353-.146h1.943a.5.5 0 00.353-.146L8.513 8.76a.5.5 0 00-.11-.79L4.257 5.667a.5.5 0 01-.11-.79L5.24 3.782a.5.5 0 01.485-.13l5.922 1.616z"
                                fill="#4A5568"
                              ></path>
                            </svg>
                            "Khởi hành"
                          </h6>
                          <div className="home-main fly-slider-price">
                            <div className="home-main fly-slider-price-content">
                              <div className="home-main fly-slider-price-content-main">
                                <span className="home-main fly-slider-caption">
                                609.000 đ
                                </span>
                                <h6 className="home-main fly-slider-sub">573.000đ</h6>
                                <span className="home-main fly-slider-mutil-span">
                                Giá sau thuế: 636.320đ
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
