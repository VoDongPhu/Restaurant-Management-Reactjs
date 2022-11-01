import React from "react";
import "./styles.css";
export default function Left_Menu({ display, changeSidebar }) {
  const changeSidebarClear = () => {
    changeSidebar(!display);
  };
  return (
    <div>
      <div
        className="sidenav"
        style={{
          display: display ? "none" : "block",
          width: "250px",
          zIndex: "99999",
        }}
      >
        <div
          className="MuiPaper-root MuiDrawer-paper MuiDrawer-paperAnchorRight MuiPaper-elevation16"
          tabIndex="-1"
          style={{transition:'none', transition:'transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms', background:'white'}}
        >
          <div className="home-main jss429">
            <div className="home-main jss430 jss425">
              <div className="home-main jss431 jss426">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  style={{ cursor: "pointer", marginBottom: "20px" }}
                  onClick={() => changeSidebarClear()}
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="#1A202C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <div className="home-main jss432 jss427">
                  <svg width="20" height="20" fill="none">
                    <path
                      d="M17.26 6.568l-5.555-4.317a2.779 2.779 0 00-3.41 0L2.739 6.568a2.774 2.774 0 00-1.072 2.19v7.494a2.08 2.08 0 002.083 2.081h12.5a2.084 2.084 0 002.083-2.081V8.759c0-.857-.395-1.665-1.073-2.19z"
                      fill="#00B6F3"
                      stroke="#00B6F3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M13.722 12.803c-2.072 1.25-5.43 1.25-7.5 0"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <p className="MuiTypography-root jss428 MuiTypography-body2">
                    Trang chủ
                  </p>
                </div>
                <div className="home-main jss433">
                  <div className="home-main jss434 jss427">
                    <svg width="20" height="20" fill="none">
                      <path
                        d="M5.709 1.667c-1.357 0-2.656.606-3.571 1.66C1.07 4.562.638 6.3.916 8.22 1.542 12.536 6 16.172 10 17.817c4-1.645 8.454-5.28 9.083-9.597.279-1.92-.154-3.658-1.222-4.893-.912-1.054-2.214-1.66-3.568-1.66-1.366 0-2.645.624-3.602 1.755l-.688.815-.688-.815c-.962-1.131-2.241-1.755-3.607-1.755z"
                        fill="#00B6F3"
                        stroke="#00B6F3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <p className="MuiTypography-root jss428 MuiTypography-body2">
                      Yêu thích
                    </p>
                  </div>
                </div>
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="/khach-san"
                  style={{ textDecoration: "none" }}
                >
                  <div className="home-main jss435 jss427">
                    <svg width="20" height="20" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.25 2.5A2.5 2.5 0 014.75 0h10a2.5 2.5 0 012.5 2.5v15a1.25 1.25 0 010 2.5H13.5a1.25 1.25 0 01-1.25-1.25v-2.5A1.25 1.25 0 0011 15H8.5a1.25 1.25 0 00-1.25 1.25v2.5A1.25 1.25 0 016 20H2.25a1.25 1.25 0 010-2.5v-15zM6 3.75h2.5v2.5H6v-2.5zm2.5 5H6v2.5h2.5v-2.5zm2.5-5h2.5v2.5H11v-2.5zm2.5 5H11v2.5h2.5v-2.5z"
                        fill="#FFBC39"
                      ></path>
                    </svg>
                    <p className="MuiTypography-root jss428 MuiTypography-body2">
                      Khách sạn
                    </p>
                  </div>
                </a>
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="/ve-may-bay"
                  style={{ textDecoration: "none" }}
                >
                  <div className="home-main jss436 jss427">
                    <svg width="20" height="20" fill="none">
                      <g clipPath="url(#icon_flight_ticket_svg__clip0)">
                        <path
                          d="M12.608 3.813a.5.5 0 00.486-.129L16.11.667a2.278 2.278 0 113.222 3.222l-3.017 3.017a.5.5 0 00-.13.485l2.265 8.301a.5.5 0 01-.129.485l-1.743 1.743a.5.5 0 01-.79-.11l-3.384-6.091a.5.5 0 00-.79-.111l-2.608 2.607a.5.5 0 00-.146.353v2.808a.5.5 0 01-.147.354l-1.698 1.698a.5.5 0 01-.828-.195l-1.276-3.829a.5.5 0 00-.316-.316L.768 13.812a.5.5 0 01-.196-.828l1.698-1.698a.5.5 0 01.354-.147h2.808a.5.5 0 00.353-.146l2.607-2.607a.5.5 0 00-.11-.79L2.19 4.21a.5.5 0 01-.111-.79l1.742-1.743a.5.5 0 01.486-.129l8.3 2.264z"
                          fill="#FF1284"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="icon_flight_ticket_svg__clip0">
                          <path fill="#fff" d="M0 0h20v20H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="MuiTypography-root jss428 MuiTypography-body2">
                      Vé máy bay
                    </p>
                  </div>
                </a>
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="https://thememories.vn/"
                  style={{ textDecoration: "none" }}
                >
                  <div className="home-main jss437 jss427">
                    <svg width="20" height="20" fill="none">
                      <g clipPath="url(#icon_wedding_svg__clip0)">
                        <path
                          d="M19.167 0H.833A.833.833 0 000 .833v18.334c0 .46.373.833.833.833h18.334c.46 0 .833-.373.833-.833V.833A.833.833 0 0019.167 0z"
                          fill="#fff"
                        ></path>
                        <path
                          d="M5.583 7.864a.208.208 0 01-.016-.354 3.232 3.232 0 10-3.628 0 .208.208 0 01-.016.354A3.75 3.75 0 000 11.136v2.223a.417.417 0 00.417.417h.904a.417.417 0 01.417.379l.487 5.466a.416.416 0 00.417.38H4.86a.416.416 0 00.417-.38l.488-5.466a.417.417 0 01.417-.38h.9a.417.417 0 00.417-.416v-2.223a3.75 3.75 0 00-1.917-3.272zm-1.208 2.64a.625.625 0 01-1.25 0V9.185a.625.625 0 011.25 0v1.32zM3.75 6.403a1.563 1.563 0 01-1.508-1.981.207.207 0 01.305-.124 3.963 3.963 0 002.52.506.207.207 0 01.233.233 1.567 1.567 0 01-1.55 1.365zM14.167 0a5.84 5.84 0 00-5.834 5.833v6.25A1.666 1.666 0 0010 13.75h.167l-.75 2.237a.833.833 0 00.791 1.096h1a.416.416 0 01.417.358l.263 1.844a.833.833 0 00.825.715h2.917a.833.833 0 00.825-.715l.263-1.844a.417.417 0 01.413-.358h1a.833.833 0 00.79-1.096l-.754-2.237h.166A1.667 1.667 0 0020 12.083v-6.25A5.84 5.84 0 0014.167 0zm2.681 15.333a.209.209 0 01-.166.084h-.64a.833.833 0 00-.825.715l-.289 2.022a.21.21 0 01-.206.18h-1.11a.207.207 0 01-.206-.18l-.29-2.022a.834.834 0 00-.824-.715h-.638a.21.21 0 01-.206-.177.209.209 0 01.008-.098l1.033-3.1c.077-.23.2-.443.363-.624a.208.208 0 01.334.036l.589 1.028a.448.448 0 00.778 0l.59-1.028a.208.208 0 01.333-.036c.163.181.286.394.363.625l1.033 3.1a.209.209 0 01-.024.19zm-4.675-8.06a.205.205 0 01.073-.226.208.208 0 01.076-.036 3.597 3.597 0 001.563-.846.417.417 0 01.563 0c.442.408.98.7 1.564.846a.206.206 0 01.148.262 2.083 2.083 0 01-3.987 0zm6.16 4.394a.417.417 0 01-.814.131l-.094-.282a3.428 3.428 0 00-1.35-1.77.206.206 0 01-.092-.171.21.21 0 01.088-.173 3.334 3.334 0 10-3.809 0 .21.21 0 010 .344 3.429 3.429 0 00-1.35 1.77l-.094.282a.417.417 0 01-.818-.131V5.833a4.167 4.167 0 018.333 0v5.834z"
                          fill="#F36"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="icon_wedding_svg__clip0">
                          <path fill="#fff" d="M0 0h20v20H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="MuiTypography-root jss428 MuiTypography-body2">
                      The Memories
                    </p>
                  </div>
                </a>
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="https://mytourevent.vn/tour"
                  style={{ textDecoration: "none" }}
                >
                  <div className="home-main jss438 jss427">
                    <svg width="20" height="20" fill="none">
                      <path
                        d="M6.97 4.697v-1.03a2 2 0 012-2h2.06a2 2 0 012 2v1.03"
                        stroke="#00B6F3"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      ></path>
                      <path
                        d="M16.333 4.697H3.667a2 2 0 00-2 2v5.09a2 2 0 002 2h12.666a2 2 0 002-2v-5.09a2 2 0 00-2-2z"
                        fill="#00B6F3"
                        stroke="#00B6F3"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      ></path>
                      <path
                        d="M17.576 16.06v.273a2 2 0 01-2 2H4.424a2 2 0 01-2-2v-.272"
                        fill="#00B6F3"
                      ></path>
                      <path
                        d="M17.576 16.06v.273a2 2 0 01-2 2H4.424a2 2 0 01-2-2v-.272"
                        stroke="#00B6F3"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M10.758 7.727H9.242a1.515 1.515 0 100 3.03h1.515a1.515 1.515 0 000-3.03z"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      ></path>
                    </svg>
                    <p className="MuiTypography-root jss428 MuiTypography-body2">
                      Tour &amp; Sự kiện
                    </p>
                  </div>
                </a>
                <a
                  href="/location"
                  target=""
                  style={{ textDecoration: "none" }}
                >
                  <div className="home-main jss439 jss427">
                    <svg width="20" height="20" fill="none">
                      <path
                        d="M15 0H5a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3z"
                        fill="#48BB78"
                      ></path>
                      <path
                        d="M15.417 3.75v6.667l-2.5-1.667-2.5 1.667V3.75h5z"
                        fill="#fff"
                      ></path>
                    </svg>
                    <p className="MuiTypography-root jss428 MuiTypography-body2">
                      Cẩm nang du lịch
                    </p>
                  </div>
                </a>
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="https://career.mytour.vn/"
                  style={{ textDecoration: "none" }}
                >
                  <div className="home-main jss440 jss427">
                    <svg width="20" height="20" fill="none">
                      <path
                        d="M6.97 4.697v-1.03a2 2 0 012-2h2.06a2 2 0 012 2v1.03"
                        stroke="#00B6F3"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      ></path>
                      <path
                        d="M16.333 4.697H3.667a2 2 0 00-2 2v5.09a2 2 0 002 2h12.666a2 2 0 002-2v-5.09a2 2 0 00-2-2z"
                        fill="#00B6F3"
                        stroke="#00B6F3"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      ></path>
                      <path
                        d="M17.576 16.06v.273a2 2 0 01-2 2H4.424a2 2 0 01-2-2v-.272"
                        fill="#00B6F3"
                      ></path>
                      <path
                        d="M17.576 16.06v.273a2 2 0 01-2 2H4.424a2 2 0 01-2-2v-.272"
                        stroke="#00B6F3"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M10.758 7.727H9.242a1.515 1.515 0 100 3.03h1.515a1.515 1.515 0 000-3.03z"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      ></path>
                    </svg>
                    <p className="MuiTypography-root jss428 MuiTypography-body2">
                      Tuyển dụng
                    </p>
                  </div>
                </a>
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="/help/30-lien-he.html"
                  style={{ textDecoration: "none" }}
                >
                  <div className="home-main jss441 jss427">
                    <svg width="20" height="20" fill="none">
                      <path
                        d="M18.032 8.412a.207.207 0 01-.117-.183 7.917 7.917 0 00-15.833 0 .21.21 0 01-.117.184 2.263 2.263 0 00-1.34 2.004v2.5a2.445 2.445 0 002.57 2.291h1.944a.625.625 0 00.625-.625V8.75a.625.625 0 00-.625-.625H3.98a.206.206 0 01-.196-.138.213.213 0 01-.012-.085 6.242 6.242 0 0112.456 0 .212.212 0 01-.125.206.21.21 0 01-.083.017h-1.16a.625.625 0 00-.624.625v5.833a.625.625 0 00.625.625h.764a.208.208 0 01.208.209 1.667 1.667 0 01-1.666 1.666H12.8a.21.21 0 01-.173-.091 1.667 1.667 0 100 1.85.21.21 0 01.173-.092h1.367a3.333 3.333 0 003.333-3.333v-.146a.209.209 0 01.147-.2 2.323 2.323 0 001.728-2.154v-2.5a2.265 2.265 0 00-1.343-2.005z"
                        fill="#00B6F3"
                      ></path>
                    </svg>
                    <p className="MuiTypography-root jss428 MuiTypography-body2">
                      Hỗ trợ
                    </p>
                  </div>
                </a>
                <a
                  href="https://doitac.mytour.vn/"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <div className="home-main jss442 jss427">
                    <svg width="20" height="20" fill="none">
                      <path
                        d="M7.5 6.667h5A.833.833 0 0012.5 5h-5a.833.833 0 000 1.667zM7.893 3.75a.417.417 0 00.416.365h3.387a.416.416 0 00.417-.365c.18-.9.52-1.761 1.005-2.54a.416.416 0 00-.532-.584l-1.552.666a.208.208 0 01-.275-.114l-.367-.916a.417.417 0 00-.774 0l-.367.916a.208.208 0 01-.275.115L7.416.628a.417.417 0 00-.531.583A7.637 7.637 0 017.893 3.75zM12.865 7.6a.493.493 0 00-.297-.1H7.433a.488.488 0 00-.298.1c-2.126 1.626-4.5 4.5-4.5 7C2.633 18.126 4.598 20 10 20s7.367-1.875 7.367-5.402c0-2.496-2.375-5.372-4.502-6.997zm-2.07 9.175a.208.208 0 00-.17.205v.312a.625.625 0 11-1.25 0v-.27a.208.208 0 00-.208-.208h-.49a.625.625 0 010-1.25h1.793a.56.56 0 00.208-1.078l-1.82-.728a1.803 1.803 0 01.346-3.45.208.208 0 00.171-.205v-.311a.625.625 0 011.25 0v.269a.208.208 0 00.208.208h.49a.625.625 0 110 1.25H9.53a.559.559 0 00-.208 1.079l1.82.727a1.803 1.803 0 01-.346 3.45z"
                        fill="#00B6F3"
                      ></path>
                    </svg>
                    <p className="MuiTypography-root jss428 MuiTypography-body2">
                      Trở thành đối tác liên kết
                    </p>
                  </div>
                </a>
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="/partnership"
                  style={{ textDecoration: "none" }}
                >
                  <div className="home-main jss443 jss427">
                    <svg width="20" height="20" fill="none">
                      <g
                        clipPath="url(#ic_handshake_svg__clip0)"
                        fill="#00B6F3"
                      >
                        <path d="M13.78 11.175a.833.833 0 00-1.178 1.178l2.35 2.35-1.098 1.098-2.35-2.35a.835.835 0 10-1.178 1.178l2.13 2.132c-.6.25-1.25.358-1.9.314a2.97 2.97 0 01-.667 1.602c.313.054.629.082.946.084a5.82 5.82 0 004.125-1.706l1.757-1.78a.833.833 0 00-.005-1.176l-2.932-2.924zM1.517 10.714c.249-.243.537-.44.853-.584a5.044 5.044 0 015.198-7.555l.361-.36c.353-.354.74-.672 1.154-.95a6.723 6.723 0 00-7.982 9.985c.118-.194.258-.374.416-.536zM9.115 15.234l-3.931-3.931a2.176 2.176 0 00-3.077 3.077l3.931 3.931a2.176 2.176 0 003.077-3.077z"></path>
                        <path d="M18.03 2.803a6.726 6.726 0 00-9.512 0L4.654 6.667l.59.589a2.604 2.604 0 003.679 0l1.494-1.493 7.02 7.147.595-.595a6.726 6.726 0 000-9.512h-.002z"></path>
                      </g>
                      <defs>
                        <clipPath id="ic_handshake_svg__clip0">
                          <path fill="#fff" d="M0 0h20v20H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="MuiTypography-root jss428 MuiTypography-body2">
                      Hợp tác với chúng tôi
                    </p>
                  </div>
                </a>
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="/tai-ung-dung"
                  style={{ textDecoration: "none" }}
                >
                  <div className="home-main jss444 jss427">
                    <svg width="20" height="20" fill="none">
                      <path
                        d="M16.667 2.5a2.5 2.5 0 00-2.5-2.5H5.833a2.5 2.5 0 00-2.5 2.5v15a2.5 2.5 0 002.5 2.5h8.334a2.5 2.5 0 002.5-2.5v-15zM15 4.583v10a.834.834 0 01-.833.834H5.833A.833.833 0 015 14.583v-10a.833.833 0 01.833-.833h8.334a.833.833 0 01.833.833zM9.167 17.5a.834.834 0 111.667 0 .834.834 0 01-1.667 0z"
                        fill="#00B6F3"
                      ></path>
                    </svg>
                    <p className="MuiTypography-root jss428 MuiTypography-body2">
                      Tải ứng dụng Mytour
                    </p>
                  </div>
                </a>
                <a
                  href="https://gioithieu.mytour.vn/"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <div className="home-main jss445 jss427">
                    <svg width="20" height="20" fill="none">
                      <path
                        d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47c.03-.246.03-.494 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
                        fill="#00B6F3"
                      ></path>
                    </svg>
                    <p className="MuiTypography-root jss428 MuiTypography-body2">
                      Giới thiệu bạn bè, nhận quà rộn rã
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
