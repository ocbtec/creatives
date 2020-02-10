import React from "react";
import ProfileDisplay from "./ProfileDisplay";
import MessageIcon from "./MessageIcon";

import "../css/navbarDisplay.css";

const NavbarDisplay = () => (
  <div className="navbar-display">
    <MessageIcon />
    <p className="pipe-divider">|</p>
    <ProfileDisplay />
  </div>
);

export default NavbarDisplay;
