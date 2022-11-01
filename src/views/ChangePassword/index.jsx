import React, { useState, useContext } from "react";
import { Link, useNavigate, useHistory } from "react-router-dom";
import "./styles.scss";
// import GoogleLogin from "react-google-login";
// import FacebookLogin from "react-facebook-login";
// import { Couter } from "../../Context/counter";
import { loginApi } from "../../api/loginApi";
import swal from "sweetalert";
import logo1 from "../../Logo/logo-trang.png";
import axios from "axios";
function ChangePassword() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    newPassword: '',
    newPassword1: '',

  });
  const loginUser = async () => {
    console.log('oke')
    try {
      const res = await axios.post('http://localhost:3030/auth/changePW',{
        email: user.email,
        currentpassword: user.password,
        newpassword: user.newPassword,
        retypenewpassword: user.newPassword1
      })
      if(res){
        return swal("Here's a message!", "Change password success");
      }
    } catch (error) {
      return swal("Here's a message!", "Some thing wrong");
    }
  };

  return (
    <div className="ChangePassword">
      <div className="login-form">
        <div className="login-left">
          <div className="content">
            <img src={logo1} alt="" />
            <p className="welcome">Welcome to Resort App</p>
            <p className="text-introduce">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
              nisl tristique, lacinia ipsum tempor, gravida nibh. Mauris odio
              nulla, efficitur tempor velit sed, aliquam dapibus libero.
            </p>
            <div className="icon">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div>

        <div className="login-right">
          <div className="content">
            <p className="hellothere">Change Password</p>

            <div className="login_form" id="form-1">
              <div className="form-group">
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Username/Email"
                  className="form-control"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <span className="form-message"></span>
              </div>

              <div className="form-group">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Current password"
                  className="form-control"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                <span className="form-message"></span>
              </div>

              <div className="form-group">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="New password"
                  className="form-control"
                  onChange={(e) =>
                    setUser({ ...user, newPassword: e.target.value })
                  }
                />
                <span className="form-message"></span>
              </div>

              <div className="form-group">
                <input
                  id="re-password"
                  name="re-password"
                  type="password"

                  placeholder="Confirm new password"
                  className="form-control"
                  onChange={(e) =>
                    setUser({ ...user, newPassword1: e.target.value })
                  }
                />
                <span className="form-message"></span>
              </div>

              <button className="form-submit btn" onClick={() => loginUser()}>
                Confirm
              </button>
              <p className="return-home">
                Return{" "}
                <Link className="home" to="/">
                  Home Page
                </Link>
              </p>
              <div className="signin-fb-gg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
