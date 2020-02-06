import React, { Fragment } from "react";
import LogoAnimation from "./LogoAnimation";
import "../css/landingPage.css";

const LandingPage = () => {
  return (
    <Fragment>
      <div className="landingPageContainer">
        <LogoAnimation />
      </div>
    </Fragment>
  );
};

export default LandingPage;
