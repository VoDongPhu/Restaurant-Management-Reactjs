import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.scss";

Banner.propTypes = {};

function Banner(props) {
  return (
    <div>
      <div className="banner">
        {/* video */}
        <video type="video/mp4" loop muted autoPlay>
          <source src="https://preview.eagle-themes.com/html/zante/videos/hero_video.mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="content">
          <p>WELCOME TO</p>
          <h2>ZENT RESORT</h2>
        </div>
        <div className="btn-book-now">
          <a href="/booking">
            <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
            BOOK A ROOM NOW
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
