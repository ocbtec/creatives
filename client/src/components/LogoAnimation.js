import React, { Fragment } from "react";
import ButtonLandingPage from "./ButtonLandingPage";
import "../css/logoAnimation.css";

const buttonComponent = [0, 1, 2, 3];
const linkTo = ["/login", "/showcase", "/registeruser", "/registercreative"];
const idButton = ["login", "showcase", "user", "creative"];
const idText = ["login-text", "showcase-text", "user-text", "creative-text"];
const buttonText = [
  "Login",
  "Showcase",
  "Register as User",
  "Register as Creative"
];

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
          {buttonComponent.map((el, index) => {
            return (
              <ButtonLandingPage
                key={index}
                idButton={idButton[el]}
                idText={idText[el]}
                buttonText={buttonText[el]}
                linkTo={linkTo[el]}
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default LogoAnimation;
