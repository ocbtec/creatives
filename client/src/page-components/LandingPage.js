import React, { Fragment } from "react";
import LogoAnimation from "../components/LogoAnimation";
import "../css/landingPage.css";

const LandingPage = () => {
  return (
    <Fragment>
      <div className="landing-page-container">
        <LogoAnimation />
      </div>
    </Fragment>
  );
};

export default LandingPage;
