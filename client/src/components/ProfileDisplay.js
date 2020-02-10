import React, { Fragment } from "react";
import "../css/profileDisplay.css";

const ProfileDisplay = props => {
  const path =
    "https://p7.hiclipart.com/preview/516/431/747/computer-icons-female-user-profile-female-girl-wife-woman-icon.jpg";
  const name = "Kalle";
  return (
    <Fragment>
      <img className="avatar-image" src={path} alt="profile avatar"></img>
      <p className="user-name">{name}</p>
    </Fragment>
  );
};

export default ProfileDisplay;
