import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../css/logoAnimation.css";

const LogoAnimation = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="background-absolute">
          <img id="waves" src={require("../images/waves.jpg")} alt="waves" />
        </div>
        <div className="animated-logo-small-part">
          <img
            src={require("../images/animated-logo-2.svg")}
            alt="animated-logo-2"
          />
        </div>
        <div className="animated-logo-big-part">
          <img
            src={require("../images/animated-logo-1.svg")}
            alt="animated-logo-1"
          />
        </div>
        <div className="button-container">
          <Link to="/login">
            <button id="login" className="button">
              <div id="login-text">Login</div>
            </button>
          </Link>
          <Link to="/showcase">
            <button id="showcase" className="button">
              <div id="showcase-text">Showcase</div>
            </button>
          </Link>
          <Link to="/registeruser">
            <button id="user" className="button">
              <div id="user-text">
                <p>Register</p>
                <p>as User</p>
              </div>
            </button>
          </Link>
          <Link to="/registercreative">
            <button id="creative" className="button">
              <div id="creative-text">
                <p>Register</p>
                <p>as Creative</p>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default LogoAnimation;
