import React, { Fragment } from "react";
import "../css/messageIcon.css";

const MessageIcon = () => {
  return (
    <Fragment>
      <img
        className="message-icon"
        src={require("../images/message.png")}
        alt="message icon"></img>
    </Fragment>
  );
};

export default MessageIcon;
