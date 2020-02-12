import React, { Fragment } from "react";
import MenuLink from "./MenuLink";
import {
  homeLink,
  aboutLink,
  showcaseLink,
  searchLink
} from "../scripts/menuLinksConstructor";
import "../css/menu.css";

const linksArray = [homeLink, aboutLink, showcaseLink, searchLink];
// linksArray.push(homeLink);

const menu = () => {
  return (
    <Fragment>
      <div className="menu-container">
        <ul className="menu">
          {linksArray.map((link, index) => {
            return (
              <MenuLink
                key={index}
                linkTo={link.linkTo}
                linkText={link.linkText}
                iconPath={link.iconPath}
              />
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default menu;
