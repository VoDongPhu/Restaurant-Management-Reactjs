import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";

function ButtonScrollTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      <div className="container"></div>

      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
        </button>
      )}
    </>
  );
}

export default ButtonScrollTop;
