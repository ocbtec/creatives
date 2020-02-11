import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import NavbarDisplay from "./NavbarDisplay";
import Menu from "./menu";

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
          <button className="menu-button">
            <img
              className="burger-menu"
              src={require("../images/menu.svg")}
              alt="menu"
            />
          </button>
        </div>
      </div>
      <Menu />
    </Fragment>
  );
};

export default Header;
