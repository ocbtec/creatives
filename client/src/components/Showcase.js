import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

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
