import React from "react";
import "./styles.css";
export default function Hero() {
  return (
    <div className="home-main hero-component" style={{ minHeight: "aotu" }}>
      <div className="home-main hero-content">
        <div className="home-main hero-item">
          <span className="home-main">
            <img
              src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_total_hotel.svg"
              alt="logo_total_hotel"
              style={{ width: "52px", height: "52px" }}
            />
          </span>
          <div className="home-main hero-item-content">
            <span className="home-main">Hơn 8000+ khách sạn dọc Việt Nam</span>
            <span className="home-main hero-item-content-main">
              Hàng nghìn khách sạn, đặc biệt là 4 sao và 5 sao, cho phép bạn
              thoải mái lựa chọn, giá cạnh tranh, phong phú.
            </span>
          </div>
        </div>
        <div className="home-main hero-item">
          <span className="home-main">
            <img
              src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_best_price.svg"
              alt="logo_total_hotel"
              style={{ width: "52px", height: "52px" }}
            />
          </span>
          <div className="home-main hero-item-content">
            <span className="home-main">Giá tốt sát ngày</span>
            <span className="home-main hero-item-content-main">
              Cam kết giá tốt nhất khi đặt gần ngày cho chuyến đi của bạn.
            </span>
          </div>
        </div>
        <div className="home-main hero-item">
          <span className="home-main">
            <img
              src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_support_247.svg"
              alt="logo_total_hotel"
              style={{ width: "52px", height: "52px" }}
            />
          </span>
          <div className="home-main hero-item-content">
            <span className="home-main">Hỗ trợ khách hàng 24/7</span>
            <span className="home-main hero-item-content-main">
              Chat là có, gọi là nghe, không quản đêm hôm, ngày nghỉ và ngày lễ.
            </span>
          </div>
        </div>
        <div className="home-main hero-item">
          <span className="home-main">
            <img
              src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_payment.svg"
              alt="logo_total_hotel"
              style={{ width: "52px", height: "52px" }}
            />
          </span>
          <div className="home-main hero-item-content">
            <span className="home-main">Thanh toán dễ dàng, đa dạng</span>
            <span className="home-main hero-item-content-main">
              Bao gồm thêm chuyển khoản ngân hàng và tiền mặt tại cửa hàng.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
