import React, { Fragment } from "react";
import MenuLink from "./MenuLink";
import "../css/menu.css";

const menu = () => {
  return (
    <Fragment>
      <div className="menu-container">
        <ul className="menu-left">
          <MenuLink
            linkTo={"/"}
            linkText={"Home"}
            iconPath={
              <img className="icon" src={require("../images/home-icon.svg")} />
            }
          />
        </ul>
      </div>
    </Fragment>
  );
};

export default menu;
