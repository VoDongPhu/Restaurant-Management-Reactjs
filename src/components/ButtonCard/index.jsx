import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";

ButtonCard.propTypes = {};

function ButtonCard(props) {
  return (
    <div>
      <div className="buttonCard">
        <a href="/booking">
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
        </a>
      </div>
    </div>
  );
}

export default ButtonCard;
