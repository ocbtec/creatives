import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import NavbarDisplay from "./NavbarDisplay";

import "../css/header.css";

const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <Link to="/">
          <img
            className="headerLogo"
            src={require("../images/logo.svg")}
            alt="logo"
          />
        </Link>
        <NavbarDisplay />
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
