import React from "react";
import "./styles.css";
import logo2 from "../../Logo/logo-xanh.png";
export default function Footer() {
  return (
    <div style={{ background: "antiquewhite" }}>
      <div className="Footer-component">
        <div class="col-md-3 col-sm-6 widget">
          <div class="Footer-about">
            <a href="/">
              <img class="logo" src={logo2} height="50" alt="Logo"></img>
            </a>
          </div>
        </div>
        <div className="Footer-infor">
          <div class="col-md-3 col-sm-6 widget">
            <h5>Latest News</h5>
            <ul class="blog_posts">
              <li>
                <a href="">Live your myth in Greece</a>
                <small>MAY 13, 2022</small>
              </li>
              <li>
                <a href="">Zent Resort</a>
                <small>MAY 16, 2022</small>
              </li>
              <li>
                <a href="/">Zent Resort family party</a>
                <small>MAY 15, 2022</small>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-6 widget">
            <h5>Useful Links</h5>
            <ul class="useful_links">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">History</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Location</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-6 widget">
            <h5>Contact Us</h5>
            <address>
              <ul class="address_details">
                <li>
                  <i class="glyphicon glyphicon-map-marker"></i> Đại học Công
                  Nghệ Thông Tin, Linh Trung ,Thủ đức
                </li>
                <li>
                  <i class="glyphicon glyphicon-phone-alt"></i> Phone: +84
                  0763638074
                </li>
                <li>
                  <i class="fa fa-fax"></i> Fax: 123 3456
                </li>
                <li>
                  <i class="fa fa-envelope"></i> Email:{" "}
                  <a href="">19522167@gm.uit.edu.vn</a>
                </li>
              </ul>
            </address>
          </div>
        </div>
        <div className="Footer-final">
          <div class="col-md-6 col-sm-6">
            <div class="copyrights">
              Copyright 2021 <a href="/"> Zent Resort </a> All Rights Reserved.
            </div>
          </div>
          <div class="col-md-6 col-sm-6">
            <div class="social_media">
              <a
                class="facebook"
                data-original-title="Facebook"
                data-toggle="tooltip"
                href="#"
              >
                <i class="fa fa-facebook"></i>
              </a>
              <a
                class="twitter"
                data-original-title="Twitter"
                data-toggle="tooltip"
                href="#"
              >
                <i class="fa fa-twitter"></i>
              </a>
              <a
                class="googleplus"
                data-original-title="Google Plus"
                data-toggle="tooltip"
                href="#"
              >
                <i class="fa fa-google-plus"></i>
              </a>
              <a
                class="pinterest"
                data-original-title="Pinterest"
                data-toggle="tooltip"
                href="#"
              >
                <i class="fa fa-pinterest"></i>
              </a>
              <a
                class="linkedin"
                data-original-title="Linkedin"
                data-toggle="tooltip"
                href="#"
              >
                <i class="fa fa-linkedin"></i>
              </a>
              <a
                class="instagram"
                data-original-title="Instagram"
                data-toggle="tooltip"
                href="#"
              >
                <i class="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
