import React from "react";
import "./styles.css";
export default function Hero() {
  return (
    <div className="home-main hero-component" style={{ minHeight: "aotu" }}>
      <div className="home-main hero-content">
        <div className="home-main hero-item">
          <span className="home-main">
            <img
              src="https://cdn.pixabay.com/photo/2014/12/21/23/24/spare-ribs-575310__340.png"
              alt="logo_total_hotel"
              style={{ width: "52px", height: "52px" }}
            />
          </span>
          <div className="home-main hero-item-content">
            <span className="home-main">Rất nhiều món ngon đang chờ bạn</span>
            <span className="home-main hero-item-content-main">
              Hàng trăm món ăn ngon, giá cạnh tranh, phong phú.
            </span>
          </div>
        </div>
        <div className="home-main hero-item">
          <span className="home-main">
            <img
              src="https://cdn.pixabay.com/photo/2022/11/01/22/56/oktoberfest-7563596__340.png"
              alt="logo_total_hotel"
              style={{ width: "52px", height: "52px" }}
            />
          </span>
          <div className="home-main hero-item-content">
            <span className="home-main">Rất nhiều loại đồ uống</span>
            <span className="home-main hero-item-content-main">
              Cam kết chất lượng, đem đến trải nghiệm tốt nhất cho bạn
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
