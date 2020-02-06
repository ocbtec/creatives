import React, { Fragment } from "react";
import "../css/logoAnimation.css";

const LogoAnimation = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="background-absolute"></div>
        <div className="animated-logo-big-part">
          <img
            src={require("../images/animated-logo-1.svg")}
            alt="animated-logo-1"
          />
        </div>
        <div className="animated-logo-small-part">
          <img
            src={require("../images/animated-logo-2.svg")}
            alt="animated-logo-2"
          />
        </div>
        <div className="button-container">
          <button id="login" className="button">
            <div id="login-text">Login</div>
          </button>
          <button id="artist" className="button">
            <div id="artist-text">Register as Artist</div>
          </button>
          <button id="user" className="button">
            <div id="user-text">Register as User</div>
          </button>
          <button id="showcase" className="button">
            <div id="showcase-text">Showcase</div>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default LogoAnimation;
