import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
import Left_Menu from "../LeftMenu";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { AiFillDownSquare } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo1 from "../../Logo/logo-trang.png";
import logo2 from "../../Logo/logo-xanh.png";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [show, setShow] = React.useState(false);
  const [showKs, setShowKs] = React.useState(true);
  const [showNh, setShowNg] = React.useState(true);
  const router = useNavigate();
  const url = "http://localhost:3030/auth/";

  const [isSignUp, setIsSignUp] = React.useState(false);

  //status login
  const [isLogin, setIsLogin] = React.useState(false);
  //fullname user
  const [fullname, setFullname] = React.useState(false);

  const logout = async () => {
    try {
      console.log("asa");
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${url}logOut`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res) {
        localStorage.setItem("statusLogin", false);
        setIsLogin(localStorage.getItem("statusLogin"));

        return router("/login");
      }
    } catch (error) {
      return false;
    }
  };
  const handleShow = () => {
    if (typeof window !== "undefined") {
      if (window.pageYOffset > 120) {
        if (!show) {
          setShow(true);
        }
      }
      if (window.pageYOffset < 120) {
        setShow(false);
      }
    }
  };
  const checkLogin = () => {
    const statusLogin = localStorage.getItem("statusLogin");
    const fullname = localStorage.getItem("fullname");
    setFullname(fullname);
    setIsLogin(statusLogin);
  };
  const onHangleState = (setParam) => {
    return setParam(true);
  };

  const [data, setData] = useState(true);
  const onChangeSidebar = () => {
    setData(false);
  };
  const changeSidebar = (e) => {
    setData(e);
  };
  useEffect(() => {
    checkLogin();
    console.log(`isLogin: ${typeof isLogin}`);
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleShow);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleShow);
      }
    };
  }, []);
  return (
    <>
      <Left_Menu display={data} changeSidebar={changeSidebar} />
      <div className="home-main header-component">
        <div className="home-main home-component-down">
          <div className="">
            <div
              className={
                show
                  ? "home-main home-navbar scroll-down"
                  : "home-main home-navbar"
              }
            >
              <div className="home-main home-navbar-inside">
                <div className="home-main home-navbar-left">
                  <a
                    href="/"
                    className="main-element link-event link-event-delay active color-main"
                    style={{ cursor: "pointer", marginRight: "200px" }}
                  >
                    <img
                      src={show ? logo2 : logo1}
                      className="jss1181 logo-component"
                      alt="logo"
                      style={{ marginRight: "56px" }}
                    />
                  </a>
                  <a
                    className="main-element link-event link-event-delay single-navbar color-main"
                    style={{
                      marginRight: "24px",
                      textDecoration: "none",
                      position: "relative",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      gap: "0 4px",
                      color: "#ffffff",
                      padding: "10px 0",
                    }}
                    href="/"
                  >
                    Home
                  </a>
                  <a
                    className="main-element link-event link-event-delay single-navbar color-main"
                    href="/ListRoom"
                    target="_blank"
                    style={{
                      marginRight: "24px",
                      textDecoration: "none",
                      position: "relative",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      gap: "0 4px",
                      color: "#ffffff",
                      padding: "10px 0",
                    }}
                  >
                    Room <i className="fa-solid fa-angle-down"></i>
                    <div className="ks-position">
                      <div className="home-main ks-drop-down">
                        <div className="home-main  ks-drop-down-main">
                          <div className="home-main header-btn"></div>
                          <div className="home-main btn-ks">
                            <div className="home-main btn-ks-lable">
                              <a
                                href="/ListRoom"
                                exact="true"
                                className="btn-ks-lable log-btn btn-type"
                                // style={{ fontSize: "0.9rem" }}
                              >
                                Single Room
                              </a>
                            </div>
                          </div>
                          <div className="home-main btn-ks">
                            <div className="home-main btn-ks-lable">
                              <a
                                href="/ListRoom"
                                exact="true"
                                className="btn-ks-lable log-btn btn-type"
                                // style={{ fontSize: "0.9rem" }}
                              >
                                Double Room
                              </a>
                            </div>
                          </div><div className="home-main btn-ks">
                            <div className="home-main btn-ks-lable">
                              <a
                                href="/ListRoom"
                                exact="true"
                                className="btn-ks-lable log-btn btn-type"
                                // style={{ fontSize: "0.9rem" }}
                              >
                                Deluxe Room
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    className="main-element link-event link-event-delay single-navbar color-main"
                    target="_blank"
                    style={{
                      marginRight: "24px",
                      textDecoration: "none",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      gap: "0 4px",
                      color: "#ffffff",
                      padding: "10px 0",
                    }}
                    href="/ListRestaurant"
                    onMouseLeave={() => onHangleState(setShowNg)}
                    onMouseEnter={() => setShowNg(false)}
                  >
                    Restaurant
                    <div className="ks-position"></div>
                  </a>
                  <a
                    className="main-element link-event link-event-delay home-header-gift color-main icon-main"
                    style={{ textDecoration: "none" }}
                    href="/contact"
                  >
                    {/* <svg
                      width="17"
                      height="17"
                      fill="none"
                      className="svgFillAll"
                      style={{ stroke: "rgb(26, 32, 44)", marginRight: "8px" }}
                    >
                      <path
                        d="M3.167 1.333H6.5L8.167 5.5 6.083 6.75a9.167 9.167 0 004.167 4.167l1.25-2.084 4.167 1.667v3.333A1.666 1.666 0 0114 15.5 13.333 13.333 0 011.5 3a1.667 1.667 0 011.667-1.667"
                        stroke="rgb(255, 255, 255)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg> */}
                    Contact us
                  </a>
                </div>
                <div className="home main home-navbar-right">
                  <div className="btn-book-now">
                  <a href="/booking">
                      <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
                      BOOK ONLINE
                    </a>
                  </div>

                  <div className="home-main main-element">
                    <div
                      className="home-main jss1759 home-header-ring"
                      style={{ color: "black" }}
                    >
                      <div
                        className="home-main home-header-ring-content icon-main"
                        onClick={() => setIsSignUp(!isSignUp)}
                      >
                        <svg
                          width="20"
                          height="20"
                          fill="none"
                          className="svgFillAll"
                          style={{ stroke: "rgb(255, 255, 255)" }}
                        >
                          <path
                            d="M3.63 15.374a12.905 12.905 0 016.37-1.67 12.9 12.9 0 016.37 1.67m-3.592-7.226a2.778 2.778 0 11-5.556 0 2.778 2.778 0 015.556 0zM18.333 10a8.333 8.333 0 11-16.665 0 8.333 8.333 0 0116.665 0z"
                            stroke="rgb(255, 255, 255)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <svg
                          width="10"
                          height="6"
                          fill="none"
                          className="svgFillAll"
                          style={{
                            stroke: "rgb(26, 32, 44)",
                            marginLeft: "6px",
                          }}
                        >
                          <path
                            d="M1.667 1.333L5 4.667l3.333-3.334"
                            stroke="rgb(255, 255, 255)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <div
                        className={
                          isSignUp
                            ? "home-main btn-dn-dk"
                            : "home-main btn-dn-dk isdisplay"
                        }
                        style={{ right: "-26px" }}
                      >
                        <div className="home-main btn-dn-dk-main">
                          <div className="home-main header-btn"></div>
                          <div className="home-main btn-dangki hover-btn-dangnhap">
                            <div className="home-main btn-dangki-label ">
                              {isLogin === "true" ? (
                                <p>
                                  Hello{" "}
                                  <span
                                    style={{
                                      fontSize: "15px",
                                      fontWeight: "800",
                                    }}
                                  >
                                    {fullname}
                                  </span>{" "}
                                  🎉
                                </p>
                              ) : (
                                <NavLink
                                  className="btn-dangki-label log-btn"
                                  to="/register"
                                  exact="true"
                                >
                                  <AiOutlineLogout /> Register
                                </NavLink>
                              )}
                            </div>
                          </div>
                          <div className="home-main btn-dangnhap hover-btn-dangnhap">
                            <div className="home-main btn-dangnhap-lable">
                              {isLogin === "true" ? (
                                <button
                                  className="btn-dangnhap-lable log-btn"
                                  to="/login"
                                  exact="true"
                                  onClick={() => logout()}
                                >
                                  <AiOutlineLogin /> Log out
                                </button>
                              ) : (
                                <NavLink
                                  className="btn-dangki-label log-btn"
                                  to="/login"
                                  exact="true"
                                >
                                  <AiOutlineLogout /> Login
                                </NavLink>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div onClick={() => onChangeSidebar()}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
