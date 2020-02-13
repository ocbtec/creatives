import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../css/showcase.css";

const Showcase = () => (
  <Fragment>
    <div className="main-container">
      <Header />
      <div className="showcase-body">Showcase</div>
      <Footer />
    </div>
  </Fragment>
);

export default Showcase;
