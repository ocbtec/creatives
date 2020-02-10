import React from "react";

const ButtonLandingpage = props => {
  return (
    <button id={props.idButton} className="button">
      <div id={props.idText}>{props.buttonText}</div>
    </button>
  );
};

export default ButtonLandingpage;
