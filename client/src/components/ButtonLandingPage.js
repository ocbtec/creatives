import React from "react";
import { Link } from "react-router-dom";

const ButtonLandingPage = props => {
  return (
    <Link to={props.linkTo}>
      <button id={props.idButton} className="button">
        <div id={props.idText}>{props.buttonText}</div>
      </button>
    </Link>
  );
};

export default ButtonLandingPage;
