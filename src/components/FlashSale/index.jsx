import React from "react";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
export default function FlashSale() {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  const flase_sale = [
    {
      id: 1,
      img:"https://tripi.vn/cdn-cgi/image/width=548,height=310/https://preview.eagle-themes.com/html/zante/images/rooms/single-room.jpg",
      title: "Single Room",
      diadiem: "Phú Quốc",
      emotion: "Tuyệt vời",
      sll: "(295)",
      money: "1.000.000đ",
    },
    {
      id: 2,
      img: "https://tripi.vn/cdn-cgi/image/width=548,height=310/https://preview.eagle-themes.com/html/zante/images/rooms/delux.jpg",
      title: "Double Room",
      diadiem: "Phú Quốc",
      emotion: "Tuyệt vời",
      sll: "(295)",
      money: "1.200.000đ",
    },
    {
      id: 3,
      img: "https://tripi.vn/cdn-cgi/image/width=548,height=310/https://preview.eagle-themes.com/html/zante/images/rooms/family.jpg",
      title: "Family Room",
      diadiem: "Phú Quốc",
      emotion: "Tuyệt vời",
      sll: "(295)",
      money: "1.400.000đ",
    },
    {
      id: 4,
      img: "https://tripi.vn/cdn-cgi/image/width=548,height=310/https://preview.eagle-themes.com/html/zante/images/rooms/honeymoon.jpg",
      title: "Honey Room",
      diadiem: "Phú Quốc",
      emotion: "Tuyệt vời",
      sll: "(295)",
      money: "1.100.000đ",
    },
    {
      id: 5,
      img: "https://tripi.vn/cdn-cgi/image/width=548,height=310/https://preview.eagle-themes.com/html/zante/images/rooms/king.jpg",
      title: "King Room",
      diadiem: "Phú Quốc",
      emotion: "Tuyệt vời",
      sll: "(295)",
      money: "1.500.000đ",
    },
  ];
  return (
    <div className="home-main flash_sale-component body-container">
      <div className="home-maim flash_sale-content">
        <div className="home-main flash_sale-center">
          <div className="home-main flash_sale-header">
            <div className="home-main flash_sale-left">
              <img
                src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_flashSale_home_white_new.png"
                alt="icon flash"
                className="flash_ing"
              />
              <div className="home-main flash-sale-left-content">
                <span style={{ marginRight: "8px" }}>
                  Chương trình sẽ diễn ra trong
                </span>
                <div className="home-main flash-sale-left-time">
                  <div className="home-main flash-sale-left-time-hour">09</div>
                  <span className="home-main flash-sale-left-time-space">
                    :
                  </span>
                  <div className="home-main flash-sale-left-time-hour">09</div>
                  <span className="home-main flash-sale-left-time-space">
                    :
                  </span>
                  <div className="home-main flash-sale-left-time-hour">09</div>
                </div>
              </div>
            </div>
            <div className="home-main flash_sale-right">
              <div
                className="home-main jss776 flash_sale-view"
                style={{
                  background: "rgb(255, 255, 255)",
                  color: "rgb(160, 174, 192)",
                  cursor: "default",
                  pointerEvents: "none",
                  textTransform: "inherit",
                }}
              >
                <span className="home-main jss777">12:00-13:00</span>
                <span className="home-main jss778 flash_sale-end">Đã kết thúc</span>
              </div>
              <div
                className="home-main jss779 flash_sale-view"
                style={{
                  background: "rgb(255, 255, 255)",
                  color: "rgb(160, 174, 192)",
                  cursor: "default",
                  pointerEvents: "none",
                  textTransform: "inherit",
                }}
              >
                <span className="home-main flash_sale-time">15:00-16:00</span>
                <span className="home-main jss781 flash_sale-end">Đã kết thúc</span>
              </div>
              <div
                className="home-main jss782 flash_sale-view"
                style={{
                  background: "rgb(255, 255, 255)",
                  color: "rgb(160, 174, 192)",
                  cursor: "default",
                  pointerEvents: "none",
                  textTransform: "inherit",
                }}
              >
                <span className="home-main jss783">21:00-22:00</span>
                <span className="home-main jss784 flash_sale-end">Sắp diễn ra</span>
              </div>
              <div
                className="home-main jss785 flash_sale-view"
                style={{
                  background: "rgb(255, 255, 255)",
                  color: "rgb(160, 174, 192)",
                  cursor: "default",
                  pointerEvents: "none",
                  textTransform: "inherit",
                }}
              >
                <span className="home-main jss786">09:00-10:00</span>
                <span className="home-main jss787 flash_sale-end">16/4</span>
              </div>
              <div
                style={{
                  background: "rgb(255, 255, 255)",
                  color: "rgb(160, 174, 192)",
                  cursor: "default",
                  pointerEvents: "none",
                  textTransform: "inherit",
                }}
                className="home-main jss788 flash_sale-view"
              >
                <span className="home-main jss789">12:00-13:00</span>
                <span className="home-main jss790 flash_sale-end">16/4</span>
              </div>
              <div
                style={{
                  background: "rgb(255, 255, 255)",
                  color: "rgb(160, 174, 192)",
                  cursor: "default",
                  pointerEvents: "none",
                  textTransform: "inherit",
                }}
                className="home-main jss791 flash_sale-view"
              >
                <span className="home-main jss792">15:00-16:00</span>
                <span className="home-main jss793 flash_sale-end">16/4</span>
              </div>
            </div>
          </div>
          <div className="home-main flash_sale-main">
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
              {flase_sale.map((e, index) => {
                return (
                  <SwiperSlide key={index}>
                    <a className="flash_sale-item">
                      <div className="home-main flash_sale-item-content">
                        <div className="home-main flase_sale-up">
                          <div className="home-main  flase_sale-599">
                            <div className="home-main false_slae-204"></div>
                            <div className="home-main false_sale-img">
                              <img src={e.img} />
                            </div>
                          </div>
                          <div className="home-main flash_sale-btn">
                            <span className="home-main flash_sale-icon">
                              <svg
                                width="28"
                                height="28"
                                fill="none"
                                className="svgFillAll jss603"
                              >
                                <g filter="url(#icon_heart_svg__filter0_d)">
                                  <path
                                    d="M9.318 3c-1.479 0-2.897.661-3.895 1.811C4.259 6.16 3.786 8.054 4.09 10.15c.683 4.708 5.546 8.674 9.911 10.468 4.363-1.794 9.223-5.76 9.91-10.468.303-2.096-.17-3.991-1.334-5.339C21.581 3.661 20.161 3 18.684 3c-1.49 0-2.885.68-3.929 1.915l-.75.89-.752-.89C12.204 3.681 10.81 3 9.318 3z"
                                    fill="#000"
                                    stroke="#fff"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </g>
                                <defs>
                                  <filter
                                    id="icon_heart_svg__filter0_d"
                                    x="-1"
                                    y="0"
                                    width="30"
                                    height="30"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                  >
                                    <feFlood
                                      floodOpacity="0"
                                      result="BackgroundImageFix"
                                    ></feFlood>
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    ></feColorMatrix>
                                    <feOffset dy="3"></feOffset>
                                    <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                                    <feBlend
                                      in2="BackgroundImageFix"
                                      result="effect1_dropShadow"
                                    ></feBlend>
                                    <feBlend
                                      in="SourceGraphic"
                                      in2="effect1_dropShadow"
                                      result="shape"
                                    ></feBlend>
                                  </filter>
                                </defs>
                              </svg>
                            </span>
                            <span className="home-man flash_sale-span"></span>
                          </div>
                        </div>
                        <div className="home-main flash_sale-donw">
                          <div className="home-main flash_sale-down-content">
                            <h6 className="home-main flash_sale-title">
                              Single Room
                            </h6>
                            <div className="home-main flase_sale-raise">
                              <div className="home-main falsh_sale-raise-star">
                                <div className="home-main flash_sale-raise-content">
                                  <svg
                                    width="14"
                                    height="14"
                                    fill="none"
                                    className="svgFillAll jss658"
                                    style={{
                                      stroke: "rgb(255, 188, 57)",
                                      fill: "rgb(255, 188, 57)",
                                    }}
                                  >
                                    <path
                                      d="M12.464 5.684a1.055 1.055 0 00-.849-.719L9.078 4.6 7.94 2.31a1.05 1.05 0 00-1.88 0L4.925 4.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.502L3.64 8.534l-.433 2.51a1.05 1.05 0 001.521 1.107l2.272-1.188 2.273 1.19a1.05 1.05 0 001.522-1.108l-.435-2.51 1.832-1.776a1.05 1.05 0 00.271-1.075z"
                                      fill="#FFBC39"
                                    ></path>
                                  </svg>
                                  <svg
                                    width="14"
                                    height="14"
                                    fill="none"
                                    className="svgFillAll jss658"
                                    style={{
                                      stroke: "rgb(255, 188, 57)",
                                      fill: "rgb(255, 188, 57)",
                                    }}
                                  >
                                    <path
                                      d="M12.464 5.684a1.055 1.055 0 00-.849-.719L9.078 4.6 7.94 2.31a1.05 1.05 0 00-1.88 0L4.925 4.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.502L3.64 8.534l-.433 2.51a1.05 1.05 0 001.521 1.107l2.272-1.188 2.273 1.19a1.05 1.05 0 001.522-1.108l-.435-2.51 1.832-1.776a1.05 1.05 0 00.271-1.075z"
                                      fill="#FFBC39"
                                    ></path>
                                  </svg>
                                  <svg
                                    width="14"
                                    height="14"
                                    fill="none"
                                    className="svgFillAll jss658"
                                    style={{
                                      stroke: "rgb(255, 188, 57)",
                                      fill: "rgb(255, 188, 57)",
                                    }}
                                  >
                                    <path
                                      d="M12.464 5.684a1.055 1.055 0 00-.849-.719L9.078 4.6 7.94 2.31a1.05 1.05 0 00-1.88 0L4.925 4.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.502L3.64 8.534l-.433 2.51a1.05 1.05 0 001.521 1.107l2.272-1.188 2.273 1.19a1.05 1.05 0 001.522-1.108l-.435-2.51 1.832-1.776a1.05 1.05 0 00.271-1.075z"
                                      fill="#FFBC39"
                                    ></path>
                                  </svg>
                                  <svg
                                    width="14"
                                    height="14"
                                    fill="none"
                                    className="svgFillAll jss658"
                                    style={{
                                      stroke: "rgb(255, 188, 57)",
                                      fill: "rgb(255, 188, 57)",
                                    }}
                                  >
                                    <path
                                      d="M12.464 5.684a1.055 1.055 0 00-.849-.719L9.078 4.6 7.94 2.31a1.05 1.05 0 00-1.88 0L4.925 4.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.502L3.64 8.534l-.433 2.51a1.05 1.05 0 001.521 1.107l2.272-1.188 2.273 1.19a1.05 1.05 0 001.522-1.108l-.435-2.51 1.832-1.776a1.05 1.05 0 00.271-1.075z"
                                      fill="#FFBC39"
                                    ></path>
                                  </svg>
                                  <svg
                                    width="14"
                                    height="14"
                                    fill="none"
                                    style={{
                                      stroke: "rgb(255, 188, 57)",
                                      fill: "rgb(255, 188, 57)",
                                    }}
                                    className="svgFillAll jss658"
                                  >
                                    <path
                                      d="M12.464 5.684a1.055 1.055 0 00-.849-.719L9.078 4.6 7.94 2.31a1.05 1.05 0 00-1.88 0L4.925 4.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.502L3.64 8.534l-.433 2.51a1.05 1.05 0 001.521 1.107l2.272-1.188 2.273 1.19a1.05 1.05 0 001.522-1.108l-.435-2.51 1.832-1.776a1.05 1.05 0 00.271-1.075z"
                                      fill="#FFBC39"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="home-main falsh_sale-dd">
                              <span
                                className="home-main flash_sale-dd-icon"
                                style={{ marginRight: "4px" }}
                              >
                                <svg width="16" height="16" fill="none">
                                  <path
                                    d="M8.467 3.8V2a1 1 0 00-1-1h-.8a1 1 0 00-1 1v1.8"
                                    stroke="#1A202C"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M1 7.467a1 1 0 001 1h9.838a1 1 0 00.64-.232l1.6-1.333a1 1 0 000-1.537l-1.6-1.333a1 1 0 00-.64-.232H2a1 1 0 00-1 1v2.667zM5.667 10.333V14a1 1 0 001 1h.8a1 1 0 001-1v-3.667"
                                    stroke="#1A202C"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </span>
                              <span className="home-main flase_sale-dd-name">
                                Phú Quốc
                              </span>
                            </div>
                            <div className="home-main falsh_sale-tv">
                              <div className="home-main flash_sale-tv-icon">
                                <svg
                                  width="21"
                                  height="16"
                                  fill="none"
                                  style={{marginRight: '3px'}}
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5.825 8.157c.044-.13.084-.264.136-.394.31-.783.666-1.548 1.118-2.264.3-.475.606-.95.949-1.398.474-.616 1.005-1.19 1.635-1.665.27-.202.55-.393.827-.59.019-.015.034-.033.038-.08-.036.015-.078.025-.111.045-.506.349-1.024.68-1.51 1.052A15.241 15.241 0 006.627 4.98c-.408.47-.78.97-1.144 1.474-.182.249-.31.534-.474.818-1.096-1.015-2.385-1.199-3.844-.77.853-2.19 2.291-3.862 4.356-5.011 3.317-1.843 7.495-1.754 10.764.544 2.904 2.041 4.31 5.497 4.026 8.465-1.162-.748-2.38-.902-3.68-.314.05-.92-.099-1.798-.3-2.67a14.842 14.842 0 00-.834-2.567 16.416 16.416 0 00-1.225-2.345l-.054.028c.103.193.21.383.309.58.402.81.642 1.67.8 2.553.152.86.25 1.724.287 2.595.027.648.003 1.294-.094 1.936-.01.066-.018.133-.027.219-1.223-1.305-2.68-2.203-4.446-2.617a9.031 9.031 0 00-5.19.29l-.033-.03z"
                                    fill="#F36"
                                  ></path>
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10 12.92h-.003c.31-1.315.623-2.627.93-3.943.011-.052-.015-.145-.052-.176a1.039 1.039 0 00-.815-.247c-.082.01-.124.046-.142.135-.044.216-.088.433-.138.646-.285 1.207-.57 2.413-.859 3.62l.006.001c-.31 1.314-.623 2.626-.93 3.942-.011.052.016.145.052.177.238.196.51.285.815.247.082-.01.125-.047.142-.134.044-.215.088-.433.138-.648.282-1.208.567-2.414.857-3.62z"
                                    fill="#F36"
                                  ></path>
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.983 19.203s-8.091-6.063-17.978-.467c0 0-.273.228.122.241 0 0 8.429-4.107 17.739.458-.002 0 .282.034.117-.232z"
                                    fill="#F36"
                                  ></path>
                                </svg>
                                10
                              </div>
                              <span className="home-main flash_sale-tv-tv">
                                Tuyệt vời
                              </span>
                              <span className="home-main flase_sale-tv-number">
                                (295)
                              </span>
                            </div>
                            <div  className="home-main flash_sale-time">
                              Vừa đặt cách đây
                              <span className="home-main flash_sale-time-span" style={{marginLeft: '2px'}}>
                              7 giờ trước
                              </span>
                            </div>
                            <div className="home-main flasj_sale-saled">
                              <div className="home-main flash_sale-saled-content">
                                <div className="home-main flash_sale_saled-btn">
                                  <span className="home-main flash_sale-saled-ok">
                                  Đã bán 0
                                  </span>
                                  <div className="home-main flash_sale-none">
                                    <div className="home-main flasj_sale-line">

                                    </div>
                                  </div>
                                </div>
                                <div className="home-main flase_sale-saled-price">
                                  <span className="home-main flash_sale_price-saled">
                                  1.449.466đ
                                  </span>
                                  <span className="home-main flash_sale-question">???</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="home-main flash_sale-more">
            <a
              className="flash_sale-more-a"
              target="_blank"
              href="/uu-dai/khach-san-88"
            >
              <button
                className="home-main flash_sale-more-btn"
                tabIndex="0"
                type="button"
              >
                <span className="btn-label">
                  <div className="home-main jss1716">
                    <div className="home-main jss1717" opacity="1">
                      Xem thêm
                    </div>
                  </div>
                </span>
                <span className="btn-container-input-ele"></span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
