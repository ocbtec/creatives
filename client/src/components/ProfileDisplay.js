import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "../css/profileDisplay.css";

const ProfileDisplay = props => {
  const path =
    "https://p7.hiclipart.com/preview/516/431/747/computer-icons-female-user-profile-female-girl-wife-woman-icon.jpg";
  const name = "Sir Behead a Lot";
  return (
    <Fragment>
      <Link to="/" className="avatar-link">
        <img className="avatar-image" src={path} alt="profile avatar"></img>
      </Link>
      <Link to="/">
        <p className="user-name">{name}</p>
      </Link>
    </Fragment>
  );
};

export default ProfileDisplay;
