import React from "react";

class MenuLink {
  constructor(linkTo, linkText, iconPath) {
    this.linkTo = linkTo;
    this.linkText = linkText;
    this.iconPath = iconPath;
  }
}

export const homeLink = new MenuLink(
  "/",
  "Home",
  (<img className="icon" src={require("../images/home-icon.svg")} />)
);

export const aboutLink = new MenuLink(
  "/about",
  "About",
  (<img className="icon" src={require("../images/about-icon.png")} />)
);

export const showcaseLink = new MenuLink(
  "/showcase",
  "Showcase",
  (<img className="icon" src={require("../images/showcase-icon.svg")} />)
);

export const searchLink = new MenuLink(
  "/search",
  "Search",
  (<img className="icon" src={require("../images/search-icon.png")} />)
);
