import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const AwesomeServices = (props) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [arr, setArr] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  console.log(arr);
  const getData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3030/awesomeService/getData"
      );
      if (res) {
        setArr(res?.data?.data);
      }
    } catch (error) {}
  };
  return (
    <div className="AwesomeServices">
      <h2 className="favorite_room_header-title">OUR AWESOME SERVICES</h2>
      <div className="title">
        <p className="">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit.
        </p>
      </div>

      <div className="container flex j-between">
        <div className="left">
          <Slider
            asNavFor={nav2}
            ref={(slider1) => setNav1(slider1)}
            autoplay={true}
            autoplaySpeed={2500}
            arrows={false}
          >
            {arr.map((e,index) => {
              return (
                <div key={index}>
                  <img
                    src={e?.image}
                    alt=""
                  />
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="right">
          <Slider
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            slidesToShow={4}
            slidesToScroll={1}
            focusOnSelect={true}
            vertical={true}
          >
            {/* ------------ content 1 ------------ */}
            <div className="right-slide right-slide-1">
              <div className="content">
                <h3>
                  <FontAwesomeIcon
                    style={{
                      marginRight: "10px",
                      fontSize: "16px",
                      color: "rgb(217, 183, 114)",
                      fontFamily: "Arial, Helvetica, sans-serif",
                    }}
                    icon="fa-solid fa-bowl-rice"
                  />
                  Restaurant
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet.
                </p>
              </div>
            </div>
            {/* ------------ content 2 ------------ */}
            <div className="right-slide right-slide-2">
              <div className="content">
                <h3>
                  <FontAwesomeIcon
                    style={{
                      marginRight: "10px",
                      fontSize: "16px",
                      color: "rgb(217, 183, 114)",
                    }}
                    icon="fa-solid fa-child-reaching"
                  />
                  Spa - Beauty & Health
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet.
                </p>
              </div>
            </div>
            {/* ------------ content 3 ------------ */}
            <div className="right-slide right-slide-3">
              <div className="content">
                <h3>
                  <FontAwesomeIcon
                    style={{
                      marginRight: "10px",
                      fontSize: "16px",
                      color: "rgb(217, 183, 114)",
                    }}
                    icon="fa-solid fa-users-viewfinder"
                  />
                  Conference Room
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet.
                </p>
              </div>
            </div>
            {/* ------------ content 4 ------------ */}
            <div className="right-slide right-slide-4">
              <div className="content">
                <h3>
                  <FontAwesomeIcon
                    style={{
                      marginRight: "10px",
                      fontSize: "16px",
                      color: "rgb(217, 183, 114)",
                    }}
                    icon="fa-solid fa-person-swimming"
                  />
                  Swimming Pool
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

AwesomeServices.propTypes = {};

export default AwesomeServices;
