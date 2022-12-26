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
          <source src="https://vod-progressive.akamaized.net/exp=1671632785~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F229%2F15%2F376145612%2F1569354676.mp4~hmac=c02007649e9064adf0925b93fe7de4ebbd96110a8fa66d2c7991fc7731c4ca8f/vimeo-prod-skyfire-std-us/01/229/15/376145612/1569354676.mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="content">
          <p>WELCOME TO</p>
          <h2>GENZ RESTAURANT</h2>
        </div>
        <div className="btn-book-now">
          <a href="/booking">
            <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
            BOOK A TABLE NOW
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
