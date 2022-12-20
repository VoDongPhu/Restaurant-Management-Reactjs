import React from "react";
import "./styles.css";
function Contact_Component() {
  return (
    <div className="contact-container" style={{ marginTop: "50px" }}>
      <div className="container">
        <div className="contact-left-container">
          <div className="contact-left-title">
            <h2> CONTACT US</h2>
          </div>
          <form className="contact-left-form">
            <div className="contact-form-container">
              <div className="contact-form-container-header">
                <div className="contact-form-content">
                  <label className="contact-form-label">Name</label>
                  <input
                    className="contact-fomr-input"
                    type="text"
                    name="name"
                    placeholder="Your name"
                  />
                </div>
                <div className="contact-form-content">
                  <label className="contact-form-label">Phone</label>
                  <input
                    className="contact-fomr-input"
                    type="text"
                    name="name"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="contact-form-container-header">
                <div className="contact-form-content">
                  <label className="contact-form-label">Email</label>
                  <input
                    className="contact-fomr-input"
                    type="text"
                    name="name"
                    placeholder="Your email"
                  />
                </div>
                <div className="contact-form-content">
                  <label className="contact-form-label">Subject</label>
                  <input
                    className="contact-fomr-input"
                    type="text"
                    name="name"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="contact-form-container-header">
                <div
                  className="contact-form-content"
                  style={{ width: "100%", height: "156px" }}
                >
                  <label className="contact-form-label">Message</label>
                  <input
                    className="contact-fomr-input"
                    type="text"
                    name="name"
                    placeholder="Your Message..."
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <button
                type="submit"
                class="button  btn_blue mt40 upper pull-right"
              >
                <i class="fa fa-paper-plane-o" aria-hidden="true"></i> Send Your
                Message
              </button>
            </div>
          </form>
        </div>
        <div className="contact-right-container">
          <div className="contact-right-title" style={{ paddingLeft: "40px" }}>
            <h2>GET IN TOUCH</h2>
          </div>
          <div className="contact-right-content">
            <ul className="contact-info upper">
              <li>
                <span>ADDRESS:</span> 135 Chương Dương, Linh Chiểu, Thủ Đức, HCM
              </li>
              <li>
                <span>EMAIL:</span> xuantam11012001@gmail.com, contact@site.com
              </li>
              <li>
                <span>WEB:</span> www.site.com
              </li>
              <li>
                <span>PHONE:</span> +84 (076) <strong>363-8074</strong> , +84
                (090) <strong>999-999</strong>
              </li>
              <li>
                <span>FAX:</span>
                <strong>+84 127686868</strong>
              </li>
            </ul>
          </div>
          <div className="social_media" style={{ paddingLeft: "40px" }}>
            <a className="facebook">
              <i className="fa fa-facebook"></i>
            </a>
            <a className="twitter">
              <i className="fa fa-twitter"></i>
            </a>
            <a className="googleplus">
              <i className="fa fa-google-plus"></i>
            </a>
            <a className="pinterest">
              <i className="fa fa-pinterest"></i>
            </a>
            <a className="linkedin">
              <i className="fa fa-linkedin"></i>
            </a>
            <a className="youtube">
              <i className="fa fa-youtube"></i>
            </a>
            <a className="instagram">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact_Component;
