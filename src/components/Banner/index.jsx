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
          <source src="https://vod-progressive.akamaized.net/exp=1672081702~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2874%2F25%2F639372358%2F2930217265.mp4~hmac=7627e337a8ea686293b7a78ecbb706de66d4a05634bb70e954eaa11a135fd723/vimeo-prod-skyfire-std-us/01/2874/25/639372358/2930217265.mp4" />
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
