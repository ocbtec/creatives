import React, { Fragment } from "react";
import "../css/header.css";

const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <img
          className="headerLogo"
          src={require("../images/logo.svg")}
          alt="logo"
        />
        <img
          className="headerMenu"
          src={require("../images/menu.svg")}
          alt="menu"
        />
      </div>
    </Fragment>
  );
};

export default Header;
