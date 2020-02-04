import React, { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../css/landingPage.css";

const LandingPage = () => {
  return (
    <Fragment>
      <div className="landingPageContainer">
        <Header />
        <div className="landingPageBody"></div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default LandingPage;
