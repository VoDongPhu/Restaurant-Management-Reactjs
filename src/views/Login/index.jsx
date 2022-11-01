import React, { useState, useContext } from "react";
import { Link, useNavigate, useHistory } from "react-router-dom";
import "./styles.scss";
// import GoogleLogin from "react-google-login";
// import FacebookLogin from "react-facebook-login";
// import { Couter } from "../../Context/counter";
import { loginApi } from "../../api/loginApi";
import swal from "sweetalert";
import logo1 from "../../Logo/logo-trang.png";
function Login() {
  //Xử lý sumit form
  /*
  const [email,setEmail] = useState('')
  const [name,setName] = useState('')
  const handleSubmit = () => {
    //Call API 
    console.log({name,email})
  }
  */
  //  const history = useHistory()
  const useNatigigaton = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const loginUser = async () => {
    const res = await loginApi(user);
    console.log(res);
    if (!res) {
      return swal("Here's a message!", "Some thing wrong");
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useNatigigaton("/");
    swal("Here's a message!", "Login success");
    // history.push('/')
  };
  // const { checkUser, setCheckUser } = useContext(Couter);

  // const responseGoogle = (response) => {
  //   let dataGoogle = {
  //     HoTen: response?.profileObj.name,
  //     Email: response.profileObj.email,
  //     Username: response.profileObj.googleId,
  //     Picture: response.profileObj.imageUrl,
  //   };
  //   localStorage.setItem("UserId", 11);
  //   setCheckUser(localStorage.getItem("UserId") || false);
  //   console.log(dataGoogle);
  //   if (dataGoogle) history.push("");
  // };

  // const responseFacebook = (response) => {
  //   let dataFacebook = {
  //     Username: response.userID,
  //     HoTen: response.name,
  //     Email: response.email,
  //     Picture: response.picture.data,
  //   };
  //   console.log(dataFacebook);
  // };
  return (
    <div className="Login">
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
            <p className="hellothere">Hello there</p>

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
                  placeholder="Password"
                  className="form-control"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                <span className="form-message"></span>
              </div>

              <p className="change-password">
                <Link className="changePassword" to="/changePassword">
                  Change password
                </Link>
              </p>

              <button className="form-submit btn" onClick={() => loginUser()}>
                Login
              </button>
              <p className="sign-up">
                Don't have an Account?{" "}
                <Link className="signup" to="/register">
                  Register!
                </Link>
              </p>
              <div className="signin-fb-gg"></div>
            </div>

            {/* <FacebookLogin
              appId="404801124635752"
              autoLoad={true}
              fields="name,email,picture"
              callback={responseFacebook}
              cssClass="my-facebook-button-class"
              render={(renderProps) => (
                <button onClick={renderProps.onClick}>
                  This is my custom FB button
                </button>
              )}
            />

            <GoogleLogin
              clientId="472545936062-074brscdde3hk8v2u4jjs2r474302qkg.apps.googleusercontent.com"
              buttonText={"Login with Google"}
              onSuccess={responseGoogle}
              cookiePolicy={"single_host_origin"}
              className="my-google-button-class"
              isSignedIn={false}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
