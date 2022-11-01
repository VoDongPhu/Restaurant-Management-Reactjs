import React from "react";
import "./styles.css";
function Search() {
  return (
    <div className="home-main home-header-center">
      <div className="home-main home-headr-center-main">
        <div className="home-main home-header-center-main-up">
          <div className="home-main home-header-center-main-up-content">
            <div className="home-main home-header-ks">
              <span
                className="home-main home-header-ks-content"
                style={{ marginRight: "8px" }}
              >
                <svg width="20" height="20" fill="none" className="svgFillAll">
                  <path
                    d="M2.5 4.75h11.25a.375.375 0 00.351-.507l-.943-2.513A1.131 1.131 0 0012.105 1h-7.96a1.131 1.131 0 00-1.05.73l-.946 2.513a.375.375 0 00.351.507zM18.25 17.5h-1.125a.188.188 0 01-.188-.188v-.357a.184.184 0 01.114-.167 1.681 1.681 0 001.012-1.538 50.433 50.433 0 00-1.328-5.355.391.391 0 00-.72 0 50.433 50.433 0 00-1.328 5.355 1.682 1.682 0 001.013 1.538.185.185 0 01.113.168v.357a.187.187 0 01-.187.187h-2.438a.188.188 0 01-.188-.188V5.688a.188.188 0 00-.188-.187H3.438a.187.187 0 00-.188.188v11.625a.188.188 0 01-.188.187H1.75a.75.75 0 100 1.5h16.5a.75.75 0 100-1.5zM5.125 7.562H7a.563.563 0 110 1.125H5.125a.563.563 0 110-1.124zM4.562 11.5a.562.562 0 01.563-.563H7a.563.563 0 010 1.126H5.125a.563.563 0 01-.563-.563zm4.688 5.813a.188.188 0 01-.188.187H7.188A.188.188 0 017 17.312v-1.687a1.125 1.125 0 012.25 0v1.688zm1.875-5.25H9.25a.562.562 0 010-1.126h1.875a.562.562 0 110 1.126zm0-3.376H9.25a.562.562 0 110-1.124h1.875a.562.562 0 110 1.125z"
                    fill="black"
                  ></path>
                </svg>
              </span>
              Khách sạn
              <div className="home-main home-header-minus">-300k</div>
            </div>
            <div className="home-main home-header-cb">
              <span
                className="home-main home-header-cb-content"
                style={{ marginRight: "8px" }}
              >
                <svg width="20" height="20" fill="none" className="svgFillAll">
                  <path
                    d="M5.073 5.269l3.25 1.345a.417.417 0 00.326 0l3.46-1.506a.209.209 0 000-.383L7.703 2.904a.838.838 0 00-.639 0l-1.99.826a.833.833 0 000 1.539z"
                    fill="#1A202C"
                  ></path>
                  <path
                    d="M19.656 5.043a2.083 2.083 0 00-2.722-1.127h-.006L5.895 8.718a.417.417 0 01-.352-.01l-1.98-.99a.843.843 0 00-.701-.02l-2.172.93a.833.833 0 00-.262 1.357l3.12 3.12a.833.833 0 00.899.185l4.68-1.874a.207.207 0 01.273.266l-1.63 4.35a.833.833 0 001.153 1.038l2.258-1.13a.833.833 0 00.375-.373l3.124-6.25a.416.416 0 01.228-.204l3.62-1.35a2.083 2.083 0 001.128-2.72z"
                    fill="#1A202C"
                  ></path>
                </svg>
              </span>
              Chuyến bay
              <div className="home-main home-header-cb-minus">-50k</div>
            </div>
            <div className="home-main home-header-nh">
              <span className="home-main" style={{ marginRight: "8px" }}>
                <svg width="20" height="20" fill="none" className="svgFillAll">
                  <path
                    d="M17.466 16.316l-5.794-5.225 1.381-1.521c.375-.416.951-.56 1.492-.416a3.372 3.372 0 003.261-.872c1.32-1.32 3.005-4.403 1.314-6.094-1.69-1.69-4.773-.005-6.093 1.315a3.372 3.372 0 00-.872 3.26c.144.541 0 1.118-.416 1.493l-1.6 1.452-1.142-1.03a1.079 1.079 0 01-.317-1.136 3.379 3.379 0 00-.812-3.473l-.33-.334-2.433-2.433a.527.527 0 00-.782.04c-.174.213-.137.531.058.726L6.793 4.48l-.598.598-.003.003L3.78 2.669c-.195-.195-.512-.232-.726-.058a.527.527 0 00-.04.782l2.433 2.433-.6.6-2.413-2.411c-.194-.195-.512-.233-.726-.058a.527.527 0 00-.04.782l2.433 2.433-.6.6L1.089 5.36c-.195-.194-.513-.232-.726-.057a.527.527 0 00-.04.781l2.433 2.434.261.258c.948.945 2.33 1.263 3.531.878.414-.133.869.01 1.16.334l7.67 8.505a1.511 1.511 0 002.276-.035c.536-.63.427-1.588-.188-2.142z"
                    fill="#1A202C"
                  ></path>
                  <path
                    d="M8.222 11.629a.126.126 0 00-.183-.014l-5.223 4.743a1.512 1.512 0 00.035 2.276c.63.535 1.588.426 2.142-.188l3.917-4.314c.408-.45.427-1.13.045-1.6l-.733-.903z"
                    fill="#1A202C"
                  ></path>
                </svg>
              </span>
              Nhà hàng
              <div className="home-main home-header-nh-minus">Đặt bàn</div>
            </div>
            <div className="home-main home-main-devider"></div>
          </div>
        </div>
        <div
          className="home-main home-header-center-main-down"
          style={{ width: "100%" }}
        >
          <div className="home-main home-header-down">
            <div>
              <div className="home-main home-header-down-center">
                <div
                  className="home-main home-header-down-1"
                  style={{ marginLeft: "16px" }}
                >
                  <div
                    className="home-main home-header-down-1-1"
                    style={{ position: "relative" }}
                  >
                    <div className="home-main home-header-down-dd">
                      Địa điểm
                    </div>
                    <div className="home-main">
                      <div className="main-container main-container-center home-header-search-dd">
                        <input
                          autoComplete="off"
                          id="input-search-hotel"
                          placeholder="Thành phố, khách sạn, điểm đến"
                          className="input-main input-main-container home-header-ip"
                        />
                      </div>
                      <div
                        className="home-header-after-ip"
                        style={{ background: "transparent" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div
                  className="home-main-header-down-2"
                  style={{ borderLeft: "1px solid #E2E8F0" }}
                >
                  <div className="home-main home-headr-time">
                    <div className="home-main home-header-time-1">
                      Ngày đến
                      <div className="home-main home-header-time-1-1">T3,</div>
                      <div className="home-main home-header-time-nd"></div>
                    </div>
                    <div className="home-main home-header-time-2">
                      <span className="home-main home-header-day">1</span>
                      <svg width="10" height="9" fill="none">
                        <path
                          d="M4.982.504h.173A3.319 3.319 0 008.66 6.01 3.982 3.982 0 114.982.5v.004z"
                          stroke="#718096"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="home-main home-header-time-3">
                      Ngày về
                      <div className="home-main home-header-day2">T4,</div>
                      <div className="home-main home-header-time-3-span"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="home-main home-header-down-3"
                  style={{ borderLeft: "1px solid #E2E8F0" }}
                >
                  <div className="home-main home-header-pk">
                    <div className="home-main" style={{ position: "relative" }}>
                      <div className="home-main home-header-pk-name">
                        Số phòng, số khách
                      </div>
                      <div className="home-main home-header-pk-phong">
                        1 phòng, 2 người lớn, 0 trẻ em
                      </div>
                      <div className="home-header-pk-phong-line"></div>
                    </div>
                  </div>
                </div>
                <button className="home-main btn-header">
                  <span className="header-lb">
                    <svg
                      width="23"
                      height="24"
                      fill="none"
                      className="svgFillAll"
                      style={{ stroke: "rgb(255, 255, 255)" }}
                    >
                      <path
                        d="M21.312 22.5l-4.742-4.742m2.71-7.451a8.806 8.806 0 11-17.613 0 8.806 8.806 0 0117.613 0z"
                        stroke="#fff"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <span className="home-header-span"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
