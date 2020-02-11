import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import NavbarDisplay from "./NavbarDisplay";

import "../css/header.css";

const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <div className="logo-container">
          <Link to="/">
            <img
              className="logo"
              src={require("../images/logo.svg")}
              alt="logo"
            />
          </Link>
        </div>
        <NavbarDisplay />
        <div className="burger-menu-container">
          <img
            className="burger-menu"
            src={require("../images/menu.svg")}
            alt="menu"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
