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
        {!props.isContact ? (
          <video type="video/mp4" loop muted autoPlay>
            <source src="https://vod-progressive.akamaized.net/exp=1672489193~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2874%2F25%2F639372358%2F2930217265.mp4~hmac=2c0b31762505c378db1dfd7c216002c086f75e8075f98867ac6e0df2e343a193/vimeo-prod-skyfire-std-us/01/2874/25/639372358/2930217265.mp4" />
            Your browser does not support the video tag.
          </video> ) : (
          <img
          className="img-bannerhome"
          src="https://res.cloudinary.com/scvr/image/upload/c_fit,f_auto,q_auto,w_1110/v1/production/gallery_photos/images/000/150/224/original/LORES-2018-0115-CHUBBYS-0041_copy.jpeg"
        />
        ) }
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
