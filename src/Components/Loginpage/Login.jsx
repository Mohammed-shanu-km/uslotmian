import React from "react";
import "./Login.css";
import loginlogo from "../../Assets/mainlogo.svg";
import google from '../../Assets/google.svg'

const Login = () => {
  return (
    <div className="login-page-main">
      <div className="login-image-section">
        <img src="" alt="" />
      </div>
      <div className="login-content-section">
        <div className="login-content">
          <div>
            <img src={loginlogo} alt="" />
          </div>
          <div className="login-button-section">
            <h1>Sign Up or Login to Uslot</h1>
            <div className="single-button-google">
              <div className="google">
                <img src={google} alt="" />
                <button>Sign in with Google</button>
               
              </div>
            </div>
            <h2 className="para-of-login">Unable to sign in? <span>Contact Support</span> </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
