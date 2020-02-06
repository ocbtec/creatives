import React, { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
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
