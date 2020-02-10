import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

import "../css/registerCreative.css";

const RegisterCreative = () => (
  <Fragment>
    <div className="main-container">
      <Header />
      <div className="register-creative-body">Register Creative</div>
      <Footer />
    </div>
  </Fragment>
);

export default RegisterCreative;
